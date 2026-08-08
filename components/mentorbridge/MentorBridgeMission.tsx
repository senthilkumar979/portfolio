import { mentorbridgeMission } from "@/content/mentorbridge";

export const MentorBridgeMission = () => (
  <section className="mt-20 md:mt-28">
    <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
      Mission
    </p>
    <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
      Leadership that turns potential into professionals
    </h2>
    <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-foreground-muted sm:text-lg">
      {mentorbridgeMission.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  </section>
);
