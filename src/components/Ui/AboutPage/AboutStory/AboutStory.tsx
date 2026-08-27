import { CheckCircle2 } from "lucide-react";
import AboutBookForm from "../AboutBookForm/AboutBookForm";

const CHECKLIST = [
  "Trained & Background-Checked Staff",
  "Eco-Friendly Cleaning Products",
  "100% Satisfaction Guarantee",
];

export default function AboutStory() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container grid gap-14 lg:grid-cols-2 lg:gap-16 items-start">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            About Company
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-900">
            Leading the Way in Cleaning Excellence Since 1995
          </h2>
          <p className="mt-5 text-brand-900/70 leading-relaxed">
            For nearly three decades, Pure Shine Cleaning has been delivering
            trusted, high-quality cleaning services tailored to homes and
            businesses across the region.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-medium text-brand-900">
                <CheckCircle2 size={18} className="shrink-0 text-brand-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <AboutBookForm />
      </div>
    </section>
  );
}
