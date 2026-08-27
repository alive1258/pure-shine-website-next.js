"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const SERVICE_OPTIONS = [
  "Residential Cleaning",
  "Office Cleaning",
  "Deep Cleaning",
  "Window Cleaning",
  "Construction Cleaning",
  "Not sure yet",
];

// TODO: no backend yet — wire this up to a real inbox/CRM once one exists.
const AboutBookForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-brand-900/10 bg-brand-50/50 px-6 py-14 text-center">
        <CheckCircle2 size={30} className="text-brand-600" />
        <h3 className="text-lg font-bold text-brand-900">Request received!</h3>
        <p className="max-w-xs text-sm text-brand-900/60">
          Our team will reach out shortly to confirm your booking.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-2xl border border-brand-900/10 bg-brand-50/40 p-6 sm:p-8"
    >
      <h3 className="text-lg font-bold text-brand-900">Book a Service</h3>

      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-brand-900/60">
          Your Name
        </span>
        <input
          type="text"
          required
          className="w-full rounded-lg border border-brand-900/10 bg-white px-3 py-2.5 text-sm text-brand-900 focus:border-brand-500 focus:outline-none"
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-brand-900/60">
          Phone Number
        </span>
        <input
          type="tel"
          required
          className="w-full rounded-lg border border-brand-900/10 bg-white px-3 py-2.5 text-sm text-brand-900 focus:border-brand-500 focus:outline-none"
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-brand-900/60">
          Email Address
        </span>
        <input
          type="email"
          required
          className="w-full rounded-lg border border-brand-900/10 bg-white px-3 py-2.5 text-sm text-brand-900 focus:border-brand-500 focus:outline-none"
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-brand-900/60">
          Choose a Service
        </span>
        <select className="w-full rounded-lg border border-brand-900/10 bg-white px-3 py-2.5 text-sm text-brand-900 focus:border-brand-500 focus:outline-none">
          <option value="">Select Service</option>
          {SERVICE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-gold-400"
      >
        Submit Request
      </button>
    </form>
  );
};

export default AboutBookForm;
