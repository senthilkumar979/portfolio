import type { ComponentType } from "react";
import { PeacockStudioBody } from "./peacock-studio";
import { EnterpriseFrontendBody } from "./enterprise-frontend-platforms";

export interface WorkProject {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  url?: string;
  year: string;
  tags: string[];
  tools: string[];
  Body: ComponentType;
}

export const workProjects: WorkProject[] = [
  {
    slug: "peacock-studio",
    title: "Peacock Studio",
    subtitle: "Edge-native developer productivity platform",
    summary:
      "A privacy-first browser application that automates workflow documentation, visual testing, and interactive process playback for engineering and QA teams.",
    url: "https://peacockstudio.app",
    year: "2026–Present",
    tags: ["Founder", "Product", "Browser Extension"],
    tools: [
      "React",
      "TypeScript",
      "Shadow DOM",
      "Dexie.js",
      "IndexedDB",
      "Chrome / Edge APIs",
    ],
    Body: PeacockStudioBody,
  },
  {
    slug: "enterprise-frontend-platforms",
    title: "Enterprise Frontend Platforms",
    subtitle: "Architecture for high-availability digital banking & platforms",
    summary:
      "Steering frontend architecture, micro frontends, and engineering standards for large enterprise platforms — focusing on scalability, DX, and release velocity.",
    year: "2014–Present",
    tags: ["Architecture", "Micro Frontends", "Leadership"],
    tools: [
      "React",
      "TypeScript",
      "Next.js",
      "Module Federation",
      "TanStack Query",
      "Redux Toolkit",
      "Jotai",
      "Node.js",
      "AWS",
    ],
    Body: EnterpriseFrontendBody,
  },
];

export function getWorkBySlug(slug: string): WorkProject | undefined {
  return workProjects.find((project) => project.slug === slug);
}
