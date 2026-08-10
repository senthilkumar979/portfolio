import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExperienceCaseHeader } from "@/components/experience/ExperienceCaseHeader";
import { TenureChart } from "@/components/experience/TenureChart";
import { TagList } from "@/components/TagList";
import { Testimonials } from "@/components/Testimonials";
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
  const currentIndex = experienceRoles.findIndex((item) => item.slug === slug);
  const previous = currentIndex > 0 ? experienceRoles[currentIndex - 1] : null;
  const next =
    currentIndex >= 0 && currentIndex < experienceRoles.length - 1
      ? experienceRoles[currentIndex + 1]
      : null;

  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_35%_at_100%_0%,rgba(0,194,168,0.09),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Link
          href="/experience"
          className="inline-flex text-sm text-foreground-muted transition-colors hover:text-accent"
        >
          ← All experience
        </Link>

        <ExperienceCaseHeader
          company={role.company}
          role={role.role}
          location={role.location}
          period={role.period}
          summary={role.summary}
          logo={role.logo}
          logoClassName={role.logoClassName}
          url={role.url}
        />

        <TenureChart
          period={role.period}
          className="mt-10 border-b border-border pb-10"
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-16">
          <Body />
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <TagList title="Stack" items={role.stack} />
          </aside>
        </div>

        <Testimonials surface="experience" experienceSlug={role.slug} />

        <nav
          aria-label="Adjacent roles"
          className="mt-20 grid gap-8 border-t border-border pt-10 sm:grid-cols-2"
        >
          {previous ? (
            <Link
              href={`/experience/${previous.slug}`}
              className="group text-left transition-colors"
            >
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-foreground-muted">
                Previous
              </p>
              <p className="mt-2 text-lg font-semibold tracking-tight text-foreground group-hover:text-accent">
                ← {previous.company}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/experience/${next.slug}`}
              className="group text-left transition-colors sm:text-right"
            >
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-foreground-muted">
                Next
              </p>
              <p className="mt-2 text-lg font-semibold tracking-tight text-foreground group-hover:text-accent">
                {next.company} →
              </p>
            </Link>
          ) : null}
        </nav>
      </div>
    </div>
  );
}
