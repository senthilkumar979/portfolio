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
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_0%_0%,rgba(0,194,168,0.1),transparent_50%),radial-gradient(ellipse_40%_30%_at_100%_10%,rgba(0,194,168,0.06),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <PageHeader
          eyebrow="Experience"
          title="Where I have built"
          description="Tenures across banking, product, and consulting — each role covers scope, impact, and the stack I shipped with."
        />

        <div className="mt-6">
          <ExperienceTimeline roles={experienceRoles} />
        </div>
      </div>
    </div>
  );
}
