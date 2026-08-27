"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";

const NewsletterSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-brand-900 py-16">
      <div className="container flex flex-col items-center gap-6 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-gold-400">
          <Mail size={20} />
        </span>
        <div>
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Subscribe to Our Newsletter
          </h3>
          <p className="mt-2 max-w-md text-sm text-white/60">
            Get exclusive offers, cleaning tips, and updates delivered
            straight to your inbox.
          </p>
        </div>

        {submitted ? (
          <p className="text-sm font-medium text-gold-400">
            Thanks for subscribing!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold-500 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-gold-400"
            >
              Subscribe
              <Send size={15} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;
