import Link from "next/link";
import { LocationLabel } from "@/components/LocationMap";
import { aboutCareer } from "@/content/about";

export const AboutCareer = () => (
  <section className="mt-20 md:mt-28">
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
          Experience
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Where I have built
        </h2>
      </div>
      <Link
        href="/experience"
        className="shrink-0 text-sm font-medium text-accent transition-opacity hover:opacity-80"
      >
        Full timeline →
      </Link>
    </div>
    <ol className="mt-10 border-t border-border">
      {aboutCareer.map((role) => (
        <li key={role.href} className="border-b border-border">
          <Link
            href={role.href}
            className="group grid gap-2 py-7 transition-colors sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] sm:gap-8"
          >
            <span className="text-sm tabular-nums text-foreground-muted">
              {role.period}
            </span>
            <div>
              <p className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
                {role.role}
              </p>
              <p className="mt-1 text-sm text-foreground-muted">
                {role.company}
              </p>
              <LocationLabel location={role.location} className="mt-1.5" />
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground-muted">
                {role.summary}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ol>
  </section>
);
