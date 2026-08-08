"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/content/profile";

/** Full-bleed editorial portrait — the photograph as its own chapter */
export const PortraitBand = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative" aria-label="Portrait">
      <motion.div
        className="relative h-[min(88svh,58rem)] w-full overflow-hidden"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: shouldReduceMotion ? 0 : 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={profile.images.portrait}
          alt={profile.name}
          fill
          sizes="100vw"
          className="object-cover object-[50%_10%]"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/40 to-transparent px-6 pb-10 pt-32 sm:px-10 lg:px-16">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-white/55">
            {profile.location}
          </p>
        </div>
      </motion.div>
    </section>
  );
};
