import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const CHECKLIST = [
  "Eco-Friendly & Safe Products",
  "Advanced Cleaning Equipment",
  "Trained & Verified Professionals",
];

const WeCareSection = () => {
  return (
    <section className="bg-brand-50/40 py-16 md:py-24">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        <div className="relative mx-auto h-[340px] w-full max-w-md sm:h-[400px]">
          <div className="absolute left-0 top-4 h-[75%] w-[62%] overflow-hidden rounded-[2rem] shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=600&q=80&auto=format&fit=crop"
              alt="Cleaner spraying a wooden table"
              fill
              sizes="(min-width: 1024px) 25vw, 55vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 h-[55%] w-[50%] overflow-hidden rounded-[2rem] border-4 border-white shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500&q=80&auto=format&fit=crop"
              alt="Gloved hand holding a cleaning spray bottle"
              fill
              sizes="(min-width: 1024px) 20vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="absolute right-2 top-0 flex w-40 items-center gap-2 rounded-2xl bg-white p-3.5 shadow-xl">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
              100%
            </span>
            <span className="text-[11px] font-semibold leading-tight text-brand-900">
              Satisfaction Guarantee
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Experience the Difference
          </span>
          <h2 className="text-3xl font-bold leading-tight text-brand-900 sm:text-4xl">
            More Than Just Cleaning, We Care
          </h2>
          <p className="text-brand-900/60 leading-relaxed">
            We go beyond surface-level cleaning to create healthier, fresher,
            and more productive environments for you.
          </p>
          <ul className="flex flex-col gap-3">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-medium text-brand-900">
                <CheckCircle2 size={18} className="shrink-0 text-brand-600" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/services"
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            View All Services
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WeCareSection;
