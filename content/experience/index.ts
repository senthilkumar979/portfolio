import type { ComponentType } from "react";
import { BnpBody } from "./bnp-paribas-fortis";
import { LtiBody } from "./ltimindtree";
import { OroBody } from "./oro";
import { TcsBody } from "./tcs";

export interface ExperienceRole {
  slug: string;
  company: string;
  role: string;
  location: string;
  period: string;
  url?: string;
  summary: string;
  stack: string[];
  Body: ComponentType;
}

export const experienceRoles: ExperienceRole[] = [
  {
    slug: "bnp-paribas-fortis",
    company: "BNP Paribas Fortis",
    role: "Principal Developer",
    location: "Brussels, Belgium",
    period: "Jul 2025 – Present",
    url: "https://www.bnpparibasfortis.be",
    summary:
      "Frontend architecture and technical leadership for enterprise digital platforms — governance, mentorship, and scalable delivery.",
    stack: [
      "React",
      "TypeScript",
      "Next.js",
      "Micro Frontends",
      "Redux Toolkit",
      "Node.js",
      "AWS",
    ],
    Body: BnpBody,
  },
  {
    slug: "ltimindtree",
    company: "LTIMindtree",
    role: "Senior Specialist",
    location: "Coimbatore, India",
    period: "Oct 2024 – Jun 2025",
    url: "https://www.ltimindtree.com",
    summary:
      "Led a cross-functional team of 8+ engineers delivering enterprise platforms with modular architecture and stronger release velocity.",
    stack: ["React", "TypeScript", "Full-stack", "Agile"],
    Body: LtiBody,
  },
  {
    slug: "oro",
    company: "Oro Inc",
    role: "Senior Front End Engineer",
    location: "India",
    period: "Nov 2023 – Aug 2024",
    url: "https://oroinc.com",
    summary:
      "Built a mobile-first React application and custom design system with modern data workflows against JSON:API backends.",
    stack: [
      "React",
      "TypeScript",
      "Styled-Components",
      "TanStack Query",
      "Redux",
      "Jotai",
    ],
    Body: OroBody,
  },
  {
    slug: "tcs",
    company: "TATA Consultancy Services",
    role: "Assistant Consultant",
    location: "Chennai, India",
    period: "Feb 2014 – Nov 2023",
    url: "https://www.tcs.com",
    summary:
      "Nearly a decade of full-stack delivery — modernizing legacy clients into React and building reliable services across the SDLC.",
    stack: [
      "Java",
      "Spring Boot",
      "Node.js",
      "React",
      "TypeScript",
      "Angular",
      "Backbone.js",
    ],
    Body: TcsBody,
  },
];

export function getExperienceBySlug(slug: string): ExperienceRole | undefined {
  return experienceRoles.find((role) => role.slug === slug);
}
