"use client"

import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="relative bg-[#F4F6F8] overflow-hidden">
      {/* CTA Section */}
      <div className="relative py-24 sm:py-32 border-t border-[#D5DAE0]">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#3B6D9A]/5 rounded-full blur-[150px]" />
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#D5DAE0] bg-white text-sm text-[#64748B] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#3B6D9A] animate-pulse" />
            Ready to Start Your Project?
          </span>
          
          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#1E293B] leading-[0.9] text-balance">
            Ready to Elevate Your
            <br />
            <span className="text-[#3B6D9A]">Home?</span>
          </h2>
          
          <p className="mt-8 text-lg sm:text-xl text-[#64748B] max-w-2xl mx-auto">
            Call today to schedule a consultation and discuss your vision.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button 
              asChild
              size="lg" 
              className="bg-[#3B6D9A] hover:bg-[#2F5A80] text-white px-10 py-7 text-lg font-semibold tracking-wide rounded-none group"
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
              className="border-2 border-[#D5DAE0] hover:border-[#3B6D9A] text-white hover:bg-[#3B6D9A]/5 px-10 py-7 text-lg font-semibold tracking-wide rounded-none group"
            >
              <a href="mailto:john@elitehomeav.com" className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-[#D5DAE0]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="/" className="inline-flex items-center mb-6" aria-label="Elite Home AV">
                <img
                  src="/images/logo.png"
                  alt="Elite Home AV"
                  width={112}
                  height={110}
                  className="h-12 w-auto"
                />
              </a>
              <p className="text-[#64748B] max-w-md leading-relaxed mb-8">
                Integrated audio, theater, lighting, surveillance, automation, networking, and access control for Southeast Texas homes and businesses.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <a href="tel:4097907889" className="flex items-center gap-4 text-[#64748B] hover:text-[#3B6D9A] transition-colors group">
                  <div className="w-10 h-10 border border-[#D5DAE0] group-hover:border-[#3B6D9A] flex items-center justify-center transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-medium">(409) 790-7889</span>
                </a>
                <a href="mailto:john@elitehomeav.com" className="flex items-center gap-4 text-[#64748B] hover:text-[#3B6D9A] transition-colors group">
                  <div className="w-10 h-10 border border-[#D5DAE0] group-hover:border-[#3B6D9A] flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-medium">john@elitehomeav.com</span>
                </a>
                <div className="flex items-center gap-4 text-[#64748B]">
                  <div className="w-10 h-10 border border-[#D5DAE0] flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Lumberton, TX 77657</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bebas text-xl tracking-wide text-[#1E293B] mb-6">Services</h3>
              <ul className="space-y-3 text-sm text-[#64748B]">
                {["Home Audio", "Home Theater", "Lighting", "Surveillance & Access", "Automation", "Networking & Integration"].map((service) => (
                  <li key={service}>
                    <a href="/services" className="hover:text-[#3B6D9A] transition-colors inline-flex items-center gap-2 group">
                      {service}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bebas text-xl tracking-wide text-[#1E293B] mb-6">Company</h3>
              <ul className="space-y-3 text-sm text-[#64748B]">
                <li><a href="/about" className="hover:text-[#3B6D9A] transition-colors inline-flex items-center gap-2 group">About Us<ArrowUpRight className="w-3 h-3" /></a></li>
                <li><a href="/gallery" className="hover:text-[#3B6D9A] transition-colors inline-flex items-center gap-2 group">Our Work<ArrowUpRight className="w-3 h-3" /></a></li>
                <li><a href="/contact" className="hover:text-[#3B6D9A] transition-colors inline-flex items-center gap-2 group">Contact<ArrowUpRight className="w-3 h-3" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#D5DAE0]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#64748B]">
            © {currentYear} Elite Home AV LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-[#64748B]">
            <a href="/privacy" className="hover:text-[#1E293B] transition-colors">Privacy Policy</a>
            <span className="w-1 h-1 rounded-full bg-[#262626]" />
            <a href="/terms" className="hover:text-[#1E293B] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
