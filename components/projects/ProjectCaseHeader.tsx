import Image from "next/image";
import Link from "next/link";
import { externalAnchorProps } from "@/lib/links";

interface ProjectCaseHeaderProps {
  title: string;
  subtitle: string;
  role: string;
  year: string;
  tags: string[];
  url?: string;
  logo: string;
  logoClassName?: string;
  secondaryUrl?: string;
  secondaryLabel?: string;
}

export const ProjectCaseHeader = ({
  title,
  subtitle,
  role,
  year,
  tags,
  url,
  logo,
  logoClassName = "h-14 w-14 object-contain",
  secondaryUrl,
  secondaryLabel = "Chrome Web Store",
}: ProjectCaseHeaderProps) => {
  const logoShellClassName =
    "flex h-20 w-20 shrink-0 items-center justify-center rounded-md bg-background-elevated ring-1 ring-border sm:h-24 sm:w-24";

  return (
    <header className="mt-10">
      <div className="grid gap-10 pb-12 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-start lg:gap-12">
        {url ? (
          <a
            href={url}
            {...externalAnchorProps(url, true)}
            className={`${logoShellClassName} transition-opacity hover:opacity-80`}
            aria-label={`${title} website`}
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
          <div className={logoShellClassName}>
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
            Case study
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {title}
            </h1>
            <span className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-accent">
              {role}
            </span>
          </div>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground-muted">
            {subtitle}
          </p>
          <p className="mt-3 text-sm text-foreground-muted">
            {year} · {tags.join(" · ")}
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {url ? (
              <a
                href={url}
                {...externalAnchorProps(url, true)}
                className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
              >
                Visit site →
              </a>
            ) : null}
            {secondaryUrl ? (
              <a
                href={secondaryUrl}
                {...externalAnchorProps(secondaryUrl, true)}
                className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
              >
                {secondaryLabel} →
              </a>
            ) : null}
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground-muted transition-colors hover:text-accent"
            >
              Discuss this work
            </Link>
            {!url ? (
              <Link
                href="/experience/bnp-paribas-fortis"
                className="text-sm font-medium text-foreground-muted transition-colors hover:text-accent"
              >
                Related experience →
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
};
