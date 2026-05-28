import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { getProject, projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <header
        className="border-b border-border px-6 py-16 md:py-24"
        style={{ backgroundColor: `${project.accent}12` }}
      >
        <div className="mx-auto max-w-6xl">
          <Link
            href="/projects"
            className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
          >
            ← All projects
          </Link>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs font-medium text-ink-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-3 text-xl text-ink-muted">{project.subtitle}</p>
          <dl className="mt-10 flex flex-wrap gap-8 text-sm">
            <div>
              <dt className="text-ink-faint">Year</dt>
              <dd className="mt-1 font-medium text-ink">{project.year}</dd>
            </div>
            <div>
              <dt className="text-ink-faint">Role</dt>
              <dd className="mt-1 font-medium text-ink">{project.role}</dd>
            </div>
          </dl>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="text-xl leading-relaxed text-ink">{project.summary}</p>

        {project.metrics && (
          <ul className="mt-12 grid grid-cols-3 gap-4 rounded-2xl border border-border bg-surface-elevated p-6">
            {project.metrics.map((m) => (
              <li key={m.label} className="text-center">
                <p className="font-display text-2xl font-semibold text-ink md:text-3xl">
                  {m.value}
                </p>
                <p className="mt-1 text-xs text-ink-faint">{m.label}</p>
              </li>
            ))}
          </ul>
        )}

        <section className="mt-16">
          <h2 className="font-display text-2xl font-semibold text-ink">Challenge</h2>
          <p className="mt-4 leading-relaxed text-ink-muted">{project.challenge}</p>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-semibold text-ink">Approach</h2>
          <ol className="mt-6 space-y-4">
            {project.approach.map((step, i) => (
              <li
                key={step}
                className="flex gap-4 rounded-xl border border-border bg-surface p-5"
              >
                <span className="font-display text-sm font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-ink-muted leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-semibold text-ink">Outcome</h2>
          <p className="mt-4 leading-relaxed text-ink-muted">{project.outcome}</p>
        </section>

        <div
          className="mt-16 aspect-video rounded-2xl border border-dashed border-border flex items-center justify-center text-sm text-ink-faint"
          style={{ backgroundColor: `${project.accent}10` }}
        >
          Case study visuals — replace with Figma exports or imagery
        </div>
      </article>

      <section className="border-t border-border bg-surface-elevated px-6 py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="font-display text-xl font-semibold text-ink">
            Interested in similar outcomes?
          </p>
          <Button href="/contact">Discuss your project</Button>
        </div>
      </section>
    </>
  );
}
