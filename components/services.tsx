"use client"

import { Volume2, Tv, Lightbulb, Camera, SlidersHorizontal, Network, LucideIcon } from "lucide-react"

const services = [
  { icon: Volume2, title: "Home Audio", description: "Whole-home audio, surround sound, and outdoor speaker systems.", number: "01" },
  { icon: Tv, title: "Home Theater", description: "TV mounting, media rooms, projectors, and clean cable management.", number: "02" },
  { icon: Lightbulb, title: "Lighting", description: "Lighting control and smart lighting designed for the way each space is used.", number: "03" },
  { icon: Camera, title: "Surveillance & Access", description: "Camera systems and access control for clear visibility and simple entry management.", number: "04" },
  { icon: SlidersHorizontal, title: "Automation", description: "Straightforward control of the technology you use every day.", number: "05" },
  { icon: Network, title: "Networking & Integration", description: "Reliable Wi-Fi, wired networks, and the infrastructure that keeps every system connected.", number: "06" },
]

export function Services() {
  return (
    <section id="services" className="relative py-32 sm:py-40 bg-[#F4F6F8] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B6D9A]/50 to-transparent" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#3B6D9A]/3 rounded-full blur-[150px]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-4 mb-6"><div className="w-12 h-px bg-[#3B6D9A]" /><span className="text-[#3B6D9A] text-sm font-semibold tracking-[0.2em] uppercase">What We Do</span></div>
          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#1E293B] leading-[0.9]">One System.<br /><span className="text-[#64748B]">Built Around Your Space.</span></h2>
          <p className="mt-8 text-lg sm:text-xl text-[#64748B] max-w-3xl leading-relaxed">Elite Home AV designs and installs integrated technology for residential and commercial spaces across Southeast Texas. We plan the infrastructure around how you use the space, so the finished system is dependable, intuitive, and cleanly installed.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => <ServiceCard key={service.number} service={service} />)}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: { icon: LucideIcon; title: string; description: string; number: string } }) {
  const Icon = service.icon
  return <div className="relative p-6 lg:p-8 bg-white border border-[#D5DAE0] hover:border-[#3B6D9A]/50 transition-all duration-300 overflow-hidden">
    <div className="absolute -top-4 -right-2 font-bebas text-7xl text-[#1A1A1A]">{service.number}</div>
    <div className="relative"><div className="w-14 h-14 bg-[#1A1A1A] border border-[#D5DAE0] flex items-center justify-center mb-6"><Icon className="w-6 h-6 text-[#3B6D9A]" strokeWidth={1.5} /></div>
      <h3 className="font-bebas text-2xl tracking-wide text-[#1E293B] mb-3">{service.title}</h3><p className="text-sm text-[#64748B] leading-relaxed">{service.description}</p></div>
  </div>
}
