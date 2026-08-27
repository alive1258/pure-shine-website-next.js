"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "../Shared/SectionHeading";

const FAQS = [
  {
    question: "What's included in a standard cleaning?",
    answer:
      "A standard cleaning covers dusting, vacuuming, mopping, kitchen and bathroom sanitizing, trash removal, and tidying of all living areas.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer:
      "Not at all. Many clients provide access instructions and go about their day — our team is trained, background-checked, and fully insured.",
  },
  {
    question: "What products do you use?",
    answer:
      "We use eco-friendly, non-toxic products that are safe for children, pets, and allergy-sensitive households, unless you request otherwise.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Pricing depends on the size of your space, the type of service, and how often you book. Request a free quote and we'll give you a clear, upfront price.",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "You can reschedule or cancel free of charge up to 24 hours before your appointment. Late cancellations may incur a small fee.",
  },
  {
    question: "Are your cleaners insured?",
    answer:
      "Yes — every cleaner on our team is background-checked, trained, and fully insured and bonded for your protection.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Answers to the questions we hear most often."
        />

        <div className="w-full max-w-2xl divide-y divide-brand-900/10 rounded-2xl border border-brand-900/10">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-brand-900 sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-brand-600 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-4 text-sm leading-relaxed text-brand-900/60">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
