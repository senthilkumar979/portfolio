import Image from "next/image";
import Link from "next/link";
import { LocationMap } from "@/components/LocationMap";
import { externalAnchorProps } from "@/lib/links";

interface ExperienceCaseHeaderProps {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  logo: string;
  logoClassName?: string;
  url?: string;
}

export const ExperienceCaseHeader = ({
  company,
  role,
  location,
  period,
  summary,
  logo,
  logoClassName = "h-12 w-12 object-contain",
  url,
}: ExperienceCaseHeaderProps) => (
  <header className="mt-10 grid gap-10 border-b border-border pb-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,16rem)] lg:items-start lg:gap-14">
    <div className="grid gap-8 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start sm:gap-10">
      {url ? (
        <a
          href={url}
          {...externalAnchorProps(url, true)}
          className="flex h-20 w-20 shrink-0 items-center justify-center rounded-md bg-foreground ring-1 ring-border transition-opacity hover:opacity-80 sm:h-24 sm:w-24"
          aria-label={`${company} website`}
        >
          <Image
            src={logo}
            alt=""
            width={96}
            height={96}
            className={logoClassName}
          />
        </a>
      ) : (
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-md bg-background-elevated ring-1 ring-border sm:h-24 sm:w-24">
          <Image
            src={logo}
            alt=""
            width={96}
            height={96}
            className={logoClassName}
          />
        </div>
      )}

      <div className="min-w-0">
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
          Experience
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {company}
          </h1>
          <span className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-accent">
            {role}
          </span>
        </div>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground-muted">
          {summary}
        </p>
        <p className="mt-3 text-sm tabular-nums text-foreground-muted">
          {period}
        </p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          {url ? (
            <a
              href={url}
              {...externalAnchorProps(url, true)}
              className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
            >
              Company site →
            </a>
          ) : null}
          <Link
            href="/contact"
            className="text-sm font-medium text-foreground-muted transition-colors hover:text-accent"
          >
            Discuss this role
          </Link>
        </div>
      </div>
    </div>

    <LocationMap
      location={location}
      size="sm"
      className="lg:justify-self-end"
    />
  </header>
);
