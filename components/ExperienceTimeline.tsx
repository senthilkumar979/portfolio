import Link from "next/link";
import type { ExperienceRole } from "@/content/experience";

interface ExperienceTimelineProps {
  roles: ExperienceRole[];
}

export const ExperienceTimeline = ({ roles }: ExperienceTimelineProps) => (
  <ol className="space-y-0">
    {roles.map((role) => (
      <li key={role.slug} className="border-t border-border py-8 first:border-t-0 first:pt-0">
        <Link href={`/experience/${role.slug}`} className="group block">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
              {role.company}
            </h2>
            <span className="text-sm text-foreground-muted">{role.period}</span>
          </div>
          <p className="mt-2 text-sm text-accent">{role.role}</p>
          <p className="mt-3 max-w-2xl text-foreground-muted">{role.summary}</p>
        </Link>
      </li>
    ))}
  </ol>
);
