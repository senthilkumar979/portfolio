import Link from "next/link";
import { leadershipBand } from "@/content/home";

export const LeadershipBand = () => (
  <section className="relative border-t border-border">
    <div
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_70%_at_0%_100%,rgba(0,194,168,0.08),transparent_55%)]"
      aria-hidden
    />
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <div className="relative grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:items-start lg:gap-20">
        <div>
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
            {leadershipBand.eyebrow}
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {leadershipBand.title}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-foreground-muted sm:text-lg">
            {leadershipBand.body}
          </p>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {leadershipBand.ctas.map((cta) => (
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
      </div>
      <ol className="mt-10 border-t border-border flex flex-col gap-0 sm:flex-row sm:gap-6">
        {leadershipBand.pillars.map((pillar, index) => (
          <li
            key={pillar.label}
            className="group flex-1 border-b border-border last:border-b-0 sm:border-b-0 sm:border-r last:sm:border-r-0 px-0 py-7 sm:py-0 sm:px-4 flex flex-col mt-10"
          >
            <span className="flex items-baseline gap-3 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-accent">
              <span className="tabular-nums text-foreground-muted/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              {pillar.label}
            </span>

            <div className="min-w-0 mt-2">
              <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-xl">
                {pillar.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-foreground-muted">
                {pillar.body}
              </p>
              <p className="mt-4 text-[0.8125rem] tracking-wide text-foreground-muted/80">
                {pillar.proof}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
