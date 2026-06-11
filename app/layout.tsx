import type { Metadata } from "next";
import { Manrope, Onest } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Формула знаний | Репетитор по математике | Губкинский",
  description:
    "Репетитор по математике Фаерман Ольга Викторовна. Подготовка к ОГЭ и ЕГЭ, помощь школьникам 1–11 классов. Онлайн и офлайн занятия в Губкинском.",
  keywords: [
    "репетитор математика",
    "ОГЭ",
    "ЕГЭ",
    "Губкинский",
    "Формула знаний",
    "репетитор Губкинский",
    "математика онлайн",
  ],
  openGraph: {
    title: "Формула знаний | Репетитор по математике | Губкинский",
    description:
      "Репетитор по математике Фаерман Ольга Викторовна. Подготовка к ОГЭ и ЕГЭ, помощь школьникам 1–11 классов. Онлайн и офлайн занятия в Губкинском.",
    locale: "ru_RU",
    type: "website",
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${onest.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
