import type { ReactNode } from "react";
import Link from "next/link";
import { externalAnchorProps } from "@/lib/links";

interface ArticleLayoutProps {
  eyebrow?: string;
  title: string;
  meta?: string;
  backHref: string;
  backLabel: string;
  externalHref?: string;
  externalLabel?: string;
  children: ReactNode;
  aside?: ReactNode;
}

export const ArticleLayout = ({
  eyebrow,
  title,
  meta,
  backHref,
  backLabel,
  externalHref,
  externalLabel,
  children,
  aside,
}: ArticleLayoutProps) => (
  <article>
    <Link
      href={backHref}
      className="mb-8 inline-flex text-sm text-foreground-muted transition-colors hover:text-accent"
    >
      ← {backLabel}
    </Link>
    {eyebrow ? (
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
        {eyebrow}
      </p>
    ) : null}
    <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
      {title}
    </h1>
    {meta ? (
      <p className="mt-4 text-sm text-foreground-muted">{meta}</p>
    ) : null}
    {externalHref ? (
      <p className="mt-3">
        <a
          href={externalHref}
          {...externalAnchorProps(externalHref, true)}
          className="text-sm text-accent hover:underline"
        >
          {externalLabel ?? "Open link"} →
        </a>
      </p>
    ) : null}
    <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_240px]">
      <div>{children}</div>
      {aside ? <aside className="lg:pt-2">{aside}</aside> : null}
    </div>
  </article>
);
