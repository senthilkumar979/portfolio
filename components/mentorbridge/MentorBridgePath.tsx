"use client";

import { motion, useReducedMotion } from "framer-motion";
import { mentorbridgePath } from "@/content/mentorbridge";

export const MentorBridgePath = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="mt-20 md:mt-28">
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
        Path
      </p>
      <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        From student to professional
      </h2>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground-muted">
        A deliberate arc — not a crash course — that builds craft, confidence,
        and career readiness in sequence.
      </p>

      <ol className="mt-12 border-t border-border">
        {mentorbridgePath.map((step, index) => (
          <motion.li
            key={step.label}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.45,
              delay: prefersReducedMotion ? 0 : index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid gap-3 border-b border-border py-8 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-10 md:py-10 items-center"
          >
            <span className="flex items-baseline gap-3 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-accent">
              <span className="tabular-nums text-foreground-muted/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              {step.label}
            </span>
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                {step.title}
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground-muted">
                {step.body}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
};
