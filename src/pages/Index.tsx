import { HeroSection } from "@/components/HeroSection";
import { LearningSection } from "@/components/LearningSection";
import { MentorSection } from "@/components/MentorSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WhyJoinSection } from "@/components/WhyJoinSection";
import { MethodSection } from "@/components/MethodSection";
import { BonusSection } from "@/components/BonusSection";
import { PricingSection } from "@/components/PricingSection";
import { AboutMentorSection } from "@/components/AboutMentorSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <LearningSection />
      <MentorSection />
      <TestimonialsSection />
      <WhyJoinSection />
      <MethodSection />
      <BonusSection />
      <PricingSection />
      <AboutMentorSection />
      <FAQSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
