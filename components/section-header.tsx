import type { ReactNode } from "react"

type SectionHeaderProps = {
  label?: string
  title: ReactNode
  description?: string
  className?: string
}

export function SectionHeader({ label, title, description, className = "" }: SectionHeaderProps) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {label ? <p className="eyebrow mb-4">{label}</p> : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="lead mt-5">{description}</p> : null}
    </div>
  )
}
