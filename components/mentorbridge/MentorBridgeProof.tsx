import { mentorbridgeProof, mentorbridgeStories } from "@/content/mentorbridge";

export const MentorBridgeProof = () => (
  <section className="mt-20 md:mt-28">
    <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
      {mentorbridgeProof.eyebrow}
    </p>
    <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
      {mentorbridgeProof.title}
    </h2>
    <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground-muted">
      {mentorbridgeProof.description}
    </p>

    <ul className="mt-10 border-t border-border">
      {mentorbridgeStories.map((story) => (
        <li
          key={`${story.name}-${story.outcome}`}
          className="grid gap-3 border-b border-border py-8 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:gap-10"
        >
          <div>
            <p className="text-base font-semibold tracking-tight text-foreground">
              {story.name}
            </p>
            <p className="mt-2 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-accent">
              {story.outcome}
            </p>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-foreground-muted">
            {story.body}
          </p>
        </li>
      ))}
    </ul>
  </section>
);
