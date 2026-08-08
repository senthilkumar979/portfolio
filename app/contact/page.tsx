import type { Metadata } from "next";
import { HoverLink } from "@/components/HoverLink";
import { PageHeader } from "@/components/PageHeader";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name}.`,
};

const elsewhere = [
  { label: "LinkedIn", preview: "linkedin" as const },
  { label: "GitHub", preview: "github" as const },
  { label: "Medium", preview: "medium" as const },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <PageHeader
        eyebrow="Contact"
        title="Let’s talk"
        description="Open to architecture conversations, mentoring partnerships, and product collaboration."
      />

      <div className="grid max-w-2xl gap-10">
        <div className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground-muted">
            Email
          </p>
          <HoverLink
            preview="email"
            className="text-2xl font-medium text-accent hover:underline"
            iconClassName="h-5 w-5 shrink-0"
          >
            {profile.email}
          </HoverLink>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground-muted">
            Phone
          </p>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="text-xl text-foreground"
          >
            {profile.phone}
          </a>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground-muted">
            Elsewhere
          </p>
          <ul className="flex flex-wrap gap-5 text-foreground-muted">
            {elsewhere.map((link) => (
              <li key={link.label}>
                <HoverLink preview={link.preview} className="hover:text-accent">
                  {link.label}
                </HoverLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <HoverLink
            preview="resume"
            className="inline-flex items-center rounded-md bg-accent px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            iconClassName="h-4 w-4 shrink-0"
          >
            Download resume
          </HoverLink>
          <p className="mt-3 text-sm text-foreground-muted">
            Based in {profile.location}.
          </p>
        </div>
      </div>
    </div>
  );
}
