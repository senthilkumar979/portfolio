import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { workProjects } from "@/content/work";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies — Peacock Studio, MentorBridge products, and enterprise frontend architecture.",
};

export default function ProjectsPage() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_0%_0%,rgba(0,194,168,0.1),transparent_50%),radial-gradient(ellipse_40%_30%_at_100%_10%,rgba(0,194,168,0.06),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <PageHeader
          eyebrow="Projects"
          title="Case studies"
          description="Products I founded or mentored into production, plus enterprise platforms I architected — each with a write-up and a live link."
        />

        <div className="mt-6 border-t border-border">
          {workProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              index={index + 1}
              title={project.title}
              subtitle={project.subtitle}
              summary={project.summary}
              role={project.role}
              tags={project.tags}
              year={project.year}
              logo={project.logo}
              logoClassName={project.logoClassName}
              url={project.url}
              caseStudyHref={`/projects/${project.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
