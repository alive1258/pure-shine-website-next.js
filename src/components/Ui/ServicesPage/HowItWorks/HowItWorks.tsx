import { CalendarCheck, ClipboardList, Smile, Sparkles } from "lucide-react";
import SectionHeading from "../../Shared/SectionHeading";

const STEPS = [
  {
    icon: ClipboardList,
    title: "Request a Quote",
    desc: "Tell us about your space and the service you need.",
  },
  {
    icon: CalendarCheck,
    title: "Schedule Your Visit",
    desc: "Pick a date and time that works with your calendar.",
  },
  {
    icon: Sparkles,
    title: "We Clean",
    desc: "Our certified team arrives on time and gets to work.",
  },
  {
    icon: Smile,
    title: "You Relax & Review",
    desc: "Enjoy your spotless space and let us know how we did.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container flex flex-col items-center gap-14">
        <SectionHeading eyebrow="Booking Process" title="How It Works" />

        <div className="relative grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden border-t-2 border-dashed border-brand-100 lg:block" />
          {STEPS.map(({ icon: Icon, title, desc }, index) => (
            <div key={title} className="relative flex flex-col items-center gap-4 text-center">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white ring-8 ring-white">
                <Icon size={20} />
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
                Step {index + 1}
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

export default HowItWorks;
