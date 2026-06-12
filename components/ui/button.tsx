"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "dark";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  external?: boolean;
  size?: "sm" | "md" | "lg";
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-cta text-white font-semibold shadow-[0_4px_20px_rgba(19,50,21,0.2)] hover:bg-cta-hover hover:shadow-[0_8px_28px_rgba(19,50,21,0.28)]",
  secondary:
    "glass-strong text-foreground font-medium hover:shadow-[0_8px_32px_rgba(63,64,67,0.08)]",
  ghost:
    "text-foreground/60 font-medium hover:text-foreground hover:bg-foreground/[0.04]",
  outline:
    "border border-border bg-card text-foreground font-medium hover:border-accent/40 hover:bg-accent-soft",
  dark:
    "bg-white/10 border border-white/15 text-white font-medium hover:bg-white/15 hover:border-accent/40",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm md:text-base",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  external,
  size = "md",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2.5 rounded-full transition-all duration-300 ease-out";

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
  href={href}
  className={classes}
  whileHover={{ scale: 1.02, y: -1 }}
  whileTap={{ scale: 0.98 }}
  onClick={onClick}
  target={external ? "_blank" : undefined}
  rel={external ? "noopener noreferrer" : undefined}
>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      className={classes}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
