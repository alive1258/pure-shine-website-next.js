const STATS = [
  { value: "25+", label: "Years Experience" },
  { value: "1,000+", label: "Happy Clients" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "50+", label: "Certified Staff" },
];

export default function AboutStats() {
  return (
    <section className="bg-brand-900 py-14">
      <div className="container grid grid-cols-2 gap-8 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gold-400">
              {stat.value}
            </div>
            <div className="mt-2 text-xs sm:text-sm uppercase tracking-wide text-brand-100/70">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
