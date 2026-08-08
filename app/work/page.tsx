import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { workProjects } from "@/content/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected products and platforms — Peacock Studio and enterprise frontend architecture.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <PageHeader
        eyebrow="Work"
        title="Selected products & platforms"
        description="Products I founded and enterprise platforms I architected — with the tools chosen for each build."
      />
      <div>
        {workProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            href={`/work/${project.slug}`}
            title={project.title}
            subtitle={project.subtitle}
            summary={project.summary}
            tags={project.tags}
            year={project.year}
          />
        ))}
      </div>
    </div>
  );
}
