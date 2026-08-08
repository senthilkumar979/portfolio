"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { HoverLink } from "@/components/HoverLink";
import { mentorbridge, mentorbridgePage } from "@/content/mentorbridge";

export const MentorBridgeHero = () => {
  const prefersReducedMotion = useReducedMotion();
  const initial = prefersReducedMotion ? false : { opacity: 0, y: 16 };

  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end lg:gap-16">
      <motion.div
        initial={initial}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
          {mentorbridgePage.eyebrow}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {mentorbridgePage.title}
        </h1>
        <p className="mt-5 max-w-xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {mentorbridgePage.headline}
        </p>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground-muted">
          {mentorbridgePage.description}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
          <HoverLink
            preview="mentorbridge"
            className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
          >
            {mentorbridge.url.replace("https://www.", "")} →
          </HoverLink>
          <Link
            href="/contact"
            className="text-sm font-medium text-foreground-muted transition-colors hover:text-accent"
          >
            Partner with us
          </Link>
        </div>

        <p className="mt-6 text-sm text-foreground-muted">
          Founded {mentorbridge.founded} · {mentorbridge.role}
        </p>
      </motion.div>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.65,
          delay: prefersReducedMotion ? 0 : 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative mx-auto flex aspect-square w-full max-w-xs items-center justify-center overflow-hidden rounded-sm bg-[radial-gradient(ellipse_at_center,rgba(0,194,168,0.14),transparent_65%)] ring-1 ring-border lg:mx-0 lg:max-w-none"
      >
        <Image
          src="/products/mentorbridge.png"
          alt="MentorBridge"
          width={280}
          height={280}
          priority
          className="h-auto w-[70%] object-contain"
        />
      </motion.div>
    </div>
  );
};
