import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

type SiteCtaProps = {
  href: string
  children: ReactNode
  variant?: "solid" | "outline" | "text" | "glass"
  size?: "md" | "lg"
  className?: string
}

export function SiteCta({
  href,
  children,
  variant = "text",
  size = "md",
  className = "",
}: SiteCtaProps) {
  const sizeStyles = size === "lg" ? "px-6 py-3 text-base" : "px-5 py-2.5 text-sm"

  const styles = {
    solid: `inline-flex items-center gap-2 bg-[#AAB6C5] text-[#0B1526] font-medium glow-button hover:bg-[#7E8C9B] ${sizeStyles}`,
    outline: `inline-flex items-center gap-2 border border-[#3f3f3f] text-white font-medium hover:border-white/40 hover:bg-white/5 ${sizeStyles}`,
    glass: `inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/15 hover:border-white/30 ${sizeStyles}`,
    text: "inline-flex items-center gap-2 text-sm font-medium text-white border-b border-[#AAB6C5] pb-1 hover:text-[#AAB6C5] transition-colors",
  }[variant]

  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")

  const arrow = (
    <ArrowRight className={`${size === "lg" ? "w-5 h-5" : "w-4 h-4"} group-hover:translate-x-0.5 transition-transform`} />
  )

  if (isExternal) {
    return (
      <a href={href} className={`group ${styles} ${className}`}>
        {children}
        {variant !== "text" ? arrow : null}
      </a>
    )
  }

  return (
    <Link href={href} className={`group ${styles} ${className}`}>
      {children}
      {variant === "text" || variant === "solid" || variant === "glass" ? arrow : null}
    </Link>
  )
}
