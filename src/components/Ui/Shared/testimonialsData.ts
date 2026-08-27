export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Jessica Martin",
    role: "Home Owner",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop",
    rating: 5,
    quote:
      "Pure Shine did an amazing job on our home. Highly professional and very friendly staff — I've never had a cleaner house.",
  },
  {
    id: "t2",
    name: "David Anderson",
    role: "Office Manager",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop",
    rating: 5,
    quote:
      "Our office has never looked cleaner. Reliable service and great attention to detail every single visit.",
  },
  {
    id: "t3",
    name: "Sarah Thompson",
    role: "Business Owner",
    avatar:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=200&q=80&auto=format&fit=crop",
    rating: 5,
    quote:
      "Excellent cleaning for our commercial space. Will definitely book again — the team is punctual and thorough.",
  },
  {
    id: "t4",
    name: "Michael Reyes",
    role: "Home Owner",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80&auto=format&fit=crop",
    rating: 5,
    quote:
      "The deep cleaning package was worth every penny. Our carpets and kitchen look brand new again.",
  },
  {
    id: "t5",
    name: "Emily Carter",
    role: "Property Manager",
    avatar:
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=200&q=80&auto=format&fit=crop",
    rating: 5,
    quote:
      "We use Pure Shine for every move-out turnover. Fast scheduling and consistently spotless results.",
  },
  {
    id: "t6",
    name: "James Walker",
    role: "Restaurant Owner",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop",
    rating: 5,
    quote:
      "Health and safety standards are clearly a priority for this team. Our staff and customers both notice the difference.",
  },
  {
    id: "t7",
    name: "Olivia Bennett",
    role: "Home Owner",
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&q=80&auto=format&fit=crop",
    rating: 5,
    quote:
      "Booking was simple and the crew was in and out without disrupting our day. Highly recommend.",
  },
  {
    id: "t8",
    name: "Daniel Brooks",
    role: "Facilities Coordinator",
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&q=80&auto=format&fit=crop",
    rating: 5,
    quote:
      "Consistent quality across every visit. Pure Shine has become our go-to vendor for office cleaning.",
  },
];
