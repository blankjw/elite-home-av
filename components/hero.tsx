import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import { PHONE_HREF } from "@/lib/site"

export function Hero() {
  return (
    <section className="relative mt-24 h-[calc(100svh-6rem)] min-h-[28rem] w-full overflow-hidden bg-[#1E293B]">
      <Image
        src="/images/hero-living-room.jpg"
        alt="Modern residential living room"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={80}
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 h-full flex items-end">
        <div className="w-full max-w-7xl mx-auto px-6 pb-10 sm:pb-14 lg:pb-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-12 h-[3px] shrink-0 bg-[#8BB4D0]" aria-hidden="true" />
            <p className="text-white/90 text-xs sm:text-sm font-semibold tracking-[0.28em] uppercase">
              Southeast Texas
            </p>
          </div>

          <h1 className="font-bebas text-white text-[clamp(2.75rem,8vw,6.75rem)] leading-[0.88] tracking-tight max-w-4xl">
            Integrated Technology
            <br />
            For Homes &amp; Businesses.
          </h1>

          <p className="mt-5 text-base sm:text-lg lg:text-xl text-white/85 max-w-xl leading-relaxed">
            Professional AV, lighting control, and automation designed for your lifestyle.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#3B6D9A] hover:bg-[#2F5A80] text-white px-8 py-4 text-base sm:text-lg font-semibold tracking-wide rounded-none transition-colors"
            >
              Request Consultation
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-base sm:text-lg font-semibold tracking-wide rounded-none transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
