import type { Metadata } from "next";
import HeroSection from "@/src/components/Ui/Home/HeroSection";
import ServicesOverview from "@/src/components/Ui/Home/ServicesOverview";
import CtaBanner from "@/src/components/Ui/Shared/CtaBanner";
import WhyChooseUs from "@/src/components/Ui/Home/WhyChooseUs";
import WeCareSection from "@/src/components/Ui/Home/WeCareSection";
import ProcessSteps from "@/src/components/Ui/Home/ProcessSteps";
import GalleryShowcase from "@/src/components/Ui/Home/GalleryShowcase";
import PromoBanner from "@/src/components/Ui/Home/PromoBanner";
import TrustedLogos from "@/src/components/Ui/Shared/TrustedLogos";
import TestimonialsPreview from "@/src/components/Ui/Home/TestimonialsPreview";
import FaqSection from "@/src/components/Ui/Home/FaqSection";
import NewsletterSection from "@/src/components/Ui/Home/NewsletterSection";

export const metadata: Metadata = {
  title: "Pure Shine Cleaning — Reliable Cleaning Services You Can Trust",
  description:
    "Pure Shine delivers spotless, eco-friendly cleaning for homes and businesses — residential, commercial, and specialized cleaning services.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <CtaBanner
        title="Need a Custom Cleaning Plan?"
        subtitle="We offer flexible packages tailored to your needs."
        buttonText="Contact Us Now"
        buttonHref="/contact"
        variant="gold"
      />
      <WhyChooseUs />
      <WeCareSection />
      <ProcessSteps />
      <GalleryShowcase />
      <PromoBanner />
      <TrustedLogos />
      <TestimonialsPreview />
      <FaqSection />
      <NewsletterSection />
    </>
  );
}
