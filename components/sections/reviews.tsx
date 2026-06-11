"use client";

import { motion } from "framer-motion";
import { REVIEWS } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ReviewCard } from "@/components/ui/review-card";
import { SectionHeader } from "@/components/ui/section-header";
import { StarIcon } from "@/components/ui/icons";

export function ReviewsSection() {
  return (
    <AnimatedSection
      id="reviews"
      className="section-padding relative overflow-hidden bg-[#EEF5E8]"
    >
      <>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(146,183,117,0.20),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(19,50,21,0.08),transparent_36%)]" />
  <div className="bg-grid absolute inset-0 opacity-20" aria-hidden />
</>

<div className="relative mx-auto max-w-6xl rounded-[3rem] border border-white/70 bg-white/72 px-5 py-10 shadow-[0_30px_90px_rgba(63,64,67,0.08)] backdrop-blur-xl md:px-8 md:py-14">
        <div className="flex flex-col items-center text-center">
          <SectionHeader
            label="Отзывы"
            title="Истории, которым доверяют"
            description="Слова родителей и учеников — о понимании, уверенности и результатах, которые меняют отношение к математике."
            align="center"
          />

          <motion.div
            className="mb-12 -mt-8 flex items-center gap-3 rounded-full border border-[#92B775]/20 bg-[#92B775]/10 px-6 py-3"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-4 w-4 text-[#92B775]" />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">5.0</span>
            <span className="text-sm text-muted">· {REVIEWS.length} отзывов</span>
          </motion.div>
        </div>

        <div className="reviews-masonry">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <ReviewCard {...review} />
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
