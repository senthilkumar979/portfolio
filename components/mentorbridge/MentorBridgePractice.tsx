import {
  mentorbridgeCurriculum,
  mentorbridgeOutcomes,
} from "@/content/mentorbridge";

export const MentorBridgePractice = () => (
  <section className="mt-20 grid gap-16 md:mt-28 lg:grid-cols-2 lg:gap-20">
    <div>
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
        Curriculum
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        What mentees practice
      </h2>
      <ul className="mt-8 space-y-0 border-t border-border">
        {mentorbridgeCurriculum.map((item) => (
          <li
            key={item}
            className="border-b border-border py-4 text-base leading-relaxed text-foreground-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>

    <div>
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
        Outcomes
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        What the program delivers
      </h2>
      <ul className="mt-8 space-y-0 border-t border-border">
        {mentorbridgeOutcomes.map((item) => (
          <li key={item.title} className="border-b border-border py-5">
            <h3 className="text-base font-semibold tracking-tight text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-foreground-muted">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
