import { Leaf, Sparkles, Trash2 } from "lucide-react";
import SectionHeading from "../../Shared/SectionHeading";

const TIPS = [
  {
    icon: Sparkles,
    title: "Keep Surfaces Dust-Free",
    desc: "Wipe surfaces with a microfiber cloth regularly.",
  },
  {
    icon: Leaf,
    title: "Use Eco-Friendly Cleaners",
    desc: "Safer for you and better for the environment.",
  },
  {
    icon: Trash2,
    title: "Declutter Regularly",
    desc: "A tidy space stays cleaner for longer.",
  },
];

const CleaningTips = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Smart Cleaning Tips"
          title="Keep Your Space Fresh & Healthy"
          subtitle="Follow these simple tips to maintain a clean and healthy environment every day."
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
          {TIPS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-3 rounded-2xl border border-brand-900/10 bg-brand-50/40 p-6 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white">
                <Icon size={20} />
              </span>
              <h3 className="font-bold text-brand-900">{title}</h3>
              <p className="text-sm text-brand-900/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CleaningTips;
