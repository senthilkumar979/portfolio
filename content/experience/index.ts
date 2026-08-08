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
  logo: string;
  logoClassName?: string;
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
    logo: "/companies/bnppf.png",
    logoClassName: "h-10 w-16 object-contain",
    summary:
      "Frontend architecture and technical leadership for enterprise digital platforms — governance, mentorship, and scalable delivery.",
    stack: [
      "React",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "REST APIs",
      "Styled-Components",
      "React Testing Library",
      "Micro Frontends",
      "Agile",
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
    logo: "/companies/ltim.png",
    logoClassName: "h-10 w-14 object-contain",
    summary:
      "Led a cross-functional team of 8+ engineers delivering enterprise platforms with modular architecture and stronger release velocity.",
    stack: [
      "React",
      "TypeScript",
      "Material UI",
      "Ag-Grid",
      "Redux Toolkit",
      "Micro Frontends",
    ],
    Body: LtiBody,
  },
  {
    slug: "oro",
    company: "Oro Inc",
    role: "Senior Front End Engineer",
    location: "India",
    period: "Nov 2023 – Aug 2024",
    url: "https://oroinc.com",
    logo: "/companies/oroinc.png",
    logoClassName: "h-10 w-10 object-contain",
    summary:
      "Built a mobile-first React application and custom design system with modern data workflows against JSON:API backends.",
    stack: [
      "React",
      "TypeScript",
      "Next.js",
      "Vite",
      "Micro Frontends",
      "Styled-Components",
      "TanStack Query",
      "TanStack Table",
      "Redux",
      "Jotai",
      "Dexie.js",
      "IndexedDB",
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
    logo: "/companies/tcs.png",
    logoClassName: "h-10 w-14 object-contain",
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
