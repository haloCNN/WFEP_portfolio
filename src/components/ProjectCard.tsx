import Link from "next/link";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-border bg-surface-elevated transition-shadow hover:shadow-lg"
    >
      <div
        className="relative aspect-[16/10] overflow-hidden"
        style={{ backgroundColor: `${project.accent}18` }}
      >
        <div
          className="absolute inset-0 opacity-60 transition-transform duration-500 group-hover:scale-[1.02]"
          style={{
            background: `linear-gradient(135deg, ${project.accent}40 0%, transparent 55%), radial-gradient(circle at 80% 20%, ${project.accent}55, transparent 45%)`,
          }}
        />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-surface-elevated/90 px-3 py-1 text-xs font-medium text-ink backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        {featured && (
          <span className="absolute right-4 top-4 rounded-full bg-ink px-3 py-1 text-xs font-medium text-surface">
            Featured
          </span>
        )}
      </div>
      <div className="p-6 md:p-8">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-xl font-semibold text-ink group-hover:text-accent transition-colors md:text-2xl">
            {project.title}
          </h3>
          <span className="shrink-0 text-sm text-ink-faint">{project.year}</span>
        </div>
        <p className="mt-1 text-sm text-ink-muted">{project.subtitle}</p>
        <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-ink-muted">
          {project.summary}
        </p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-ink">
          View case study
          <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
