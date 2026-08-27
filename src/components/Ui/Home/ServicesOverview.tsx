import SectionHeading from "../Shared/SectionHeading";
import ServiceTabs from "../Shared/ServiceTabs";

const ServicesOverview = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Our Services"
          title="Offering Best Cleaning Services"
          subtitle="From residential to commercial cleaning, we provide tailored solutions that ensure freshness, hygiene, and comfort."
        />
        <ServiceTabs limit={4} />
      </div>
    </section>
  );
};

export default ServicesOverview;
