"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const techItems = [
  {
    name: "Next.js",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="h-7 w-7 filter invert" alt="Next.js" />,
    glowColor: "rgba(255, 255, 255, 0.3)",
    borderColor: "hover:border-white/40",
  },
  {
    name: "TypeScript",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="h-7 w-7" alt="TypeScript" />,
    glowColor: "rgba(59, 130, 246, 0.5)",
    borderColor: "hover:border-blue-500/60",
  },
  {
    name: "Flutter",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" className="h-7 w-7" alt="Flutter" />,
    glowColor: "rgba(2, 132, 199, 0.5)",
    borderColor: "hover:border-sky-500/60",
  },
  {
    name: "React",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="h-7 w-7" alt="React" />,
    glowColor: "rgba(6, 182, 212, 0.5)",
    borderColor: "hover:border-cyan-500/60",
  },
  {
    name: "Node.js",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="h-7 w-7" alt="Node.js" />,
    glowColor: "rgba(34, 197, 94, 0.5)",
    borderColor: "hover:border-green-500/60",
  },
  {
    name: "AWS",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" className="h-7 w-7" alt="AWS" />,
    glowColor: "rgba(249, 115, 22, 0.5)",
    borderColor: "hover:border-orange-500/60",
  },
  {
    name: "Docker",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="h-7 w-7" alt="Docker" />,
    glowColor: "rgba(14, 165, 233, 0.5)",
    borderColor: "hover:border-sky-400/60",
  },
  {
    name: "Kubernetes",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" className="h-7 w-7" alt="Kubernetes" />,
    glowColor: "rgba(59, 130, 246, 0.5)",
    borderColor: "hover:border-blue-400/60",
  },
  {
    name: "Terraform",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" className="h-7 w-7" alt="Terraform" />,
    glowColor: "rgba(168, 85, 247, 0.5)",
    borderColor: "hover:border-purple-500/60",
  },
];

const CARD_SIZE = 60; // px, w-15 h-15
const RADIUS = 160;   // orbit radius in px
const SPEED = 0.30;   // degrees per frame (~50s full revolution)
const TOTAL = techItems.length;

export const TechCurve: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [angles, setAngles] = useState<number[]>(() =>
    techItems.map((_, i) => (360 / TOTAL) * i)
  );
  const rafRef = useRef<number | null>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    let last = performance.now();

    const tick = (now: number) => {
      const delta = now - last;
      last = now;

      if (!pausedRef.current) {
        setAngles((prev) => prev.map((a) => (a + SPEED * (delta / 16.67)) % 360));
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    // Shift right by 50% of own width so the circle CENTER sits at the right edge of the column.
    // The hero section has overflow-hidden, which clips the right half naturally.
    <div
      className="relative select-none flex-shrink-0"
      style={{ width: RADIUS * 2, height: RADIUS * 2, transform: 'translateX(50%)' }}
    >
      {/* Faint orbit ring (left half only) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${RADIUS * 2} ${RADIUS * 2}`}
        fill="none"
      >
        <defs>
          <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#6366F1" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {/* Left semicircle arc only (visible portion) — top → left → bottom */}
        <path
          d={`M ${RADIUS} 2 A ${RADIUS - 2} ${RADIUS - 2} 0 0 1 ${RADIUS} ${RADIUS * 2 - 2}`}
          stroke="url(#ring-grad)"
          strokeWidth="1"
          strokeDasharray="6 5"
          fill="none"
        />
      </svg>

      {/* Tech Cards */}
      {techItems.map((item, idx) => {
        const angleDeg = angles[idx];
        const angleRad = (angleDeg * Math.PI) / 180;

        // Position on circle (centre of circle = RADIUS, RADIUS)
        const cx = RADIUS + RADIUS * Math.cos(angleRad) - CARD_SIZE / 2;
        const cy = RADIUS + RADIUS * Math.sin(angleRad) - CARD_SIZE / 2;

        // Hide items on the right-half (behind the screen edge)
        // Visible when cos(angle) <= 0  →  90° ≤ angle ≤ 270°
        const cosA = Math.cos(angleRad);
        const fade = cosA <= -0.15 ? 1 : cosA <= 0.15 ? ((-cosA + 0.15) / 0.3) : 0;
        const isHovered = hoveredIndex === idx;

        return (
          <div
            key={`${item.name}-${idx}`}
            className="absolute pointer-events-auto z-30"
            style={{
              left: cx,
              top: cy,
              width: CARD_SIZE,
              height: CARD_SIZE,
              opacity: fade,
              transition: "opacity 0.25s",
            }}
            onMouseEnter={() => { setHoveredIndex(idx); pausedRef.current = true; }}
            onMouseLeave={() => { setHoveredIndex(null); pausedRef.current = false; }}
          >
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-2xl blur-xl scale-95 pointer-events-none transition-opacity duration-500"
              style={{ background: item.glowColor, opacity: isHovered ? 1 : 0 }}
            />

            {/* Card */}
            <motion.div
              className={`w-full h-full flex items-center justify-center rounded-2xl bg-slate-950 border border-slate-800 shadow-xl relative z-10 cursor-pointer ${item.borderColor} transition-colors duration-300`}
              whileHover={{ scale: 1.12 }}
              style={{ boxShadow: isHovered ? `0 6px 28px ${item.glowColor}` : "none" }}
            >
              {item.icon}
            </motion.div>

            {/* Tooltip */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 backdrop-blur-md text-[10px] font-semibold uppercase tracking-wider text-white whitespace-nowrap z-50 shadow-xl flex items-center gap-1.5"
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                  {item.name}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default TechCurve;
