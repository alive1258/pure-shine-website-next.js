import Image from "next/image";
import SectionHeading from "../../Shared/SectionHeading";

const TEAM = [
  {
    name: "Alan Whitfield",
    role: "Founder & CEO",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Maria Costa",
    role: "Operations Manager",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Robert Lin",
    role: "Lead Cleaning Specialist",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Priya Nair",
    role: "Client Relations Manager",
    photo:
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Tom Becker",
    role: "Quality Assurance Lead",
    photo:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Grace Kim",
    role: "Field Supervisor",
    photo:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&q=80&auto=format&fit=crop",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-brand-50/40 py-16 md:py-24">
      <div className="container flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Our People"
          title="Meet the Team"
          subtitle="The people behind every spotless space."
        />

        <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {TEAM.map((member) => (
            <div key={member.name} className="flex flex-col items-center gap-3 text-center">
              <div className="relative h-24 w-24 overflow-hidden rounded-full shadow-sm sm:h-28 sm:w-28">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-900">{member.name}</p>
                <p className="text-xs text-brand-900/50">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
