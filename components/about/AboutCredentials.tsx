import { aboutAwards, aboutLanguages } from "@/content/about";
import { profile } from "@/content/profile";

export const AboutCredentials = () => (
  <div className="mt-20 grid gap-16 border-t border-border pt-16 md:mt-28 md:grid-cols-2 md:gap-20">
    <section>
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
        Education
      </p>
      <ul className="mt-8 space-y-8">
        {profile.education.map((entry) => (
          <li key={entry.degree}>
            <p className="text-lg font-semibold tracking-tight text-foreground">
              {entry.degree}
            </p>
            <p className="mt-2 text-sm text-foreground-muted">{entry.school}</p>
            <p className="mt-1 text-sm tabular-nums text-foreground-muted/80">
              {entry.years}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-12 text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
        Languages
      </p>
      <ul className="mt-6 space-y-4">
        {aboutLanguages.map((lang) => (
          <li
            key={lang.name}
            className="flex items-baseline justify-between gap-4 border-b border-border pb-4"
          >
            <span className="font-medium text-foreground">{lang.name}</span>
            <span className="text-sm text-foreground-muted">{lang.level}</span>
          </li>
        ))}
      </ul>
    </section>

    <section>
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
        Recognition
      </p>
      <ul className="mt-8 border-t border-border">
        {aboutAwards.map((award) => (
          <li
            key={`${award.title}-${award.year}`}
            className="border-b border-border py-5"
          >
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-medium tracking-tight text-foreground">
                {award.title}
              </p>
              <span className="shrink-0 text-sm tabular-nums text-foreground-muted">
                {award.year}
              </span>
            </div>
            <p className="mt-1 text-sm text-foreground-muted">{award.org}</p>
            {"note" in award && award.note ? (
              <p className="mt-2 text-sm text-foreground-muted/80">{award.note}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  </div>
);
