"use client";

import { motion } from "framer-motion";
import { type ReviewSize } from "@/lib/constants";
import { QuoteIcon, StarIcon } from "@/components/ui/icons";

interface ReviewCardProps {
  name: string;
  role: string;
  text: string;
  rating: number;
  size: ReviewSize;
  highlight?: string;
}

const sizeClasses: Record<ReviewSize, string> = {
  large: "md:col-span-2 md:row-span-2",
  tall: "md:row-span-2",
  wide: "md:col-span-2",
  default: "",
};

export function ReviewCard({
  name,
  role,
  text,
  rating,
  size,
  highlight,
}: ReviewCardProps) {
  const isLarge = size === "large" || size === "tall";

  return (
    <motion.article
    className={`group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#92B775]/20 bg-white p-6 shadow-[0_18px_45px_rgba(63,64,67,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#92B775]/45 hover:shadow-[0_24px_60px_rgba(146,183,117,0.22)] md:rounded-[2rem] md:p-8 ${sizeClasses[size]}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="pointer-events-none absolute -right-4 -top-4 h-32 w-32 rounded-full bg-[#92B775]/12 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0"
        aria-hidden
      />

      <div className="mb-5 flex items-start justify-between gap-4">
        <QuoteIcon className="h-8 w-8 shrink-0 text-[#92B775]/50 transition-colors duration-300 group-hover:text-[#92B775]" />
        <div className="flex items-center gap-1.5 rounded-full border border-[#92B775]/20 bg-[#92B775]/10 px-3 py-1">
          <StarIcon className="h-3.5 w-3.5 text-accent" />
          <span className="text-xs font-semibold text-foreground">{rating}.0</span>
        </div>
      </div>

      {highlight && (
        <span className="mb-4 inline-flex w-fit rounded-full border border-[#92B775]/25 bg-[#92B775]/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground/70">
          {highlight}
        </span>
      )}

      <p
        className={`flex-1 leading-relaxed text-foreground/75 ${
          isLarge ? "text-[15px] md:text-base" : "text-sm md:text-[15px]"
        }`}
      >
        {text}
      </p>

      <div className="mt-6 border-t border-foreground/[0.06] pt-5">
        <p className="font-display text-sm font-semibold text-foreground">{name}</p>
        <p className="mt-0.5 text-xs text-muted">{role}</p>
      </div>
    </motion.article>
  );
}
