"use client"

import { useState, useEffect } from "react"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[#262626]/50 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo Text */}
          <a href="/" className="flex items-center group">
            <span className="font-bebas text-xl sm:text-2xl tracking-[0.1em] text-white">
              ELITE HOME AV <span className="text-[#E8521A]">LLC</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {[["Services", "/services"], ["Gallery", "/gallery"], ["About", "/about"], ["Contact", "/contact"]].map(([label, href]) => (
              <a 
                key={label}
                href={href} 
                className="relative text-sm text-[#9CA3AF] hover:text-white transition-colors duration-300 tracking-wide group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#E8521A] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="tel:4097907889" 
              className="flex items-center gap-3 text-white hover:text-[#E8521A] transition-colors duration-300 group"
            >
              <div className="w-10 h-10 rounded-full border border-[#262626] group-hover:border-[#E8521A] group-hover:bg-[#E8521A]/10 flex items-center justify-center transition-all duration-300">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-[#6B7280] tracking-wide">Call Now</span>
                <span className="text-sm font-semibold tracking-wide">(409) 790-7889</span>
              </div>
            </a>
            
            <Button 
              asChild
              className="bg-[#E8521A] hover:bg-[#d14816] text-white px-6 py-2.5 text-sm font-semibold tracking-wide rounded-none"
            >
              <a href="#contact">Get Quote</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-12 h-12 flex items-center justify-center text-white border border-[#262626] hover:border-[#E8521A] transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-[#0A0A0A]/98 backdrop-blur-xl border-b border-[#262626] overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col p-6 gap-1">
            {[["Services", "/services"], ["Gallery", "/gallery"], ["About", "/about"], ["Contact", "/contact"]].map(([label, href], index) => (
              <a 
                key={label}
                href={href} 
                className="py-4 text-lg text-[#9CA3AF] hover:text-white hover:pl-4 transition-all duration-300 border-b border-[#262626]/50"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a 
              href="tel:4097907889" 
              className="mt-4 flex items-center gap-3 py-4 text-[#E8521A]"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg font-semibold">(409) 790-7889</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
