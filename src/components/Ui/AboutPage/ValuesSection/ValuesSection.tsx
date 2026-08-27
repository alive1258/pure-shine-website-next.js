import { Award, HeartHandshake, Leaf, Timer } from "lucide-react";
import SectionHeading from "../../Shared/SectionHeading";

const VALUES = [
  {
    icon: HeartHandshake,
    title: "Integrity",
    desc: "We do what we say — honest pricing, honest work, every visit.",
  },
  {
    icon: Award,
    title: "Quality",
    desc: "Detail-first cleaning that meets a consistent, high standard.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "Eco-friendly products and practices that protect people and the planet.",
  },
  {
    icon: Timer,
    title: "Reliability",
    desc: "On time, every time — you can build your schedule around us.",
  },
];

const ValuesSection = () => {
  return (
    <section className="bg-brand-50/40 py-16 md:py-24">
      <div className="container flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="What Drives Us"
          title="Our Mission & Values"
          subtitle="The principles that guide every cleaning we do."
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-3 rounded-2xl border border-brand-900/10 bg-white p-6 text-center shadow-sm"
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

export default ValuesSection;
