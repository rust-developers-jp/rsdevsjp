import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ActivitySection } from "@/components/activity-section"
import { CtaSection } from "@/components/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <HeroSection />
        <AboutSection />
        <ActivitySection />
        <CtaSection />
      </main>
    </div>
  );
}
