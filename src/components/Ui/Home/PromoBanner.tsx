import Image from "next/image";
import Link from "next/link";

const PromoBanner = () => {
  return (
    <section className="bg-brand-900 py-14">
      <div className="container grid items-center gap-8 sm:grid-cols-[auto_1fr_auto] sm:gap-10">
        <div className="relative mx-auto h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 border-white/10 sm:mx-0">
          <Image
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80&auto=format&fit=crop"
            alt="Cleaning professional ready to help"
            fill
            sizes="160px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400">
            Limited Time Offer
          </span>
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Get 20% Off Your First Cleaning
          </h3>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gold-500 text-sm font-bold text-brand-900">
            20% <span className="ml-0.5 text-[10px] font-semibold">OFF</span>
          </span>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-gold-400"
          >
            Book Now & Save
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
