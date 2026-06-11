import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { ApproachSection } from "@/components/sections/approach";
import { AboutSection } from "@/components/sections/about";
import { PersonalitySection } from "@/components/sections/personality";
import { FeaturesSection } from "@/components/sections/features";
import { AdvantagesSection } from "@/components/sections/advantages";
import { MotivationSection } from "@/components/sections/motivation";
import { ReviewsSection } from "@/components/sections/reviews";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ApproachSection />
        <AboutSection />
        <PersonalitySection />
        <FeaturesSection />
        <AdvantagesSection />
        <MotivationSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
