import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing on mentorship, communication, and engineering — authored as React components in this site.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <PageHeader
        eyebrow="Blog"
        title="Writing"
        description="Articles brought over from Medium as hand-crafted React components. Paste new copy anytime and we will add another post."
      />
      <ul>
        {blogPosts.map((post) => (
          <li
            key={post.slug}
            className="border-t border-border py-8 first:border-t-0 first:pt-0"
          >
            <Link href={`/blog/${post.slug}`} className="group block">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
                  {post.title}
                </h2>
                <time
                  dateTime={post.date}
                  className="text-sm text-foreground-muted"
                >
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>
              <p className="mt-3 max-w-2xl text-foreground-muted">
                {post.excerpt}
              </p>
              <p className="mt-4 text-xs uppercase tracking-wider text-foreground-muted">
                {post.tags.join(" · ")}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
