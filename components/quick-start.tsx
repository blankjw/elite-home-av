import Link from "next/link"
import { ArrowRight, HelpCircle, Speaker, Sun, Tv } from "lucide-react"

const paths = [
  {
    title: "Home theater",
    detail: "Media room or dedicated cinema",
    href: "/services#theater",
    icon: Tv,
  },
  {
    title: "Whole-home audio",
    detail: "Inside, outside, every room",
    href: "/services#audio",
    icon: Speaker,
  },
  {
    title: "Lighting & control",
    detail: "Scenes that match how you live",
    href: "/services#lighting",
    icon: Sun,
  },
  {
    title: "Not sure yet",
    detail: "Walk through it on a call",
    href: "/contact",
    icon: HelpCircle,
  },
] as const

export function QuickStart() {
  return (
    <section className="border-b border-[#31445A] bg-[#081827]">
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <p className="eyebrow mb-2">Start here</p>
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-[-0.02em]">
              What are you trying to fix or build?
            </h2>
          </div>
          <p className="text-sm text-[#9BA7B5]">Pick one — you&apos;ll land on the right place.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {paths.map((path) => (
            <Link
              key={path.title}
              href={path.href}
              className="group hover-lift flex flex-col justify-between gap-6 border border-[#31445A] bg-[#0A1B2E] p-5 md:p-6 min-h-[9.5rem] hover:border-[#AAB6C5]/40 transition-colors"
            >
              <path.icon className="w-6 h-6 text-[#AAB6C5]" strokeWidth={1.5} />
              <div>
                <p className="font-medium text-white group-hover:text-[#AAB6C5] transition-colors">{path.title}</p>
                <p className="mt-1 text-sm text-[#9BA7B5]">{path.detail}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-[#3f3f3f] group-hover:text-[#AAB6C5] group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
