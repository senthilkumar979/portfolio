"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { blogPosts, formatBlogDate } from "@/content/blog";

export const BlogPostList = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="mt-16 md:mt-20">
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
        Essays
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        Latest writing
      </h2>

      <ul className="mt-10 border-t border-border">
        {blogPosts.map((post, index) => (
          <motion.li
            key={post.slug}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.45,
              delay: prefersReducedMotion ? 0 : index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border-b border-border"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group grid gap-4 py-8 sm:grid-cols-[4.5rem_minmax(0,1fr)_auto] sm:items-start sm:gap-8 md:py-10"
            >
              <span className="text-[0.6875rem] font-medium tabular-nums tracking-[0.22em] text-foreground-muted/70">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="min-w-0">
                <h3 className="max-w-2xl text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-2xl">
                  {post.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground-muted">
                  {post.excerpt}
                </p>
                <p className="mt-4 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-foreground-muted">
                  {post.tags.join(" · ")}
                </p>
              </div>

              <time
                dateTime={post.date}
                className="shrink-0 text-sm text-foreground-muted sm:pt-1 sm:text-right"
              >
                {formatBlogDate(post.date)}
              </time>
            </Link>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
