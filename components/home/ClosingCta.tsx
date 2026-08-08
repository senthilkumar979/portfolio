"use client";

import { HoverLink } from "@/components/HoverLink";
import { closingCta } from "@/content/home";

export const ClosingCta = () => (
  <section className="border-t border-border">
    <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 md:py-28">
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {closingCta.title}
      </h2>
      <p className="mt-6 text-base leading-relaxed text-foreground-muted sm:text-lg">
        {closingCta.body}
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
        <HoverLink
          preview="resume"
          className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
        >
          Download resume
        </HoverLink>
        <HoverLink
          preview="email"
          className="text-sm font-medium text-foreground-muted transition-colors hover:text-accent"
        >
          {closingCta.email}
        </HoverLink>
        <HoverLink
          preview="linkedin"
          className="text-sm font-medium text-foreground-muted transition-colors hover:text-accent"
        >
          LinkedIn
        </HoverLink>
      </div>
    </div>
  </section>
);
