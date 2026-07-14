import type { Metadata } from 'next';
import Link from 'next/link';
import { Music, Monitor, Cpu, Wifi, Cable, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = { title: 'AV, Smart Home & Networking Services | Elite Home AV', description: 'Home theater, audio, smart-home, networking, and low-voltage wiring services in Lumberton and Southeast Texas.', alternates: { canonical: 'https://www.elitehomeav.com/services' } };

const services = [
  { icon: Music, title: 'Home Audio', copy: 'Whole-home audio, surround sound, outdoor speakers, and thoughtful equipment placement.' },
  { icon: Monitor, title: 'Home Theater & TV Installation', copy: 'TV mounting, media rooms, projector setups, streaming devices, and clean cable management.' },
  { icon: Cpu, title: 'Smart-Home Integration', copy: 'Practical control for compatible lighting, audio, displays, and connected devices.' },
  { icon: Wifi, title: 'Home Networking', copy: 'Better Wi-Fi coverage, wired connections, access-point placement, and organized network equipment.' },
  { icon: Cable, title: 'Low-Voltage Wiring', copy: 'Structured cabling and pre-wire for AV, networking, cameras, and smart-home systems.' },
];

export default function ServicesPage() {
  return <main className="bg-[#0A0A0A] min-h-screen pt-32 pb-24"><section className="max-w-7xl mx-auto px-6"><div className="max-w-3xl"><p className="text-[#E8521A] text-sm font-semibold tracking-[0.2em] uppercase mb-5">Services</p><h1 className="font-bebas text-6xl sm:text-8xl leading-[.9] text-white">Technology That<br /><span className="text-[#E8521A]">Feels Simple.</span></h1><p className="mt-8 text-xl text-[#9CA3AF] leading-relaxed">We plan and install home technology around your space, your priorities, and a clear scope of work. If your project needs a licensed trade, we&apos;ll say so upfront.</p></div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">{services.map(({ icon: Icon, title, copy }) => <article key={title} className="p-8 bg-[#141414] border border-[#262626]"><Icon className="w-8 h-8 text-[#E8521A] mb-8" /><h2 className="font-bebas text-3xl text-white tracking-wide">{title}</h2><p className="mt-4 text-[#9CA3AF] leading-relaxed">{copy}</p><div className="mt-7 flex items-center gap-2 text-sm text-[#D1D5DB]"><CheckCircle2 className="w-4 h-4 text-[#E8521A]" />Clear scope before work begins</div></article>)}</div>
  </section><section className="max-w-5xl mx-auto px-6 mt-24 text-center"><h2 className="font-bebas text-5xl text-white">Have a Project in Mind?</h2><p className="mt-4 text-[#9CA3AF]">Tell us what you want the room or system to do. We&apos;ll help you define the right next step.</p><Link href="/contact" className="inline-flex mt-8 bg-[#E8521A] hover:bg-[#d14816] text-white px-8 py-4 font-semibold">Request a Consultation</Link></section></main>
}
