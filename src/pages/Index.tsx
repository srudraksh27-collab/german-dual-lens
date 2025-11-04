import Hero from "@/components/Hero";
import SplitSection from "@/components/SplitSection";
import CultureSection from "@/components/CultureSection";
import HousingSection from "@/components/HousingSection";
import SocialTensionsSection from "@/components/SocialTensionsSection";
import QuoteSection from "@/components/QuoteSection";
import DiversitySection from "@/components/DiversitySection";
import YouthSection from "@/components/YouthSection";
import ConclusionSection from "@/components/ConclusionSection";

const Index = () => {
  const povertyQuotes = [
    "I stay under a blanket to keep warm.",
    "It tears you apart.",
  ];

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <SplitSection />
      <CultureSection />
      <HousingSection />
      <SocialTensionsSection />
      <QuoteSection 
        title="Poverty & Hardship"
        quotes={povertyQuotes}
        variant="dark"
      />
      <DiversitySection />
      <YouthSection />
      <ConclusionSection />
    </main>
  );
};

export default Index;
