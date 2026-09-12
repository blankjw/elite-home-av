import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { SiteCta } from "@/components/site-cta"
import { CASE_STUDIES } from "@/lib/case-studies"

export const metadata: Metadata = {
  title: "Our Work | Elite Home AV",
  description: "See how Elite Home AV approaches integrated technology projects for homes and businesses across Southeast Texas.",
  alternates: { canonical: "https://www.elitehomeav.com/gallery" },
}

const principles = [
  ["Constraint", "Start with the architecture, construction stage, daily frustrations, and decisions that cannot be deferred."],
  ["Thinking", "Coordinate the systems as one property instead of treating audio, lighting, security, and networking as separate purchases."],
  ["Execution", "Protect clean pathways, service access, documentation, and a handoff that makes sense after the tools leave."],
  ["Everyday result", "Technology should feel settled into the space: straightforward to use, reliable, and ready to change with the property."],
] as const

const reviewEnabled = process.env.PORTFOLIO_REVIEW === "1"

export default function WorkPage() {
  return <>
    <PageHero label="Our work" title="The work is quiet. The difference is not." description="The strongest technology projects begin with careful decisions beneath the finished space. Our project stories show the constraint, the thinking, the execution, and what the customer should notice every day." />
    <section className="e-section e-paper work-method" aria-labelledby="work-method-title">
      <div className="e-shell">
        <div className="e-section-heading">
          <div><p className="e-kicker">Under the Surface</p><h2 id="work-method-title">A useful project story starts below the finish.</h2></div>
          <p>Not a wall of equipment photos. Each case study is built around the choices that made the completed space more dependable, more intuitive, and easier to support.</p>
        </div>
        <div className="work-principles">
          {principles.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </div>
    </section>
    <section className="e-section work-index" aria-labelledby="work-index-title">
      <div className="e-shell">
        <div className="e-section-heading">
          <div><p className="e-kicker">Field stories</p><h2 id="work-index-title">Real work, shared deliberately.</h2></div>
          <p>Customer privacy comes first. Project stories use general locations, approved photography, and only the details needed to explain the value of the work.</p>
        </div>
        {reviewEnabled ? <div className="work-review-list">
          {CASE_STUDIES.map((study) => <Link key={study.slug} href={`/gallery/${study.slug}`} className="work-review-card">
            <div className="work-linework" aria-hidden="true"><span/><span/><span/><span/></div>
            <div><p className="e-kicker">Private review · {study.status}</p><h3>{study.title}</h3><p>{study.summary}</p><span className="e-text-link">Review the case-study structure <ArrowUpRight size={18}/></span></div>
          </Link>)}
        </div> : <div className="work-hold">
          <div className="work-linework" aria-hidden="true"><span/><span/><span/><span/></div>
          <div><p className="e-kicker">In preparation</p><h3>Project stories are being reviewed with the same care as the work itself.</h3><p>We are assembling the first ELITE field stories with approved project details and privacy-reviewed photography. Until then, explore how we plan and support an integrated property.</p><SiteCta href="/services" variant="solid">Explore solutions</SiteCta></div>
        </div>}
      </div>
    </section>
  </>
}
