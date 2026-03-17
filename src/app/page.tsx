import HeroSection from "@/components/landing/HeroSection";
import ServicesSection from "@/components/landing/ServicesSection";
import HowItWorks from "@/components/landing/HowItWorks";
import DemoSection from "@/components/landing/DemoSection";
import CTASection from "@/components/landing/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <HowItWorks />
      <DemoSection />
      <CTASection />
    </>
  );
}
