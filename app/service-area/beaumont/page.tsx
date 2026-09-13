import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Building2, Network, ShieldCheck } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { JsonLd } from "@/components/json-ld"
import { pageMetadata } from "@/lib/seo"
import { breadcrumbSchema, serviceSchema } from "@/lib/schema"
import { SOLUTIONS } from "@/lib/solutions"

export const metadata: Metadata = pageMetadata({
  title: "Home & Business Technology in Beaumont, TX | ELITE",
  description:
    "Elite Home AV plans, installs, and supports integrated audio, theater, lighting, surveillance, automation, and networking for Beaumont, Texas homes and businesses.",
  path: "/service-area/beaumont",
})

const reasons = [
  {
    icon: Building2,
    title: "Homes and businesses",
    copy: "Beaumont projects range from a residence to a working space. The planning discipline is the same: understand how the property is used before specifying equipment.",
  },
  {
    icon: Network,
    title: "Infrastructure first",
    copy: "Older and newer buildings both have constraints. We design the wiring path, coverage, and equipment location early so the visible result does not fight the building.",
  },
  {
    icon: ShieldCheck,
    title: "Supported locally",
    copy: "Beaumont is inside our regular service area, so support is a relationship you keep, not a one-time install that disappears after handover.",
  },
] as const

export default function BeaumontPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Home and business technology in Beaumont, Texas",
            description:
              "Integrated audio, theater, lighting, surveillance, automation, and networking for Beaumont homes and businesses.",
            path: "/service-area/beaumont",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Local service", path: "/service-area" },
            { name: "Beaumont", path: "/service-area/beaumont" },
          ]),
        ]}
      />
      <PageHero
        label="Local service"
        title={<>Beaumont, planned as one system.</>}
        description="Elite Home AV serves Beaumont homes and businesses with integrated technology designed around the property—not assembled from disconnected parts."
      />
      <section className="bg-[#F7F9FC] px-6 py-20 text-[#0B1526] md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#526274]">
                One plan, one point of contact
              </p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-[-.04em] md:text-5xl">
                Start with the space, not the catalog.
              </h2>
            </div>
            <div>
              <p className="text-sm leading-7 text-[#526274]">
                A Beaumont room can improve without disturbing the rest of the property, or a whole
                building can be brought together—sound, light, shade, protection, and connectivity
                sharing one control language. Either way we design the infrastructure to be
                serviceable, because the systems behind the walls outlive any single device.
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
              Why Beaumont projects stay calmer
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.04em] md:text-5xl">
              Designed before anything is mounted.
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
          <p className="text-xs uppercase tracking-[.2em] text-[#B8C3CF]">Start in Beaumont</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl tracking-[-.04em] md:text-5xl">
            Tell us what you want to change.
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#C3CCD7]">
            We will confirm service availability, talk through the right scope, and keep the first
            conversation grounded in how the property actually works.
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
