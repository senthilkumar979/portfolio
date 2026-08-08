"use client";

import Image from "next/image";
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
              className="group grid gap-6 py-8 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:items-start md:gap-10 md:py-10"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm ring-1 ring-border">
                <Image
                  src={post.cover}
                  alt={post.coverAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 224px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                  <span className="text-[0.6875rem] font-medium tabular-nums tracking-[0.22em] text-foreground-muted/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <time
                    dateTime={post.date}
                    className="text-sm text-foreground-muted"
                  >
                    {formatBlogDate(post.date)}
                  </time>
                </div>

                <h3 className="mt-3 max-w-2xl text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-2xl">
                  {post.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground-muted">
                  {post.excerpt}
                </p>
                <p className="mt-4 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-foreground-muted">
                  {post.tags.join(" · ")}
                </p>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
