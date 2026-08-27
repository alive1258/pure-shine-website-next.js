const STATS = [
  { value: "4.9/5", label: "Average Rating" },
  { value: "1,200+", label: "Client Reviews" },
  { value: "92%", label: "Repeat Clients" },
  { value: "25+", label: "Years Experience" },
];

const TestimonialStats = () => {
  return (
    <section className="bg-white py-14">
      <div className="container grid grid-cols-2 gap-8 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-brand-600">
              {stat.value}
            </div>
            <div className="mt-2 text-xs sm:text-sm uppercase tracking-wide text-brand-900/50">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialStats;
