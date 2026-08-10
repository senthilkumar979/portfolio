import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { experienceRoles } from "@/content/experience";
import { profile } from "@/content/profile";
import { workProjects } from "@/content/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/experience",
    "/projects",
    "/mentorbridge",
    "/blog",
    "/toolkit",
    "/contact",
  ].map((path) => ({
    url: `${profile.domain}${path}`,
    lastModified: now,
    changeFrequency: path === "" || path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const projectRoutes: MetadataRoute.Sitemap = workProjects.map((project) => ({
    url: `${profile.domain}/projects/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const experienceRoutes: MetadataRoute.Sitemap = experienceRoles.map(
    (experience) => ({
      url: `${profile.domain}/experience/${experience.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    }),
  );

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${profile.domain}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...projectRoutes,
    ...experienceRoutes,
    ...blogRoutes,
    {
      url: `${profile.domain}/feed.xml`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
