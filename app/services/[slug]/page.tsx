import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SolutionDetail } from "@/components/solution-detail"
import { SOLUTIONS, solutionBySlug } from "@/lib/solutions"
import { pageMetadata } from "@/lib/seo"
import { breadcrumbSchema, serviceSchema } from "@/lib/schema"
import { JsonLd } from "@/components/json-ld"

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const solution = solutionBySlug(slug)
  if (!solution) return {}
  return pageMetadata({
    title: `${solution.title} in Southeast Texas | ELITE`,
    description: solution.seoDescription,
    path: `/services/${solution.slug}`,
  })
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const solution = solutionBySlug(slug)
  if (!solution) notFound()
  return <>
    <JsonLd data={[
      serviceSchema({ name: solution.title, description: solution.seoDescription, path: `/services/${solution.slug}` }),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Solutions", path: "/services" },
        { name: solution.title, path: `/services/${solution.slug}` },
      ]),
    ]} />
    <SolutionDetail solution={solution} />
  </>
}
