import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { services, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-20 pt-12 md:pb-28 md:pt-20">
        <div
          className="pointer-events-none absolute -right-32 top-0 h-[480px] w-[480px] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--color-accent) 35%, transparent), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-4 py-1.5 text-xs font-medium text-ink-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Open for Q3 2026 engagements
          </p>
          <h1 className="mt-8 max-w-4xl font-display text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-ink text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl">
            I&apos;m {site.name}, a {site.title.toLowerCase()} in {site.location}. I
            partner with product teams to turn research into interfaces people trust.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/projects">View work</Button>
            <Button href="/about" variant="secondary">
              About me
            </Button>
          </div>
          <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-10 sm:grid-cols-4">
            {[
              { label: "Years in product", value: "8+" },
              { label: "Shipped products", value: "24" },
              { label: "Industries", value: "6" },
              { label: "Based in", value: site.location },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs uppercase tracking-[0.15em] text-ink-faint">
                  {stat.label}
                </dt>
                <dd className="mt-2 font-display text-2xl font-semibold text-ink">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-y border-border bg-surface-elevated px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Services"
            title="How I help teams ship with confidence"
            description="From discovery to polished UI—embedded with your squad or leading design workstreams."
          />
          <ul className="mt-14 grid gap-8 md:grid-cols-3">
            {services.map((service, i) => (
              <li
                key={service.title}
                className="rounded-2xl border border-border bg-surface p-8"
              >
                <span className="font-display text-sm font-semibold text-accent">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl rounded-3xl bg-ink px-8 py-14 text-surface md:px-14 md:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-surface/60">
              Collaboration
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Have a product challenge worth solving?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-surface/75">
              Tell me about your team, timeline, and users. I typically reply within
              two business days.
            </p>
            <div className="mt-8">
              <Button
                href="/contact"
                variant="secondary"
                className="!bg-surface !text-ink hover:!bg-surface/90"
              >
                Start a conversation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
