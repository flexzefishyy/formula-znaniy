"use client";

import { motion } from "framer-motion";
import { APPROACH } from "@/lib/constants";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section-header";

export function ApproachSection() {
  return (
    <AnimatedSection
      id="approach"
      className="section-padding relative overflow-hidden bg-[#EEF5E8]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(146,183,117,0.22),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(19,50,21,0.08),transparent_36%)]" />
      <div className="bg-dot absolute inset-0 opacity-20" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[0_30px_90px_rgba(63,64,67,0.08)] backdrop-blur-xl md:rounded-[3rem] md:p-10 lg:p-14">
          <SectionHeader label="Подход" title={APPROACH.title} align="center" />

          <motion.p
            className="mx-auto -mt-8 mb-12 max-w-3xl text-center text-base leading-relaxed text-[#3F4043]/80 md:-mt-10 md:mb-14 md:text-lg md:leading-[1.75]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {APPROACH.text}
          </motion.p>

          <StaggerContainer className="grid gap-5 md:grid-cols-2 md:gap-6">
            {APPROACH.cards.map((card) => (
              <StaggerItem key={card.title}>
                <motion.div
                  className="h-full rounded-[1.5rem] border border-[#92B775]/20 bg-white p-8 shadow-[0_18px_45px_rgba(63,64,67,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#92B775]/45 hover:shadow-[0_24px_60px_rgba(146,183,117,0.22)] md:rounded-[2rem] md:p-10"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#92B775]/18">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#92B775]" />
                  </div>

                  <h3 className="font-display text-xl font-semibold tracking-tight text-[#133215] md:text-2xl">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-[#3F4043]/75 md:text-[15px]">
                    {card.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </AnimatedSection>
  );
}