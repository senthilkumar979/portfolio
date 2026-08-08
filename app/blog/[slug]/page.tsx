import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/ArticleLayout";
import { TagList } from "@/components/TagList";
import { blogPosts, getBlogBySlug } from "@/content/blog";

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
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const { Body } = post;
  const formattedDate = new Date(post.date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <ArticleLayout
        eyebrow="Blog"
        title={post.title}
        meta={formattedDate}
        backHref="/blog"
        backLabel="All posts"
        externalHref={post.mediumUrl}
        externalLabel="Originally on Medium"
        aside={<TagList title="Tags" items={post.tags} />}
      >
        <Body />
      </ArticleLayout>
    </div>
  );
}
