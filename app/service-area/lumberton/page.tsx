import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Home, ShieldCheck, Wrench } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { JsonLd } from "@/components/json-ld"
import { pageMetadata } from "@/lib/seo"
import { breadcrumbSchema, serviceSchema } from "@/lib/schema"
import { SOLUTIONS } from "@/lib/solutions"

export const metadata: Metadata = pageMetadata({
  title: "Home Technology in Lumberton, TX | ELITE",
  description:
    "Elite Home AV is based in Lumberton, Texas, planning and supporting integrated audio, theater, lighting, surveillance, automation, and networking for local homes and businesses.",
  path: "/service-area/lumberton",
})

const reasons = [
  {
    icon: Home,
    title: "Based here",
    copy: "Lumberton is where ELITE operates from. Local projects are not a satellite job for us—they are the work we plan, install, and return to.",
  },
  {
    icon: Wrench,
    title: "Planned, not patched",
    copy: "We think about the wiring, the rack, and the control before the finishes go in, so a Lumberton room can change later without tearing the property apart.",
  },
  {
    icon: ShieldCheck,
    title: "Here after handover",
    copy: "Systems are documented for the household they serve. When something needs attention, the support path starts from how the space was designed to work.",
  },
] as const

export default function LumbertonPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Home technology in Lumberton, Texas",
            description:
              "Integrated audio, theater, lighting, surveillance, automation, and networking for Lumberton homes and businesses.",
            path: "/service-area/lumberton",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Local service", path: "/service-area" },
            { name: "Lumberton", path: "/service-area/lumberton" },
          ]),
        ]}
      />
      <PageHero
        label="Local service"
        title={<>Lumberton is home.</>}
        description="Elite Home AV is based in Lumberton, Texas, and supports homes and businesses here with integrated technology that stays simple to live with."
      />
      <section className="bg-[#F7F9FC] px-6 py-20 text-[#0B1526] md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#526274]">
                Local, from the first walkthrough
              </p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-[-.04em] md:text-5xl">
                A Lumberton property, planned as one system.
              </h2>
            </div>
            <div>
              <p className="text-sm leading-7 text-[#526274]">
                The visible parts of a system—what you see and touch—matter, but they are the last
                thing that happens. In Lumberton we start with the structure: how the rooms are used,
                where sound should reach, how light moves through the day, and where the network and
                equipment will live. That is what keeps a home comfortable now and serviceable later.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((solution) => (
              <article key={solution.slug} className="border-t border-[#AAB6C5] pt-6">
                <Link href={`/services/${solution.slug}`} className="block">
                  <h3 className="text-xl font-semibold">
                    {solution.title}
                    <ArrowUpRight className="ml-2 inline h-4 w-4" />
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#526274]">{solution.summary}</p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-[#0B1526] md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#526274]">
              Why local matters
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.04em] md:text-5xl">
              Fewer handoffs. One accountable partner.
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {reasons.map(({ icon: Icon, title, copy }) => (
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
          <p className="text-xs uppercase tracking-[.2em] text-[#B8C3CF]">Start in Lumberton</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl tracking-[-.04em] md:text-5xl">
            Tell us what should work better.
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#C3CCD7]">
            A single room, a whole property, or an existing system that needs attention—we will confirm
            the right scope and keep the first conversation practical.
          </p>
          <div className="mt-8 flex flex-wrap gap-6">
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold">
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/service-area"
              className="inline-flex items-center gap-2 text-sm text-[#B8C3CF]"
            >
              See all service areas <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
