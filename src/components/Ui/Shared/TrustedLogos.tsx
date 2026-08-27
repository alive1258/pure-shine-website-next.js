const LOGOS = ["CleanCorp", "HomeBright", "MetroFM", "EverGreen Spaces", "Skyline Offices"];

const TrustedLogos = ({ heading = "Trusted by Businesses & Homeowners" }: { heading?: string }) => {
  return (
    <section className="bg-white py-14">
      <div className="container flex flex-col items-center gap-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-900/40">
          {heading}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {LOGOS.map((logo) => (
            <span
              key={logo}
              className="text-lg font-bold tracking-tight text-brand-900/25 grayscale transition hover:text-brand-900/50"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedLogos;
