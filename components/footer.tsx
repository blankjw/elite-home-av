"use client"

import Link from "next/link"
import { BrandLockup } from "@/components/brand-lockup"
import { SiteCta } from "@/components/site-cta"
import { CONTACT } from "@/lib/site"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#31445A]">
      <div className="bg-[#0A1B2E] border-b border-[#31445A]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-bebas text-4xl md:text-5xl tracking-[0.04em] text-white leading-none">
                LET&apos;S TALK ABOUT YOUR SPACE.
              </h2>
              <p className="mt-4 text-[#C3CCD7] max-w-md">
                No pressure — just tell us what you&apos;re working on and we&apos;ll figure out if we&apos;re the right fit.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <SiteCta href="/contact" variant="solid" size="lg">
                  Get in touch
                </SiteCta>
                <SiteCta href={CONTACT.phoneHref} variant="outline" size="lg">
                  {CONTACT.phone}
                </SiteCta>
              </div>
            </div>

            <div className="border border-[#31445A] bg-[#071525] p-8 text-center lg:text-left">
              <p className="text-sm text-[#9BA7B5]">Based in</p>
              <p className="mt-1 text-xl font-medium text-white">{CONTACT.location}</p>
              <p className="mt-4 text-sm text-[#9BA7B5]">Serving {CONTACT.area}</p>
              <a
                href={CONTACT.emailHref}
                className="mt-4 inline-block text-sm text-[#AAB6C5] hover:text-white transition-colors"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-[1.4fr_1fr_1fr] gap-12">
        <div>
          <BrandLockup variant="footer" linked={false} className="items-start" />
          <p className="mt-6 text-sm text-[#9BA7B5] leading-relaxed max-w-sm">
            Integration, connectivity, protection, and ongoing care for homes and businesses in Southeast Texas.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-white mb-4">Capabilities</p>
          <ul className="space-y-2 text-sm text-[#9BA7B5]">
            <li><Link href="/services/networking" className="hover:text-[#AAB6C5] transition-colors">Networking & integration</Link></li>
            <li><Link href="/services/surveillance" className="hover:text-[#AAB6C5] transition-colors">Surveillance & access control</Link></li>
            <li><Link href="/care" className="hover:text-[#AAB6C5] transition-colors">ELITE Care</Link></li>
            <li><Link href="/services/lighting" className="hover:text-[#AAB6C5] transition-colors">Lighting</Link></li>
            <li><Link href="/services/automation" className="hover:text-[#AAB6C5] transition-colors">Automation</Link></li>
            <li><Link href="/services/audio" className="hover:text-[#AAB6C5] transition-colors">Home audio</Link></li>
            <li><Link href="/services/theater" className="hover:text-[#AAB6C5] transition-colors">Home theater</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-white mb-4">Company</p>
          <ul className="space-y-2 text-sm text-[#9BA7B5]">
            <li><Link href="/about" className="hover:text-[#AAB6C5] transition-colors">About</Link></li>
            <li><Link href="/gallery" className="hover:text-[#AAB6C5] transition-colors">Our approach</Link></li>
            <li><Link href="/care" className="hover:text-[#AAB6C5] transition-colors">ELITE Care</Link></li>
            <li><Link href="/contact" className="hover:text-[#AAB6C5] transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#31445A]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-[#9BA7B5]">
          <p>© {currentYear} Elite Home AV LLC. All rights reserved.</p>
          <p>Interior imagery is design inspiration, not client photography.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
