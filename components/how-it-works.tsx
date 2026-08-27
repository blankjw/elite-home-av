const steps = [
  {
    number: "01",
    title: "Tell Us About the Space",
    copy: "Share what you want the room or system to do.",
  },
  {
    number: "02",
    title: "Get a Clear Scope",
    copy: "We define equipment, installation, and next steps.",
  },
  {
    number: "03",
    title: "Enjoy the Upgrade",
    copy: "We install thoughtfully and make sure you're trained.",
  },
] as const

export function HowItWorks() {
  return (
    <section className="py-24 sm:py-32 bg-white border-y border-[#D5DAE0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-[#3B6D9A] text-sm font-semibold tracking-[0.2em] uppercase">
            Our Process
          </p>
          <h2 className="mt-4 font-bebas text-5xl sm:text-6xl md:text-7xl tracking-tight text-[#1E293B] leading-[0.9]">
            How It Works
          </h2>
        </div>

        <ol className="grid md:grid-cols-3 gap-12 md:gap-10">
          {steps.map((step) => (
            <li key={step.number} className="text-center">
              <span className="font-bebas text-6xl sm:text-7xl text-[#D5DAE0] leading-none">
                {step.number}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-[#1E293B]">{step.title}</h3>
              <p className="mt-3 text-[#64748B] leading-relaxed">{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
