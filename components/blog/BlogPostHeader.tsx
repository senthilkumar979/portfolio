"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { externalAnchorProps } from "@/lib/links";
import { formatBlogDate } from "@/content/blog";

interface BlogPostHeaderProps {
  title: string;
  date: string;
  tags: readonly string[];
  excerpt: string;
  cover: string;
  coverAlt: string;
  mediumUrl?: string;
}

export const BlogPostHeader = ({
  title,
  date,
  tags,
  excerpt,
  cover,
  coverAlt,
  mediumUrl,
}: BlogPostHeaderProps) => {
  const prefersReducedMotion = useReducedMotion();
  const initial = prefersReducedMotion ? false : { opacity: 0, y: 14 };

  return (
    <motion.header
      initial={initial}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="mt-10"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm ring-1 ring-border">
        <Image
          src={cover}
          alt={coverAlt}
          fill
          priority
          sizes="(max-width: 1152px) 100vw, 1152px"
          className="object-cover"
        />
      </div>

      <div className="mt-10 max-w-3xl">
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
          Essay
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-foreground-muted">
          {excerpt}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-foreground-muted">
          <time dateTime={date}>{formatBlogDate(date, "long")}</time>
          <span aria-hidden className="text-border">
            ·
          </span>
          <span>{tags.join(" · ")}</span>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          {mediumUrl ? (
            <a
              href={mediumUrl}
              {...externalAnchorProps(mediumUrl, true)}
              className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
            >
              Originally on Medium →
            </a>
          ) : null}
          <Link
            href="/blog"
            className="text-sm font-medium text-foreground-muted transition-colors hover:text-accent"
          >
            All writing
          </Link>
        </div>
      </div>
    </motion.header>
  );
};
