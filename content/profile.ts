export const profile = {
  name: "Senthil Kumar Thangavel",
  shortName: "Senthil Kumar",
  title: "Principal Frontend Architect",
  location: "Mol, Belgium",
  email: "senthilkumar@mentorbridge.in",
  phone: "+32 476 56 37 10",
  headline: "Frontend Architect building scalable platforms, standards, and the people who ship them.",
  tagline:
    "Engineering leader with 12+ years designing enterprise digital platforms, reusable foundations, and mentoring the next generation of engineers.",
  domain: "https://senthilkumar.life",
  resumePath: "/hero/resume.pdf",
  images: {
    hero: "/hero/hero.png",
    portrait: "/hero/prof.png",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/senthilk979",
    github: "https://github.com/senthilkumar979",
    medium: "https://medium.com/@senthilk979",
    peacock: "https://peacockstudio.app",
    mentorbridge: "https://www.mentorbridge.in",
    bnp: "https://www.bnpparibasfortis.be",
  },
  about: [
    "I am an engineering leader and Frontend Architect based in Belgium, focused on scalable enterprise platforms, clean architecture, and developer experience.",
    "I establish reusable engineering foundations — UI platforms, development standards, and architecture patterns — that improve productivity and software quality across squads.",
    "I founded Peacock Studio, an AI-powered developer productivity platform, and MentorBridge, a mentorship initiative that has trained 100+ engineers and placed 25+ into full-time roles.",
  ],
  education: [
    {
      degree: "Master of Business Administration",
      school: "SRM Institute of Engineering & Technology",
      years: "2024–2026",
    },
    {
      degree: "Bachelor of Engineering",
      school: "Anna University",
      years: "2009–2013",
    },
  ],
  focus: [
    "Frontend architecture and micro frontends for large platforms",
    "Technical leadership, design reviews, and engineering mentorship",
    "Privacy-first client architectures and developer productivity tools",
  ],
} as const;

export type Profile = typeof profile;
