import Image from "next/image";
import Link from "next/link";
import { HoverLink } from "@/components/HoverLink";
import { LocationLabel, LocationMap } from "@/components/LocationMap";
import { closingCta, snapshotFacts, snapshotSocials } from "@/content/home";
import { profile } from "@/content/profile";

export const ProfileSnapshot = () => (
  <section className="relative border-t border-border">
    <div
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_70%_at_0%_50%,rgba(0,194,168,0.08),transparent_60%)]"
      aria-hidden
    />

    <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:items-start lg:gap-20">
        <div>
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
            Profile
          </p>

          <div className="mt-8 flex items-center gap-5">
            <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-1 ring-border sm:h-[4.5rem] sm:w-[4.5rem]">
              <Image
                src={profile.images.portrait}
                alt=""
                fill
                sizes="72px"
                className="object-cover object-top"
              />
            </span>
            <div className="min-w-0">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {profile.shortName}{" "}
                <span className="text-foreground-muted text-sm">
                  BE (EE), MBA
                </span>
              </h2>
              <p className="mt-2 text-sm text-foreground-muted">
                {profile.title}
              </p>
              <LocationLabel location={profile.location} className="mt-2" />
            </div>
          </div>

          <p className="mt-8 max-w-sm text-base leading-relaxed text-foreground-muted">
            {profile.headline}
          </p>

          <div className="mt-8">
            <LocationMap location={profile.location} size="sm" />
          </div>
        </div>

        <div>
          <ol className="border-t border-border">
            {snapshotFacts.map((fact, index) => (
              <li
                key={fact.label}
                className="grid items-center gap-3 border-b border-border py-7 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-8"
              >
                <div className="flex flex-col justify-start gap-4">
                  <div className="flex items-center justify-center gap-2">
                    {fact.product?.logo && (
                      <Image
                        src={fact.product.logo}
                        alt={fact.product.name}
                        width={100}
                        height={100}
                        className={fact.product.className}
                      />
                    )}
                  </div>
                  <span className="flex items-baseline justify-center gap-3 text-left text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-accent md:justify-start">
                    <span className="tabular-nums text-foreground-muted/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {fact.label}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-base leading-relaxed text-foreground sm:text-[1.0625rem]">
                    {fact.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <nav
            aria-label="Profiles"
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            {snapshotSocials.map((social) => (
              <HoverLink
                key={social.id}
                preview={social.id}
                className="text-sm text-foreground-muted transition-colors hover:text-accent [overflow-wrap:anywhere]"
              >
                {social.id === "email" ? closingCta.email : social.label}
              </HoverLink>
            ))}
          </nav>
        </div>
      </div>

      <div className="mt-14 border-t border-border pt-10">
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-foreground-muted">
          Education
        </p>
        <ul className="mt-6 grid gap-8 sm:grid-cols-2 sm:gap-10">
          {profile.education.map((entry) => (
            <li key={entry.degree} className="min-w-0">
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm font-medium tracking-tight text-foreground">
                  {entry.degree}
                </p>
                <span className="shrink-0 rounded-full bg-foreground-muted/10 px-2 py-0.5 text-[0.7rem] tabular-nums tracking-wide text-foreground-muted/80">
                  {entry.years}
                </span>
              </div>
              <p className="mt-2 text-sm text-foreground-muted">{entry.school}</p>
            </li>
          ))}
        </ul>
        <Link
          href="/about"
          className="mt-8 inline-flex text-sm font-medium text-accent transition-opacity hover:opacity-80"
        >
          Full background →
        </Link>
      </div>
    </div>
  </section>
);
