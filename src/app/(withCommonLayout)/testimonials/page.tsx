import type { Metadata } from "next";
import PageHero from "@/src/components/Shared/PageHero/PageHero";
import TestimonialStats from "@/src/components/Ui/TestimonialsPage/TestimonialStats/TestimonialStats";
import TestimonialCard from "@/src/components/Ui/Shared/TestimonialCard";
import { TESTIMONIALS } from "@/src/components/Ui/Shared/testimonialsData";
import TrustedLogos from "@/src/components/Ui/Shared/TrustedLogos";
import CtaBanner from "@/src/components/Ui/Shared/CtaBanner";

export const metadata: Metadata = {
  title: "Client Reviews | Pure Shine Cleaning",
  description:
    "See what homeowners and businesses say about Pure Shine Cleaning — real reviews from real clients.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What Our Clients Say"
        subtitle="Real feedback from the homeowners and businesses we've had the pleasure of cleaning for."
        image="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1600&q=80&auto=format&fit=crop"
        alt="Vacuum cleaning a carpet"
      />

      <TestimonialStats />

      <section className="bg-brand-50/40 py-16 md:py-24">
        <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <TrustedLogos />

      <CtaBanner
        title="Ready to Experience 5-Star Cleaning?"
        subtitle="Join thousands of happy clients who trust Pure Shine."
        buttonText="Book Now"
        buttonHref="/contact"
        variant="gold"
      />
    </>
  );
}
