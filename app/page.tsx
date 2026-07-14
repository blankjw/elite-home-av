import { Hero } from "@/components/hero"
import { Services } from "@/components/services"

export default function Home() {
  return <><Hero /><Services /><section className="py-24 bg-[#141414] border-y border-[#262626]"><div className="max-w-6xl mx-auto px-6"><p className="text-[#E8521A] text-sm font-semibold tracking-[0.2em] uppercase text-center">How It Works</p><div className="grid md:grid-cols-3 gap-8 mt-12 text-center">{[['01','Tell Us About the Space','Share what you want the room or system to do.'],['02','Get a Clear Scope','We help define the equipment, installation, and next steps.'],['03','Enjoy the Upgrade','We install thoughtfully and make sure you know how to use it.']].map(([number,title,copy]) => <div key={number}><span className="font-bebas text-5xl text-[#E8521A]">{number}</span><h2 className="mt-4 text-xl font-semibold text-white">{title}</h2><p className="mt-3 text-[#9CA3AF]">{copy}</p></div>)}</div></div></section></>
}
