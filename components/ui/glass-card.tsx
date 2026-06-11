"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  strong?: boolean;
}

export function GlassCard({
  children,
  className = "",
  hover = true,
  strong = false,
}: GlassCardProps) {
  const glassClass = strong ? "glass-strong" : "glass";

  return (
    <motion.div
      className={`${glassClass} glow-hover rounded-2xl md:rounded-3xl p-6 md:p-8 ${className}`}
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
