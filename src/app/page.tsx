"use client";

import { CanvasBackground } from "@/components/canvas-background";
import { FooterCta } from "@/components/footer-cta";
import { HeroSection } from "@/components/hero-section";
import { Loader } from "@/components/loader";
import { MarqueeBand } from "@/components/marquee-band";
import { MethodologySection } from "@/components/methodology-section";
import { Nav } from "@/components/nav";
import { ParadigmSection } from "@/components/paradigm-section";
import { PricingSection } from "@/components/pricing-section";
import { ProblemSection } from "@/components/problem-section";
import { SiteFooter } from "@/components/site-footer";
import { TeamSection } from "@/components/team-section";
import { SystemGrid } from "@/components/system-grid";
import { TelemetrySection } from "@/components/telemetry-section";
import { useGsapInteractions } from "@/hooks/use-gsap-interactions";

export default function Home() {
  const initInteractions = useGsapInteractions();

  return (
    <>
      <Loader onComplete={initInteractions} />
      {/* <CanvasBackground /> */}
      <SystemGrid />
      <Nav />
      <main>
        <HeroSection />
        <MarqueeBand />
        <ProblemSection />
        <MethodologySection />
        <TelemetrySection />
        <ParadigmSection />
        <TeamSection />
        <PricingSection />
        <FooterCta />
        <SiteFooter />
      </main>
    </>
  );
}
