import type { ReactNode } from "react"
import Image from "next/image"

type MediaPanelProps = {
  src: string
  alt?: string
  className?: string
  children?: ReactNode
  label?: string
  priority?: boolean
}

export function MediaPanel({
  src,
  alt = "",
  className = "",
  children,
  label,
  priority = false,
}: MediaPanelProps) {
  return (
    <div className={`group/panel relative overflow-hidden border border-[#31445A] ${className}`}>
      <div className="absolute inset-0 image-zoom">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#071525] via-[#071525]/55 to-[#071525]/25 pointer-events-none" />
      <div className="absolute inset-0 bg-[#AAB6C5]/0 group-hover/panel:bg-[#AAB6C5]/10 transition-colors duration-500 pointer-events-none" />
      {label ? (
        <p className="absolute top-4 left-4 z-10 text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-white/70">
          {label}
        </p>
      ) : null}
      {children ? (
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 md:p-6">{children}</div>
      ) : null}
    </div>
  )
}
