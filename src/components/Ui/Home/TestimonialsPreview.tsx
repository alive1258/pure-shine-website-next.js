import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../Shared/SectionHeading";
import TestimonialCard from "../Shared/TestimonialCard";
import { TESTIMONIALS } from "../Shared/testimonialsData";

const TestimonialsPreview = () => {
  const preview = TESTIMONIALS.slice(0, 3);

  return (
    <section className="bg-brand-50/40 py-16 md:py-24">
      <div className="container flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="What Our Clients Say"
          title="Trusted by Thousands of Happy Clients"
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <Link
          href="/testimonials"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          Read More Reviews
          <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
