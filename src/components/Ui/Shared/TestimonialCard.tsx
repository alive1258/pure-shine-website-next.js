import Image from "next/image";
import { Star } from "lucide-react";
import type { Testimonial } from "./testimonialsData";

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-brand-900/10 bg-white p-6 shadow-sm">
      <div className="flex gap-0.5 text-gold-500">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <p className="flex-1 text-sm leading-relaxed text-brand-900/70">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-2">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            sizes="44px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-bold text-brand-900">{testimonial.name}</p>
          <p className="text-xs text-brand-900/50">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
