import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Product and UI/UX case studies across fintech, commerce, health, and consumer.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Projects"
        description="End-to-end case studies covering research, interaction design, systems, and measurable outcomes."
      />
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
