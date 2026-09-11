export function ConceptualStills() {
  return (
    <section className="bg-[#0B1526] px-6 py-20 text-[#F7F9FC] md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#B8C3CF]">Conceptual architectural studies</p>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.02] tracking-[-0.045em] md:text-6xl">The room should not advertise the system.</h2>
        <p className="mt-6 max-w-xl text-sm leading-6 text-[#B8C3CF]">Illustrative stills only. Not a client residence, installed project, or evidence of completed work.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <figure className="overflow-hidden border border-[#B8C3CF]/30">
            <img src="/images/concepts/concealed-keypad-dusk.png" alt="Conceptual dusk interior with a flush keypad on plaster" className="h-full w-full object-cover" />
            <figcaption className="px-4 py-3 text-[10px] uppercase tracking-[0.18em] text-[#B8C3CF]">Conceptual · concealed control</figcaption>
          </figure>
          <figure className="overflow-hidden border border-[#B8C3CF]/30">
            <img src="/images/concepts/circadian-living-dusk.png" alt="Conceptual dusk living space with circadian architectural lighting" className="h-full w-full object-cover" />
            <figcaption className="px-4 py-3 text-[10px] uppercase tracking-[0.18em] text-[#B8C3CF]">Conceptual · circadian living</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
