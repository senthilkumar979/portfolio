import { experienceRoles } from "@/content/experience";
import { profile } from "@/content/profile";

export const aboutPage = {
  eyebrow: "About",
  title: profile.name,
  description: `${profile.title} · ${profile.location}`,
  intro:
    "Engineering leader and Frontend Architect with 12+ years designing scalable enterprise platforms, reusable foundations, and the people who ship them.",
} as const;

export const aboutStats = [
  { label: "Years experience", value: "12+" },
  { label: "Engineers mentored", value: "100+" },
  { label: "Placements via MentorBridge", value: "25+" },
  { label: "Based in", value: "Belgium" },
] as const;

export const aboutStory = [
  "I am a Principal Frontend Developer at BNP Paribas Fortis in Brussels, focused on scalable enterprise platforms, clean architecture, and developer experience across squads.",
  "I establish reusable engineering foundations — UI platforms, development standards, and architecture patterns — that improve productivity and software quality. Mentorship is part of how I deliver: design reviews, workshops, and coaching that raise the floor for the whole team.",
  "I founded Peacock Studio, a privacy-first developer productivity platform, and MentorBridge, a mentorship initiative that trains aspiring engineers and builds hiring pipelines into full-time roles — with a particular focus on students from rural backgrounds. I also publish useThisHook, a typed open-source React hooks library.",
] as const;

export const aboutFocus = [
  {
    label: "Architecture",
    title: "Platforms that scale",
    body: "Frontend architecture and micro frontends for large multi-squad platforms — governance, standards, and delivery velocity.",
  },
  {
    label: "Leadership",
    title: "Standards through coaching",
    body: "Technical leadership via design reviews, code reviews, and workshops that compound into better releases.",
  },
  {
    label: "Product",
    title: "Privacy-first tools",
    body: "Client architectures and developer productivity products that keep sensitive work close to the browser.",
  },
  {
    label: "Talent",
    title: "Pipelines into industry",
    body: "Curriculum-to-career mentorship through MentorBridge — production standards, portfolios, and hiring partnerships.",
  },
] as const;

export const aboutToolkit = {
  eyebrow: "Tools",
  title: "What I reach for",
  body: "Preferred technologies for platforms and products — hover a tool to see why it stays on the list.",
  href: "/tools",
} as const;

export const aboutVentures = [
  {
    name: "Peacock Studio",
    role: "Founder",
    href: "/projects/peacock-studio",
    preview: "peacock" as const,
    logo: "/products/peacock.png",
    logoClassName: "h-15 w-24 object-contain",
    body: "Privacy-first productivity — workflow documentation, visual testing, and process playback that never leaves the browser.",
  },
  {
    name: "MentorBridge",
    role: "Chief Coordinator",
    href: "/mentorbridge",
    preview: "mentorbridge" as const,
    logo: "/products/mentorbridge-sm.png",
    logoClassName: "h-10 w-24 object-contain",
    body: "Engineering mentorship bridging academia and industry — 100+ trained, 25+ full-time placements.",
  },
  {
    name: "useThisHook",
    role: "Author",
    href: "/projects/usethishook",
    preview: "usethishook" as const,
    logo: "/products/usethishook.svg",
    logoClassName: "h-12 w-12 object-contain",
    body: "Typed, tree-shakeable React hooks with zero runtime dependencies — drop one import into any app.",
  },
] as const;

export const aboutLanguages = [
  { name: "Tamil", level: "Mother tongue" },
  { name: "English", level: "Full professional" },
] as const;

export const aboutAwards = [
  {
    title: "Key Contributor",
    org: "BNP Paribas Fortis",
    year: "2025",
  },
  {
    title: "Continuous Learner of the Month",
    org: "LTIMindtree",
    year: "2024",
  },
  {
    title: "Special Initiative Award",
    org: "Tata Consultancy Services",
    year: "2023",
    note: "Growth Catalyst for BFSI Europe North West",
  },
  {
    title: "360° Associate of the Year",
    org: "Tata Consultancy Services",
    year: "2022",
  },
] as const;

export const aboutCareer = experienceRoles.map((role) => ({
  company: role.company,
  role: role.role,
  period: role.period,
  location: role.location,
  href: `/experience/${role.slug}`,
  summary: role.summary,
}));

export const aboutConnect = [
  { id: "resume" as const, label: "Resume" },
  { id: "linkedin" as const, label: "LinkedIn" },
  { id: "github" as const, label: "GitHub" },
  { id: "medium" as const, label: "Medium" },
  { id: "email" as const, label: "Email" },
];
