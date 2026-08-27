export interface MenuItem {
  display: string;
  href: string;
  children?: MenuItem[];
}

export const MENU_ITEMS: MenuItem[] = [
  { display: "Home", href: "/" },
  { display: "About", href: "/about" },
  { display: "Services", href: "/services" },
  { display: "Testimonials", href: "/testimonials" },
  { display: "Contact", href: "/contact" },
];

// TODO: replace with the cleaning company's real phone number/hours
export const CONTACT_PHONE = "+1 (202) 555-0198";
export const OPEN_HOURS = "Mon - Sat, 7am - 8pm";
