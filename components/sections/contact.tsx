"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { PhoneIcon, TelegramIcon, VKIcon } from "@/components/ui/icons";

export function ContactSection() {
  return (
    <AnimatedSection
  id="contact"
  className="section-padding relative overflow-hidden bg-[#EEF5E8]"
>
<div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
         className="relative overflow-hidden rounded-[3rem] border border-[#92B775]/20 bg-[#133215] p-8 md:rounded-[2.5rem] md:p-14 lg:p-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-accent/15 blur-[100px] animate-pulse-glow" />
            <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-accent/10 blur-[80px] animate-pulse-glow" />
          </div>

          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white">
  Контакты
</span>

              <h2 className="mt-6 font-display text-3xl font-bold tracking-[-0.03em] text-white md:text-4xl lg:text-5xl lg:leading-[1.1]">
                Записаться
                <br />
                <span className="text-[#92B775]">на занятие</span>
              </h2>

              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/65 md:text-base">
                Стоимость и свободное время уточняются лично в сообщениях.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  href={SITE.telegram}
                  variant="secondary"
                  external
                  size="lg"
                  className="!bg-white !text-cta hover:!bg-white/95"
                >
                  <TelegramIcon className="h-4 w-4" />
                  Telegram
                </Button>
                <Button
  href={SITE.vk}
  external
  size="lg"
  className="!bg-[#92B775] !text-[#133215] hover:!bg-[#A5C68B]"
>
                  <VKIcon className="h-4 w-4" />
                  VK
                </Button>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-accent/30 hover:bg-white/[0.08]">
                <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#92B775] text-[#133215]">
  <PhoneIcon className="h-5 w-5" />
</div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/45">
                      Телефон
                    </p>
                    <a
                      href={SITE.phoneHref}
                      className="mt-1.5 block font-display text-xl font-semibold text-white transition-colors hover:text-accent md:text-2xl"
                    >
                      {SITE.phone}
                    </a>
                    <p className="mt-2 text-sm text-white/45">{SITE.city}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
