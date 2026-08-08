import Link from "next/link";
import { leadershipBlurb } from "@/content/home";

export const LeadershipBand = () => (
  <section className="border-t border-border">
    <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 md:py-28">
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
        {leadershipBlurb.eyebrow}
      </p>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {leadershipBlurb.title}
      </h2>
      <p className="mt-6 text-base leading-relaxed text-foreground-muted sm:text-lg">
        {leadershipBlurb.body}
      </p>
      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
        {leadershipBlurb.ctas.map((cta) => (
          <Link
            key={cta.href}
            href={cta.href}
            className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
          >
            {cta.label} →
          </Link>
        ))}
      </div>
    </div>
  </section>
);
