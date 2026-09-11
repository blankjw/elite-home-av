import Link from "next/link"
import { LogoMark } from "@/components/logo-mark"

type BrandLockupProps = {
  variant?: "hero" | "nav" | "footer"
  className?: string
  linked?: boolean
  onLight?: boolean
}

function Wordmark({ variant, onLight }: { variant: "hero" | "nav" | "footer", onLight?: boolean }) {
  const size =
    variant === "hero"
      ? "text-xl sm:text-2xl"
      : variant === "footer"
        ? "text-xl sm:text-2xl"
        : "text-lg sm:text-xl"

  return (
    <p className={`font-serif ${size} tracking-[0.015em] whitespace-nowrap leading-none ${onLight ? "text-[#0B1526]" : "text-white"}`}>
      ELITE
    </p>
  )
}

export function BrandLockup({ variant = "hero", className = "", linked = true, onLight = false }: BrandLockupProps) {
  const markSize = variant === "hero" ? 72 : variant === "footer" ? 52 : 40

  const content = (
    <div className={`flex items-center gap-3 sm:gap-5 ${className}`}>
      <LogoMark size={markSize} onLight={onLight} className="shrink-0" />
      <div className="min-w-0">
        <Wordmark variant={variant} onLight={onLight} />
        <p className={`mt-1 text-[0.65rem] uppercase tracking-[0.22em] ${onLight ? "text-[#526274]" : "text-[#B8C3CF]"}`}>Integrated Technology</p>
      </div>
    </div>
  )

  if (linked) {
    return (
      <Link href="/" className="group block min-w-0" aria-label="Elite Home AV home">
        {content}
      </Link>
    )
  }

  return content
}
