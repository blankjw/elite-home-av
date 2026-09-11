import type { ReactNode } from "react"

type PageHeroProps = {
  label?: string
  title: ReactNode
  description?: string
  children?: ReactNode
}

export function PageHero({ label, title, description, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="e-shell">
        <div className={children ? "grid lg:grid-cols-2 gap-12 items-start" : "max-w-3xl"}>
          <div>
            {label ? <p className="eyebrow mb-4">{label}</p> : null}
            <h1 className="section-title text-[clamp(2rem,4vw,3rem)]">{title}</h1>
            {description ? <p className="lead mt-5">{description}</p> : null}
          </div>
          {children ? <div>{children}</div> : null}
        </div>
      </div>
    </section>
  )
}
