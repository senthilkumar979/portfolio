import type { Metadata } from "next";
import { Suspense } from "react";
import { BlogClosing } from "@/components/blog/BlogClosing";
import { BlogFilters } from "@/components/blog/BlogFilters";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogPostList } from "@/components/blog/BlogPostList";
import { blogPage } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: blogPage.description,
};

export default function BlogPage() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_0%_0%,rgba(0,194,168,0.1),transparent_50%),radial-gradient(ellipse_40%_30%_at_100%_10%,rgba(0,194,168,0.06),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <BlogHero />
        <Suspense fallback={null}>
          <BlogFilters />
        </Suspense>
        <Suspense fallback={null}>
          <BlogPostList />
        </Suspense>
        <BlogClosing />
      </div>
    </div>
  );
}
