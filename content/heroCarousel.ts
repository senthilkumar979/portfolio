import { profile } from "@/content/profile";

export type CarouselKind = "Personal" | "Work";

export interface HeroCarouselItem {
  id: string;
  name: string;
  kind: CarouselKind;
  description: string;
  role: string;
  href?: string;
  logo?: string;
  external?: boolean;
}

export const heroCarouselItems: HeroCarouselItem[] = [
  {
    id: "securosphere",
    name: "SecuroSphere",
    kind: "Personal",
    role: "Founder / Product",
    description:
      "Web security platform with OAuth, MFA, captcha, and AI-assisted analysis for teams.",
    href: "https://securosphere.mentorbridge.in",
    logo: "/products/securosphere.png",
    external: true,
  },
  {
    id: "stublab",
    name: "StubLab",
    kind: "Personal",
    role: "Founder / Product",
    description:
      "Intelligent API stubbing for crafting and testing APIs without backend database dependencies.",
    href: "https://stublab.mentorbridge.in",
    logo: "/products/stublab.png",
    external: true,
  },
  {
    id: "stupro",
    name: "StuPro",
    kind: "Personal",
    role: "Founder / Product",
    description:
      "Productivity product supporting students and early-career engineers on the path to industry.",
    href: "https://stupro.mentorbridge.in",
    logo: "/products/stupro.png",
    external: true,
  },
  {
    id: "peacock",
    name: "Peacock Studio",
    kind: "Personal",
    role: "Founder",
    description:
      "Privacy-first browser platform for workflow documentation, visual testing, and process playback.",
    href: profile.socials.peacock,
    logo: "/products/peacock.png",
    external: true,
  },
  {
    id: "mentorbridge",
    name: "MentorBridge",
    kind: "Personal",
    role: "Chief Coordinator",
    description:
      "Mentorship initiative bridging academia and industry — 100+ engineers trained, 25+ placements.",
    href: profile.socials.mentorbridge,
    logo: "/products/mentorbridge-sm.png",
    external: true,
  },
  {
    id: "bnppf",
    name: "BNP Paribas Fortis",
    kind: "Work",
    role: "Principal Developer",
    description:
      "BNP Paribas Fortis — frontend architecture, micro frontends, and technical leadership for enterprise platforms.",
    href: "/experience/bnp-paribas-fortis",
    logo: "/companies/bnppf.png",
  },
  {
    id: "tcs",
    name: "Tata Consultancy Services",
    kind: "Work",
    role: "Assistant Consultant",
    description:
      "Tata Consultancy Services — nearly a decade of full-stack delivery and legacy modernization into React.",
    href: "/experience/tcs",
    logo: "/companies/tcs.png",
  },
  {
    id: "ltimindtree",
    name: "LTIMindtree",
    kind: "Work",
    role: "Senior Specialist",
    description:
      "Led a cross-functional team of 8+ engineers delivering modular enterprise platforms with stronger release velocity.",
    href: "/experience/ltimindtree",
    logo: "/companies/ltim.png",
  },
  {
    id: "oro",
    name: "Oro Inc",
    kind: "Work",
    role: "Senior Front End Engineer",
    description:
      "Built a mobile-first React application with Vite/Next.js, micro frontends, TanStack Query/Table, and Dexie.js / IndexedDB.",
    href: "/experience/oro",
    logo: "/companies/oroinc.png",
  },
];
