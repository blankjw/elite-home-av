import Link from "next/link"
import { SiteCta } from "@/components/site-cta"
import type { SOLUTIONS } from "@/lib/solutions"

type Solution = (typeof SOLUTIONS)[number]

export function SolutionDetail({ solution }: { solution: Solution }) {
  return (
    <article className="min-h-screen">
      <section className="relative min-h-[min(72svh,720px)] overflow-hidden pt-28">
        <img src={solution.image} alt={solution.imageLabel} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05111ee6] via-[#05111ecc] to-[#05111e33]" />
        <div className="relative mx-auto flex min-h-[min(72svh,720px)] max-w-7xl flex-col justify-end px-6 pb-14 pt-16 md:px-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E2C68D]">Solutions</p>
          <h1 className="mt-4 max-w-xl font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.08] tracking-[-0.04em] text-white">{solution.title}</h1>
          <p className="mt-4 max-w-md text-sm leading-7 text-[#E0E5E9]">{solution.summary}</p>
          <p className="mt-6 text-[10px] uppercase tracking-[0.16em] text-[#B8C3CF]">{solution.imageLabel}</p>
        </div>
      </section>

      <section className="bg-[#F7F9FC] px-6 py-16 text-[#0B1526] md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#526274]">What this is for</p>
            <p className="mt-4 max-w-md text-base leading-7 text-[#405165]">{solution.body}</p>
          </div>
          <ul className="space-y-4 text-sm leading-6 text-[#405165]">
            {solution.outcomes.map((item) => (
              <li key={item} className="border-t border-[#AAB6C5] pt-4">{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#0B1526] px-6 py-16 text-white md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <article>
            <p className="text-xs uppercase tracking-[0.2em] text-[#B8C3CF]">One improvement</p>
            <h2 className="mt-3 font-serif text-3xl tracking-[-0.04em]">A focused scope</h2>
            <p className="mt-4 text-sm leading-7 text-[#C3CCD7]">{solution.small}</p>
          </article>
          <article>
            <p className="text-xs uppercase tracking-[0.2em] text-[#B8C3CF]">Whole property</p>
            <h2 className="mt-3 font-serif text-3xl tracking-[-0.04em]">The same backbone</h2>
            <p className="mt-4 text-sm leading-7 text-[#C3CCD7]">{solution.whole}</p>
          </article>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-lg text-sm leading-7 text-[#C3CCD7]">The rooms stay simple to live in. ELITE Care is how they stay that way after install.</p>
          <div className="flex flex-wrap gap-4">
            <SiteCta href={`/contact?intent=new_project&service=${encodeURIComponent(solution.title)}`}>Start a project inquiry</SiteCta>
            <Link href="/care" className="text-sm text-[#AAB6C5]">ELITE Care</Link>
          </div>
        </div>
      </section>
    </article>
  )
}
