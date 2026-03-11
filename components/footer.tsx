"use client"

import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="relative bg-[#0A0A0A] overflow-hidden">
      {/* CTA Section */}
      <div className="relative py-24 sm:py-32 border-t border-[#1F1F1F]">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E8521A]/5 rounded-full blur-[150px]" />
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#262626] bg-[#141414]/50 text-sm text-[#9CA3AF] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E8521A] animate-pulse" />
            Ready to Start Your Project?
          </span>
          
          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[0.9] text-balance">
            Ready to Elevate Your
            <br />
            <span className="text-[#E8521A]">Home?</span>
          </h2>
          
          <p className="mt-8 text-lg sm:text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            Call today to schedule a consultation and discuss your vision.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button 
              asChild
              size="lg" 
              className="bg-[#E8521A] hover:bg-[#d14816] text-white px-10 py-7 text-lg font-semibold tracking-wide rounded-none group"
            >
              <a href="tel:4097907889" className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                (409) 790-7889
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-2 border-[#262626] hover:border-[#E8521A] text-white hover:bg-[#E8521A]/5 px-10 py-7 text-lg font-semibold tracking-wide rounded-none group"
            >
              <a href="mailto:info@elitehomeav.com" className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="/" className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#E8521A] flex items-center justify-center">
                  <span className="font-bebas text-2xl text-white tracking-wide">E</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bebas text-2xl tracking-[0.15em] text-white leading-none">ELITE HOME AV</span>
                  <span className="text-[9px] tracking-[0.3em] text-[#6B7280] uppercase">Limited Liability Company</span>
                </div>
              </a>
              <p className="text-[#6B7280] max-w-md leading-relaxed mb-8">
                Southeast Texas&apos;s premier home services company. From audio/video to full remodels, 
                we handle every trade in-house with premium craftsmanship.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <a href="tel:4097907889" className="flex items-center gap-4 text-[#9CA3AF] hover:text-[#E8521A] transition-colors group">
                  <div className="w-10 h-10 border border-[#262626] group-hover:border-[#E8521A] flex items-center justify-center transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-medium">(409) 790-7889</span>
                </a>
                <a href="mailto:info@elitehomeav.com" className="flex items-center gap-4 text-[#9CA3AF] hover:text-[#E8521A] transition-colors group">
                  <div className="w-10 h-10 border border-[#262626] group-hover:border-[#E8521A] flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-medium">info@elitehomeav.com</span>
                </a>
                <div className="flex items-center gap-4 text-[#9CA3AF]">
                  <div className="w-10 h-10 border border-[#262626] flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Lumberton, TX 77657</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bebas text-xl tracking-wide text-white mb-6">Services</h3>
              <ul className="space-y-3 text-sm text-[#6B7280]">
                {["Home Audio", "Home Video", "Home Automation", "Networking", "Surveillance", "Security", "Electrical", "Plumbing", "Construction", "Design"].map((service) => (
                  <li key={service}>
                    <a href="#services" className="hover:text-[#E8521A] transition-colors inline-flex items-center gap-2 group">
                      {service}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bebas text-xl tracking-wide text-white mb-6">Company</h3>
              <ul className="space-y-3 text-sm text-[#6B7280]">
                {["About Us", "Our Projects", "Testimonials", "Service Areas", "Careers", "Contact"].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-[#E8521A] transition-colors inline-flex items-center gap-2 group">
                      {link}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#6B7280]">
            © {currentYear} Elite Home AV LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-[#6B7280]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="w-1 h-1 rounded-full bg-[#262626]" />
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="w-1 h-1 rounded-full bg-[#262626]" />
            <a href="#" className="hover:text-white transition-colors">Licenses</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
