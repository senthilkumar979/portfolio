export type TestimonialSurface = "about" | "mentorbridge" | "experience";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  meta: string;
  surfaces: TestimonialSurface[];
  experienceSlug?: string;
}

export const testimonialsPage = {
  eyebrow: "Recommendations",
  title: "What collaborators say",
  description:
    "LinkedIn recommendations from engineers and leads who worked with me on the same teams.",
} as const;

export const testimonials: Testimonial[] = [
  {
    quote:
      "I was working with Senthil for almost a year and can definitely recommend him as a professional developer with an eye for detail and ability to learn really fast. We were working in a R&D project using new approaches and technologies, and Senthil quickly gained confidence and expertise needed and became an independent.",
    name: "Mikhail Yahorau",
    role: "Frontend Engineer · Tech Lead at Oro Inc.",
    meta: "LinkedIn · October 2024 · same team",
    surfaces: ["about", "experience"],
    experienceSlug: "oro",
  },
  {
    quote:
      "I highly recommend Senthil Kumar, who has been an outstanding Senior Frontend Developer on our team. Senthil excels in frontend technologies like React and Javascript etc, delivering high-quality, user-friendly interfaces. His problem-solving skills, clean code, and proactive approach have significantly enhanced our projects. Senthil is also a fantastic team player, mentoring others and contributing valuable insights. His dedication and technical expertise make him an asset to any team.",
    name: "Ajay Tidke",
    role: "Associate Director @ UBS · Tech Cyber Security Specialist",
    meta: "LinkedIn · July 2024 · same team",
    surfaces: ["about", "experience"],
    experienceSlug: "oro",
  },
  {
    quote:
      "SENTHIL is very genuine and genius. Smart think and provide his full efforts to work. Impressed by management and worth to them.",
    name: "Vigneshwaran Govindasamy",
    role: "Software Developer at Tata Consultancy Services",
    meta: "LinkedIn · May 2021 · same team",
    surfaces: ["about", "experience"],
    experienceSlug: "tcs",
  },
  {
    quote:
      "You are the pioneer of front end technologies and a great person to work with and I truly appreciate the time and effort you put it.",
    name: "Vijayvignesh G S",
    role: "Senior Backend Engineer · Java · Spring Boot · Microservices",
    meta: "LinkedIn · April 2021 · same team",
    surfaces: ["about", "experience"],
    experienceSlug: "tcs",
  },
];

export function getTestimonials(
  surface: TestimonialSurface,
  experienceSlug?: string,
): Testimonial[] {
  return testimonials.filter((item) => {
    if (!item.surfaces.includes(surface)) return false;
    if (surface === "experience" && experienceSlug) {
      return item.experienceSlug === experienceSlug;
    }
    return true;
  });
}
