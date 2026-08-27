import type { Metadata } from "next";
import PageHero from "@/src/components/Shared/PageHero/PageHero";
import AboutStory from "@/src/components/Ui/AboutPage/AboutStory/AboutStory";
import AboutStats from "@/src/components/Ui/AboutPage/AboutStats/AboutStats";
import ValuesSection from "@/src/components/Ui/AboutPage/ValuesSection/ValuesSection";
import JourneyTimeline from "@/src/components/Ui/AboutPage/JourneyTimeline/JourneyTimeline";
import TeamSection from "@/src/components/Ui/AboutPage/TeamSection/TeamSection";
import AboutExplore from "@/src/components/Ui/AboutPage/AboutExplore/AboutExplore";
import CtaBanner from "@/src/components/Ui/Shared/CtaBanner";

export const metadata: Metadata = {
  title: "About Us | Pure Shine Cleaning",
  description:
    "Learn about Pure Shine Cleaning — our story, our standards, and why homeowners and businesses trust us for reliable, eco-friendly cleaning.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Leading the Way in Cleaning Excellence"
        subtitle="Pure Shine exists to make spotless, healthy spaces effortless — for homes and businesses alike. Here's who we are and how we work."
        image="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1600&q=80&auto=format&fit=crop"
        alt="Clean, bright modern kitchen"
      />

      <AboutStory />

      <AboutStats />

      <ValuesSection />

      <JourneyTimeline />

      <TeamSection />

      <AboutExplore />

      <CtaBanner
        title="Want to Talk to a Real Person?"
        subtitle="Our team is happy to walk you through our services, pricing, or a custom cleaning plan."
        buttonText="Get in Touch"
        buttonHref="/contact"
        variant="green"
      />
    </>
  );
}
