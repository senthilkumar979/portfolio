import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/ArticleLayout";
import { TagList } from "@/components/TagList";
import { getWorkBySlug, workProjects } from "@/content/work";

interface WorkDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return workProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getWorkBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const project = getWorkBySlug(slug);
  if (!project) notFound();

  const { Body } = project;

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <ArticleLayout
        eyebrow="Work"
        title={project.title}
        meta={`${project.subtitle} · ${project.year}`}
        backHref="/work"
        backLabel="All work"
        externalHref={project.url}
        externalLabel="Visit site"
        aside={<TagList title="Tools chosen" items={project.tools} />}
      >
        <Body />
      </ArticleLayout>
    </div>
  );
}
