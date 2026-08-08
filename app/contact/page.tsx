import type { Metadata } from "next";
import { ContactChannels } from "@/components/contact/ContactChannels";
import { ContactElsewhere } from "@/components/contact/ContactElsewhere";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactTopics } from "@/components/contact/ContactTopics";
import { contactPage } from "@/content/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: contactPage.description,
};

export default function ContactPage() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_0%_0%,rgba(0,194,168,0.1),transparent_50%),radial-gradient(ellipse_40%_30%_at_100%_10%,rgba(0,194,168,0.06),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <ContactHero />
        <ContactChannels />
        <ContactTopics />
        <ContactElsewhere />
      </div>
    </div>
  );
}
