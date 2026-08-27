"use client";

import { useMemo, useState } from "react";
import ServiceCard from "./ServiceCard";
import { SERVICE_CATEGORIES, SERVICES, type ServiceCategory } from "./servicesData";

interface ServiceTabsProps {
  limit?: number;
}

const ServiceTabs = ({ limit }: ServiceTabsProps) => {
  const [active, setActive] = useState<ServiceCategory | "all">("all");

  const filtered = useMemo(() => {
    const list =
      active === "all" ? SERVICES : SERVICES.filter((s) => s.category === active);
    return limit ? list.slice(0, limit) : list;
  }, [active, limit]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setActive("all")}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            active === "all"
              ? "bg-brand-600 text-white"
              : "bg-brand-50 text-brand-900/70 hover:bg-brand-100"
          }`}
        >
          All
        </button>
        {SERVICE_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActive(cat.id)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              active === cat.id
                ? "bg-brand-600 text-white"
                : "bg-brand-50 text-brand-900/70 hover:bg-brand-100"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceTabs;
