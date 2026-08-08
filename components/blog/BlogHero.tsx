"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HoverLink } from "@/components/HoverLink";
import { blogPage, blogPosts } from "@/content/blog";

export const BlogHero = () => {
  const prefersReducedMotion = useReducedMotion();
  const initial = prefersReducedMotion ? false : { opacity: 0, y: 16 };

  return (
    <motion.header
      initial={initial}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-3xl"
    >
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
        {blogPage.eyebrow}
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
        {blogPage.title}
      </h1>
      <p className="mt-5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {blogPage.headline}
      </p>
      <p className="mt-5 text-lg leading-relaxed text-foreground-muted">
        {blogPage.description}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
        <p className="text-sm text-foreground-muted">
          <span className="font-medium text-foreground">{blogPosts.length}</span>{" "}
          {blogPosts.length === 1 ? "essay" : "essays"}
        </p>
        <HoverLink
          preview="medium"
          className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
        >
          Also on Medium →
        </HoverLink>
      </div>
    </motion.header>
  );
};
