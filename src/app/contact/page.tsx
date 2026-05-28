import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} for product design collaborations.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something thoughtful"
        description="Share a bit about your product, timeline, and what success looks like. I'll respond within two business days."
      />
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_1.2fr]">
          <aside className="space-y-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-ink-faint">
                Email
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block text-lg font-medium text-accent hover:underline"
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-ink-faint">
                Location
              </p>
              <p className="mt-2 text-lg text-ink">{site.location}</p>
              <p className="mt-1 text-sm text-ink-muted">
                Open to remote collaboration across APAC and EU time zones.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-ink-faint">
                Typical engagements
              </p>
              <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                <li>• Product discovery sprints (2–3 weeks)</li>
                <li>• Embedded design partnerships (3–6 months)</li>
                <li>• Design system audits & refresh</li>
              </ul>
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
