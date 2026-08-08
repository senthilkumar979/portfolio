import { aboutStory } from "@/content/about";

export const AboutStory = () => (
  <section className="mt-20 md:mt-28">
    <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
      Story
    </p>
    <div className="mt-6 max-w-3xl space-y-5 text-base leading-relaxed text-foreground-muted sm:text-lg">
      {aboutStory.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  </section>
);
