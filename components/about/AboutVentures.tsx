import Image from "next/image";
import Link from "next/link";
import { HoverLink } from "@/components/HoverLink";
import { aboutVentures } from "@/content/about";

export const AboutVentures = () => (
  <section className="mt-20 md:mt-28">
    <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
      Ventures
    </p>
    <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
      Products & mentorship
    </h2>
    <ul className="mt-10 border-t border-border">
      {aboutVentures.map((venture) => (
        <li
          key={venture.name}
          className="grid gap-5 border-b border-border py-8 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start sm:gap-8"
        >
          <Image
            src={venture.logo}
            alt=""
            width={120}
            height={48}
            className={venture.logoClassName}
          />
          <div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <HoverLink
                preview={venture.preview}
                className="text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
              >
                {venture.name}
              </HoverLink>
              <span className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-accent">
                {venture.role}
              </span>
            </div>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground-muted">
              {venture.body}
            </p>
            <Link
              href={venture.href}
              className="mt-4 inline-flex text-sm font-medium text-accent transition-opacity hover:opacity-80"
            >
              Learn more →
            </Link>
          </div>
        </li>
      ))}
    </ul>
  </section>
);
