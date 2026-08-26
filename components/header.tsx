"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"
import { NAV_LINKS, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-white/95 backdrop-blur-md border-b border-[#D5DAE0]">
      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full gap-4">
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 min-w-0"
            aria-label="Elite Home AV"
          >
            <Image
              src="/images/logo-mark-light.png"
              alt=""
              width={595}
              height={560}
              className="h-11 w-auto"
            />
            <span className="font-bebas text-[1.35rem] sm:text-[1.65rem] leading-none tracking-[0.12em] sm:tracking-[0.14em] text-[#1E293B] whitespace-nowrap">
              ELITE HOME AV
            </span>
          </Link>

          <nav className="hidden lg:block" aria-label="Primary">
            <ul className="flex items-center gap-10">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="relative text-sm text-[#64748B] hover:text-[#1E293B] transition-colors duration-300 tracking-wide group"
                  >
                    {label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#3B6D9A] group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-3 text-[#1E293B] hover:text-[#3B6D9A] transition-colors duration-300 group"
            >
              <span className="w-10 h-10 border border-[#D5DAE0] group-hover:border-[#3B6D9A] group-hover:bg-[#3B6D9A]/10 flex items-center justify-center transition-all duration-300">
                <Phone className="w-4 h-4" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs text-[#64748B] tracking-wide">Call Now</span>
                <span className="text-sm font-semibold tracking-wide">{PHONE_DISPLAY}</span>
              </span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#3B6D9A] hover:bg-[#2F5A80] text-white px-6 py-2.5 text-sm font-semibold tracking-wide rounded-none transition-colors"
            >
              Request Consult
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="lg:hidden w-12 h-12 flex items-center justify-center text-[#1E293B] border border-[#D5DAE0] hover:border-[#3B6D9A] transition-colors duration-300"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <div
          id="mobile-nav"
          className={`lg:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-[#D5DAE0] overflow-hidden transition-[max-height,opacity] duration-300 ${
            isMenuOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col p-6 gap-1" aria-label="Mobile">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="py-4 text-lg text-[#64748B] hover:text-[#1E293B] border-b border-[#D5DAE0]"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <a
              href={PHONE_HREF}
              className="mt-4 flex items-center gap-3 py-4 text-[#3B6D9A]"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg font-semibold">{PHONE_DISPLAY}</span>
            </a>
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center bg-[#3B6D9A] hover:bg-[#2F5A80] text-white px-6 py-3 text-sm font-semibold tracking-wide rounded-none"
              onClick={() => setIsMenuOpen(false)}
            >
              Request Consult
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
