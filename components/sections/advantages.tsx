"use client";

import { motion } from "framer-motion";
import { ADVANTAGES } from "@/lib/constants";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { AdvantageIcon } from "@/components/ui/icons";
import { SectionHeader } from "@/components/ui/section-header";

export function AdvantagesSection() {
  return (
    <AnimatedSection
      id="advantages"
      className="section-padding relative overflow-hidden bg-[#F8F8F4]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(146,183,117,0.16),transparent_32%),radial-gradient(circle_at_82%_82%,rgba(19,50,21,0.07),transparent_36%)]" />
      <div className="bg-grid absolute inset-0 opacity-25" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="rounded-[2rem] border border-[#92B775]/18 bg-white/72 p-6 shadow-[0_30px_90px_rgba(63,64,67,0.07)] backdrop-blur-xl md:rounded-[3rem] md:p-10 lg:p-14">
          <SectionHeader
            label="Преимущества"
            title="Пространство, где ученик растёт"
            description="Не просто уроки математики — а поддержка, доверие и уверенность, которые остаются надолго."
            align="center"
          />

          <StaggerContainer className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {ADVANTAGES.map((item, index) => (
              <StaggerItem key={item.title}>
                <motion.div
                  className="group relative h-full overflow-hidden rounded-[1.5rem] border border-[#92B775]/20 bg-white p-6 shadow-[0_18px_45px_rgba(63,64,67,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#92B775]/45 hover:shadow-[0_24px_60px_rgba(146,183,117,0.22)] md:rounded-[2rem] md:p-8"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#92B775]/16 text-[#133215] transition-all duration-300 group-hover:bg-[#133215] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(146,183,117,0.22)]">
                      <AdvantageIcon name={item.icon} />
                    </div>

                    <span className="rounded-full border border-[#92B775]/25 bg-[#92B775]/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#133215]/70">
                      {item.emotion}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-semibold tracking-tight text-[#133215] md:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#3F4043]/75 md:text-[15px]">
                    {item.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#92B775] transition-all duration-500 group-hover:w-full" />

                  <span className="pointer-events-none absolute -bottom-4 -right-2 font-display text-7xl font-bold text-[#92B775]/10 transition-colors duration-300 group-hover:text-[#92B775]/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </AnimatedSection>
  );
}
