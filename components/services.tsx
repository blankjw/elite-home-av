"use client"

import { useRef } from "react"
import { 
  Volume2, 
  Tv, 
  Home, 
  Wifi, 
  Camera, 
  Shield, 
  Zap, 
  Droplets, 
  Hammer,
  Palette,
  LucideIcon
} from "lucide-react"

const services = [
  {
    icon: Volume2,
    title: "Home Audio",
    description: "Whole-home audio systems with crystal-clear sound in every room.",
    number: "01", image: "https://source.unsplash.com/1200x500/?home+audio+speakers+interior"
  },
  {
    icon: Tv,
    title: "Home Video",
    description: "Custom home theaters and media rooms with stunning 4K/8K displays.",
    number: "02", image: "https://source.unsplash.com/1200x500/?home+theater+cinema+luxury"
  },
  {
    icon: Home,
    title: "Home Automation",
    description: "Smart home control for lighting, climate, shades, and more.",
    number: "03", image: "https://source.unsplash.com/1200x500/?smart+home+technology+interior"
  },
  {
    icon: Wifi,
    title: "Networking",
    description: "Enterprise-grade networking with seamless whole-home coverage.",
    number: "04", image: "https://source.unsplash.com/1200x500/?server+rack+network+cables"
  },
  {
    icon: Camera,
    title: "Surveillance",
    description: "Professional CCTV and video monitoring systems.",
    number: "05", image: "https://source.unsplash.com/1200x500/?security+camera+house+exterior"
  },
  {
    icon: Shield,
    title: "Security",
    description: "Advanced alarm systems and access control solutions.",
    number: "06", image: "https://source.unsplash.com/1200x500/?smart+home+security+lock+door"
  },
  {
    icon: Zap,
    title: "Electrical",
    description: "Licensed electrical work from outlets to full panel upgrades.",
    number: "07", image: "https://source.unsplash.com/1200x500/?interior+lighting+modern+home+luxury"
  },
  {
    icon: Droplets,
    title: "Plumbing",
    description: "Complete plumbing services for repairs and new construction.",
    number: "08", image: "https://source.unsplash.com/1200x500/?luxury+bathroom+modern+spa"
  },
  {
    icon: Hammer,
    title: "Construction & Remodel",
    description: "Full-scale remodeling and custom construction projects.",
    number: "09", image: "https://source.unsplash.com/1200x500/?luxury+home+living+room+renovation"
  },
  {
    icon: Palette,
    title: "Design",
    description: "Professional system design and project planning services.",
    number: "10", image: "https://source.unsplash.com/1200x500/?interior+design+luxury+modern+home"
  }
]

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="relative py-32 sm:py-40 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E8521A]/50 to-transparent" />
      
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#E8521A]/3 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#E8521A]/5 rounded-full blur-[120px]" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#E8521A]" />
            <span className="text-[#E8521A] text-sm font-semibold tracking-[0.2em] uppercase">Our Expertise</span>
          </div>
          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[0.9]">
            End-to-End Expertise.
            <br />
            <span className="text-[#6B7280]">One Master Integrator.</span>
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-[#9CA3AF] max-w-2xl leading-relaxed">
            True smart home integration means understanding every layer of the build. By handling the design, installation, and programming personally, I ensure your systems communicate flawlessly. No disjointed contractors &mdash; just one cohesive vision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ServiceCardProps {
  service: {
    icon: LucideIcon
    title: string
    description: string
    number: string
    image?: string
  }
  index: number
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon
  
  return (
    <div 
      className="group relative p-6 lg:p-8 bg-[#141414] border border-[#1F1F1F] hover:border-[#E8521A]/50 transition-all duration-500 cursor-pointer overflow-hidden"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* AI Background Image */}
      {service.image && (
        <img 
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-luminosity group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/90 to-[#141414]/50 pointer-events-none" />

      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8521A]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#E8521A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      
      {/* Number watermark */}
      <div className="absolute -top-4 -right-2 font-bebas text-7xl text-[#1A1A1A] group-hover:text-[#E8521A]/10 transition-colors duration-500">
        {service.number}
      </div>
      
      <div className="relative">
        {/* Icon */}
        <div className="w-14 h-14 bg-[#1A1A1A] border border-[#262626] flex items-center justify-center mb-6 group-hover:bg-[#E8521A]/10 group-hover:border-[#E8521A]/30 transition-all duration-500">
          <Icon className="w-6 h-6 text-[#E8521A]" strokeWidth={1.5} />
        </div>
        
        {/* Title */}
        <h3 className="font-bebas text-2xl tracking-wide text-white mb-3 group-hover:text-[#E8521A] transition-colors duration-300">
          {service.title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-[#6B7280] leading-relaxed group-hover:text-[#9CA3AF] transition-colors duration-300">
          {service.description}
        </p>
        
        {/* Arrow indicator */}
        <div className="mt-6 flex items-center gap-2 text-[#E8521A] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span className="text-xs font-semibold tracking-wide uppercase">Learn More</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  )
}
