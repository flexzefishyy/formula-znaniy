"use client";

import { motion, useScroll, useTransform } from "framer-motion";

interface FloatingGradientsProps {
  variant?: "hero" | "section";
}

export function FloatingGradients({ variant = "hero" }: FloatingGradientsProps) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, variant === "hero" ? 120 : 40]);
  const y2 = useTransform(scrollY, [0, 600], [0, variant === "hero" ? -80 : -30]);
  const y3 = useTransform(scrollY, [0, 600], [0, variant === "hero" ? 60 : 20]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-40 -right-40 h-[560px] w-[560px] rounded-full bg-accent/[0.14] blur-[140px] animate-pulse-glow"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/3 -left-56 h-[440px] w-[440px] rounded-full bg-accent/[0.08] blur-[120px] animate-pulse-glow"
        transition={{ delay: 2 }}
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute -bottom-32 right-1/3 h-[360px] w-[360px] rounded-full bg-accent/[0.1] blur-[100px] animate-pulse-glow"
        transition={{ delay: 1 }}
      />
      {variant === "hero" && (
        <div className="absolute top-1/2 left-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-[60px]" />
      )}
    </div>
  );
}
