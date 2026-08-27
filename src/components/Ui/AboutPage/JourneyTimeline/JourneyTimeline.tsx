import SectionHeading from "../../Shared/SectionHeading";

const MILESTONES = [
  {
    year: "1995",
    title: "Pure Shine Is Founded",
    desc: "Started as a small residential cleaning crew serving the local neighborhood.",
  },
  {
    year: "2005",
    title: "Commercial Services Launched",
    desc: "Expanded into office and commercial cleaning to serve growing local businesses.",
  },
  {
    year: "2014",
    title: "Certifications Earned",
    desc: "Became fully licensed, bonded, and insured with certified health & safety training.",
  },
  {
    year: "Today",
    title: "1,000+ Happy Clients",
    desc: "A trusted team of 50+ certified cleaners serving homes and businesses every day.",
  },
];

const JourneyTimeline = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Our Journey"
          title="Milestones Along the Way"
        />

        <div className="relative w-full max-w-3xl">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-brand-100 sm:left-1/2" />

          <div className="flex flex-col gap-10">
            {MILESTONES.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={milestone.year}
                  className={`relative flex items-start gap-6 pl-12 sm:pl-0 ${
                    isEven ? "sm:flex-row" : "sm:flex-row-reverse sm:text-right"
                  }`}
                >
                  <span className="absolute left-0 top-0 z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white ring-4 ring-white sm:left-1/2 sm:-translate-x-1/2" />

                  <div className="hidden sm:block sm:w-1/2" />

                  <div className="flex-1 rounded-2xl border border-brand-900/10 bg-brand-50/40 p-5 sm:w-1/2 sm:flex-none">
                    <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
                      {milestone.year}
                    </span>
                    <h3 className="mt-1 font-bold text-brand-900">{milestone.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-brand-900/60">
                      {milestone.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
