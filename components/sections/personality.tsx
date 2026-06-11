"use client";

import { motion } from "framer-motion";
import { ABOUT, PERSONALITY } from "@/lib/constants";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section-header";

const icons = ["✦", "♪", "♬", "A", "∞", "⌁"];

export function PersonalitySection() {
  return (
    <AnimatedSection
      id="personality"
      className="section-padding relative overflow-hidden bg-[#EEF5E8]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(146,183,117,0.22),transparent_34%),radial-gradient(circle_at_85%_75%,rgba(19,50,21,0.08),transparent_38%)]" />
      <div className="bg-dot absolute inset-0 opacity-20" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="rounded-[2rem] border border-white/70 bg-white/65 p-6 shadow-[0_30px_90px_rgba(63,64,67,0.08)] backdrop-blur-xl md:rounded-[3rem] md:p-10 lg:p-14">
          <SectionHeader
            label="Личность"
            title={PERSONALITY.title}
            align="center"
          />

          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {PERSONALITY.items.map((item, index) => (
              <StaggerItem key={item.title}>
                <motion.div
                  className="group h-full rounded-[1.5rem] border border-[#92B775]/20 bg-white p-6 shadow-[0_18px_45px_rgba(63,64,67,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#92B775]/45 hover:shadow-[0_24px_60px_rgba(146,183,117,0.22)] md:p-7"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#92B775]/16 text-xl font-semibold text-[#133215] transition-colors duration-300 group-hover:bg-[#133215] group-hover:text-white">
                    {icons[index] ?? "✦"}
                  </div>

                  <h3 className="font-display text-lg font-semibold text-[#133215] md:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#3F4043]/75">
                    {item.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <motion.div
            className="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-[#92B775]/25 bg-[#133215] p-8 text-center shadow-[0_30px_80px_rgba(19,50,21,0.22)] md:mt-16 md:p-10"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mx-auto max-w-3xl font-display text-xl font-medium leading-relaxed tracking-tight text-white md:text-2xl md:leading-[1.55]">
              {ABOUT.melody}
            </p>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}