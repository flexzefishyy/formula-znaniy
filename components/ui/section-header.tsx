"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  large?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  large = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto items-center" : "";

  return (
    <div className={`flex max-w-3xl flex-col mb-16 md:mb-20 ${alignClass}`}>
      <motion.div
        className="mb-5 inline-flex items-center gap-2 self-start rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-1.5"
        style={align === "center" ? { alignSelf: "center" } : undefined}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/70">
          {label}
        </span>
      </motion.div>

      <motion.h2
        className={`font-display font-bold tracking-[-0.03em] text-foreground leading-[1.08] ${
          large
            ? "text-4xl md:text-5xl lg:text-6xl"
            : "text-3xl md:text-4xl lg:text-[2.75rem]"
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.08 }}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-muted"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.16 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
