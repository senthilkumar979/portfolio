import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogPostClosing } from "@/components/blog/BlogPostClosing";
import { BlogPostHeader } from "@/components/blog/BlogPostHeader";
import { BlogPostNav } from "@/components/blog/BlogPostNav";
import {
  blogPosts,
  getAdjacentBlogPosts,
  getBlogBySlug,
} from "@/content/blog";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.cover, alt: post.coverAlt }],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const { Body } = post;
  const { previous, next } = getAdjacentBlogPosts(slug);

  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_35%_at_100%_0%,rgba(0,194,168,0.09),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Link
          href="/blog"
          className="inline-flex text-sm text-foreground-muted transition-colors hover:text-accent"
        >
          ← All writing
        </Link>

        <BlogPostHeader
          title={post.title}
          date={post.date}
          tags={post.tags}
          excerpt={post.excerpt}
          cover={post.cover}
          coverAlt={post.coverAlt}
          mediumUrl={post.mediumUrl}
        />

        <div className="mt-12 max-w-3xl border-t border-border pt-10">
          <Body />
        </div>

        <BlogPostClosing />
        <BlogPostNav
          previous={
            previous
              ? { slug: previous.slug, title: previous.title }
              : null
          }
          next={next ? { slug: next.slug, title: next.title } : null}
        />
      </div>
    </div>
  );
}
