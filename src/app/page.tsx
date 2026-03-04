import { HeroSection } from "@/components/home/HeroSection";
import { StatsCounter } from "@/components/home/StatsCounter";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { CoursesSection } from "@/components/home/CoursesSection";
import { PortfolioSlider } from "@/components/home/PortfolioSlider";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABanner } from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsCounter />
      <AboutPreview />
      <ServicesGrid />
      <CoursesSection />
      <PortfolioSlider />
      <Testimonials />
      <CTABanner />
    </>
  );
}
