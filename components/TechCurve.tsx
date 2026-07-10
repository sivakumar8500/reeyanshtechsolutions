"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Bot, Database } from "lucide-react";

// Tailwind Icon SVG
const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-[#38BDF8]" fill="currentColor">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
  </svg>
);

// Python Icon SVG
const PythonIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7">
    <path d="M11.97 0C5.356 0 5.483 2.87 5.483 2.87v2.666h6.634v.933H5.215S2.235 6.136 2.235 12.02c0 5.88 2.628 5.766 2.628 5.766h1.564V15.42s-.083-2.316 2.247-2.316h6.586s2.203-.02 2.203-2.148V4.394s.157-4.394-5.493-4.394zm-2.88 1.488a.933.933 0 1 1 0 1.866.933.933 0 0 1 0-1.866z" fill="#3776AB" />
    <path d="M12.03 24c6.614 0 6.487-2.87 6.487-2.87v-2.666h-6.634v-.933h6.902s2.98.333 2.98-5.551c0-5.88-2.628-5.766-2.628-5.766h-1.564V8.58s.083 2.316-2.247 2.316H8.75s-2.203.02-2.203 2.148v6.562s-.157 4.394 5.493 4.394zm2.88-1.488a.933.933 0 1 1 0-1.866.933.933 0 0 1 0 1.866z" fill="#FFE052" />
  </svg>
);

const techItems = [
  {
    name: "SQL Database",
    icon: <Database className="h-7 w-7 text-cyan-400" />,
    glowColor: "rgba(34, 211, 238, 0.4)",
    borderColor: "hover:border-cyan-500/50",
  },
  {
    name: "Python",
    icon: <PythonIcon />,
    glowColor: "rgba(59, 130, 246, 0.4)",
    borderColor: "hover:border-blue-500/50",
  },
  {
    name: "Tailwind CSS",
    icon: <TailwindIcon />,
    glowColor: "rgba(56, 189, 248, 0.4)",
    borderColor: "hover:border-sky-400/50",
  },
  {
    name: "AI Agents",
    icon: <Bot className="h-7 w-7 text-purple-400" />,
    glowColor: "rgba(168, 85, 247, 0.4)",
    borderColor: "hover:border-purple-500/50",
  },
  {
    name: "GitHub",
    icon: <Github className="h-7 w-7 text-white" />,
    glowColor: "rgba(255, 255, 255, 0.2)",
    borderColor: "hover:border-white/30",
  },
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
        
        // Offset each card by 20% of the circle (20 steps out of 100)
        const keyframes = generateKeyframes(idx * 20);

        return (
          <div
            key={item.name}
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
                duration: 25,
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
