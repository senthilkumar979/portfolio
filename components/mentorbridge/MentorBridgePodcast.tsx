import Link from "next/link";
import { mentorbridgePodcast } from "@/content/mentorbridge";

export const MentorBridgePodcast = () => (
  <section className="mt-20 md:mt-28">
    <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
      {mentorbridgePodcast.eyebrow}
    </p>
    <h2 className="mt-4 max-w-3xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
      {mentorbridgePodcast.title}
    </h2>
    <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground-muted">
      {mentorbridgePodcast.description}
    </p>

    <ul className="mt-10 border-t border-border">
      {mentorbridgePodcast.episodes.map((episode, index) => (
        <li
          key={episode.title}
          className="grid gap-3 border-b border-border py-6 md:grid-cols-[4rem_minmax(0,1fr)] md:items-start md:gap-8"
        >
          <span className="text-[0.6875rem] font-medium tabular-nums tracking-[0.22em] text-foreground-muted/70">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-base font-semibold tracking-tight text-foreground">
              {episode.title}
            </h3>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-foreground-muted">
              {episode.note}
            </p>
          </div>
        </li>
      ))}
    </ul>

    <Link
      href={mentorbridgePodcast.href}
      className="mt-8 inline-flex text-sm font-medium text-accent transition-opacity hover:opacity-80"
    >
      {mentorbridgePodcast.cta} →
    </Link>
  </section>
);
