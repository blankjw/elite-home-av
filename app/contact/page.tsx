import type { Metadata } from 'next';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Elite Home AV | (409) 790-7889',
  description:
    'Call or contact Elite Home AV LLC in Lumberton, TX. Serving Beaumont, Port Arthur, Galveston & all of SE Texas. (409) 790-7889 | john@elitehomeav.com',
  alternates: { canonical: 'https://www.elitehomeav.com/contact' },
};

const PHONE = '(409) 790-7889';
const PHONE_HREF = 'tel:4097907889';
const EMAIL = 'john@elitehomeav.com';
const EMAIL_HREF = `mailto:${EMAIL}`;

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#F4F6F8] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-3">Get In Touch</p>
          <h1 className="font-bebas text-5xl md:text-7xl tracking-tight text-[#1E293B] leading-[0.9] mb-4">
            Let&rsquo;s Talk About<br />
            <span className="text-[#3B6D9A]">Your Project</span>
          </h1>
          <div className="divider-orange mx-auto mb-6" />
          <p className="text-[#64748B] text-lg max-w-xl mx-auto mb-10">
            Ready to get started? Call us directly for the fastest response — or fill out
            the form below and we&rsquo;ll be in touch.
          </p>

          {/* Big Phone Number */}
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-3 text-[#3B6D9A] hover:text-[#1E293B] transition-colors group"
          >
            <div className="w-14 h-14 bg-[#3B6D9A] group-hover:bg-[#c44515] rounded-sm flex items-center justify-center transition-colors">
              <Phone className="w-7 h-7 text-[#1E293B]" />
            </div>
            <span className="font-bebas text-4xl md:text-6xl tracking-tight">{PHONE}</span>
          </a>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 md:py-20 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Left: Info + Phone */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-bebas text-3xl tracking-wide text-[#1E293B] mb-6">Contact Info</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#3B6D9A]/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#3B6D9A]" />
                    </div>
                    <div>
                      <p className="text-[#3B6D9A] font-bold text-xs uppercase tracking-widest mb-1">Phone</p>
                      <a
                        href={PHONE_HREF}
                        className="text-[#1E293B] font-black text-xl hover:text-[#3B6D9A] transition-colors"
                      >
                        {PHONE}
                      </a>
                      <p className="text-[#64748B] text-xs mt-0.5">Call or text anytime</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#3B6D9A]/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#3B6D9A]" />
                    </div>
                    <div>
                      <p className="text-[#3B6D9A] font-bold text-xs uppercase tracking-widest mb-1">Website</p>
                      <a
                        href="https://www.elitehomeav.com"
                        className="text-[#1E293B] font-bold hover:text-[#3B6D9A] transition-colors"
                      >
                        www.elitehomeav.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#3B6D9A]/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#3B6D9A]" />
                    </div>
                    <div>
                      <p className="text-[#3B6D9A] font-bold text-xs uppercase tracking-widest mb-1">Email</p>
                      <a
                        href={EMAIL_HREF}
                        className="text-[#1E293B] font-bold hover:text-[#3B6D9A] transition-colors"
                      >
                        {EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#3B6D9A]/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#3B6D9A]" />
                    </div>
                    <div>
                      <p className="text-[#3B6D9A] font-bold text-xs uppercase tracking-widest mb-1">Location</p>
                      <p className="text-[#1E293B] font-bold">Lumberton, TX</p>
                      <p className="text-[#64748B] text-sm">Serving all of Southeast Texas</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#3B6D9A]/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#3B6D9A]" />
                    </div>
                    <div>
                      <p className="text-[#3B6D9A] font-bold text-xs uppercase tracking-widest mb-1">Availability</p>
                      <p className="text-[#1E293B] font-bold">Call or Text Anytime</p>
                      <p className="text-[#64748B] text-sm">We respond fast. No runaround.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="card-dark p-6">
                <h3 className="text-[#1E293B] font-bold text-sm uppercase tracking-widest mb-4">Service Area</h3>
                <div className="flex flex-wrap gap-1.5 text-xs text-[#64748B]">
                  {[
                    'Lumberton', 'Beaumont', 'Port Arthur', 'Galveston',
                    'Toledo Bend', 'Sam Rayburn', 'Nederland', 'Vidor',
                    'Orange', 'Silsbee', 'Jasper', 'Hardin County',
                    'Jefferson County', 'All of SE Texas',
                  ].map((area) => (
                    <span key={area} className="bg-[#1a1a1a] border border-[#222222] px-2 py-1 rounded-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct CTA */}
              <div className="bg-[#3B6D9A] rounded-sm p-6 text-center">
                <p className="text-[#1E293B] font-bold mb-2">Fastest response?</p>
                <p className="text-[#1E293B] text-sm mb-4">Call us directly. We pick up.</p>
                <a
                  href={PHONE_HREF}
                  className="flex items-center justify-center gap-2 bg-black text-[#1E293B] font-black text-lg px-6 py-3 rounded-sm hover:bg-[#F4F6F8] transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {PHONE}
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
