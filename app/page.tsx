import HeroSection from "@/components/home/HeroSection";
import BrandStrip from "@/components/home/BrandStrip";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import GalleryStrip from "@/components/home/GalleryStrip";
import TeamSection from "@/components/home/TeamSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import LoyaltyBanner from "@/components/home/LoyaltyBanner";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandStrip />
      <AboutSection />
      <ServicesSection />
      <GalleryStrip />
      <TeamSection />
      <TestimonialsSection />
      <LoyaltyBanner />
      <CTASection />
    </>
  );
}
