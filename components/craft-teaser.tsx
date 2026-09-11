import Link from "next/link"
import { ScenePanel } from "@/components/scene-panel"
import { SiteCta } from "@/components/site-cta"

export function CraftTeaser() {
  return (
    <section className="border-y border-[#31445A] bg-[#081827]">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          <Link href="/gallery" className="lg:col-span-7 group hover-lift grid grid-cols-5 gap-3 min-h-[20rem]">
            <ScenePanel
              variant="theater"
              className="col-span-3 row-span-2 min-h-full group-hover:border-[#AAB6C5]/30 transition-colors"
            />
            <ScenePanel
              variant="rack"
              className="col-span-2 min-h-[9rem] group-hover:border-[#AAB6C5]/30 transition-colors"
            />
            <ScenePanel
              variant="lighting"
              className="col-span-2 min-h-[9rem] group-hover:border-[#AAB6C5]/30 transition-colors"
            />
          </Link>

          <div className="lg:col-span-5 flex flex-col justify-between gap-8 border border-[#31445A] bg-[#0A1B2E] p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#AAB6C5]/10 blur-3xl pointer-events-none" />
            <div className="relative">
              <p className="eyebrow mb-4">Our work</p>
              <h2 className="section-title text-2xl md:text-3xl">Project gallery coming soon.</h2>
              <p className="mt-4 text-sm text-[#C3CCD7] leading-relaxed">
                Real Southeast Texas installs — finished rooms, racks, and the work behind the walls. We&apos;re building it now.
              </p>
            </div>
            <SiteCta href="/gallery" variant="solid">
              Check gallery status
            </SiteCta>
          </div>
        </div>
      </div>
    </section>
  )
}
