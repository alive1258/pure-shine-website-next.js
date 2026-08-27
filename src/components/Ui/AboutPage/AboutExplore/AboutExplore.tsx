import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const CHECKLIST = [
  "COVID-19 Safety Compliance",
  "Regular Equipment Sanitization",
  "Trained Health & Safety Team",
];

export default function AboutExplore() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1585421514738-01798e348b17?w=700&q=80&auto=format&fit=crop"
            alt="Cleaner in protective gloves following safety standards"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Your Safety Is Our Priority
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-900">
            Following Health &amp; Safety Standards
          </h2>
          <p className="mt-5 text-brand-900/60 leading-relaxed">
            We strictly follow cleaning protocols recommended by health
            authorities to ensure a safe and hygienic environment for you and
            your loved ones.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-medium text-brand-900">
                <CheckCircle2 size={18} className="shrink-0 text-brand-600" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/services"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Learn More
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
