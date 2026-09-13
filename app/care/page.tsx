import Link from "next/link"
import { pageMetadata } from "@/lib/seo"
import { ArrowUpRight, HeartHandshake, Radar, ShieldCheck, Wrench } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = pageMetadata({
  title: "Technology Support & Maintenance | ELITE Care",
  description: "ELITE Care provides documented technology support, planned system checkups, and service options for homes and businesses in Southeast Texas.",
  path: "/care",
})

const pillars = [
  [ShieldCheck, "Keep the system documented", "Handoff notes, equipment records, and a support path shaped around what was installed—not a generic script."],
  [Radar, "Remote support when it is in the coverage", "If written coverage includes remote access, we connect for a scheduled check or when you request help. That is agreed support on your systems—not continuous monitoring."],
  [Wrench, "Service with the original intent", "Visits start from how the rooms were designed to work, then we adjust as your use of the property changes."],
] as const

const careOptions = [
  {
    name: "Care Check",
    bestFor: "A focused system review or a property that needs a clean starting point.",
    includes: ["Scheduled on-site system review", "Plain-language findings and priorities", "Updated equipment and support notes"],
  },
  {
    name: "Ongoing Care",
    bestFor: "Homes and businesses that want planned visits and a familiar support contact.",
    includes: ["Agreed maintenance visit cadence", "Documented systems and service history", "Remote help when included in the written scope"],
  },
  {
    name: "Property Care",
    bestFor: "Larger systems or several properties that need one organized service relationship.",
    includes: ["Coordinated records across covered properties", "Prioritized maintenance planning", "One point of contact for agreed systems"],
  },
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
      <section className="bg-white px-6 py-20 text-[#0B1526] md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#526274]">Ways to work with ELITE Care</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.04em] md:text-5xl">Choose the relationship, then define the coverage.</h2>
            <p className="mt-6 text-base leading-8 text-[#526274]">Every plan is confirmed in writing around the systems, properties, visit cadence, and remote access actually included. No vague blanket coverage.</p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {careOptions.map((option) => <article key={option.name} className="flex flex-col border border-[#D7DEE7] bg-[#F7F9FC] p-7 md:p-8">
              <h3 className="text-2xl font-semibold">{option.name}</h3>
              <p className="mt-4 min-h-20 text-sm leading-7 text-[#526274]">{option.bestFor}</p>
              <ul className="mt-7 space-y-3 border-t border-[#C3CCD7] pt-6 text-sm text-[#33445A]">
                {option.includes.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#245DC1]" />{item}</li>)}
              </ul>
              <Link href="/contact?intent=existing_service" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">Discuss this option <ArrowUpRight className="h-4 w-4" /></Link>
            </article>)}
          </div>
          <p className="mt-8 max-w-3xl text-xs leading-6 text-[#647386]">ELITE Care is not emergency dispatch or continuous security monitoring. Response expectations, availability, and covered systems are defined in each property&apos;s written scope.</p>
        </div>
      </section>
      <section className="bg-[#152942] px-6 py-20 text-white md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[.2em] text-[#B8C3CF]">Need help with an existing system?</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl tracking-[-.04em] md:text-5xl">Start with the space and what it is doing now.</h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#C3CCD7]">Keep your property&apos;s technology working well as your needs change. ELITE Care brings planned maintenance, troubleshooting, and a familiar point of contact, with service visits and coverage tailored to your systems.</p>
          <div className="mt-8 flex flex-wrap gap-6">
            <Link href="/contact?intent=existing_service" className="inline-flex items-center gap-2 text-sm font-semibold">Request service <ArrowUpRight className="h-4 w-4" /></Link>
            <Link href="/contact?intent=new_project" className="inline-flex items-center gap-2 text-sm text-[#B8C3CF]">New project inquiry <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
