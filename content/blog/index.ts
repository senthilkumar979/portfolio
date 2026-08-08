import type { ComponentType } from "react";
import { HowToDelegateEffectivelyPost } from "./posts/HowToDelegateEffectively";
import { InspirationsControversialPost } from "./posts/InspirationsControversial";
import { MentorBridgePodcastPost } from "./posts/MentorBridgePodcast";
import { MigratingToReactPost } from "./posts/MigratingToReact";
import { PersuadingClientsMigrationPost } from "./posts/PersuadingClientsMigration";
import { PowerOfTeamEventsPost } from "./posts/PowerOfTeamEvents";
import { RefactorOrRewritePost } from "./posts/RefactorOrRewrite";
import { StandingOutInATeamPost } from "./posts/StandingOutInATeam";
import { StealthyStrategiesPost } from "./posts/StealthyStrategies";
import { StorytellingPracticePost } from "./posts/StorytellingPractice";
import { TransparentLeadershipPost } from "./posts/TransparentLeadership";
import { UnleashingConfidencePost } from "./posts/UnleashingConfidence";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  mediumUrl?: string;
  Body: ComponentType;
}

export const blogPage = {
  eyebrow: "Blog",
  title: "Writing",
  headline: "Mentorship, communication, and engineering craft.",
  description:
    "Notes from building MentorBridge and coaching engineers — authored here as React components, originally published on Medium.",
} as const;

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
  {
    slug: "inspirations-controversial",
    title: "What I Learned from My Inspirations Even the Controversial Ones",
    date: "2025-07-24",
    tags: ["Leadership", "Inspiration", "Growth"],
    excerpt:
      "I don’t look for perfect people — I look for powerful qualities. Lessons on discipline, persistence, resilience, vision, and service.",
    mediumUrl:
      "https://senthilk979.medium.com/what-i-learned-from-my-inspirations-even-the-controversial-ones-332b73211b22",
    Body: InspirationsControversialPost,
  },
  {
    slug: "refactor-or-rewrite",
    title: "Refactor or Rewrite? How I Chose the Right Path in a Real-World Project",
    date: "2025-06-03",
    tags: ["Engineering", "Legacy", "Architecture"],
    excerpt:
      "A structured decision framework — and a small rewrite spike — that led to refactor first, rewrite later on an 8-year-old React app.",
    mediumUrl:
      "https://senthilk979.medium.com/refactor-or-rewrite-how-i-chose-the-right-path-in-a-real-world-project-6be108b106da",
    Body: RefactorOrRewritePost,
  },
  {
    slug: "standing-out-in-a-team",
    title: "Standing Out in a Team: A Guide to Excel",
    date: "2024-09-26",
    tags: ["Leadership", "Team", "Workplace"],
    excerpt:
      "Dedication, curiosity, and going the extra mile — a practical flow for becoming a key asset on any engineering team.",
    mediumUrl:
      "https://senthilk979.medium.com/standing-out-in-a-team-a-guide-to-excel-c0d56c058c4f",
    Body: StandingOutInATeamPost,
  },
  {
    slug: "how-to-delegate-effectively",
    title: "How to Delegate Effectively",
    date: "2023-08-21",
    tags: ["Leadership", "Team", "Productivity"],
    excerpt:
      "Delegation isn’t offloading work — it’s leveraging team strengths, setting clear expectations, and freeing developers to focus on what matters most.",
    mediumUrl:
      "https://senthilk979.medium.com/how-to-delegate-effectively-e614039d1907",
    Body: HowToDelegateEffectivelyPost,
  },
  {
    slug: "unleashing-confidence",
    title: "Unleashing Confidence Through Action, Even When Scared",
    date: "2023-07-18",
    tags: ["Confidence", "Growth", "Mindset"],
    excerpt:
      "You will never feel completely ready — confidence is a byproduct of action. Embrace the fear and do it scared.",
    mediumUrl:
      "https://senthilk979.medium.com/unleashing-confidence-through-action-even-when-scared-3b8d5ea91b5a",
    Body: UnleashingConfidencePost,
  },
  {
    slug: "power-of-team-events",
    title: "The Power of Team Events: Uniting and Inspiring Success",
    date: "2023-06-30",
    tags: ["Team Building", "Collaboration", "Teamwork"],
    excerpt:
      "Retreats, cook-offs, and hackathons — how team events strengthen bonds, boost morale, and unlock collaboration.",
    mediumUrl:
      "https://senthilk979.medium.com/the-power-of-team-events-uniting-and-inspiring-success-9cc9d3b35a53",
    Body: PowerOfTeamEventsPost,
  },
  {
    slug: "stealthy-strategies",
    title:
      "Stealthy Strategies: Ascending the Corporate Job Ladder with Minimal Disruption",
    date: "2023-06-27",
    tags: ["Career", "Leadership", "Growth"],
    excerpt:
      "Low-profile tactics for climbing the ladder — clear goals, quiet excellence, mentorship, and tactful ambition.",
    mediumUrl:
      "https://senthilk979.medium.com/stealthy-strategies-ascending-the-corporate-job-ladder-with-minimal-disruption-f891cc64aabe",
    Body: StealthyStrategiesPost,
  },
  {
    slug: "persuading-clients-migration",
    title:
      "Unlocking Success: Persuading Clients to Embrace Migration of an Application having Technical Debt and an Outdated Tech Stack",
    date: "2023-06-25",
    tags: ["Migration", "Technical Debt", "Consulting"],
    excerpt:
      "A ten-step playbook for selling modernization — pain points, business case, phased delivery, and proof-of-concept momentum.",
    Body: PersuadingClientsMigrationPost,
  },
  {
    slug: "transparent-leadership",
    title:
      "The Power of Transparent Leadership: Inspiring Trust and Uniting Teams",
    date: "2023-06-20",
    tags: ["Leadership", "Transparency", "Culture"],
    excerpt:
      "Why transparency builds trust — with lessons from Nadella, Barra, and Pichai, plus practical habits for likable leaders.",
    mediumUrl:
      "https://senthilk979.medium.com/the-power-of-transparent-leadership-inspiring-trust-and-uniting-teams-92fe1a1d1cef",
    Body: TransparentLeadershipPost,
  },
  {
    slug: "migrating-to-react",
    title: "The Necessity of Migrating Legacy Applications to React JS",
    date: "2023-06-20",
    tags: ["React", "Migration", "Legacy"],
    excerpt:
      "Why teams move off AngularJS and Backbone — better DX, performance, scalability, ecosystem, and long-term viability with React.",
    mediumUrl:
      "https://senthilk979.medium.com/the-necessity-of-migrating-legacy-applications-to-react-js-45a3e0abd5d1",
    Body: MigratingToReactPost,
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAdjacentBlogPosts(slug: string): {
  previous: BlogPost | null;
  next: BlogPost | null;
} {
  const index = blogPosts.findIndex((post) => post.slug === slug);
  if (index < 0) return { previous: null, next: null };

  return {
    previous: index > 0 ? blogPosts[index - 1] : null,
    next: index < blogPosts.length - 1 ? blogPosts[index + 1] : null,
  };
}

export function formatBlogDate(
  date: string,
  style: "short" | "long" = "short",
): string {
  return new Date(date).toLocaleDateString(
    "en-GB",
    style === "long"
      ? { year: "numeric", month: "long", day: "numeric" }
      : { year: "numeric", month: "short", day: "numeric" },
  );
}
