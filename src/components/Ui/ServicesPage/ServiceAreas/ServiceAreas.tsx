import { MapPin } from "lucide-react";
import SectionHeading from "../../Shared/SectionHeading";

// TODO: replace with the cleaning company's real service-area coverage.
const AREAS = [
  "Springfield",
  "Riverside",
  "Oakwood Heights",
  "Cedar Grove",
  "Lakeside",
  "Maple Ridge",
  "Fairview",
  "Brookhaven",
];

const ServiceAreas = () => {
  return (
    <section className="bg-brand-50/40 py-16 md:py-24">
      <div className="container flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Coverage"
          title="Areas We Serve"
          subtitle="Proudly cleaning homes and businesses across the greater metro area. Don't see your city? Reach out — we're always expanding."
        />

        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {AREAS.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2.5 rounded-xl border border-brand-900/10 bg-white px-4 py-3.5"
            >
              <MapPin size={16} className="shrink-0 text-brand-600" />
              <span className="text-sm font-medium text-brand-900">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
