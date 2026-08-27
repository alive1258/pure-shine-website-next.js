import { BadgeDollarSign, Leaf, ShieldCheck, ThumbsUp } from "lucide-react";
import SectionHeading from "../Shared/SectionHeading";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Certified & Insured",
    desc: "Every cleaner is background-checked, trained, and fully insured for your peace of mind.",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable & Transparent Pricing",
    desc: "Clear, upfront pricing with no hidden fees — you know the cost before we start.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    desc: "Safe, non-toxic cleaning products that protect your family, pets, and the planet.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    desc: "Not happy with a visit? We'll come back and make it right, free of charge.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Choose Pure Shine"
          subtitle="Here's what sets us apart from other cleaning companies."
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-3 rounded-2xl border border-brand-900/10 bg-brand-50/40 p-6 text-center transition hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white">
                <Icon size={20} />
              </span>
              <h3 className="font-bold text-brand-900">{title}</h3>
              <p className="text-sm leading-relaxed text-brand-900/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
