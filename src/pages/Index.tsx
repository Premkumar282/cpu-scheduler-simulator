import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { AlgorithmsSection } from "@/components/AlgorithmsSection";
import { LiveAnimationSection } from "@/components/LiveAnimationSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AdvisorSection } from "@/components/AdvisorSection";
import { TechStackSection } from "@/components/TechStackSection";
import { FlowDiagramSection } from "@/components/FlowDiagramSection";
import { GitHubSection } from "@/components/GitHubSection";
import { DownloadSection } from "@/components/DownloadSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <AlgorithmsSection />
      <LiveAnimationSection />
      <FeaturesSection />
      <AdvisorSection />
      <TechStackSection />
      <FlowDiagramSection />
      <GitHubSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
