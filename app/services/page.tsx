import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SiteCta } from "@/components/site-cta"
import { SOLUTIONS } from "@/lib/solutions"

export const metadata: Metadata = {
  title: "Audio, Lighting, Surveillance & Automation | Elite Home AV",
  description:
    "Technology planned so homes and businesses in Southeast Texas feel simple to use, with solutions detailed on each service page.",
  alternates: { canonical: "https://www.elitehomeav.com/services" },
}



export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        label="Services"
        title="Rooms that feel simple. Systems that stay out of the way."
        description="We plan the work around how you actually live and work, so the space stays easy to use."
      />

      <section className="bg-[#071525] px-6 pb-16 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#AAB6C5]">Under the Surface</p>
            <h2 className="mt-5 max-w-xl font-serif text-3xl leading-[1.05] tracking-[-0.04em] text-white md:text-5xl">One relationship. The rooms stay easy to use.</h2>
            <p className="mt-6 max-w-md leading-7 text-[#C3CCD7]">You feel it when you arrive, settle in, and leave. Light, sound, and access stay ready without asking you to manage them.</p>
          </div>
          <figure className="w-full max-w-xl justify-self-end overflow-hidden border border-[#31445A]">
            <img src="/images/concepts/circadian-living-dusk.png" alt="Illustrative living room at dusk with warm, even light" className="w-full object-cover" />
            <figcaption className="px-4 py-3 text-[10px] uppercase tracking-[0.18em] text-[#B8C3CF]">Design inspiration</figcaption>
          </figure>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="border-t border-[#31445A]">
            {SOLUTIONS.map((service) => (
              <li
                key={service.slug}
                id={service.slug}
                className="scroll-mt-32 grid md:grid-cols-1 gap-x-6 py-8 border-b border-[#31445A]"
              >
                <div>
                  <h2 className="text-xl font-medium text-white"><Link href={`/services/${service.slug}`} className="hover:text-[#AAB6C5]">{service.title}</Link></h2>
                  <p className="mt-3 text-[#C3CCD7] leading-relaxed max-w-2xl">{service.summary}</p>
                </div>
              </li>
            ))}
          </ul>

          <div id="care" className="mt-16 max-w-2xl scroll-mt-32">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#AAB6C5]">ELITE Care</p>
            <h2 className="section-title mt-3 text-2xl">Ongoing maintenance after the install.</h2>
            <p className="lead mt-4">Keep your property's technology working well as your needs change. ELITE Care brings planned maintenance, troubleshooting, and a familiar point of contact, with service visits and coverage tailored to your systems.</p>
          </div>
          <div className="mt-16 max-w-2xl">
            <h2 className="section-title text-2xl">Have a project in mind?</h2>
            <p className="lead mt-4">Tell us what you want the room or system to do. We&apos;ll help define the right next step.</p>
            <div className="mt-6">
              <SiteCta href="/contact">Request a consultation</SiteCta>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
