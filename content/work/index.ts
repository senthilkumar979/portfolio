import type { ComponentType } from "react";
import { PeacockStudioBody } from "./peacock-studio";
import { SecuroSphereBody } from "./securosphere";
import { StubLabBody } from "./stublab";
import { StuProBody } from "./stupro";

export interface ProjectScreenshot {
  src: string;
  alt: string;
}

export interface WorkProject {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  url: string;
  chromeStoreUrl?: string;
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
    chromeStoreUrl:
      "https://chromewebstore.google.com/detail/peacock-studio/abjglkkkjaoabboginagilnejoacnnnm",
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
