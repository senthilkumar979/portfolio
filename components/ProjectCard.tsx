import Link from "next/link";

interface ProjectCardProps {
  href: string;
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  year: string;
}

export const ProjectCard = ({
  href,
  title,
  subtitle,
  summary,
  tags,
  year,
}: ProjectCardProps) => (
  <Link
    href={href}
    className="group block border-t border-border py-8 transition-colors first:border-t-0 first:pt-0"
  >
    <div className="flex flex-wrap items-baseline justify-between gap-3">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
        {title}
      </h2>
      <span className="text-sm text-foreground-muted">{year}</span>
    </div>
    <p className="mt-2 text-sm text-accent">{subtitle}</p>
    <p className="mt-3 max-w-2xl text-foreground-muted">{summary}</p>
    <p className="mt-4 text-xs uppercase tracking-wider text-foreground-muted">
      {tags.join(" · ")}
    </p>
  </Link>
);
