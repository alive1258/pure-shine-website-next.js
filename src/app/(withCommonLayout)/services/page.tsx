import type { Metadata } from "next";
import PageHero from "@/src/components/Shared/PageHero/PageHero";
import HowItWorks from "@/src/components/Ui/ServicesPage/HowItWorks/HowItWorks";
import ServiceTabs from "@/src/components/Ui/Shared/ServiceTabs";
import SectionHeading from "@/src/components/Ui/Shared/SectionHeading";
import CtaBanner from "@/src/components/Ui/Shared/CtaBanner";
import PricingPackages from "@/src/components/Ui/ServicesPage/PricingPackages/PricingPackages";
import CleaningTips from "@/src/components/Ui/ServicesPage/CleaningTips/CleaningTips";
import ServiceAreas from "@/src/components/Ui/ServicesPage/ServiceAreas/ServiceAreas";

export const metadata: Metadata = {
  title: "Our Services | Pure Shine Cleaning",
  description:
    "Explore Pure Shine's residential, commercial, and specialized cleaning services — home cleaning, office cleaning, deep cleaning, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Cleaning Services Built Around Your Space"
        subtitle="From everyday tidying to deep, detail-first cleans — pick the service that fits your home or business."
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80&auto=format&fit=crop"
        alt="Modern, clean living room interior"
      />

      <HowItWorks />

      <section className="bg-brand-50/40 py-16 md:py-24">
        <div className="container flex flex-col items-center gap-12">
          <SectionHeading
            eyebrow="What We Offer"
            title="Professional Cleaning Services for Every Space"
            subtitle="Browse by category to find the right service for your home or business."
          />
          <ServiceTabs />
        </div>
      </section>

      <PricingPackages />

      <CtaBanner
        title="Need a Custom Cleaning Plan?"
        subtitle="We offer flexible packages tailored to your needs."
        buttonText="Contact Us Now"
        buttonHref="/contact"
        variant="gold"
      />

      <CleaningTips />

      <ServiceAreas />

      <CtaBanner
        title="Ready to Book Your Cleaning?"
        subtitle="Get a fast, free quote — no obligation."
        buttonText="Get a Quote"
        buttonHref="/contact"
        variant="green"
      />
    </>
  );
}
