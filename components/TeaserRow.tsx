import Link from "next/link";

interface TeaserRowProps {
  href: string;
  label: string;
  title: string;
  description: string;
}

export const TeaserRow = ({
  href,
  label,
  title,
  description,
}: TeaserRowProps) => (
  <Link
    href={href}
    className="group grid gap-2 border-t border-border py-8 transition-colors first:border-t-0 md:grid-cols-[140px_1fr] md:gap-8"
  >
    <span className="text-sm uppercase tracking-wider text-accent">{label}</span>
    <div>
      <h2 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
        {title}
      </h2>
      <p className="mt-2 text-foreground-muted">{description}</p>
    </div>
  </Link>
);
