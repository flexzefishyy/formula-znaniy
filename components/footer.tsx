import { NAV_LINKS, SITE } from "@/lib/constants";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/[0.06] bg-foreground/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <a href="#" className="mb-5 inline-flex transition-opacity duration-300 hover:opacity-80">
              <Logo size="footer" />
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              {SITE.tagline}. Индивидуальные занятия для учеников 1–11 классов
              в {SITE.city}.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-light">
              Навигация
            </h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/60 transition-colors duration-300 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-light">
              Контакты
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-foreground/60">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="transition-colors duration-300 hover:text-foreground"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>{SITE.city}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-foreground/[0.06] pt-8 md:flex-row">
          <p className="text-xs text-muted-light">
            © {year} {SITE.name}
          </p>
          <p className="text-xs text-muted-light/70">Фаерман Ольга Викторовна</p>
        </div>
      </div>
    </footer>
  );
}
