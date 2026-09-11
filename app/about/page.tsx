import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SiteCta } from "@/components/site-cta"
import { BrandLockup } from "@/components/brand-lockup"
import { CONTACT } from "@/lib/site"

export const metadata: Metadata = {
  title: "About Elite Home AV | Lumberton, TX",
  description:
    "A local team that plans technology so homes and businesses in Southeast Texas feel simple to live and work in.",
  alternates: { canonical: "https://www.elitehomeav.com/about" },
}

const trades = [
  { name: "Home audio", slug: "audio" },
  { name: "Home theater", slug: "theater" },
  { name: "Lighting", slug: "lighting" },
  { name: "Surveillance", slug: "surveillance" },
  { name: "Access control", slug: "access" },
  { name: "Automation", slug: "automation" },
  { name: "Networking & integration", slug: "networking" },
]

const serviceAreas = [
  "Lumberton",
  "Beaumont",
  "Port Arthur",
  "Galveston",
  "Toledo Bend",
  "Sam Rayburn",
  "Nederland",
  "Vidor",
  "Orange",
  "Silsbee",
  "Jasper",
  "Hardin County",
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Someone who stays with the space after the install."
        description="Elite Home AV is based in Lumberton. John Blank is the owner and your point of contact from the first conversation through installation and handoff."
      >
        <div className="border-t border-[#31445A] pt-8 space-y-4 text-sm">
          <div>
            <p className="text-white font-medium">John Blank</p>
            <p className="text-[#9BA7B5] mt-1">Owner, Elite Home AV</p>
          </div>
          <p className="text-[#C3CCD7] leading-relaxed">
            One point of contact from consultation through installation and handoff.
          </p>
          <SiteCta href={CONTACT.phoneHref} variant="outline">
            Call {CONTACT.phone}
          </SiteCta>
        </div>
      </PageHero>

      <section className="bg-[#071525] px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <p className="max-w-md text-lg leading-8 text-[#C3CCD7]">We are the installer and the person who still knows the property later. Rooms that feel finished. Systems that stay out of the way.</p>
          <div className="e-about-mark"><BrandLockup variant="hero" linked={false}/></div>
        </div>
      </section>

      <section className="border-b border-[#31445A]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid lg:grid-cols-2 gap-12">
          <div className="space-y-5 text-[#C3CCD7] leading-relaxed">
            <p>
              Technology works best when it&apos;s planned as one system — not added one piece at a time by
              different people who never talk to each other.
            </p>
            <p>
              We start with how you use the space, then design the infrastructure around it: entertainment,
              lighting, cameras, access, networking, and control that actually fits the way you live or work.
            </p>
          </div>
          <div className="border-l border-[#31445A] pl-8">
            <p className="text-white font-medium">What that means in practice</p>
            <p className="mt-4 text-[#C3CCD7] leading-relaxed">
              Clear scope before work begins. Clean installation. A finished system you can use without a
              folder full of remotes and apps that don&apos;t talk to each other.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#31445A]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <p className="eyebrow mb-4">Capabilities</p>
          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
            {trades.map((trade) => (
              <li key={trade.name}>
                <Link href={`/services/${trade.slug === "access" ? "surveillance" : trade.slug}`} className="text-[#C3CCD7] hover:text-white transition-colors">
                  {trade.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow mb-4">Service area</p>
            <h2 className="section-title text-2xl">Southeast Texas</h2>
            <p className="lead mt-4">
              Based in Lumberton. We travel across the region for residential and commercial work.
            </p>
          </div>
          <p className="text-sm text-[#9BA7B5] leading-loose">
            {serviceAreas.join(" · ")} · and everywhere in between
          </p>
        </div>
      </section>
    </>
  )
}
