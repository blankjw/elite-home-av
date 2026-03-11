"use client"

import { Phone, ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers for depth */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      
      {/* AI Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
        style={{ backgroundImage: 'url("https://picsum.photos/seed/42/1200/500")' }}
      />
      
      {/* Dark gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
      
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Premium grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Orange accent glows with animation */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#E8521A]/8 rounded-full blur-[180px] animate-glow-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-[#E8521A]/5 rounded-full blur-[150px] animate-glow-pulse animation-delay-200" />
      
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0A0A0A_70%)]" />

      {/* Content */}
      <div className="relative z-10 w-full text-center pt-16">
        {/* Large Hero Logo — flush under navbar */}
        <div className="mb-4 w-full">
          <Image 
            src="/images/hero-logo.png" 
            alt="Elite Home AV LLC" 
            width={1280}
            height={698}
            className="mx-auto w-full max-w-4xl xl:max-w-6xl h-auto"
            priority
          />
        </div>
        
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#262626] bg-[#141414]/80 backdrop-blur-sm mb-6">
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-[#E8521A]" />
            <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#E8521A] animate-ping" />
          </div>
          <span className="text-sm text-[#9CA3AF] tracking-wide">Lumberton, TX &bull; Serving Southeast Texas</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-bebas text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-tight text-white text-balance">
          Complete Home Technology.
          <br />
          <span className="text-[#E8521A]">Flawlessly Integrated.</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-8 text-lg sm:text-xl lg:text-2xl text-[#9CA3AF] max-w-3xl mx-auto leading-relaxed text-pretty">
          From luxury home theaters to enterprise-grade networking and seamless automation. 
          <span className="text-white font-medium"> Every system is expertly designed, built, and programmed </span> 
          by a single master integrator to work perfectly together.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Button 
            asChild
            size="lg" 
            className="relative bg-[#E8521A] hover:bg-[#d14816] text-white px-10 py-7 text-lg font-semibold tracking-wide group overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(232,82,26,0.4)] rounded-none"
          >
            <a href="tel:4097907889" className="flex items-center gap-3">
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              <Phone className="w-5 h-5" />
              Call Now (409) 790-7889
            </a>
          </Button>
          
          <Button 
            asChild
            variant="outline" 
            size="lg"
            className="border-2 border-white/20 hover:border-white/40 text-white hover:bg-white/5 px-10 py-7 text-lg font-semibold tracking-wide group transition-all duration-300 rounded-none"
          >
            <a href="#services" className="flex items-center gap-3">
              See Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </Button>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-xs text-[#6B7280] uppercase tracking-[0.25em] font-medium">Explore</span>
        <a 
          href="#services" 
          className="w-10 h-10 rounded-full border border-[#262626] flex items-center justify-center hover:border-[#E8521A] hover:bg-[#E8521A]/10 transition-all duration-300 group"
        >
          <ChevronDown className="w-5 h-5 text-[#6B7280] group-hover:text-[#E8521A] animate-bounce" />
        </a>
      </div>
    </section>
  )
}
