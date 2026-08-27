import Image from "next/image";
import SectionHeading from "../Shared/SectionHeading";

const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80&auto=format&fit=crop",
    alt: "Freshly cleaned modern living room",
  },
  {
    src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=700&q=80&auto=format&fit=crop",
    alt: "Sparkling clean modern kitchen",
  },
  {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=700&q=80&auto=format&fit=crop",
    alt: "Spotless modern bathroom",
  },
  {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&q=80&auto=format&fit=crop",
    alt: "Streak-free window after cleaning",
  },
  {
    src: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=700&q=80&auto=format&fit=crop",
    alt: "Freshly vacuumed carpet",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80&auto=format&fit=crop",
    alt: "Exterior of a freshly cleaned home",
  },
];

const GalleryShowcase = () => {
  return (
    <section className="bg-brand-50/40 py-16 md:py-24">
      <div className="container flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Our Results"
          title="See the Pure Shine Difference"
          subtitle="A look at real spaces after our team has been through them."
        />

        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5">
          {GALLERY_IMAGES.map((image) => (
            <div
              key={image.src}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryShowcase;
