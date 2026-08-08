import { mentorbridgeStats } from "@/content/mentorbridge";

export const MentorBridgeStats = () => (
  <ul className="mt-16 grid gap-8 border-t border-border pt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
    {mentorbridgeStats.map((stat) => (
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
