"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  blogPosts,
  blogTopics,
  countPostsByTopic,
  isBlogTopic,
} from "@/content/blog";

export const BlogFilters = () => {
  const searchParams = useSearchParams();
  const active = searchParams.get("topic");
  const selected = isBlogTopic(active) ? active : null;

  return (
    <nav aria-label="Filter writing by topic" className="mt-10 border-t border-border pt-8">
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-foreground-muted">
        Topics
      </p>
      <ul className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-3">
        <li>
          <Link
            href="/blog"
            scroll={false}
            className={
              selected
                ? "text-sm text-foreground-muted transition-colors hover:text-accent"
                : "text-sm font-medium text-accent"
            }
            aria-current={selected ? undefined : "page"}
          >
            All
            <span className="ml-2 tabular-nums text-foreground-muted/70">
              {blogPosts.length}
            </span>
          </Link>
        </li>
        {blogTopics.map((topic) => {
          const isActive = selected === topic;
          const count = countPostsByTopic(topic);

          return (
            <li key={topic}>
              <Link
                href={`/blog?topic=${encodeURIComponent(topic)}`}
                scroll={false}
                className={
                  isActive
                    ? "text-sm font-medium text-accent"
                    : "text-sm text-foreground-muted transition-colors hover:text-accent"
                }
                aria-current={isActive ? "page" : undefined}
              >
                {topic}
                <span className="ml-2 tabular-nums text-foreground-muted/70">
                  {count}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
