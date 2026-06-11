"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { FloatingGradients } from "@/components/ui/floating-gradients";
import { TelegramIcon, VKIcon } from "@/components/ui/icons";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE_OUT },
});

export function HeroSection() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, 48]);
  const imageScale = useTransform(scrollY, [0, 500], [1, 1.04]);
  const contentY = useTransform(scrollY, [0, 500], [0, -20]);

  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      <FloatingGradients variant="hero" />
      <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />
      <div className="bg-dot absolute inset-0 opacity-30" aria-hidden />

      <div className="relative mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-center px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <motion.div style={{ y: contentY }}>
            <motion.div
              {...fadeUp(0.1)}
              className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent-soft px-4 py-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-xs font-medium tracking-wide text-foreground/70">
                {SITE.badge}
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-display text-[2.75rem] font-bold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-[5rem]"
            >
              <span className="text-foreground">{SITE.name}</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.32)}
              className="mt-6 max-w-lg font-display text-xl font-medium leading-snug tracking-tight text-foreground/80 sm:text-2xl md:text-[1.65rem]"
            >
              {SITE.heroSubtitle}
            </motion.p>

            <motion.div {...fadeUp(0.44)} className="mt-10">
            <Button
  href={SITE.telegram}
  variant="primary"
  external
  size="lg"
  className="!bg-[#133215] !text-white hover:!bg-[#1B451F]"
>
  Записаться на занятие
</Button>
              <p className="mt-5 text-sm font-medium tracking-wide text-muted">
                {SITE.heroNote}
              </p>
            </motion.div>

            <motion.div
              {...fadeUp(0.55)}
              className="mt-10 flex gap-3 border-t border-border pt-8"
            >
              <Button href={SITE.telegram} variant="outline" external size="md">
              <TelegramIcon className="h-4 w-4 text-[#92B775]" />
                Telegram
              </Button>
              <Button href={SITE.vk} variant="outline" external size="md">
              <VKIcon className="h-4 w-4 text-[#92B775]" />
                VK
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="group relative mx-auto w-full max-w-[min(100%,340px)] sm:max-w-sm lg:max-w-none"
            style={{ y: imageY, scale: imageScale }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pointer-events-none absolute -inset-6 -z-10 sm:-inset-8" aria-hidden>
              <div className="hero-photo-glow absolute inset-0 rounded-[2.75rem] opacity-80 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
              <div className="absolute left-1/2 top-[18%] h-56 w-56 -translate-x-1/2 rounded-full bg-accent/20 blur-[72px] animate-pulse-glow" />
            </div>

            <motion.div
              className="hero-photo-frame glass-strong relative overflow-hidden rounded-[2rem] p-2.5 transition-shadow duration-500 group-hover:shadow-[0_40px_80px_rgba(63,64,67,0.1),0_0_48px_rgba(146,183,117,0.15)] sm:p-3 md:rounded-[2.5rem] md:p-4"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ y: -2 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] ring-1 ring-white/80 sm:rounded-[1.5rem] md:rounded-[2rem]">
                <Image
                  src="/teacher-new.jpg"
                  alt="Фаерман Ольга Викторовна — репетитор по математике"
                  fill
                  priority
                  sizes="(max-width: 640px) 340px, (max-width: 1024px) 384px, 480px"
                  className="hero-photo-image transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-white/20 via-transparent to-foreground/20" aria-hidden />
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-accent/[0.06] via-transparent to-white/10" aria-hidden />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
