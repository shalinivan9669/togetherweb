import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProblemsSection } from "./components/ProblemsSection";
import { TimelineSection } from "./components/TimelineSection";
import { VectorsDetailSection } from "./components/VectorsDetailSection";
import { AudienceSection } from "./components/AudienceSection";
import { FormatSection } from "./components/FormatSection";
import { PricingSection } from "./components/PricingSection";
import { RoadmapSection } from "./components/RoadmapSection";
import { ResultsSection } from "./components/ResultsSection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProblemsSection />
        <TimelineSection />
        <VectorsDetailSection />
        <AudienceSection />
        <FormatSection />
        <PricingSection />
        <RoadmapSection />
        <ResultsSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
