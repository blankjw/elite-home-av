import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react"
import { EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site"

const SERVICE_LINKS = [
  { label: "Home Audio", href: "/services#audio" },
  { label: "Home Theater", href: "/services#theater" },
  { label: "Lighting", href: "/services#lighting" },
  { label: "Surveillance & Access", href: "/services#surveillance" },
  { label: "Automation", href: "/services#automation" },
  { label: "Networking & Integration", href: "/services#networking" },
] as const

export function Footer() {
  return (
    <footer className="relative bg-[#F4F6F8] overflow-hidden">
      <div className="relative py-24 sm:py-28 border-t border-[#D5DAE0]">
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#1E293B] leading-[0.9] text-balance">
            Ready to Elevate
            <br />
            Your Environment?
          </h2>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-3 bg-[#3B6D9A] hover:bg-[#2F5A80] text-white px-10 py-5 text-lg font-semibold tracking-wide rounded-none transition-colors"
            >
              <Phone className="w-5 h-5" />
              {PHONE_DISPLAY}
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 border-2 border-[#D5DAE0] hover:border-[#3B6D9A] text-[#1E293B] hover:bg-[#E8ECF0] px-10 py-5 text-lg font-semibold tracking-wide rounded-none transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-[#D5DAE0]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <div className="lg:col-span-2">
              <Link
                href="/"
                className="inline-flex items-center gap-3 mb-6"
                aria-label="Elite Home AV"
              >
                <Image
                  src="/images/logo.png"
                  alt=""
                  width={595}
                  height={560}
                  className="h-12 w-auto"
                />
                <span className="font-bebas text-[1.65rem] leading-none tracking-[0.14em] text-[#1E293B]">
                  ELITE HOME AV
                </span>
              </Link>
              <p className="text-[#64748B] max-w-md leading-relaxed mb-8">
                Integrated audio, theater, lighting, surveillance, automation, networking, and access control for Southeast Texas homes and businesses.
              </p>

              <div className="space-y-4">
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-4 text-[#64748B] hover:text-[#3B6D9A] transition-colors group"
                >
                  <span className="w-10 h-10 border border-[#D5DAE0] group-hover:border-[#3B6D9A] flex items-center justify-center transition-colors">
                    <Phone className="w-4 h-4" />
                  </span>
                  <span className="font-medium">{PHONE_DISPLAY}</span>
                </a>
                <a
                  href={EMAIL_HREF}
                  className="flex items-center gap-4 text-[#64748B] hover:text-[#3B6D9A] transition-colors group"
                >
                  <span className="w-10 h-10 border border-[#D5DAE0] group-hover:border-[#3B6D9A] flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4" />
                  </span>
                  <span className="font-medium">{EMAIL}</span>
                </a>
                <div className="flex items-center gap-4 text-[#64748B]">
                  <span className="w-10 h-10 border border-[#D5DAE0] flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <span className="font-medium">Lumberton, TX 77657</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bebas text-xl tracking-wide text-[#1E293B] mb-6">Services</h3>
              <ul className="space-y-3 text-sm text-[#64748B]">
                {SERVICE_LINKS.map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="hover:text-[#3B6D9A] transition-colors inline-flex items-center gap-2 group"
                    >
                      {service.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bebas text-xl tracking-wide text-[#1E293B] mb-6">Company</h3>
              <ul className="space-y-3 text-sm text-[#64748B]">
                <li>
                  <Link href="/about" className="hover:text-[#3B6D9A] transition-colors inline-flex items-center gap-2">
                    About Us
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-[#3B6D9A] transition-colors inline-flex items-center gap-2">
                    Our Work
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#3B6D9A] transition-colors inline-flex items-center gap-2">
                    Contact
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#D5DAE0]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#64748B]">
            © 2026 Elite Home AV LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-[#64748B]">
            <Link href="/privacy" className="hover:text-[#1E293B] transition-colors">
              Privacy Policy
            </Link>
            <span className="w-1 h-1 rounded-full bg-[#D5DAE0]" />
            <Link href="/terms" className="hover:text-[#1E293B] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
