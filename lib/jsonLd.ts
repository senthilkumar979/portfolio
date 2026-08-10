import { blogPosts } from "@/content/blog";
import { mentorbridge } from "@/content/mentorbridge";
import { profile } from "@/content/profile";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    url: profile.domain,
    email: profile.email,
    telephone: profile.phone,
    image: `${profile.domain}${profile.images.portrait}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mol",
      addressCountry: "BE",
    },
    sameAs: [
      profile.socials.linkedin,
      profile.socials.github,
      profile.socials.medium,
      profile.socials.mentorbridge,
      profile.socials.peacock,
    ],
    worksFor: {
      "@type": "Organization",
      name: "BNP Paribas Fortis",
      url: profile.socials.bnp,
    },
    alumniOf: profile.education.map((item) => ({
      "@type": "EducationalOrganization",
      name: item.school,
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: profile.name,
    url: profile.domain,
    description: profile.tagline,
    author: {
      "@type": "Person",
      name: profile.name,
      url: profile.domain,
    },
  };
}

export function mentorbridgeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: mentorbridge.name,
    url: mentorbridge.url,
    description: mentorbridge.summary,
    foundingDate: "2024-09",
    founder: {
      "@type": "Person",
      name: profile.name,
      url: profile.domain,
    },
  };
}

export function blogPostingJsonLd(slug: string) {
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: `${profile.domain}${post.cover}`,
    url: `${profile.domain}/blog/${post.slug}`,
    author: {
      "@type": "Person",
      name: profile.name,
      url: profile.domain,
    },
    publisher: {
      "@type": "Person",
      name: profile.name,
      url: profile.domain,
    },
    keywords: post.tags.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${profile.domain}/blog/${post.slug}`,
    },
  };
}
