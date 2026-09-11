import Link from "next/link"
import { ArrowUpRight, HeartHandshake, Radar, ShieldCheck, Wrench } from "lucide-react"

const pillars = [
  [ShieldCheck, "Keep the system documented", "Handoff notes, equipment records, and a support path shaped around what was installed—not a generic script."],
  [Radar, "Remote support when it is in the coverage", "If written coverage includes remote access, we connect for a scheduled check or when you request help. That is agreed support on your systems—not continuous monitoring."],
  [Wrench, "Service with the original intent", "Visits start from how the rooms were designed to work, then we adjust as your use of the property changes."],
] as const

export default function CarePage() {
  return (
    <>
      <section className="border-b border-[#31445A] px-6 pb-16 pt-40 md:px-10 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow mb-4">ELITE Care</p>
          <h1 className="max-w-3xl font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.08] tracking-[-0.04em] text-white">Keep the property working as it changes.</h1>
          <p className="lead mt-5 max-w-xl">Planned maintenance, troubleshooting, and a familiar point of contact. Coverage, visit cadence, and what we look after are written for each home, business, or multi-property account.</p>
        </div>
      </section>
      <section className="bg-[#F7F9FC] px-6 py-20 text-[#0B1526] md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <HeartHandshake className="h-10 w-10 text-[#245DC1]" />
              <p className="mt-6 text-xs font-semibold uppercase tracking-[.2em] text-[#526274]">After the install</p>
            </div>
            <div>
              <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-.04em] md:text-5xl">Support sized to each property you operate.</h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#526274]">A single residence, a workplace, or several sites can share the same care relationship. Visit cadence and scope are confirmed in writing before recurring work starts.</p>
            </div>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {pillars.map(([Icon, title, copy]) => (
              <article key={title} className="border-t border-[#AAB6C5] pt-6">
                <Icon className="h-6 w-6 text-[#245DC1]" />
                <h3 className="mt-8 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#526274]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#152942] px-6 py-20 text-white md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[.2em] text-[#B8C3CF]">Need help with an existing system?</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl tracking-[-.04em] md:text-5xl">Start with the space and what it is doing now.</h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#C3CCD7]">Keep your property's technology working well as your needs change. ELITE Care brings planned maintenance, troubleshooting, and a familiar point of contact, with service visits and coverage tailored to your systems.</p>
          <div className="mt-8 flex flex-wrap gap-6">
            <Link href="/contact?intent=existing_service" className="inline-flex items-center gap-2 text-sm font-semibold">Request service <ArrowUpRight className="h-4 w-4" /></Link>
            <Link href="/contact?intent=new_project" className="inline-flex items-center gap-2 text-sm text-[#B8C3CF]">New project inquiry <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
