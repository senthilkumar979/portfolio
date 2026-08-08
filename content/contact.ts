import { profile } from "@/content/profile";

export const contactPage = {
  eyebrow: "Contact",
  title: "Let’s talk",
  headline: "Architecture, mentorship, and product collaboration.",
  description:
    "Reach out for platform leadership conversations, MentorBridge partnerships, or product work — I reply personally.",
} as const;

export const contactChannels = [
  {
    label: "Email",
    value: profile.email,
    preview: "email" as const,
    hint: "Best for detailed asks",
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    hint: "Europe timezone · CET / CEST",
  },
  {
    label: "Resume",
    value: "Download PDF",
    preview: "resume" as const,
    hint: "Roles, ventures, and stack",
  },
] as const;

export const contactTopics = [
  {
    label: "Architecture",
    title: "Platform & frontend leadership",
    body: "Enterprise platforms, micro frontends, standards, and delivery systems across squads.",
  },
  {
    label: "Mentorship",
    title: "MentorBridge partnerships",
    body: "Hiring pipelines, workshops, and curriculum collaboration that groom students into professionals.",
  },
  {
    label: "Product",
    title: "Build together",
    body: "Privacy-first tools, developer productivity products, and early-stage product direction.",
  },
] as const;

export const contactElsewhere = [
  { label: "LinkedIn", preview: "linkedin" as const },
  { label: "GitHub", preview: "github" as const },
  { label: "Medium", preview: "medium" as const },
  { label: "MentorBridge", preview: "mentorbridge" as const },
] as const;

export const contactLocation = {
  label: "Based in",
  place: profile.location,
  note: "Working with teams across Europe and India — remote-friendly by default.",
} as const;
