export type ServiceCategory = "residential" | "commercial" | "specialized";

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  priceFrom: number;
  category: ServiceCategory;
}

export const SERVICE_CATEGORIES: { id: ServiceCategory; label: string }[] = [
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "specialized", label: "Specialized" },
];

export const SERVICES: Service[] = [
  {
    id: "home-cleaning",
    title: "Home Cleaning",
    description:
      "Routine, top-to-bottom cleaning that keeps every room fresh, tidy, and welcoming.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80&auto=format&fit=crop",
    priceFrom: 89,
    category: "residential",
  },
  {
    id: "office-cleaning",
    title: "Office Cleaning",
    description:
      "Scheduled cleaning for offices and workspaces that keeps your team productive and healthy.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&q=80&auto=format&fit=crop",
    priceFrom: 149,
    category: "commercial",
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning",
    description:
      "An intensive, detail-first clean that reaches the spots routine visits skip.",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&q=80&auto=format&fit=crop",
    priceFrom: 179,
    category: "specialized",
  },
  {
    id: "window-cleaning",
    title: "Window Cleaning",
    description:
      "Streak-free interior and exterior glass that lets the light back in.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80&auto=format&fit=crop",
    priceFrom: 59,
    category: "specialized",
  },
  {
    id: "construction-cleaning",
    title: "Construction Cleaning",
    description:
      "Post-renovation dust, debris, and residue removal so a new space is truly move-in ready.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format&fit=crop",
    priceFrom: 299,
    category: "specialized",
  },
  {
    id: "move-in-out-cleaning",
    title: "Move-In / Move-Out Cleaning",
    description:
      "A thorough reset for empty properties, so the next chapter starts spotless.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80&auto=format&fit=crop",
    priceFrom: 199,
    category: "residential",
  },
  {
    id: "carpet-cleaning",
    title: "Carpet Cleaning",
    description:
      "Deep extraction cleaning that lifts stains, dust, and odors out of carpets and rugs.",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&q=80&auto=format&fit=crop",
    priceFrom: 119,
    category: "commercial",
  },
  {
    id: "post-event-cleaning",
    title: "Post-Event Cleaning",
    description:
      "Fast, thorough clean-up after parties, functions, or business events.",
    image:
      "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=600&q=80&auto=format&fit=crop",
    priceFrom: 149,
    category: "commercial",
  },
];
