import Link from "next/link";

interface BlogPostNavItem {
  slug: string;
  title: string;
}

interface BlogPostNavProps {
  previous: BlogPostNavItem | null;
  next: BlogPostNavItem | null;
}

export const BlogPostNav = ({ previous, next }: BlogPostNavProps) => (
  <nav
    aria-label="Adjacent essays"
    className="mt-20 grid gap-8 border-t border-border pt-10 sm:grid-cols-2"
  >
    {previous ? (
      <Link
        href={`/blog/${previous.slug}`}
        className="group text-left transition-colors"
      >
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-foreground-muted">
          Previous
        </p>
        <p className="mt-2 text-lg font-semibold tracking-tight text-foreground group-hover:text-accent">
          ← {previous.title}
        </p>
      </Link>
    ) : (
      <div />
    )}

    {next ? (
      <Link
        href={`/blog/${next.slug}`}
        className="group text-left transition-colors sm:text-right"
      >
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-foreground-muted">
          Next
        </p>
        <p className="mt-2 text-lg font-semibold tracking-tight text-foreground group-hover:text-accent">
          {next.title} →
        </p>
      </Link>
    ) : null}
  </nav>
);
