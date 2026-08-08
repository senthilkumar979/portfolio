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
    text: "High-availability enterprise frontends — MFEs, governance, and DX that squads actually ship on.",
    product: {
      name: "Enterprise platforms",
      href: "/work/enterprise-frontend-platforms",
      logo: "/companies/bnppf.png",
      className: "h-[2.5rem] w-[5rem] shrink-0 object-contain",
    },
  },
  {
    label: "Product",
    text: "Founder of Peacock Studio — privacy-first productivity that never leaves the browser.",
    product: {
      name: "Peacock Studio",
      href: "/work/peacock-studio",
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
      logo: "/products/mentorbridge.png",
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
    href: "/work/peacock-studio",
    name: "Peacock Studio",
    logo: "/products/peacock.png",
    role: "Founder",
    title: "Privacy-first productivity that never leaves the browser",
    result:
      "Client-side capture, masking, and playback — built for teams that cannot send sensitive UI data to the cloud.",
    stack: ["React", "TypeScript", "Shadow DOM", "IndexedDB", "Dexie.js"],
    logoClassName: "h-15 w-15",
  },
  {
    slug: "enterprise-frontend-platforms",
    href: "/work/enterprise-frontend-platforms",
    name: "Enterprise platforms",
    role: "Principal Developer",
    title: "Designing and delivering enterprise-scale digital solutions",
    result:
      "Engineering excellence by improving application performance, enhancing user experience, and promoting scalable architecture and development best practices.",
    logo: "/companies/bnppf.png",
    stack: [
      "React",
      "TypeScript",
      "Module Federation",
      "TanStack Query",
      "Next.js",
    ],
    logoClassName: "h-12 w-12",
  },
  {
    slug: "mentorbridge",
    href: "/mentorbridge",
    name: "MentorBridge",
    logo: "/products/mentorbridge.png",
    role: "Coordinator",
    title: "A talent pipeline from curriculum to full-time roles",
    result:
      "100+ engineers trained and 25+ placed through hands-on mentorship and hiring partnerships.",
    stack: ["React", "JavaScript", "Spring Boot", "System design", "Mentorship"],
    logoClassName: "h-[2.5rem] w-[7.5rem]",
  },
] as const;

export const leadershipBlurb = {
  eyebrow: "Leadership & mentorship",
  title: "More than a senior IC",
  body: "I set architecture direction, raise delivery standards through design and code reviews, and build talent pipelines — from enterprise squads to MentorBridge graduates entering full-time roles.",
  ctas: [
    { href: "/mentorbridge", label: "MentorBridge" },
    { href: "/experience", label: "Experience" },
  ],
} as const;

export const stackHighlight = [
  "React",
  "TypeScript",
  "Next.js",
  "Micro Frontends",
  "TanStack Query",
  "Jotai",
  "Node.js",
  "AWS",
  "Vitest",
] as const;

export const closingCta = {
  title: "Open to architecture leadership and product collaboration.",
  body: "If you need a principal-level frontend architect who ships platforms and grows engineers, let’s talk.",
  resumeHref: profile.resumePath,
  email: profile.email,
  linkedinHref: profile.socials.linkedin,
} as const;
