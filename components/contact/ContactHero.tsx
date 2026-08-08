"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HoverLink } from "@/components/HoverLink";
import { LocationMap } from "@/components/LocationMap";
import { contactLocation, contactPage } from "@/content/contact";
import { profile } from "@/content/profile";

export const ContactHero = () => {
  const prefersReducedMotion = useReducedMotion();
  const initial = prefersReducedMotion ? false : { opacity: 0, y: 16 };

  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
      <motion.div
        initial={initial}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
          {contactPage.eyebrow}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {contactPage.title}
        </h1>
        <p className="mt-5 max-w-xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {contactPage.headline}
        </p>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground-muted">
          {contactPage.description}
        </p>

        <div className="mt-10">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-foreground-muted">
            Start here
          </p>
          <HoverLink
            preview="email"
            className="mt-3 inline-flex text-xl font-medium text-accent transition-opacity hover:opacity-80 sm:text-2xl"
            iconClassName="h-5 w-5 shrink-0"
          >
            {profile.email}
          </HoverLink>
        </div>
      </motion.div>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: prefersReducedMotion ? 0 : 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p className="mb-4 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-foreground-muted">
          {contactLocation.label}
        </p>
        <LocationMap location={contactLocation.place} />
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground-muted">
          {contactLocation.note}
        </p>
      </motion.div>
    </div>
  );
};
