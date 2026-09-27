export const profile = {
  name: "Senthil Kumar Thangavel",
  shortName: "Senthil Kumar",
  title: "Principal Frontend Developer",
  location: "Mol, Belgium",
  email: "senthilkumar@mentorbridge.in",
  phone: "+32 476 56 37 10",
  headline: "Principal Frontend Developer building scalable platforms, standards, and the people who ship them.",
  tagline:
    "Engineering leader with 12+ years designing enterprise digital platforms, reusable foundations, and mentoring the next generation of engineers.",
  domain: "https://senthilkumar.mentorbridge.in",
  resumePath: "/hero/resume.pdf",
  resumeFileName: "Senthil Kumar Resume - Frontend - React.pdf",
  images: {
    hero: "/hero/hero.png",
    portrait: "/hero/straight.jpg",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/senthilk979",
    github: "https://github.com/senthilkumar979",
    medium: "https://medium.com/@senthilk979",
    peacock: "https://peacockstudio.app",
    peacockChromeStore:
      "https://chromewebstore.google.com/detail/peacock-studio/abjglkkkjaoabboginagilnejoacnnnm",
    mentorbridge: "https://www.mentorbridge.in",
    usethishook: "https://usethishook.mentorbridge.in/",
    bnp: "https://www.bnpparibasfortis.be",
  },
  about: [
    "I am a Principal Frontend Developer at BNP Paribas Fortis in Brussels, focused on scalable enterprise platforms, clean architecture, and developer experience across squads.",
    "I establish reusable engineering foundations — UI platforms, development standards, and architecture patterns — that improve productivity and software quality. Mentorship is part of how I deliver: design reviews, workshops, and coaching that raise the floor for the whole team.",
    "I founded Peacock Studio, a privacy-first developer productivity platform, and MentorBridge, a mentorship initiative that trains aspiring engineers and builds hiring pipelines into full-time roles — with a particular focus on students from rural backgrounds. I also publish useThisHook, a typed open-source React hooks library.",
  ],
  education: [
    {
      degree: "Master of Business Administration · Business Analytics",
      school: "SRM Institute of Science and Technology",
      years: "2024–2026",
    },
    {
      degree: "Bachelor of Engineering · Electrical & Electronics",
      school: "M.Kumarasamy College of Engineering · Anna University",
      years: "2009–2013",
    },
  ],
  focus: [
    "Frontend architecture and micro frontends for large platforms",
    "Technical leadership, design reviews, and engineering mentorship",
    "Privacy-first client architectures and developer productivity tools",
    "Talent pipelines from curriculum to full-time engineering roles",
  ],
} as const;

export type Profile = typeof profile;
