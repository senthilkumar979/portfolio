"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { HoverLink } from "@/components/HoverLink";
import { HeroCarousel } from "@/components/HeroCarousel";
import { profile } from "@/content/profile";

const HERO_IMAGE = "/hero/hero.png";

export const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="relative w-full max-w-full min-h-[100svh] overflow-x-clip bg-background">
      {/* Portrait presence — bleeds off the right edge, dissolves into the field */}
      <motion.div
        className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-[62%]"
        initial={shouldReduceMotion ? false : { opacity: 0, x: 32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 1.25, ease }}
        aria-hidden
      >
        <div className="relative h-full w-full">
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            priority
            sizes="(min-width: 768px) 62vw, 100vw"
            className="object-cover object-[50%_12%] opacity-75 md:opacity-100"
          />
          {/* Dissolve left edge into atmosphere — one field, not a column */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent md:via-background/55 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20 md:via-transparent md:to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-l from-background/50 via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* Accent atmosphere on the type side */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_0%_100%,rgba(0,194,168,0.16),transparent_55%)]" />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(242,244,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(242,244,246,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(90deg, black 0%, black 35%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 flex w-full max-w-full min-h-[100svh] flex-col justify-end pb-12 pt-150 lg:pt-48 sm:pb-16 lg:pb-20">
        <motion.div
          className="max-w-xl min-w-0 px-6 sm:px-10 lg:max-w-2xl lg:px-16"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.1,
                delayChildren: shouldReduceMotion ? 0 : 0.2,
              },
            },
          }}
        >
          <motion.p
            variants={{
              hidden: { opacity: shouldReduceMotion ? 1 : 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
            }}
            className="text-[0.6875rem] font-medium uppercase tracking-[0.34em] text-accent"
          >
            {profile.title}
          </motion.p>

          <motion.h1
            variants={{
              hidden: { opacity: shouldReduceMotion ? 1 : 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
            }}
            className="mt-5 text-[clamp(2.35rem,10vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.045em] text-foreground whitespace-nowrap"
          >
            Senthil Kumar
            <span className="mt-1 block text-foreground/90 font-semibold text-[2rem] md:text-[3rem] lg:text-[5rem] tracking-[0.05em]">
              THANGAVEL
            </span>
          </motion.h1>

          <motion.div
            className="mt-10 flex items-center gap-x-2 gap-y-1.5 text-[0.95rem] leading-snug text-foreground-muted sm:text-base whitespace-nowrap justify-between w-full"
            variants={{
              hidden: { opacity: shouldReduceMotion ? 1 : 0, y: 14 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
            }}
          >
            <div className="flex flex-wrap items-center gap-x-2 justify-start gap-y-1.5">
              <span className="font-semibold text-foreground">Founder of</span>
              <HoverLink
                preview="peacock"
                className="inline-flex items-center gap-2 font-medium text-foreground underline decoration-accent/50 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                showIcon={false}
              >
                <Image
                  src="/products/peacock.png"
                  alt=""
                  width={22}
                  height={22}
                  className="h-[1.375rem] w-[1.375rem] shrink-0 object-contain"
                />
                Peacock Studio
              </HoverLink>
            </div>
            <div className="hidden md:block">|</div>
            <div className="flex flex-wrap items-center gap-x-2 justify-end md:justify-center gap-y-1.5">
              <span className="font-semibold text-foreground">
                Chief Coordinator of
              </span>
              <HoverLink
                preview="mentorbridge"
                className="inline-flex items-center gap-2 font-medium text-foreground underline decoration-accent/50 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                showIcon={false}
              >
                <Image
                  src="/products/mentorbridge-sm.png"
                  alt=""
                  width={22}
                  height={22}
                  className="h-[1.375rem] w-[2rem] shrink-0 object-contain"
                />
                MentorBridge
              </HoverLink>
            </div>
          </motion.div>

          <motion.p
            variants={{
              hidden: { opacity: shouldReduceMotion ? 1 : 0, y: 14 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
            }}
            className="mt-7 max-w-md text-lg leading-relaxed text-foreground-muted"
          >
            Building scalable enterprise platforms — and the engineers who ship
            them.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: shouldReduceMotion ? 1 : 0, y: 14 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
            }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <Link
              href="/projects"
              className="inline-flex items-center rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              View projects
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
            >
              Contact
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            delay: shouldReduceMotion ? 0 : 0.55,
            ease,
          }}
          className="relative mt-4 w-full max-w-full min-w-0"
        >
          <HeroCarousel />
        </motion.div>
      </div>

      <span className="sr-only">Portrait of {profile.name}</span>
    </section>
  );
};
