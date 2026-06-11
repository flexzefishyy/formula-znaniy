"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const navScale = useTransform(scrollY, [0, 100], [1, 0.98]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-6"
        style={{ scale: navScale }}
      >
        <nav
          className={`mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-500 md:px-6 md:py-3 ${
            scrolled
              ? "glass-strong shadow-[0_8px_32px_rgba(17,17,17,0.06)]"
              : "bg-transparent"
          }`}
        >
          <a
            href="#"
            className="group relative flex shrink-0 items-center rounded-lg py-1 pr-2 transition-all duration-300 hover:opacity-90"
            aria-label="Формула знаний — на главную"
          >
            <Logo
              size="nav"
              className="h-16 w-auto transition-transform duration-300 ease-out group-hover:scale-[1.02] group-hover:brightness-105"
              priority
            />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-[13px] text-muted transition-all duration-300 hover:bg-foreground/[0.04] hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
          <Button
  href="#contact"
  variant="primary"
  size="sm"
  className="!bg-[#133215] !text-white hover:!bg-[#1B451F]"
>
              Записаться
            </Button>
          </div>

          <button
            type="button"
            className="relative z-50 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-foreground/8 bg-white/50 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
          >
            <div className="flex w-5 flex-col gap-1.5">
              <motion.span
                className="block h-0.5 w-full origin-center rounded-full bg-foreground"
                animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="block h-0.5 w-full rounded-full bg-foreground"
                animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              />
              <motion.span
                className="block h-0.5 w-full origin-center rounded-full bg-foreground"
                animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              />
            </div>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.div
              className="absolute inset-x-4 top-20 glass-strong rounded-3xl p-6 shadow-[0_24px_64px_rgba(17,17,17,0.12)]"
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="block rounded-xl px-4 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-accent/[0.06]"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-4 border-t border-foreground/8 pt-4"> 
                <Button href="#contact" variant="primary" className="w-full" size="lg">
                  Записаться на занятие
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
