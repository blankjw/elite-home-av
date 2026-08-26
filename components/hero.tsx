"use client"

import { Phone, ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-x-hidden bg-[#F4F6F8]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1d120d_0%,#F4F6F8_65%)]" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#3B6D9A]/8 rounded-full blur-[180px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-16 lg:pt-28">
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#D5DAE0] bg-white/80 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#3B6D9A]" />
              <span className="text-sm text-[#64748B] tracking-wide">
                Lumberton, TX • Serving Southeast Texas
              </span>
            </div>
            <h1 className="font-bebas text-[clamp(2.35rem,5.6vw,4.6rem)] leading-[0.9] tracking-tight text-[#1E293B] text-balance">
              Integrated Technology
              <br />
              <span className="text-[#3B6D9A]">For Homes & Businesses.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg lg:text-xl text-[#64748B] max-w-xl mx-auto lg:mx-0 leading-relaxed text-pretty">
              Audio, theater, lighting, surveillance, automation, networking, and access control — thoughtfully designed to work together.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#3B6D9A] hover:bg-[#2F5A80] text-white px-8 py-6 text-lg font-semibold tracking-wide rounded-none"
              >
                <a href="/contact" className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5" />
                  Request a Consultation
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-[#D5DAE0] hover:border-[#3B6D9A] text-[#1E293B] hover:bg-[#E8ECF0] px-8 py-6 text-lg font-semibold tracking-wide rounded-none"
              >
                <a href="tel:4097907889" className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  Call (409) 790-7889
                </a>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl">
              <div className="hero-logo-frame">
                <img
                  src="/images/hero-logo.jpg"
                  alt="Elite Home AV LLC"
                  width={1100}
                  height={1100}
                  className="hero-logo-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#64748B] uppercase tracking-[0.25em] font-medium">Explore</span>
        <span className="w-10 h-10 rounded-full border border-[#D5DAE0] flex items-center justify-center">
          <ChevronDown className="w-5 h-5 text-[#3B6D9A] animate-bounce" />
        </span>
      </a>
    </section>
  )
}
