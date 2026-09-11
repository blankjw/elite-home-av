import type { Metadata } from "next"
import ContactForm from "@/components/ContactForm"
import { PageHero } from "@/components/page-hero"
import { CONTACT } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact Elite Home AV | (409) 790-7889",
  description:
    "Call or contact Elite Home AV LLC in Lumberton, TX. Serving Beaumont, Port Arthur, Galveston & all of SE Texas. (409) 790-7889 | john@elitehomeav.com",
  alternates: { canonical: "https://www.elitehomeav.com/contact" },
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Tell us how the space should feel."
        description="Call for the fastest response, or send a message and we will follow up. Homes and businesses are both welcome."
      >
        <div className="border-t border-[#31445A] pt-8">
          <p className="text-sm text-[#9BA7B5]">Direct line</p>
          <a href={CONTACT.phoneHref} className="mt-2 block text-2xl font-medium text-white hover:text-[#AAB6C5] transition-colors">
            {CONTACT.phone}
          </a>
        </div>
      </PageHero>

      <section className="contact-body">
        <div className="e-shell grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 text-sm">
            <div className="space-y-4">
              <div>
                <p className="text-[#9BA7B5]">Email</p>
                <a href={CONTACT.emailHref} className="text-white hover:text-[#AAB6C5] transition-colors">
                  {CONTACT.email}
                </a>
              </div>
              <div>
                <p className="text-[#9BA7B5]">Location</p>
                <p className="text-white">{CONTACT.location}</p>
                <p className="text-[#9BA7B5] mt-1">Serving {CONTACT.area}</p>
              </div>
            </div>
            <p className="text-[#9BA7B5] leading-relaxed">
              Lumberton · Beaumont · Port Arthur · Galveston · lake communities · and across Southeast Texas.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  )
}
