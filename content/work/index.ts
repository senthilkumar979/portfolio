import type { ComponentType } from "react";
import { EnterpriseFrontendBody } from "./enterprise-frontend-platforms";
import { PeacockStudioBody } from "./peacock-studio";
import { SecuroSphereBody } from "./securosphere";
import { StubLabBody } from "./stublab";
import { StuProBody } from "./stupro";
import { UseThisHookBody } from "./usethishook";

export interface ProjectScreenshot {
  src: string;
  alt: string;
}

export interface WorkProject {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  url?: string;
  secondaryUrl?: string;
  secondaryLabel?: string;
  logo: string;
  logoClassName?: string;
  year: string;
  role: string;
  tags: string[];
  tools: string[];
  screenshots: ProjectScreenshot[];
  Body: ComponentType;
}

export const workProjects: WorkProject[] = [
  {
    slug: "peacock-studio",
    title: "Peacock Studio",
    subtitle: "Edge-native developer productivity platform",
    summary:
      "A privacy-first browser application that automates workflow documentation, visual testing, and interactive process playback for engineering and QA teams.",
    url: "https://peacockstudio.app?ref=peacock-studio&embed=true",
    secondaryUrl:
      "https://chromewebstore.google.com/detail/peacock-studio/abjglkkkjaoabboginagilnejoacnnnm",
    secondaryLabel: "Chrome Web Store",
    logo: "/products/peacock.png",
    logoClassName: "h-12 w-12 object-contain",
    year: "2026–Present",
    role: "Founder",
    tags: ["Product", "Browser Extension", "Privacy"],
    tools: [
      "React",
      "TypeScript",
      "Shadow DOM",
      "Dexie.js",
      "IndexedDB",
      "Chrome / Edge APIs",
    ],
    screenshots: [
      {
        src: "/projects/peacock-studio/01-home.jpg",
        alt: "Peacock Studio solutions for Product Owners & Managers",
      },
      {
        src: "/projects/peacock-studio/02-solutions.jpg",
        alt: "Peacock Studio product features - Flow Doc",
      },
    ],
    Body: PeacockStudioBody,
  },
  {
    slug: "usethishook",
    title: "useThisHook",
    subtitle: "Typed React hooks you can drop into any app",
    summary:
      "An open-source library of 32 named, tree-shakeable React hooks — zero runtime dependencies, generated TypeScript types, and SSR-aware browser APIs.",
    url: "https://usethishook.mentorbridge.in/",
    secondaryUrl: "https://github.com/senthilkumar979/useThisHook",
    secondaryLabel: "GitHub",
    logo: "/products/usethishook.svg",
    logoClassName: "h-12 w-12 object-contain",
    year: "2026–Present",
    role: "Author",
    tags: ["Open Source", "React", "Developer Tools"],
    tools: ["React", "TypeScript", "Vitest", "tsup", "Vite"],
    screenshots: [
      {
        src: "/projects/usethishook/01-home.jpg",
        alt: "useThisHook docs — typed hooks with live previews and API reference",
      },
      {
        src: "/projects/usethishook/02-confirm.jpg",
        alt: "useConfirm — await a yes/no dialog from a click handler",
      },
    ],
    Body: UseThisHookBody,
  },
  {
    slug: "enterprise-frontend-platforms",
    title: "Enterprise frontend platforms",
    subtitle: "Architecture, standards, and squad delivery at scale",
    summary:
      "Frontend architecture and technical leadership for large multi-squad digital platforms — governance, micro frontends, and reusable foundations that raise quality without slowing delivery.",
    logo: "/companies/bnppf.png",
    logoClassName: "h-12 w-12 object-contain",
    year: "2024–Present",
    role: "Principal Developer",
    tags: ["Enterprise", "Architecture", "Micro Frontends"],
    tools: [
      "React",
      "TypeScript",
      "Micro Frontends",
      "Tanstack Query",
      "Node.js",
      "Design systems",
      "Agile",
    ],
    screenshots: [],
    Body: EnterpriseFrontendBody,
  },
  {
    slug: "securosphere",
    title: "SecuroSphere",
    subtitle: "Web security platform for teams",
    summary:
      "Multi-layered application security — OAuth, MFA, captcha, and AI-assisted analysis — with flexible team structures for SMEs.",
    url: "https://securosphere.mentorbridge.in",
    logo: "/products/securosphere.png",
    logoClassName: "h-12 w-12 object-contain",
    year: "2025",
    role: "Product mentor",
    tags: ["MentorBridge", "Security", "Product"],
    tools: ["Spring Boot", "JWT", "MongoDB", "OAuth", "MFA", "Cloudflare"],
    screenshots: [
      {
        src: "/projects/securosphere/01-home.png",
        alt: "SecuroSphere landing — protect web applications",
      },
      {
        src: "/projects/securosphere/02-features.png",
        alt: "Features - OAuth, MFA, captcha, and AI-assisted analysis",
      },
    ],
    Body: SecuroSphereBody,
  },
  {
    slug: "stublab",
    title: "StubLab",
    subtitle: "Intelligent API stubbing for faster delivery",
    summary:
      "Stub server tooling that lets teams craft, configure, and test APIs without waiting on backend databases — built with MentorBridge and SSMIET IIC.",
    url: "https://stublab.mentorbridge.in",
    logo: "/products/stublab.png",
    logoClassName: "h-12 w-12 object-contain",
    year: "2025",
    role: "Product mentor",
    tags: ["MentorBridge", "APIs", "Developer Tools"],
    tools: ["Node.js", "React", "API stubbing", "MongoDB", "Gemini AI"],
    screenshots: [
      {
        src: "/projects/stublab/01-home.jpg",
        alt: "StubLab landing — create and test APIs without a backend",
      },
      {
        src: "/projects/stublab/02-about.png",
        alt: "Create and test APIs with StubLab",
      },
    ],
    Body: StubLabBody,
  },
  {
    slug: "stupro",
    title: "StuPro",
    subtitle: "Student-to-industry learning mobile app",
    summary:
      "An e-learning mobile app for students and early-career engineers — AI-assisted learning and structure that support the jump from academia to professional work.",
    url: "https://stupro.mentorbridge.in",
    logo: "/products/stupro.png",
    logoClassName: "h-12 w-12 object-contain",
    year: "2025",
    role: "Product mentor",
    tags: ["MentorBridge", "Education", "Product"],
    tools: ["React Native", "JavaScript", "Java", "Spring Boot", "MongoDB", "Gemini AI"],
    screenshots: [
      {
        src: "/projects/stupro/01-home.png",
        alt: "StuPro landing — from student to professional",
      },
      {
        src: "/projects/stupro/02-product.png",
        alt: "Need for StuPro - 5 cuts story",
      },
    ],
    Body: StuProBody,
  },
];

export function getWorkBySlug(slug: string): WorkProject | undefined {
  return workProjects.find((project) => project.slug === slug);
}
