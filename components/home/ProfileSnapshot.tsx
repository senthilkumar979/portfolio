import Image from "next/image";
import Link from "next/link";
import { HoverLink } from "@/components/HoverLink";
import { closingCta, snapshotFacts, snapshotSocials } from "@/content/home";
import { profile } from "@/content/profile";

export const ProfileSnapshot = () => (
  <section className="relative border-t border-border">
    <div
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_70%_at_0%_50%,rgba(0,194,168,0.08),transparent_60%)]"
      aria-hidden
    />

    <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:items-start lg:gap-20">
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
            <p className="mt-1 text-sm text-foreground-muted">
              {profile.title}
            </p>
            <p className="mt-0.5 text-sm text-foreground-muted">
              {profile.location}
            </p>
          </div>
        </div>

        <p className="mt-8 max-w-sm text-base leading-relaxed text-foreground-muted">
          {profile.headline}
        </p>

        <div className="mt-10 max-w-sm border-t border-border">
          <p className="pt-6 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-foreground-muted">
            Education
          </p>
          <ul className="mt-4 space-y-4">
            {profile.education.map((entry) => (
              <li key={entry.degree}>
                <p className="text-sm font-medium tracking-tight text-foreground">
                  {entry.degree}
                </p>
                <p className="mt-0.5 text-sm text-foreground-muted">
                  {entry.school}
                </p>
                <p className="mt-0.5 text-[0.7rem] tabular-nums tracking-wide text-foreground-muted/80">
                  {entry.years}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/about"
          className="mt-8 inline-flex text-sm font-medium text-accent transition-opacity hover:opacity-80"
        >
          Full background →
        </Link>
      </div>

      <div>
        <ol className="border-t border-border">
          {snapshotFacts.map((fact, index) => (
            <li
              key={fact.label}
              className="grid gap-3 border-b border-border py-7 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-8 items-center"
            >
              <div className="flex flex-col items-center gap-4">
                {fact.product?.logo && (
                  <Image
                    src={fact.product.logo}
                    alt={fact.product.name}
                    width={100}
                    height={100}
                    className={fact.product.className}
                  />
                )}
                <span className="flex items-baseline gap-3 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-accent">
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
  </section>
);
