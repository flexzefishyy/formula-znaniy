"use client";

import { motion } from "framer-motion";
import { MOTIVATION, SITE } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";

export function MotivationSection() {
  return (
    <AnimatedSection
      id="motivation"
      className="section-padding relative overflow-hidden bg-[#F8F8F4]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(146,183,117,0.18),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(19,50,21,0.08),transparent_36%)]" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          className="relative overflow-hidden rounded-[2rem] border border-[#92B775]/20 bg-[#133215] p-8 shadow-[0_35px_100px_rgba(19,50,21,0.26)] md:rounded-[3rem] md:p-14 lg:p-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#92B775]/24 blur-[90px]" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/8 blur-[80px]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_38%)]" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#DDEBD4]">
                Поддержка ученика
              </span>

              <h2 className="mt-6 font-display text-4xl font-bold tracking-[-0.04em] text-white md:text-5xl lg:text-6xl lg:leading-[1.02]">
                {MOTIVATION.title}
              </h2>

              <p className="mt-6 max-w-md text-base leading-relaxed text-white/68 md:text-lg">
                Здесь можно ошибаться, спрашивать снова и снова, двигаться в своём темпе — и постепенно услышать собственный ритм в математике.
              </p>

              <div className="mt-9">
                <Button
                  href={SITE.telegram}
                  variant="secondary"
                  external
                  size="lg"
                  className="!bg-white !text-[#133215] hover:!bg-[#F8F8F4]"
                >
                  Записаться на занятие
                </Button>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/12 bg-white/[0.08] p-6 backdrop-blur-xl md:p-8">
              <div className="mb-6 font-display text-6xl leading-none text-[#92B775]/70">
                “
              </div>

              <div className="space-y-5">
                {MOTIVATION.paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    className={`text-[15px] leading-relaxed md:text-base md:leading-[1.75] ${
                      index === MOTIVATION.paragraphs.length - 1
                        ? "font-display text-lg font-semibold text-[#DDEBD4] md:text-xl"
                        : "text-white/76"
                    }`}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
