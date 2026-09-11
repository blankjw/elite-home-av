import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { FeatureCard } from "@/components/feature-card"
import { SectionHeader } from "@/components/section-header"
const featured = [
  { title: "Home theater", tag: "Media rooms & cinema", scene: "theater" as const, href: "/services#theater" },
  { title: "Home audio", tag: "Whole-home & outdoor", scene: "audio" as const, href: "/services#audio" },
]

const more = [
  { title: "Lighting", copy: "Scenes, dimming, and control that match the room.", href: "/services#lighting" },
  { title: "Surveillance & access", copy: "Cameras and entry control without a daily headache.", href: "/services#surveillance" },
  { title: "Automation", copy: "The parts you touch every day, made simpler.", href: "/services#automation" },
  { title: "Networking", copy: "Wi-Fi and wired infrastructure that holds up.", href: "/services#networking" },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
          <SectionHeader label="What we do" title="Six systems. One plan." />
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#AAB6C5] hover:text-white transition-colors shrink-0"
          >
            All services
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 mb-4">
          {featured.map((service) => (
            <FeatureCard key={service.title} {...service} />
          ))}
        </div>

        <div className="border border-[#31445A] bg-[#081827] divide-y divide-[#31445A] md:divide-y-0 md:grid md:grid-cols-2">
          {more.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex items-start justify-between gap-6 p-6 md:p-8 hover:bg-[#0A1B2E] transition-colors md:border-r md:border-[#31445A] md:last:border-r-0"
            >
              <div>
                <h3 className="text-lg font-medium text-white group-hover:text-[#AAB6C5] transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-[#9BA7B5] leading-relaxed">{service.copy}</p>
                <p className="mt-3 text-xs text-[#AAB6C5] opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more →
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#3f3f3f] group-hover:text-[#AAB6C5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
