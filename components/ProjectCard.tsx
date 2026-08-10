import Image from "next/image";
import Link from "next/link";
import { externalAnchorProps } from "@/lib/links";

interface ProjectCardProps {
  index: number;
  title: string;
  subtitle: string;
  summary: string;
  role: string;
  tags: string[];
  year: string;
  logo: string;
  logoClassName?: string;
  url?: string;
  caseStudyHref: string;
}

export const ProjectCard = ({
  index,
  title,
  subtitle,
  summary,
  role,
  tags,
  year,
  logo,
  logoClassName = "h-12 w-12 object-contain",
  url,
  caseStudyHref,
}: ProjectCardProps) => (
  <article className="border-b border-border">
    <div className="grid gap-6 py-10 md:grid-cols-[4.5rem_auto_minmax(0,1fr)_auto] md:items-start md:gap-8 md:py-12">
      <span className="text-[0.6875rem] font-medium tabular-nums tracking-[0.22em] text-foreground-muted/70">
        {String(index).padStart(2, "0")}
      </span>

      <Link
        href={caseStudyHref}
        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-background-elevated ring-1 ring-border transition-opacity hover:opacity-80 sm:h-[4.5rem] sm:w-[4.5rem]"
        aria-label={`${title} case study`}
      >
        <Image
          src={logo}
          alt=""
          width={80}
          height={80}
          className={logoClassName}
        />
      </Link>

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            <Link
              href={caseStudyHref}
              className="transition-colors hover:text-accent"
            >
              {title}
            </Link>
          </h2>
          <span className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-accent">
            {role}
          </span>
        </div>

        <p className="mt-3 max-w-2xl text-base leading-snug text-foreground sm:text-lg">
          {subtitle}
        </p>
        <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-foreground-muted">
          {summary}
        </p>
        <p className="mt-5 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-foreground-muted/80">
          {tags.join(" · ")}
        </p>

        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          <Link
            href={caseStudyHref}
            className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
          >
            Case study →
          </Link>
          {url ? (
            <a
              href={url}
              {...externalAnchorProps(url, true)}
              className="text-sm font-medium text-foreground-muted transition-colors hover:text-accent"
            >
              Visit site →
            </a>
          ) : null}
        </div>
      </div>

      <span className="text-sm tabular-nums text-foreground-muted md:pt-1 md:text-right">
        {year}
      </span>
    </div>
  </article>
);
