import type { Metadata } from "next";
import Image from "next/image";
import { HoverLink } from "@/components/HoverLink";
import { PageHeader } from "@/components/PageHeader";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description: `About ${profile.name} — ${profile.title} based in ${profile.location}.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <PageHeader
        eyebrow="About"
        title={profile.name}
        description={`${profile.title} · ${profile.location}`}
      />

      <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="prose-portfolio max-w-2xl">
          <div className="relative mb-10 aspect-[4/5] w-full max-w-xs overflow-hidden rounded-sm lg:hidden">
            <Image
              src={profile.images.portrait}
              alt={profile.name}
              fill
              sizes="320px"
              className="object-cover object-top"
              priority
            />
          </div>
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <h2>What I care about</h2>
          <ul>
            {profile.focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <aside className="space-y-10">
          <div className="relative hidden aspect-[4/5] w-full overflow-hidden rounded-sm lg:block">
            <Image
              src={profile.images.portrait}
              alt={profile.name}
              fill
              sizes="280px"
              className="object-cover object-top"
              priority
            />
          </div>
          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-foreground-muted">
              Education
            </h2>
            <ul className="space-y-5">
              {profile.education.map((item) => (
                <li key={item.degree}>
                  <p className="font-medium text-foreground">{item.degree}</p>
                  <p className="text-sm text-foreground-muted">{item.school}</p>
                  <p className="text-sm text-foreground-muted">{item.years}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-foreground-muted">
              Ventures
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <HoverLink
                  preview="peacock"
                  className="text-accent hover:underline"
                >
                  Peacock Studio
                </HoverLink>
              </li>
              <li>
                <HoverLink
                  preview="mentorbridge"
                  className="text-accent hover:underline"
                >
                  MentorBridge
                </HoverLink>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
