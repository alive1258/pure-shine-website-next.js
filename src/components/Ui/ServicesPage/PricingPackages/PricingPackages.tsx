import Link from "next/link";
import { Check } from "lucide-react";
import SectionHeading from "../../Shared/SectionHeading";

interface PricingTier {
  name: string;
  price: number;
  cadence: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const TIERS: PricingTier[] = [
  {
    name: "Basic",
    price: 89,
    cadence: "per visit",
    description: "A light, routine clean for smaller homes and apartments.",
    features: [
      "Dusting & surface wipe-down",
      "Vacuuming & mopping",
      "Kitchen & bathroom cleaning",
      "Trash removal",
    ],
  },
  {
    name: "Standard",
    price: 149,
    cadence: "per visit",
    description: "Our most popular package — thorough cleaning for the whole home.",
    features: [
      "Everything in Basic",
      "Interior window cleaning",
      "Baseboards & door frames",
      "Appliance exteriors",
      "Priority scheduling",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: 229,
    cadence: "per visit",
    description: "A deep, detail-first clean for large homes or commercial spaces.",
    features: [
      "Everything in Standard",
      "Deep carpet & upholstery care",
      "Inside cabinets & appliances",
      "Eco-friendly product upgrade",
      "Dedicated account manager",
    ],
  },
];

const PricingPackages = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, Transparent Packages"
          subtitle="Pick the plan that fits your space — no hidden fees, ever."
        />

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col gap-6 rounded-2xl border p-8 ${
                tier.highlighted
                  ? "border-brand-600 bg-brand-900 text-white shadow-xl lg:-translate-y-3"
                  : "border-brand-900/10 bg-white"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-500 px-4 py-1 text-xs font-bold uppercase tracking-wide text-brand-900">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className={`text-lg font-bold ${tier.highlighted ? "text-white" : "text-brand-900"}`}>
                  {tier.name}
                </h3>
                <p className={`mt-1 text-sm ${tier.highlighted ? "text-white/60" : "text-brand-900/60"}`}>
                  {tier.description}
                </p>
              </div>

              <div className="flex items-baseline gap-1.5">
                <span className={`text-4xl font-bold ${tier.highlighted ? "text-white" : "text-brand-900"}`}>
                  ${tier.price}
                </span>
                <span className={`text-sm ${tier.highlighted ? "text-white/50" : "text-brand-900/50"}`}>
                  {tier.cadence}
                </span>
              </div>

              <ul className="flex flex-1 flex-col gap-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2.5 text-sm ${
                      tier.highlighted ? "text-white/80" : "text-brand-900/70"
                    }`}
                  >
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${tier.highlighted ? "text-gold-400" : "text-brand-600"}`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition ${
                  tier.highlighted
                    ? "bg-gold-500 text-brand-900 hover:bg-gold-400"
                    : "bg-brand-600 text-white hover:bg-brand-700"
                }`}
              >
                Choose Plan
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;
