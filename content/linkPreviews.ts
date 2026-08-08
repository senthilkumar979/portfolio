import { profile } from "@/content/profile";

export type LinkPreviewIcon =
  | "linkedin"
  | "github"
  | "medium"
  | "email"
  | "resume";

export interface LinkPreview {
  id: string;
  href: string;
  title: string;
  description: string;
  meta: string;
  logo?: string;
  icon?: LinkPreviewIcon;
  external?: boolean;
}

export const linkPreviews = {
  peacock: {
    id: "peacock",
    href: profile.socials.peacock,
    title: "Peacock Studio",
    description:
      "Privacy-first developer productivity platform — workflow documentation, visual testing, and process playback in the browser.",
    meta: "peacockstudio.app",
    logo: "/products/peacock.png",
    external: true,
  },
  mentorbridge: {
    id: "mentorbridge",
    href: profile.socials.mentorbridge,
    title: "MentorBridge",
    description:
      "Mentorship initiative bridging academia and industry — 100+ engineers trained, 25+ full-time placements.",
    meta: "mentorbridge.in",
    logo: "/products/mentorbridge.png",
    external: true,
  },
  linkedin: {
    id: "linkedin",
    href: profile.socials.linkedin,
    title: "LinkedIn",
    description:
      "Professional profile — experience, MentorBridge, and enterprise architecture work.",
    meta: "linkedin.com/in/senthilk979",
    icon: "linkedin",
    external: true,
  },
  github: {
    id: "github",
    href: profile.socials.github,
    title: "GitHub",
    description:
      "Open-source work, experiments, and repositories from product and platform builds.",
    meta: "github.com/senthilkumar979",
    icon: "github",
    external: true,
  },
  medium: {
    id: "medium",
    href: profile.socials.medium,
    title: "Medium",
    description:
      "Writing on mentorship, communication, and building engineering careers.",
    meta: "medium.com/@senthilk979",
    icon: "medium",
    external: true,
  },
  resume: {
    id: "resume",
    href: profile.resumePath,
    title: "Resume",
    description:
      "PDF resume — roles, ventures, and the stack behind enterprise delivery.",
    meta: "Download PDF",
    icon: "resume",
    external: true,
  },
  email: {
    id: "email",
    href: `mailto:${profile.email}`,
    title: "Email",
    description:
      "Best channel for architecture conversations, mentoring partnerships, and product collaboration.",
    meta: profile.email,
    icon: "email",
    external: false,
  },
} as const satisfies Record<string, LinkPreview>;

export type LinkPreviewId = keyof typeof linkPreviews;
