import Link from "next/link";
import { HoverLink } from "@/components/HoverLink";

export const AboutClosing = () => (
  <section className="mt-20 border-t border-border pt-12 md:mt-28 md:pt-16">
    <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
      Open to architecture leadership and product collaboration.
    </h2>
    <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground-muted">
      If you need a principal-level frontend architect who ships platforms and
      grows engineers, let’s talk.
    </p>
    <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
      <HoverLink
        preview="resume"
        className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
      >
        Download resume
      </HoverLink>
      <HoverLink
        preview="linkedin"
        className="text-sm font-medium text-foreground-muted transition-colors hover:text-accent"
      >
        LinkedIn
      </HoverLink>
      <Link
        href="/contact"
        className="text-sm font-medium text-foreground-muted transition-colors hover:text-accent"
      >
        Contact
      </Link>
    </div>
  </section>
);
