import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { PageHeader } from "@/components/PageHeader";
import { experienceRoles } from "@/content/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Career timeline — BNP Paribas Fortis, LTIMindtree, Oro Inc, and TATA Consultancy Services.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <PageHeader
        eyebrow="Experience"
        title="Where I have built"
        description="Detailed tenures across banking, product, and consulting — each page covers scope, impact, and stack."
      />
      <ExperienceTimeline roles={experienceRoles} />
    </div>
  );
}
