"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const techItems = [
  {
    name: "Next.js",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="h-7 w-7 filter invert dark:invert-0" alt="Next.js" />,
    glowColor: "rgba(255, 255, 255, 0.2)",
    borderColor: "hover:border-white/30",
  },
  {
    name: "TypeScript",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="h-7 w-7" alt="TypeScript" />,
    glowColor: "rgba(59, 130, 246, 0.4)",
    borderColor: "hover:border-blue-500/50",
  },
  {
    name: "Flutter",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" className="h-7 w-7" alt="Flutter" />,
    glowColor: "rgba(2, 132, 199, 0.4)",
    borderColor: "hover:border-sky-500/50",
  },
  {
    name: "React",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="h-7 w-7" alt="React" />,
    glowColor: "rgba(6, 182, 212, 0.4)",
    borderColor: "hover:border-cyan-500/50",
  },
  {
    name: "Node.js",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="h-7 w-7" alt="Node.js" />,
    glowColor: "rgba(34, 197, 94, 0.4)",
    borderColor: "hover:border-green-500/50",
  },
  {
    name: "AWS",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" className="h-7 w-7" alt="AWS" />,
    glowColor: "rgba(249, 115, 22, 0.4)",
    borderColor: "hover:border-orange-500/50",
  },
  {
    name: "Docker",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="h-7 w-7" alt="Docker" />,
    glowColor: "rgba(14, 165, 233, 0.4)",
    borderColor: "hover:border-sky-500/50",
  },
  {
    name: "Kubernetes",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" className="h-7 w-7" alt="Kubernetes" />,
    glowColor: "rgba(59, 130, 246, 0.4)",
    borderColor: "hover:border-blue-500/50",
  },
  {
    name: "Terraform",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" className="h-7 w-7" alt="Terraform" />,
    glowColor: "rgba(168, 85, 247, 0.4)",
    borderColor: "hover:border-purple-500/50",
];


// Calculate keyframes for a perfect circular path (from angle 90 to 450 degrees)
// 90 deg = bottom, 180 deg = left (peak on screen), 270 deg = top, 360/0 deg = right (off-screen)
const radius = 200;
const steps = 100;

const generateKeyframes = (stepOffset: number) => {
  const xVals: number[] = [];
  const yVals: number[] = [];
  const opacityVals: number[] = [];

  for (let i = 0; i <= steps; i++) {
    const progress = (i + stepOffset) / steps;
    const angleRad = (90 + progress * 360) * (Math.PI / 180);

    const x = radius * Math.cos(angleRad);
    const y = radius * Math.sin(angleRad);

    xVals.push(x);
    yVals.push(y);

    // Opacity: visible when on screen (x <= 0).
    if (x > 0) {
      opacityVals.push(0);
    } else {
      const fadeThreshold = -40; // fade out in the last 40px
      if (x > fadeThreshold) {
        opacityVals.push(1 - x / fadeThreshold);
      } else {
        opacityVals.push(1);
      }
    }
  }

  return { x: xVals, y: yVals, opacity: opacityVals };
};

export const TechCurve: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative w-full h-full max-w-[450px] aspect-[4/5] mx-auto select-none overflow-hidden">
      
      {/* SVG Dotted Line */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="curve-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="30%" stopColor="#3B82F6" />
            <stop offset="60%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
          
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient glow under the path */}
        <path
          d="M 400 450 A 200 200 0 0 1 400 50"
          stroke="url(#curve-gradient)"
          strokeWidth="1.5"
          strokeOpacity="0.15"
          filter="url(#glow)"
        />

        {/* The solid track line */}
        <path
          d="M 400 450 A 200 200 0 0 1 400 50"
          stroke="url(#curve-gradient)"
          strokeWidth="0.5"
          strokeOpacity="0.08"
        />

        {/* Animated Flowing Dashed Line */}
        <motion.path
          d="M 400 450 A 200 200 0 0 1 400 50"
          stroke="url(#curve-gradient)"
          strokeWidth="1"
          strokeDasharray="4, 6"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

      {/* Tech Cards */}
      {techItems.map((item, idx) => {
        const isHovered = hoveredIndex === idx;
        
        // Space 9 items evenly across the full orbit circle
        const keyframes = generateKeyframes(idx * (100 / techItems.length));

        return (
          <div
            key={`${item.name}-${idx}`}
            className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-auto z-30"
          >
            <motion.div
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              // Orbit animation
              animate={{
                x: keyframes.x,
                y: keyframes.y,
                opacity: keyframes.opacity,
              }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Colored Glow Shadow Backdrop */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 scale-95 pointer-events-none"
                style={{
                  background: item.glowColor,
                }}
              />

              {/* The Card Container */}
              <motion.div
                className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl bg-slate-950 border border-slate-800 transition-all duration-300 shadow-xl relative z-10 ${item.borderColor}`}
                whileHover={{
                  scale: 1.1,
                }}
                style={{
                  boxShadow: isHovered ? `0 8px 30px ${item.glowColor}` : "none",
                }}
              >
                {/* Center Icon */}
                {item.icon}
              </motion.div>

              {/* Tooltip Overlay */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 backdrop-blur-md text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white whitespace-nowrap z-40 pointer-events-none shadow-xl flex items-center gap-1.5"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                    {item.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default TechCurve;
