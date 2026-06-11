"use client";

import { motion } from "framer-motion";
import { ABOUT, ABOUT_TIMELINE } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section-header";

export function AboutSection() {
  return (
    <AnimatedSection
      id="about"
      className="section-padding relative overflow-hidden bg-[#F8F8F4]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(146,183,117,0.18),transparent_30%),radial-gradient(circle_at_15%_85%,rgba(19,50,21,0.06),transparent_34%)]" />
      <div className="bg-grid absolute inset-0 opacity-30" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader
          label="Обо мне"
          title={ABOUT.title}
          align="center"
          large
        />

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <motion.div
            className="rounded-[2rem] border border-[#92B775]/20 bg-[#EEF5E8] p-7 shadow-[0_30px_90px_rgba(63,64,67,0.07)] md:rounded-[3rem] md:p-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#133215]/70">
              История пути
            </p>

            <h3 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-[#133215] md:text-4xl">
              От лаборатории к математике
            </h3>

            <p className="mt-6 text-base leading-relaxed text-[#3F4043]/80 md:text-lg">
              В моей работе много системы, точности и внимания к деталям. Это
              осталось со мной ещё со времён лаборатории — только теперь вместо
              пробирок у меня формулы, задачи и ученики.
            </p>

            <div className="mt-8 rounded-2xl bg-white p-5 shadow-[0_18px_45px_rgba(63,64,67,0.06)]">
              <p className="font-display text-xl font-semibold leading-snug text-[#3F4043]">
                {ABOUT.melody}
              </p>
            </div>
          </motion.div>

          <div className="relative">
            <div
              className="absolute left-[15px] top-4 bottom-4 w-px bg-gradient-to-b from-[#92B775] via-[#92B775]/25 to-transparent md:left-[19px]"
              aria-hidden
            />

            <div className="flex flex-col gap-5 md:gap-6">
              {ABOUT_TIMELINE.map((item, index) => (
                <motion.div
                  key={item.step}
                  className="group relative pl-12 md:pl-16"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                >
                  <div className="absolute left-0 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-[#92B775]/40 bg-white shadow-[0_0_18px_rgba(146,183,117,0.22)] transition-shadow duration-300 group-hover:shadow-[0_0_28px_rgba(146,183,117,0.35)] md:left-1">
                    <span className="font-display text-[10px] font-bold text-[#133215]">
                      {item.step}
                    </span>
                  </div>

                  <div className="rounded-[1.5rem] border border-[#92B775]/16 bg-white p-6 shadow-[0_18px_45px_rgba(63,64,67,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#92B775]/40 hover:shadow-[0_24px_60px_rgba(146,183,117,0.18)] md:p-7">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-display text-lg font-semibold text-[#133215] md:text-xl">
                        {item.title}
                      </h3>

                      {"period" in item && item.period ? (
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#92B775]">
                          {item.period}
                        </span>
                      ) : null}
                    </div>

                    <p className="mt-2.5 text-sm leading-relaxed text-[#3F4043]/75 md:text-[15px]">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
