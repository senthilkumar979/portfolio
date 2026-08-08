import Link from "next/link";
import { HoverLink } from "@/components/HoverLink";

export const BlogClosing = () => (
  <section className="mt-20 border-t border-border pt-12 md:mt-28 md:pt-16">
    <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
      Want to talk mentorship or communication practice?
    </h2>
    <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground-muted">
      These essays come out of MentorBridge and real coaching sessions. If the
      themes resonate, let’s continue the conversation.
    </p>
    <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
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
