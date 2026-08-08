import Link from "next/link";
import { HoverLink } from "@/components/HoverLink";
import { mentorbridge, mentorbridgeClosing } from "@/content/mentorbridge";

export const MentorBridgeClosing = () => (
  <section className="mt-20 border-t border-border pt-12 md:mt-28 md:pt-16">
    <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
      {mentorbridgeClosing.title}
    </h2>
    <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground-muted">
      {mentorbridgeClosing.body}
    </p>
    <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
      <HoverLink
        preview="mentorbridge"
        className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
      >
        {mentorbridgeClosing.primaryLabel} →
      </HoverLink>
      <Link
        href={mentorbridgeClosing.secondaryHref}
        className="text-sm font-medium text-foreground-muted transition-colors hover:text-accent"
      >
        {mentorbridgeClosing.secondaryLabel}
      </Link>
      <Link
        href="/about"
        className="text-sm font-medium text-foreground-muted transition-colors hover:text-accent"
      >
        About the founder
      </Link>
    </div>
    <p className="mt-6 text-sm text-foreground-muted">
      Founded {mentorbridge.founded} · {mentorbridge.role}
    </p>
  </section>
);
