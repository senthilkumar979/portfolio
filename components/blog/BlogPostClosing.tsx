import Link from "next/link";
import { HoverLink } from "@/components/HoverLink";

export const BlogPostClosing = () => (
  <section className="mt-16 border-t border-border pt-10 md:mt-20">
    <h2 className="max-w-xl text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
      Continue the conversation
    </h2>
    <p className="mt-3 max-w-lg text-base leading-relaxed text-foreground-muted">
      These ideas live in MentorBridge practice — coaching, podcasts, and
      classroom sessions that turn students into professionals.
    </p>
    <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
      <Link
        href="/mentorbridge"
        className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
      >
        MentorBridge →
      </Link>
      <HoverLink
        preview="medium"
        className="text-sm font-medium text-foreground-muted transition-colors hover:text-accent"
      >
        Medium
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
