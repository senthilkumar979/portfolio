import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/ArticleLayout";
import { TagList } from "@/components/TagList";
import { experienceRoles, getExperienceBySlug } from "@/content/experience";

interface ExperienceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return experienceRoles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({
  params,
}: ExperienceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const role = getExperienceBySlug(slug);
  if (!role) return {};

  return {
    title: `${role.role} @ ${role.company}`,
    description: role.summary,
  };
}

export default async function ExperienceDetailPage({
  params,
}: ExperienceDetailPageProps) {
  const { slug } = await params;
  const role = getExperienceBySlug(slug);
  if (!role) notFound();

  const { Body } = role;

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <ArticleLayout
        eyebrow="Experience"
        title={role.company}
        meta={`${role.role} · ${role.location} · ${role.period}`}
        backHref="/experience"
        backLabel="All experience"
        externalHref={role.url}
        externalLabel="Company site"
        aside={<TagList title="Stack" items={role.stack} />}
      >
        <Body />
      </ArticleLayout>
    </div>
  );
}
