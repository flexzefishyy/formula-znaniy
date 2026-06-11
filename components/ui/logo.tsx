import Image from "next/image";
import { SITE } from "@/lib/constants";

type LogoSize = "nav" | "footer";

const LOGO_WIDTH = 1280;
const LOGO_HEIGHT = 681;

const sizeClasses: Record<LogoSize, string> = {
  nav: "w-auto h-20",
  footer: "h-6 w-auto opacity-90",
};

interface LogoProps {
  size?: LogoSize;
  className?: string;
  priority?: boolean;
}

export function Logo({ size = "nav", className = "", priority }: LogoProps) {
  return (
    <Image
      src={SITE.logo}
      alt={SITE.name}
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={priority ?? size === "nav"}
      quality={100}
      sizes={size === "nav" ? "188px" : "120px"}
      className={`brand-logo ${sizeClasses[size]} ${className}`}
    />
  );
}
