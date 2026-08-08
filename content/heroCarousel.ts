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
      "Personal product focused on security-minded workflows and safer engineering practices.",
    logo: "/products/securosphere.png",
  },
  {
    id: "stublab",
    name: "StubLab",
    kind: "Personal",
    role: "Founder / Product",
    description:
      "Personal tooling product for stubbing and exercising APIs during development and testing.",
    logo: "/products/stublab.png",
  },
  {
    id: "stupro",
    name: "StuPro",
    kind: "Personal",
    role: "Founder / Product",
    description:
      "Personal product built to support student and early-career engineer productivity.",
    logo: "/products/stupro.png",
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
    logo: "/products/mentorbridge.png",
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
      "Built a mobile-first React application and design system with TanStack Query, Redux, and Jotai.",
    href: "/experience/oro",
    logo: "/companies/oroinc.png",
  },
];
