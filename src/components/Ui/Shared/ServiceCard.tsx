import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "./servicesData";

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <Link
      href={`/services#${service.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-brand-900/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-bold text-brand-900">{service.title}</h3>
        <p className="text-sm leading-relaxed text-brand-900/60 line-clamp-2">
          {service.description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-sm font-semibold text-brand-600">
            Starting from ${service.priceFrom}
          </span>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
            <ArrowRight size={15} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
