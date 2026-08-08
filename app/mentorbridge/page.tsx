import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { mentorbridge } from "@/content/mentorbridge";

export const metadata: Metadata = {
  title: "MentorBridge",
  description: mentorbridge.summary,
};

export default function MentorBridgePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <PageHeader
        eyebrow="Initiative"
        title={mentorbridge.name}
        description={mentorbridge.tagline}
      />

      <div className="mb-16 grid gap-6 sm:grid-cols-3">
        {mentorbridge.highlights.map((item) => (
          <div key={item.label} className="border-t border-border pt-4">
            <p className="text-3xl font-semibold text-accent">{item.value}</p>
            <p className="mt-1 text-sm text-foreground-muted">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-16 lg:grid-cols-2">
        <div className="prose-portfolio">
          <h2>Mission</h2>
          {mentorbridge.mission.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <h2>Outcomes</h2>
          <ul>
            {mentorbridge.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-foreground-muted">
            Curriculum
          </h2>
          <ul className="space-y-3">
            {mentorbridge.curriculum.map((item) => (
              <li
                key={item}
                className="border-t border-border pt-3 text-foreground-muted first:border-t-0 first:pt-0"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={mentorbridge.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-accent px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Visit mentorbridge.in
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Partner with us
            </Link>
          </div>
          <p className="mt-4 text-sm text-foreground-muted">
            Founded {mentorbridge.founded} · Founder & Chief Coordinator
          </p>
        </div>
      </div>
    </div>
  );
}
