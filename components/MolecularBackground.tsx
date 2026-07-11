"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface MolecularBackgroundProps {
  particleCount?: number;
  connectionDistance?: number;
  speed?: number;
}

export const MolecularBackground: React.FC<MolecularBackgroundProps> = ({
  particleCount = 80,
  connectionDistance = 80,
  speed = 0.5,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Set up Scene, Camera, and WebGLRenderer
    const scene = new THREE.Scene();
    
    // Smooth atmospheric fog to fade particles into the background
    scene.fog = new THREE.FogExp2(0x020617, 0.0015);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      1,
      1000
    );
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(container.clientWidth, container.clientHeight);

    // Bounding Box limits for particle movement
    const boxSize = 600;
    const halfBox = boxSize / 2;

    // Create particles (nodes)
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities: number[] = [];

    // Store particle positions and HSL colors
    const particlesData: {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      r: number;
      g: number;
      b: number;
    }[] = [];
    const colors = new Float32Array(particleCount * 3);
    const colorObj = new THREE.Color();

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * boxSize - halfBox;
      const y = Math.random() * boxSize - halfBox;
      const z = Math.random() * boxSize - halfBox;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Random speed vectors
      const vx = (Math.random() - 0.5) * speed;
      const vy = (Math.random() - 0.5) * speed;
      const vz = (Math.random() - 0.5) * speed;

      // Soft cyan-white colors to match the Pujasri constellation style
      const r = 0.85;
      const g = 0.95;
      const b = 1.0;

      colors[i * 3] = r;
      colors[i * 3 + 1] = g;
      colors[i * 3 + 2] = b;

      particlesData.push({ x, y, z, vx, vy, vz, r, g, b });
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Helper to generate a blurred circular glow texture programmatically
    const createCircleTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        // Create radial gradient for a soft blurred glow circle
        const gradient = ctx.createRadialGradient(16, 16, 2, 16, 16, 14);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.35, "rgba(217, 242, 255, 0.85)");
        gradient.addColorStop(1, "rgba(217, 242, 255, 0)");
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 32, 32);
      }
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true; // Ensure GPU updates the texture
      return texture;
    };

    // Particle texture (soft glow dot) with solid color and circular shape
    const pMaterial = new THREE.PointsMaterial({
      color: 0xd9f2ff, // soft cyan-white
      map: createCircleTexture(),
      size: 6, // increased slightly to show clear points
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const pointCloud = new THREE.Points(particleGeometry, pMaterial);
    scene.add(pointCloud);

    // Create Lines (connections)
    const maxConnections = particleCount * 6; // Upper bound of active lines
    const linePositions = new Float32Array(maxConnections * 2 * 3);
    const lineColors = new Float32Array(maxConnections * 2 * 3);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Mouse Interaction
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0, isActive: false };
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse between -1 and 1
      const rect = container.getBoundingClientRect();
      mouse.targetX = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
      mouse.targetY = -((e.clientY - rect.top) / container.clientHeight) * 2 + 1;
      mouse.isActive = true;
    };
    const handleMouseLeave = () => {
      mouse.isActive = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const positionAttribute = particleGeometry.getAttribute("position") as THREE.BufferAttribute;
    const linePositionAttribute = lineGeometry.getAttribute("position") as THREE.BufferAttribute;
    const lineColorAttribute = lineGeometry.getAttribute("color") as THREE.BufferAttribute;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Lerp mouse coordinate for smooth hover response
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Project mouse into 3D space
      const mouse3D = new THREE.Vector3(mouse.x * 200, mouse.y * 200, 0);

      let vertexIndex = 0;
      let colorIndex = 0;
      let connectionCount = 0;

      // Update positions
      for (let i = 0; i < particleCount; i++) {
        const particle = particlesData[i];

        // Move
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;

        // Bounce back inside borders
        if (particle.x < -halfBox || particle.x > halfBox) particle.vx = -particle.vx;
        if (particle.y < -halfBox || particle.y > halfBox) particle.vy = -particle.vy;
        if (particle.z < -halfBox || particle.z > halfBox) particle.vz = -particle.vz;

        // Mouse interaction: attract only nearby molecules to the cursor position (within 120px)
        if (mouse.isActive) {
          const dx = mouse3D.x - particle.x;
          const dy = mouse3D.y - particle.y;
          const dz = mouse3D.z - particle.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          const maxDistance = 120; // Attraction range limit
          if (dist < maxDistance) {
            // Stronger pull when closer, fading to 0 at the boundary
            const force = (maxDistance - dist) / maxDistance;
            const pullSpeed = 0.05 * force;
            particle.x += dx * pullSpeed;
            particle.y += dy * pullSpeed;
            particle.z += dz * pullSpeed;
          }
        }

        // Apply updated coordinates to geometry attribute
        positionAttribute.setXYZ(i, particle.x, particle.y, particle.z);
      }

      positionAttribute.needsUpdate = true;

      // Calculate connections
      for (let i = 0; i < particleCount; i++) {
        const p1 = particlesData[i];

        for (let j = i + 1; j < particleCount; j++) {
          const p2 = particlesData[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = p1.z - p2.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          // If close enough, draw connection line
          if (dist < connectionDistance && connectionCount < maxConnections) {
            const alpha = 1 - dist / connectionDistance;

            // Line vertices
            linePositionAttribute.setXYZ(vertexIndex, p1.x, p1.y, p1.z);
            linePositionAttribute.setXYZ(vertexIndex + 1, p2.x, p2.y, p2.z);
            vertexIndex += 2;

            // Colors: blend gradient line matching the rainbow colors of connected points
            lineColorAttribute.setXYZ(colorIndex, p1.r * alpha, p1.g * alpha, p1.b * alpha);
            lineColorAttribute.setXYZ(colorIndex + 1, p2.r * alpha, p2.g * alpha, p2.b * alpha);
            colorIndex += 2;

            connectionCount++;
          }
        }
      }

      lineGeometry.setDrawRange(0, connectionCount * 2);
      linePositionAttribute.needsUpdate = true;
      lineColorAttribute.needsUpdate = true;

      // Rotate scene slowly
      pointCloud.rotation.y += 0.001;
      lines.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up resources on component destroy
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);

      scene.remove(pointCloud);
      scene.remove(lines);
      particleGeometry.dispose();
      lineGeometry.dispose();
      if (pMaterial.map) pMaterial.map.dispose();
      pMaterial.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, [particleCount, connectionDistance, speed]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 w-full h-full bg-slate-950 overflow-hidden"
    >
      {/* Absolute dark radial overlay to concentrate visual center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(2,6,23,0.85)_100%)] pointer-events-none z-10" />
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};

export default MolecularBackground;
