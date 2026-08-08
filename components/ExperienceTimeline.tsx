import Image from "next/image";
import Link from "next/link";
import { LocationLabel } from "@/components/LocationMap";
import type { ExperienceRole } from "@/content/experience";
import { externalAnchorProps } from "@/lib/links";

interface ExperienceTimelineProps {
  roles: ExperienceRole[];
}

export const ExperienceTimeline = ({ roles }: ExperienceTimelineProps) => (
  <ol className="border-t border-border">
    {roles.map((role, index) => (
      <li key={role.slug} className="border-b border-border">
        <div className="grid gap-6 py-10 md:grid-cols-[4.5rem_auto_minmax(0,1fr)_auto] md:items-start md:gap-8 md:py-12">
          <span className="text-[0.6875rem] font-medium tabular-nums tracking-[0.22em] text-foreground-muted/70">
            {String(index + 1).padStart(2, "0")}
          </span>

          <Link
            href={`/experience/${role.slug}`}
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-foreground ring-1 ring-border transition-opacity hover:opacity-80 sm:h-[4.5rem] sm:w-[4.5rem]"
            aria-label={`${role.company} role details`}
          >
            <Image
              src={role.logo}
              alt=""
              width={80}
              height={80}
              className={role.logoClassName ?? "h-10 w-10 object-contain"}
            />
          </Link>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                <Link
                  href={`/experience/${role.slug}`}
                  className="transition-colors hover:text-accent"
                >
                  {role.company}
                </Link>
              </h2>
              <span className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-accent">
                {role.role}
              </span>
            </div>

            <LocationLabel location={role.location} className="mt-2" />
            <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-foreground-muted">
              {role.summary}
            </p>
            <p className="mt-5 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-foreground-muted/80">
              {role.stack.slice(0, 5).join(" · ")}
              {role.stack.length > 5 ? " · …" : ""}
            </p>

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              <Link
                href={`/experience/${role.slug}`}
                className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
              >
                Role details →
              </Link>
              {role.url ? (
                <a
                  href={role.url}
                  {...externalAnchorProps(role.url, true)}
                  className="text-sm font-medium text-foreground-muted transition-colors hover:text-accent"
                >
                  Company site →
                </a>
              ) : null}
            </div>
          </div>

          <span className="text-sm tabular-nums text-foreground-muted md:pt-1 md:text-right">
            {role.period}
          </span>
        </div>
      </li>
    ))}
  </ol>
);
