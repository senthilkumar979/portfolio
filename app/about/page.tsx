import type { Metadata } from "next";
import { AboutCareer } from "@/components/about/AboutCareer";
import { AboutClosing } from "@/components/about/AboutClosing";
import { AboutCredentials } from "@/components/about/AboutCredentials";
import { AboutFocus } from "@/components/about/AboutFocus";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStats } from "@/components/about/AboutStats";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutVentures } from "@/components/about/AboutVentures";
import { Testimonials } from "@/components/Testimonials";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description: `${profile.tagline} Based in ${profile.location}.`,
};

export default function AboutPage() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_0%_0%,rgba(0,194,168,0.1),transparent_50%),radial-gradient(ellipse_40%_30%_at_100%_10%,rgba(0,194,168,0.06),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <AboutHero />
        <AboutStats />
        <AboutStory />
        <AboutCredentials />
        <AboutFocus />
        <AboutCareer />
        <AboutVentures />
        <Testimonials surface="about" />
        <AboutClosing />
      </div>
    </div>
  );
}
