import SectionHeading from "../Shared/SectionHeading";

const STEPS = [
  { number: "1", title: "Tell Us What You Need", desc: "Share your cleaning requirements with our team." },
  { number: "2", title: "Pick a Time That Suits You", desc: "We'll schedule a convenient time for cleaning." },
  { number: "3", title: "We Clean With Care", desc: "Our professionals deep clean & detail every space." },
  { number: "4", title: "You Relax, We've Got It Done", desc: "Enjoy your spotless space, hassle-free." },
];

const ProcessSteps = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Sparkling Clean in Just 4 Simple Steps"
        />

        <div className="relative grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden border-t-2 border-dashed border-brand-100 lg:block" />
          {STEPS.map((step) => (
            <div key={step.number} className="relative flex flex-col items-center gap-4 text-center">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white ring-8 ring-white">
                {step.number}
              </span>
              <h3 className="font-bold text-brand-900">{step.title}</h3>
              <p className="text-sm leading-relaxed text-brand-900/60">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
