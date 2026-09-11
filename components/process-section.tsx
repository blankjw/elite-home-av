import { SiteCta } from "@/components/site-cta"
import { CONTACT } from "@/lib/site"

const steps = [
  { title: "Tell us about the space", copy: "What should it do?" },
  { title: "Get a clear scope", copy: "Defined before anything gets mounted." },
  { title: "Use the finished system", copy: "Clean install and a real walkthrough." },
] as const

export function ProcessSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-sm border border-[#31445A] bg-[#0A1B2E] p-8 md:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="lg:max-w-md">
            <p className="eyebrow mb-3">How it works</p>
            <h2 className="section-title text-2xl md:text-3xl">Three steps. Then you&apos;re done bothering with it.</h2>
            <div className="mt-7">
              <SiteCta href="/contact" variant="solid">
                Start with a conversation
              </SiteCta>
            </div>
          </div>

          <ol className="mt-10 lg:mt-0 flex-1 grid sm:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <li key={step.title} className="border-t border-[#31445A] sm:border-t-0 sm:border-l sm:pl-6 first:sm:pl-0 first:sm:border-l-0 pt-6 sm:pt-0">
                <p className="text-[#AAB6C5] text-sm font-semibold tabular-nums mb-3">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-medium text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-[#9BA7B5]">{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-8 text-center text-sm text-[#9BA7B5]">
          Questions?{" "}
          <a href={CONTACT.phoneHref} className="text-white hover:text-[#AAB6C5] transition-colors">
            Call {CONTACT.phone}
          </a>
        </p>
      </div>
    </section>
  )
}
