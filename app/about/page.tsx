import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone, MapPin, CheckCircle2, ArrowRight, Music, Monitor,
  Cpu, Wifi, Camera, Shield, Zap, Droplets, HardHat, Palette,
  Truck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Elite Home AV | Lumberton, TX',
  description:
    'Multi-trade home AV expert based in Lumberton TX. Audio, automation, security, electrical, plumbing & construction. Serving all of SE Texas.',
  alternates: { canonical: 'https://www.elitehomeav.com/about' },
};

const PHONE = '(409) 790-7889';
const PHONE_HREF = 'tel:4097907889';

const trades = [
  { icon: Music, name: 'Home Audio', slug: 'audio', desc: 'Whole-home systems, outdoor speakers, listening rooms, surround sound' },
  { icon: Monitor, name: 'Home Video', slug: 'video', desc: 'Theaters, outdoor entertainment, projector rooms, 4K installs' },
  { icon: Cpu, name: 'Home Automation', slug: 'automation', desc: 'Smart home systems that actually work the way they\'re supposed to' },
  { icon: Wifi, name: 'Networking', slug: 'networking', desc: 'Structured wiring, whole-home Wi-Fi, enterprise-grade infrastructure' },
  { icon: Camera, name: 'Surveillance', slug: 'surveillance', desc: '4K camera systems, night vision, remote access, full property coverage' },
  { icon: Shield, name: 'Security', slug: 'security', desc: 'Door/window sensors, motion detection, smart locks, full system integration' },
  { icon: Zap, name: 'Electrical', slug: 'electrical', desc: 'Panel upgrades, circuit additions, rewires, smart lighting wiring' },
  { icon: Droplets, name: 'Plumbing', slug: 'plumbing', desc: 'New construction rough-in, remodel plumbing, fixture installation' },
  { icon: HardHat, name: 'Construction & Remodel', slug: 'construction', desc: 'Additions, theater room buildouts, full home renovations' },
  { icon: Palette, name: 'Design', slug: 'design', desc: 'Pre-project planning, room design, system layout, AV specification' },
];

const serviceAreas = [
  { city: 'Lumberton', note: '(Home Base)' },
  { city: 'Beaumont', note: '' },
  { city: 'Port Arthur', note: '' },
  { city: 'Galveston', note: '' },
  { city: 'Toledo Bend', note: '' },
  { city: 'Sam Rayburn', note: '' },
  { city: 'Nederland', note: '' },
  { city: 'Vidor', note: '' },
  { city: 'Orange', note: '' },
  { city: 'Silsbee', note: '' },
  { city: 'Jasper', note: '' },
  { city: 'Hardin County', note: '' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0A0A0A] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-3">About</p>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
                Master-Level Integration.
                <br />
                <span className="text-[#E8521A]">Uncompromising</span>
                <br />
                Quality.
              </h1>
              <div className="divider-orange mb-6" />
              <p className="text-gray-400 text-lg leading-relaxed">
                True home automation and luxury AV requires an obsessive attention to detail. 
                When you hire Elite Home AV, you are working directly with the master integrator 
                who will design, engineer, install, and program every piece of your system. 
                Complete accountability, flawless execution.
              </p>
            </div>

            {/* TRX Card */}
            <div className="card-dark p-8 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#E8521A] rounded-sm flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-white font-black text-2xl">John Blank</h2>
                  <p className="text-[#E8521A] font-bold text-sm uppercase tracking-widest">
                    Owner — Elite Home AV LLC
                  </p>
                </div>
              </div>
              <div className="border-t border-[#222222] pt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-[#E8521A] flex-shrink-0" />
                  Lumberton, TX — Serving all of SE Texas
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-[#E8521A] flex-shrink-0" />
                  Deep multi-trade expertise
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-[#E8521A] flex-shrink-0" />
                  End-to-end custom system design
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-[#E8521A] flex-shrink-0" />
                  Single-point accountability
                </div>
              </div>
              <a href={PHONE_HREF} className="btn-primary w-full justify-center mt-2">
                <Phone className="w-4 h-4" />
                Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Bio */}
      <section className="py-20 md:py-24 bg-[#0d0d0d] border-b border-[#222222]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                From Lumberton to All of SE Texas
              </h2>
              <div className="divider-orange mb-6" />
              <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
                <p>
                  I&rsquo;m based in Lumberton, Texas — Southeast Texas born and raised. I grew up
                  doing this kind of work and spent years developing skills across trades that most
                  people split between four or five different contractors. Home AV. Automation.
                  Networking. Surveillance. Security. Electrical. Plumbing. Construction and remodel. Design.
                </p>
                <p>
                  I do all of it. And I do it all at the same level of quality, because it all has
                  to work together.
                </p>
                <p>
                  When your smart home lighting talks to your security system, your security system
                  talks to your cameras, and your cameras are on a network I built from scratch —
                  every piece fits because the same guy planned it. There&rsquo;s no version where
                  one contractor&rsquo;s work doesn&rsquo;t line up with another&rsquo;s. I designed
                  it, I ran the wire, I built the room, I programmed the system.
                </p>
                <p className="text-[#E8521A] font-black text-xl">That&rsquo;s the difference.</p>
              </div>
            </div>

            {/* Expertise / Tools Section */}
            <div className="card-dark p-6 md:p-8 border-l-4 border-[#E8521A]">
              <h3 className="text-white font-black text-xl mb-4">The Precision Required for Perfection</h3>
              <p className="text-gray-300 leading-relaxed">
                High-end integration isn't just about plugging things in. It requires exact precision 
                at every phase, from rough-in wiring to final audio calibration. I bring an uncompromising 
                standard to the tools and techniques used on your project.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Whether it's acoustic measurement gear for a luxury theater, specialized termination tools 
                for enterprise fiber, or the necessary equipment for custom millwork, the job is done 
                flawlessly, strictly adhering to industry best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trades Grid */}
      <section className="py-20 md:py-24 bg-[#0A0A0A] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">What I Do</p>
            <h2 className="section-heading mb-4">Comprehensive Expertise.</h2>
            <div className="divider-orange mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {trades.map((trade) => {
              const Icon = trade.icon;
              return (
                <Link
                  key={trade.name}
                  href={`/services#${trade.slug}`}
                  className="group card-dark p-5 hover:border-[#E8521A]/50 transition-all duration-300"
                >
                  <div className="w-9 h-9 bg-[#E8521A]/10 rounded-sm flex items-center justify-center mb-3 group-hover:bg-[#E8521A] transition-colors">
                    <Icon className="w-4 h-4 text-[#E8521A] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-1 group-hover:text-[#E8521A] transition-colors">
                    {trade.name}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{trade.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 md:py-24 bg-[#0d0d0d] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-3">Where I Work</p>
              <h2 className="section-heading mb-4">All of Southeast Texas</h2>
              <div className="divider-orange mb-6" />
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                I serve all of Southeast Texas — and I mean all of it. From my home base in
                Lumberton to the coast at Galveston, the lakes at Toledo Bend and Sam Rayburn,
                and everywhere in between.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Jefferson County, Hardin County, the lake communities, the coast — if you&rsquo;re
                in SE Texas and you need the work done right, I&rsquo;ll be there.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <div
                    key={area.city}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-sm text-sm font-semibold ${
                      area.note
                        ? 'bg-[#E8521A] text-white'
                        : 'card-dark text-gray-300 hover:border-[#E8521A]/40 hover:text-white transition-colors'
                    }`}
                  >
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    {area.city}
                    {area.note && <span className="text-white/70 text-xs font-normal">{area.note}</span>}
                  </div>
                ))}
                <div className="card-dark text-gray-500 text-sm px-3 py-2 rounded-sm italic">
                  + everywhere in between
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#E8521A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-4xl md:text-5xl font-black mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-white/80 text-lg mb-2">
            Call me. Tell me what you&rsquo;re trying to build.
          </p>
          <p className="text-white font-bold mb-8">
            I&rsquo;ll give you a straight answer on what it takes and what it costs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-3 bg-black text-white font-black text-2xl px-10 py-5 rounded-sm hover:bg-[#0A0A0A] transition-colors w-full sm:w-auto justify-center"
            >
              <Phone className="w-6 h-6" />
              {PHONE}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-5 rounded-sm hover:bg-white hover:text-black transition-colors w-full sm:w-auto justify-center text-lg"
            >
              Contact Form
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
