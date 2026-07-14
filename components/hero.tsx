"use client"

import { Phone, ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1d120d_0%,#0A0A0A_65%)]" />
    <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#E8521A]/8 rounded-full blur-[180px]" />
    <div className="relative z-10 w-full text-center pt-16">
      <div className="mb-4 w-full"><Image src="/images/hero-logo.png" alt="Elite Home AV LLC" width={1280} height={698} className="mx-auto w-full max-w-4xl xl:max-w-6xl h-auto" priority /></div>
      <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#262626] bg-[#141414]/80 mb-6"><span className="w-2 h-2 rounded-full bg-[#E8521A]" /><span className="text-sm text-[#9CA3AF] tracking-wide">Lumberton, TX • Serving Southeast Texas</span></div>
      <h1 className="font-bebas text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-tight text-white text-balance">Home Theater, Smart Home<br /><span className="text-[#E8521A]">& Low-Voltage Installation.</span></h1>
      <p className="mt-8 text-lg sm:text-xl lg:text-2xl text-[#9CA3AF] max-w-3xl mx-auto leading-relaxed text-pretty">Clean installs, dependable Wi-Fi, whole-home audio, and home theater systems — designed around how you actually live.</p>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
        <Button asChild size="lg" className="bg-[#E8521A] hover:bg-[#d14816] text-white px-10 py-7 text-lg font-semibold tracking-wide rounded-none"><a href="/contact" className="flex items-center gap-3"><ArrowRight className="w-5 h-5" />Request a Consultation</a></Button>
        <Button asChild variant="outline" size="lg" className="border-2 border-white/20 hover:border-white/40 text-white hover:bg-white/5 px-10 py-7 text-lg font-semibold tracking-wide rounded-none"><a href="tel:4097907889" className="flex items-center gap-3"><Phone className="w-5 h-5" />Call (409) 790-7889</a></Button>
      </div>
    </div>
    <a href="#services" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"><span className="text-xs text-[#6B7280] uppercase tracking-[0.25em] font-medium">Explore</span><span className="w-10 h-10 rounded-full border border-[#262626] flex items-center justify-center"><ChevronDown className="w-5 h-5 text-[#E8521A] animate-bounce" /></span></a>
  </section>
}
