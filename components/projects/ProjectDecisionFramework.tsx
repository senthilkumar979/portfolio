import Link from "next/link";
import type { ProjectFramework } from "@/content/work/frameworks";

interface ProjectDecisionFrameworkProps {
  framework: ProjectFramework;
}

export const ProjectDecisionFramework = ({
  framework,
}: ProjectDecisionFrameworkProps) => (
  <section className="mt-12 border-t border-border pt-12">
    <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
      The choice
    </p>
    <h2 className="mt-4 max-w-3xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
      {framework.title}
    </h2>
    <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground-muted">
      {framework.summary}
    </p>

    <div className="mt-10 grid gap-0 border-t border-border md:grid-cols-2">
      <FrameworkSide side={framework.before} tone="muted" />
      <FrameworkSide side={framework.after} tone="accent" />
    </div>

    <div className="mt-10 max-w-3xl">
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-accent">
        In short
      </p>
      <p className="mt-3 border-l-2 border-accent pl-5 text-lg leading-relaxed text-foreground">
        {framework.call}
      </p>
    </div>

    <div className="mt-10 border-t border-border pt-10">
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-accent">
        What I checked first
      </p>
      <ul className="mt-6">
        {framework.criteria.map((item) => (
          <li
            key={item.label}
            className="grid gap-2 border-b border-border py-5 first:border-t first:border-border md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:gap-8"
          >
            <p className="text-sm font-semibold tracking-tight text-foreground">
              {item.label}
            </p>
            <p className="text-base leading-relaxed text-foreground-muted">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </div>

    {framework.relatedPost ? (
      <Link
        href={`/blog/${framework.relatedPost.slug}`}
        className="mt-8 inline-flex text-sm font-medium text-accent transition-opacity hover:opacity-80"
      >
        Related writing: {framework.relatedPost.label} →
      </Link>
    ) : null}
  </section>
);

interface FrameworkSideProps {
  side: ProjectFramework["before"];
  tone: "muted" | "accent";
}

const FrameworkSide = ({ side, tone }: FrameworkSideProps) => (
  <div
    className={
      tone === "accent"
        ? "border-b border-border py-8 md:border-b-0 md:border-l md:pl-8 md:pr-0"
        : "border-b border-border py-8 md:border-b-0 md:pr-8"
    }
  >
    <p
      className={
        tone === "accent"
          ? "text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-accent"
          : "text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-foreground-muted"
      }
    >
      {side.label}
    </p>
    <ul className="mt-5 space-y-3">
      {side.items.map((item) => (
        <li
          key={item}
          className="text-base leading-relaxed text-foreground-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);
