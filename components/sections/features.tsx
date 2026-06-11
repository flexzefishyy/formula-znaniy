"use client";

import { motion } from "framer-motion";
import { FEATURES } from "@/lib/constants";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { FeatureIcon } from "@/components/ui/icons";
import { SectionHeader } from "@/components/ui/section-header";

export function FeaturesSection() {
  return (
    <AnimatedSection
      id="features"
      className="section-padding relative overflow-hidden bg-[#EEF5E8]"
    >
      <>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(146,183,117,0.20),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(19,50,21,0.08),transparent_36%)]" />
  <div className="bg-dot absolute inset-0 opacity-25" aria-hidden />
</>

<div className="relative mx-auto max-w-6xl rounded-[3rem] border border-white/70 bg-white/70 px-5 py-10 shadow-[0_30px_90px_rgba(63,64,67,0.08)] backdrop-blur-xl md:px-8 md:py-14">
        <SectionHeader
          label="Направления"
          title="Чем могу помочь"
          description="Занятия адаптированы под цели ученика — от закрепления школьной программы до серьёзной подготовки к экзаменам."
          align="center"
        />

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {FEATURES.map((feature, index) => (
            <StaggerItem key={feature.title}>
              <motion.div
className="group relative h-full overflow-hidden rounded-[1.5rem] border border-[#92B775]/20 bg-white p-6 shadow-[0_18px_45px_rgba(63,64,67,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#92B775]/45 hover:shadow-[0_24px_60px_rgba(146,183,117,0.22)] md:rounded-[2rem] md:p-8"                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/[0.05] blur-2xl transition-all duration-500 group-hover:bg-accent/10"
                  aria-hidden
                />

                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/[0.1] text-foreground transition-all duration-300 group-hover:bg-accent/20 group-hover:shadow-[0_0_20px_rgba(146,183,117,0.22)]">
                    <FeatureIcon name={feature.icon} />
                  </div>
                  <span className="font-display text-3xl font-bold text-[#92B775]/20 transition-colors duration-300 group-hover:text-accent/10">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold tracking-tight text-foreground md:text-xl">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted md:text-[15px]">
                  {feature.description}
                </p>

                <div className="mt-6 h-px w-0 bg-gradient-to-r from-accent/60 to-transparent transition-all duration-500 group-hover:w-full" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
