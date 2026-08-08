import { aboutStats } from "@/content/about";

export const AboutStats = () => (
  <ul className="mt-16 grid gap-8 border-t border-border pt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
    {aboutStats.map((stat) => (
      <li key={stat.label}>
        <p className="text-3xl font-semibold tracking-tight text-accent">
          {stat.value}
        </p>
        <p className="mt-2 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-foreground-muted">
          {stat.label}
        </p>
      </li>
    ))}
  </ul>
);
