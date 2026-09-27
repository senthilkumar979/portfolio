import { profile } from "@/content/profile";

export interface ImpactMetric {
  label: string;
  value: string;
  logo?: string;
}

export const impactMetrics: ImpactMetric[] = [
  { label: "Years experience", value: "12+" },
  { label: "Current role", value: "Principal Developer @ BNP Paribas Fortis", logo: "/companies/bnppf.png" },
  { label: "Engineers mentored", value: "100+" },
] as const;

export const positioningLine =
  "Experienced engineering lead enabling teams to architect, deliver, and scale reliable frontends.";

export interface SnapshotFact {
  label: string;
  text: string;
  product?: {
    name: string;
    href: string;
    logo: string;
    className: string;
  };
}

export const snapshotFacts: SnapshotFact[] = [
  {
    label: "Architecture",
    text: "Helping teams deliver high-quality web applications while driving engineering excellence",
    product: {
      name: "Enterprise platforms",
      href: "/projects/enterprise-frontend-platforms",
      logo: "/companies/bnppf.png",
      className: "h-[2.5rem] w-[5rem] shrink-0 object-contain",
    },
  },
  {
    label: "Product",
    text: "Founder of Peacock Studio — privacy-first productivity that never leaves the browser.",
    product: {
      name: "Peacock Studio",
      href: "/projects/peacock-studio",
      logo: "/products/peacock.png",
      className: "h-[3.5rem] w-[3.5rem] shrink-0 object-contain",
    },
  },
  {
    label: "Mentorship",
    text: "Chief Coordinator of MentorBridge — curriculum to full-time roles for early-career engineers.",
    product: {
      name: "MentorBridge",
      href: "/mentorbridge",
      logo: "/products/mentorbridge-sm.png",
      className: "h-[2.5rem] w-[7.5rem] shrink-0 object-contain",
    },
  },
];

export const snapshotSocials = [
  { id: "email", label: "Email" },
  { id: "linkedin", label: "LinkedIn" },
  { id: "github", label: "GitHub" },
  { id: "medium", label: "Medium" },
  { id: "resume", label: "Resume" },
] as const;

export const featuredWork = [
  {
    slug: "peacock-studio",
    href: "/projects/peacock-studio",
    name: "Peacock Studio",
    logo: "/products/peacock.png",
    role: "Founder",
    title: "Privacy-first productivity that never leaves the browser",
    result:
      "A Platform where developers and business document product workflows together",
    stack: ["React", "TypeScript", "Browser Extensions", "IndexedDB", "Supabase", "Vite", "Tanstack Query", "PostHog", "Sentry"],
    logoClassName: "h-15 w-15",
  },
  {
    slug: "usethishook",
    href: "/projects/usethishook",
    name: "useThisHook",
    logo: "/products/usethishook.svg",
    role: "Author",
    title: "Typed React hooks you can drop into any app",
    result:
      "32 named, tree-shakeable hooks with zero runtime dependencies — published on npm for Vite, Next.js, and Module Federation hosts.",
    stack: ["React", "TypeScript", "Vitest", "tsup", "Vite"],
    logoClassName: "h-14 w-14",
  },
  {
    slug: "enterprise-frontend-platforms",
    href: "/projects/enterprise-frontend-platforms",
    name: "Enterprise platforms",
    role: "Principal Developer",
    title: "Designing and delivering enterprise-scale digital solutions",
    result:
      "Engineering excellence by improving application performance, enhancing user experience, and promoting scalable architecture and development best practices.",
    logo: "/companies/bnppf.png",
    stack: [
      "React",
      "TypeScript",
      "Micro Frontends",
      "Redux Toolkit",
      "Node.js",
      "Agile",
    ],
    logoClassName: "h-12 w-12",
  },
  {
    slug: "mentorbridge",
    href: "/mentorbridge",
    name: "MentorBridge",
    logo: "/products/mentorbridge-sm.png",
    role: "Coordinator",
    title: "A talent pipeline from curriculum to full-time roles",
    result:
      "100+ engineers trained and 25+ placed through hands-on mentorship and hiring partnerships.",
    stack: ["React", "JavaScript", "TypeScript", "System design", "Mentorship", "Storytelling", "Communication", "Node JS", "PostgreSQL"],
    logoClassName: "h-20 w-18",
  },
] as const;

export interface LeadershipPillar {
  label: string;
  title: string;
  body: string;
  proof: string;
}

export const leadershipBand = {
  eyebrow: "Leadership & mentorship",
  title: "More than a Senior Dev",
  body: "I set architecture direction, raise delivery standards through design and code reviews, and build talent pipelines — from enterprise squads to MentorBridge graduates entering full-time roles.",
  pillars: [
    {
      label: "Architecture",
      title: "Direction that scales",
      body: "Governance, technical roadmaps, and reusable frontend foundations so squads ship on shared patterns instead of reinventing the platform.",
      proof: "Principal Developer · BNP Paribas Fortis",
    },
    {
      label: "Standards",
      title: "Reviews that raise the bar",
      body: "Structured design and code reviews, workshops, and DX tooling that cut defects and accelerate release cycles across squads.",
      proof: "Coaching · reviews · technical workshops",
    },
    {
      label: "Talent",
      title: "Pipelines into full-time roles",
      body: "Hands-on mentorship from curriculum to production readiness — bridging academia and industry hiring with real hiring partnerships.",
      proof: "100+ trained · 25+ placed via MentorBridge",
    },
  ] satisfies LeadershipPillar[],
  ctas: [
    { href: "/mentorbridge", label: "MentorBridge" },
    { href: "/experience", label: "Experience" },
    { href: "/about", label: "About" },
  ],
} as const;

export interface StackCategory {
  label: string;
  title: string;
  items: readonly string[];
}

export const trustedStack = {
  eyebrow: "Trusted stack",
  title: "Flagship tools by craft",
  body: "Opinionated defaults for greenfield platforms — from UI foundations and architecture patterns to quality tooling that keeps delivery predictable.",
  categories: [
    {
      label: "Core",
      title: "UI platforms",
      items: ["React", "TypeScript", "Next.js", "Vite"],
    },
    {
      label: "Architecture",
      title: "Platform patterns",
      items: [
        "Micro Frontends",
        "Monorepo",
        "Redux Toolkit",
      ],
    },
    {
      label: "State",
      title: "Data & persistence",
      items: ["TanStack Query", "Jotai", "IndexedDB"],
    },
    {
      label: "Interface",
      title: "Design systems",
      items: ["Styled-Components", "Radix UI", "TanStack", "Highcharts"],
    },
    {
      label: "Services",
      title: "APIs & cloud",
      items: ["Node.js", "Express", "AWS", "Axios", "Trigger.dev"],
    },
    {
      label: "Data",
      title: "Backend & edge",
      items: ["Supabase", "MongoDB", "Upstash"],
    }
  ] satisfies StackCategory[],
} as const;

export const closingCta = {
  title: "Open to architecture leadership and product collaboration.",
  body: "If you need a principal-level frontend architect who ships platforms and grows engineers, let’s talk.",
  resumeHref: profile.resumePath,
  email: profile.email,
  linkedinHref: profile.socials.linkedin,
} as const;
