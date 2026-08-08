import type { Metadata } from "next";
import { MentorBridgeClosing } from "@/components/mentorbridge/MentorBridgeClosing";
import { MentorBridgeHero } from "@/components/mentorbridge/MentorBridgeHero";
import { MentorBridgeLeadership } from "@/components/mentorbridge/MentorBridgeLeadership";
import { MentorBridgeMission } from "@/components/mentorbridge/MentorBridgeMission";
import { MentorBridgePath } from "@/components/mentorbridge/MentorBridgePath";
import { MentorBridgePractice } from "@/components/mentorbridge/MentorBridgePractice";
import { MentorBridgeStats } from "@/components/mentorbridge/MentorBridgeStats";
import { mentorbridge } from "@/content/mentorbridge";

export const metadata: Metadata = {
  title: "MentorBridge",
  description: mentorbridge.summary,
};

export default function MentorBridgePage() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_0%_0%,rgba(0,194,168,0.1),transparent_50%),radial-gradient(ellipse_40%_30%_at_100%_10%,rgba(0,194,168,0.06),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <MentorBridgeHero />
        <MentorBridgeStats />
        <MentorBridgeMission />
        <MentorBridgeLeadership />
        <MentorBridgePath />
        <MentorBridgePractice />
        <MentorBridgeClosing />
      </div>
    </div>
  );
}
