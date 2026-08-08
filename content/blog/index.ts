import type { ComponentType } from "react";
import { MentorBridgePodcastPost } from "./posts/MentorBridgePodcast";
import { StorytellingPracticePost } from "./posts/StorytellingPractice";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  mediumUrl?: string;
  Body: ComponentType;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "mentor-bridge-podcast",
    title:
      "Building Bridges, One Conversation at a Time: Introducing the Mentor Bridge Podcast",
    date: "2025-10-26",
    tags: ["MentorBridge", "Communication", "Podcast"],
    excerpt:
      "How MentorBridge uses student interview podcasts to build fluent professional English communication — not just technical skill.",
    mediumUrl:
      "https://senthilk979.medium.com/building-bridges-one-conversation-at-a-time-introducing-the-mentor-bridge-podcast-0a1d74a49cee",
    Body: MentorBridgePodcastPost,
  },
  {
    slug: "storytelling-practice",
    title: "Why Storytelling Practice Matters in Communication",
    date: "2025-08-17",
    tags: ["Communication", "Storytelling", "Mentorship"],
    excerpt:
      "Storytelling is not optional soft skill fluff — it is how engineers make complex ideas land in emails, pitches, and classrooms.",
    mediumUrl:
      "https://senthilk979.medium.com/why-storytelling-practice-matters-in-communication-c9c2602c8ef8",
    Body: StorytellingPracticePost,
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
