import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { WorkBentoGrid } from "@/components/WorkBentoGrid";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Bento grid portfolio — hover to reveal, click to view. Images can be added from your computer.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Work"
        description="用理性與直覺，把訊息煉成會發光的設計"
   
      />
      <section className="px-6 py-16 md:py-24">
        <WorkBentoGrid projects={projects} />
      </section>
    </>
  );
}
