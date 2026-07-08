"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children?: React.ReactNode;
  hoverEffect?: boolean;
  glowColor?: "blue" | "purple" | "emerald" | "default";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, hoverEffect = true, glowColor = "default", className = "", ...props }, ref) => {
    const glowStyles = {
      default: "hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]",
      blue: "hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
      purple: "hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]",
      emerald: "hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]",
    };

    const containerStyles = `
      relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/40 backdrop-blur-xl p-6 transition-all duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.1)]
      ${hoverEffect ? glowStyles[glowColor] : ""}
      ${className}
    `;

    if (hoverEffect) {
      return (
        <motion.div
          ref={ref}
          whileHover={{ y: -5 }}
          className={containerStyles}
          {...props}
        >
          {/* Subtle background radial gradient glow on hover */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.05),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {children}
        </motion.div>
      );
    }

    return (
      <motion.div ref={ref} className={containerStyles} {...props}>
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";
export default Card;
