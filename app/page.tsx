import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone, ArrowRight, Music, Monitor, Cpu, Wifi,
  Camera, Shield, Zap, Droplets, HardHat, Palette,
  Star, ChevronRight, CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Elite Home AV | Complete Home Solutions SE Texas',
  description:
    'Home audio, video, automation, security, electrical & more. One company for every trade. Serving Lumberton, Beaumont, Port Arthur & SE Texas. (409) 790-7889.',
  alternates: { canonical: 'https://www.elitehomeav.com' },
};

const services = [
  {
    icon: Music,
    title: 'Home Audio',
    slug: 'audio',
    blurb:
      'Crystal-clear sound in every room. Whole-home audio, outdoor speakers, surround sound, and dedicated listening rooms.',
  },
  {
    icon: Monitor,
    title: 'Home Video',
    slug: 'video',
    blurb:
      'From 4K home theaters to outdoor entertainment screens. Proper screen sizing, projector setups, and clean cable management.',
  },
  {
    icon: Cpu,
    title: 'Home Automation',
    slug: 'automation',
    blurb:
      'Control your entire home from your phone — lights, locks, climate, audio, video, security, and more.',
  },
  {
    icon: Wifi,
    title: 'Networking',
    slug: 'networking',
    blurb:
      'Dead zones are dead to us. Enterprise-grade whole-home Wi-Fi, structured wiring, and network infrastructure.',
  },
  {
    icon: Camera,
    title: 'Surveillance',
    slug: 'surveillance',
    blurb:
      'Professional 4K camera systems with night vision, remote access, and full property coverage.',
  },
  {
    icon: Shield,
    title: 'Security',
    slug: 'security',
    blurb:
      'Full security systems with sensors, alarms, and smart monitoring that give you real peace of mind.',
  },
  {
    icon: Zap,
    title: 'Electrical',
    slug: 'electrical',
    blurb:
      'Panel upgrades to whole-home rewires — safe, clean, and up to code. Every time.',
  },
  {
    icon: Droplets,
    title: 'Plumbing',
    slug: 'plumbing',
    blurb:
      'New construction, remodels, repairs — we run the pipes that make a house livable. Clean work, no surprises.',
  },
  {
    icon: HardHat,
    title: 'Construction & Remodel',
    slug: 'construction',
    blurb:
      'Additions, remodels, media rooms, custom cabinetry, structural work. If it takes a hammer or a blueprint, we\'ve got it.',
  },
  {
    icon: Palette,
    title: 'Design',
    slug: 'design',
    blurb:
      'Before a single wire gets run, we help you see the finished product. Spaces built beautiful, functional, and right.',
  },
];

const differentiators = [
  'One company. Every trade. No subcontractors.',
  'SE Texas born and raised — we know this region.',
  'Fully equipped: TRX + loaded cargo trailer = ready for anything.',
  'From rough construction to AV calibration — all on the same job.',
  'Straight answers on what it takes and what it costs.',
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
          }}
        />
        {/* Orange glow accent */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#E8521A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-[#E8521A]/10 border border-[#E8521A]/30 text-[#E8521A] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-[#E8521A] rounded-full animate-pulse" />
            SE Texas Complete Home Solutions
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight text-white mb-6">
            One Call.
            <br />
            <span className="text-[#E8521A]">Every Trade.</span>
            <br />
            Done Right.
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Elite Home AV is SE Texas&rsquo;s complete home solutions company — audio, video,
            automation, networking, security, electrical, plumbing, construction, and design.
            All under one roof. One number to call.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:4097907889"
              className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              Call Us Now — (409) 790-7889
            </a>
            <Link href="/contact" className="btn-outline text-lg px-8 py-4 w-full sm:w-auto">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Trust signals */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#E8521A]" /> 10 Trades, 1 Company
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#E8521A]" /> Lumberton, TX Based
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#E8521A]" /> All of SE Texas
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#E8521A]" /> No Subcontractors
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 text-xs">
          <span>Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 md:py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">What We Do</p>
            <h2 className="section-heading mb-4">We Do It All — And We Do It Well</h2>
            <div className="divider-orange mx-auto mb-6" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Most contractors do one thing. We do everything your home needs — and we bring
              the same standard of quality to every single job.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services#${service.slug}`}
                  className="group card-dark p-5 hover:border-[#E8521A]/50 hover:bg-[#1a1a1a] transition-all duration-300 flex flex-col gap-3"
                >
                  <div className="w-10 h-10 bg-[#E8521A]/10 rounded-sm flex items-center justify-center group-hover:bg-[#E8521A] transition-colors">
                    <Icon className="w-5 h-5 text-[#E8521A] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-white font-bold text-sm leading-tight group-hover:text-[#E8521A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed flex-1">{service.blurb}</p>
                  <span className="flex items-center gap-1 text-[#E8521A] text-xs font-bold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ChevronRight className="w-3 h-3" />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn-outline-orange">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="py-20 md:py-28 bg-[#0d0d0d] border-y border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <p className="section-label mb-3">About Elite Home AV</p>
              <h2 className="section-heading mb-4">The Guy Who Does It All</h2>
              <div className="divider-orange mb-6" />
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                There&rsquo;s a Ram TRX parked in the driveway. A loaded cargo trailer. And a guy
                who walks in and gets to work — no subcontractors, no runaround, no &ldquo;that&rsquo;s
                not my department.&rdquo;
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Based in Lumberton, TX, we serve homeowners all across Southeast Texas — from
                Beaumont to Port Arthur, Galveston to Toledo Bend, Sam Rayburn to everywhere in
                between. When you call Elite Home AV, you get a multi-trade expert who&rsquo;s done
                this work his whole life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="btn-primary">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:4097907889" className="btn-outline">
                  <Phone className="w-4 h-4" />
                  (409) 790-7889
                </a>
              </div>
            </div>

            {/* Differentiators */}
            <div className="card-dark p-8">
              <h3 className="text-[#E8521A] font-black text-xl mb-6 uppercase tracking-wide">
                Why Elite Home AV?
              </h3>
              <ul className="space-y-4">
                {differentiators.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#E8521A] rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-[#222222]">
                <p className="text-gray-400 text-sm mb-2">Based in Lumberton. Serving all of SE Texas.</p>
                <a
                  href="tel:4097907889"
                  className="text-[#E8521A] font-black text-2xl hover:text-white transition-colors"
                >
                  (409) 790-7889
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Reviews</p>
            <h2 className="section-heading mb-4">What SE Texas Homeowners Are Saying</h2>
            <div className="divider-orange mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card-dark p-6 flex flex-col gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#E8521A] text-[#E8521A]" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic flex-1">
                  &ldquo;[Client review placeholder — replace with real review from Google once live]&rdquo;
                </p>
                <div className="pt-4 border-t border-[#222222]">
                  <p className="text-white font-bold text-sm">— Customer Name</p>
                  <p className="text-gray-500 text-xs">City, TX</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 bg-[#E8521A] relative overflow-hidden">
        {/* Texture overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-4 max-w-xl mx-auto">
            Stop juggling contractors. Stop waiting on callbacks. Stop settling for &ldquo;good enough.&rdquo;
          </p>
          <p className="text-white font-bold text-lg mb-10">
            Elite Home AV handles everything — start to finish, trade to trade.
          </p>
          <a
            href="tel:4097907889"
            className="inline-flex items-center justify-center gap-3 bg-black text-white font-black text-2xl md:text-3xl px-10 py-5 rounded-sm hover:bg-[#0A0A0A] transition-colors"
          >
            <Phone className="w-7 h-7" />
            (409) 790-7889
          </a>
          <p className="text-white/60 text-sm mt-6">
            Lumberton, TX | Serving all of SE Texas | www.elitehomeav.com
          </p>
        </div>
      </section>
    </>
  );
}
