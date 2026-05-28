import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${site.name} — background, process, and design philosophy.`,
};

const timeline = [
  {
    year: "2025 — Present",
    title: "Independent product designer",
    detail: "Partnering with startups and scale-ups on 0→1 and redesign initiatives.",
  },
  {
    year: "2021 — 2025",
    title: "Senior designer · Fintech collective",
    detail: "Led mobile banking and payments experiences for APAC markets.",
  },
  {
    year: "2018 — 2021",
    title: "UI/UX designer · Agency studio",
    detail: "Delivered brand and product work for retail, travel, and SaaS clients.",
  },
  {
    year: "2016",
    title: "BDes · Communication design",
    detail: "Foundation in typography, systems thinking, and human-centred methods.",
  },
];

const principles = [
  {
    title: "Clarity over novelty",
    body: "Interfaces should reduce cognitive load. Distinctive design comes from hierarchy and restraint, not decoration for its own sake.",
  },
  {
    title: "Evidence-led decisions",
    body: "Qualitative insight and quantitative signals inform priorities. I document trade-offs so teams can align quickly.",
  },
  {
    title: "Systems that scale",
    body: "Tokens, components, and content patterns help engineering ship faster without visual drift.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={`Hi, I'm ${site.name.split(" ")[0]}.`}
        description={`I'm a ${site.title.toLowerCase()} who cares about the small moments—loading states, error copy, and the first screen someone sees after signing up.`}
      />

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[280px_1fr]">
          <div
            className="aspect-[4/5] max-w-sm rounded-2xl border border-border lg:max-w-none"
            style={{
              background:
                "linear-gradient(160deg, var(--color-accent-soft), var(--color-surface))",
            }}
            aria-hidden
          />
          <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-ink-muted">
            <p>
              Over eight years I&apos;ve worked across discovery workshops, design systems,
              and high-fidelity prototyping—often embedded with product and engineering
              from day one.
            </p>
            <p>
              My process usually starts with understanding jobs-to-be-done and success
              metrics, then moves into journey maps, wireframes, and iterative testing.
              I prototype in Figma and collaborate in Notion, Linear, and Storybook.
            </p>
            <p>
              Outside client work I mentor early-career designers and speak at local
              meetups on accessible interaction patterns.
            </p>
            <Button href="/contact" className="!mt-4">
              Work with me
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface-elevated px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-semibold text-ink">Design principles</h2>
          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {principles.map((p) => (
              <li key={p.title} className="rounded-2xl border border-border bg-surface p-8">
                <h3 className="font-display text-lg font-semibold text-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-semibold text-ink">Background</h2>
          <ol className="mt-12 space-y-0 border-l border-border pl-8">
            {timeline.map((item) => (
              <li key={item.year} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[33px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-surface" />
                <p className="text-sm font-medium text-accent">{item.year}</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted">
                  {item.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-2xl border border-border p-8 md:p-10">
          <h2 className="font-display text-xl font-semibold text-ink">Toolbox</h2>
          <p className="mt-4 text-ink-muted">
            Figma · FigJam · Principle · Maze · Notion · Linear · HTML/CSS literacy for
            handoff · WCAG 2.2 awareness
          </p>
        </div>
      </section>
    </>
  );
}
