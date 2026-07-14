import type { Metadata } from 'next';
import Link from 'next/link';
import { Music, Monitor, Lightbulb, Camera, SlidersHorizontal, Network, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = { title: 'Audio, Lighting, Surveillance & Automation | Elite Home AV', description: 'Integrated audio, theater, lighting, surveillance, access control, automation, and networking for homes and businesses in Southeast Texas.', alternates: { canonical: 'https://www.elitehomeav.com/services' } };

const services = [
  { icon: Music, title: 'Home Audio', copy: 'Whole-home audio, surround sound, outdoor speakers, and thoughtful equipment placement.' },
  { icon: Monitor, title: 'Home Theater', copy: 'Media rooms, projector setups, displays, streaming, and clean cable management.' },
  { icon: Lightbulb, title: 'Lighting', copy: 'Lighting control and smart lighting planned around how each space is used.' },
  { icon: Camera, title: 'Surveillance & Access Control', copy: 'Camera systems and access control for visibility, awareness, and simpler entry management.' },
  { icon: SlidersHorizontal, title: 'Automation', copy: 'Straightforward control of compatible lighting, audio, displays, and connected devices.' },
  { icon: Network, title: 'Networking & Integration', copy: 'Wi-Fi, wired connections, network equipment, and the infrastructure that ties every system together.' },
];

export default function ServicesPage() {
  return <main className="bg-[#0A0A0A] min-h-screen pt-32 pb-24"><section className="max-w-7xl mx-auto px-6"><div className="max-w-3xl"><p className="text-[#E8521A] text-sm font-semibold tracking-[0.2em] uppercase mb-5">Residential & Commercial</p><h1 className="font-bebas text-6xl sm:text-8xl leading-[.9] text-white">Technology That<br /><span className="text-[#E8521A]">Feels Simple.</span></h1><p className="mt-8 text-xl text-[#9CA3AF] leading-relaxed">We plan and install integrated technology around your space, your priorities, and how you use it. One clear scope, one system that works together.</p></div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">{services.map(({ icon: Icon, title, copy }) => <article key={title} className="p-8 bg-[#141414] border border-[#262626]"><Icon className="w-8 h-8 text-[#E8521A] mb-8" /><h2 className="font-bebas text-3xl text-white tracking-wide">{title}</h2><p className="mt-4 text-[#9CA3AF] leading-relaxed">{copy}</p><div className="mt-7 flex items-center gap-2 text-sm text-[#D1D5DB]"><CheckCircle2 className="w-4 h-4 text-[#E8521A]" />Clear scope before work begins</div></article>)}</div>
  </section><section className="max-w-5xl mx-auto px-6 mt-24 text-center"><h2 className="font-bebas text-5xl text-white">Have a Project in Mind?</h2><p className="mt-4 text-[#9CA3AF]">Tell us what you want the room or system to do. We&apos;ll help you define the right next step.</p><Link href="/contact" className="inline-flex mt-8 bg-[#E8521A] hover:bg-[#d14816] text-white px-8 py-4 font-semibold">Request a Consultation</Link></section></main>
}
