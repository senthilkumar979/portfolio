import { Hero } from "@/components/Hero";
import { ClosingCta } from "@/components/home/ClosingCta";
import { ImpactStrip } from "@/components/home/ImpactStrip";
import { LeadershipBand } from "@/components/home/LeadershipBand";
import { ProfileSnapshot } from "@/components/home/ProfileSnapshot";
import { SelectedWork } from "@/components/home/SelectedWork";
import { TrustedStack } from "@/components/home/TrustedStack";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStrip />
      <ProfileSnapshot />
      <SelectedWork />
      <LeadershipBand />
      <TrustedStack />
      <ClosingCta />
    </>
  );
}
