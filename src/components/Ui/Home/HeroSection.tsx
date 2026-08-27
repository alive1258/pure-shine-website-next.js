import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck, Sparkles } from "lucide-react";

const TRUST_CHIPS = [
  { icon: ShieldCheck, label: "100% Satisfaction Guarantee" },
  { icon: Leaf, label: "Eco-Friendly Products" },
  { icon: Sparkles, label: "Trained & Verified Pros" },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-brand-50/40 pt-28 pb-20 lg:pt-16 lg:pb-24">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-700">
            Professional Cleaning Services
          </span>
          <h1 className="text-4xl font-bold leading-[1.1] text-brand-900 sm:text-5xl lg:text-[54px]">
            Reliable Cleaning Services You Can{" "}
            <span className="text-brand-600">Trust.</span>
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-brand-900/60 md:text-lg">
            Pure Shine delivers spotless results with every visit — whether
            it&apos;s your home, office, or commercial space. Quick,
            affordable, and hassle-free.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Book Your Cleaning
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-900/15 bg-white px-6 py-3.5 text-sm font-semibold text-brand-900 transition hover:border-brand-900/30"
            >
              View Services
            </Link>
          </div>

          <div className="mt-2 flex flex-wrap gap-x-6 gap-y-3">
            {TRUST_CHIPS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 text-xs font-medium text-brand-900/60"
              >
                <Icon size={15} className="text-brand-600" />
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto h-[360px] w-full max-w-md sm:h-[440px]">
          <div className="absolute left-0 top-0 h-[78%] w-[70%] overflow-hidden rounded-[2.5rem] shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&q=80&auto=format&fit=crop"
              alt="Cleaning professional wiping down a window"
              fill
              priority
              sizes="(min-width: 1024px) 30vw, 60vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 h-[55%] w-[55%] overflow-hidden rounded-[2.5rem] border-4 border-white shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&q=80&auto=format&fit=crop"
              alt="Sparkling clean modern kitchen"
              fill
              sizes="(min-width: 1024px) 20vw, 40vw"
              className="object-cover"
            />
          </div>

          <div className="absolute left-1/2 top-[38%] flex w-44 -translate-x-1/2 items-center gap-3 rounded-2xl bg-white p-4 shadow-2xl">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500 text-sm font-bold text-brand-900">
              25+
            </span>
            <span className="text-xs font-semibold leading-tight text-brand-900">
              Years of Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
