"use client";

import { motion, useReducedMotion } from "framer-motion";
import { contactTopics } from "@/content/contact";

export const ContactTopics = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="mt-20 md:mt-28">
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
        Topics
      </p>
      <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        Good reasons to write
      </h2>

      <ol className="mt-10 grid gap-0 border-t border-border sm:grid-cols-3">
        {contactTopics.map((topic, index) => (
          <motion.li
            key={topic.label}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.45,
              delay: prefersReducedMotion ? 0 : index * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border-b border-border py-8 sm:border-b-0 sm:border-r sm:px-6 sm:py-10 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
          >
            <span className="flex items-baseline gap-3 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-accent">
              <span className="tabular-nums text-foreground-muted/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              {topic.label}
            </span>
            <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
              {topic.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-foreground-muted">
              {topic.body}
            </p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
};
