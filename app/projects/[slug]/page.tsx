import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCaseHeader } from "@/components/projects/ProjectCaseHeader";
import { ProjectDecisionFramework } from "@/components/projects/ProjectDecisionFramework";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { TagList } from "@/components/TagList";
import { getWorkBySlug, workProjects } from "@/content/work";
import { projectFrameworks } from "@/content/work/frameworks";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return workProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getWorkBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getWorkBySlug(slug);
  if (!project) notFound();

  const { Body } = project;
  const currentIndex = workProjects.findIndex((item) => item.slug === slug);
  const previous = currentIndex > 0 ? workProjects[currentIndex - 1] : null;
  const next =
    currentIndex >= 0 && currentIndex < workProjects.length - 1
      ? workProjects[currentIndex + 1]
      : null;

  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_35%_at_100%_0%,rgba(0,194,168,0.09),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Link
          href="/projects"
          className="inline-flex text-sm text-foreground-muted transition-colors hover:text-accent"
        >
          ← All projects
        </Link>

        <ProjectCaseHeader
          title={project.title}
          subtitle={project.subtitle}
          role={project.role}
          year={project.year}
          tags={project.tags}
          url={project.url}
          logo={project.logo}
          logoClassName={project.logoClassName}
          secondaryUrl={project.chromeStoreUrl}
          secondaryLabel="Chrome Web Store"
        />

        <ProjectGallery
          title={project.title}
          screenshots={project.screenshots}
        />

        {projectFrameworks[project.slug] ? (
          <ProjectDecisionFramework
            framework={projectFrameworks[project.slug]}
          />
        ) : null}

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-16">
          <Body />
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <TagList title="Stack" items={project.tools} />
            <p className="mt-8 text-sm leading-relaxed text-foreground-muted">
              {project.summary}
            </p>
          </aside>
        </div>

        <nav
          aria-label="Adjacent projects"
          className="mt-20 grid gap-8 border-t border-border pt-10 sm:grid-cols-2"
        >
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className="group text-left transition-colors"
            >
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-foreground-muted">
                Previous
              </p>
              <p className="mt-2 text-lg font-semibold tracking-tight text-foreground group-hover:text-accent">
                ← {previous.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group text-left transition-colors sm:text-right"
            >
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-foreground-muted">
                Next
              </p>
              <p className="mt-2 text-lg font-semibold tracking-tight text-foreground group-hover:text-accent">
                {next.title} →
              </p>
            </Link>
          ) : null}
        </nav>
      </div>
    </div>
  );
}
