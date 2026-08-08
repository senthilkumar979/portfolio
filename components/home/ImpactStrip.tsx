import Link from "next/link";
import { impactMetrics, positioningLine } from "@/content/home";
import { profile } from "@/content/profile";
import Image from "next/image";
import { externalAnchorProps } from "@/lib/links";

export const ImpactStrip = () => (
  <section className="border-t border-border">
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0 items-center justify-items-center">
        {impactMetrics.map((metric) => (
          <li
            key={metric.label}
            className={`relative flex flex-col items-center rounded-xl bg-background shadow-lg px-6 py-8 transition-transform hover:scale-[1.035] hover:shadow-lg ${"border-l border-t border-border hover:border-accent/50"}`}
          >
            {metric?.logo && (
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/5 mb-4 shadow-sm">
                <Image
                  src={metric.logo}
                  alt={metric.label}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
            )}
            <p className="text-3xl font-bold text-accent text-center drop-shadow-sm sm:text-4xl">
              {metric.value}
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-foreground-muted text-center opacity-80">
              {metric.label}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-14 max-w-3xl text-lg leading-relaxed text-foreground sm:mt-16 sm:text-xl sm:leading-relaxed">
        {positioningLine}
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
        <a
          href={profile.resumePath}
          {...externalAnchorProps(profile.resumePath)}
          className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
        >
          View resume
        </a>
        <Link
          href="/contact"
          className="text-sm font-medium text-foreground-muted transition-colors hover:text-accent"
        >
          Contact
        </Link>
      </div>
    </div>
  </section>
);
