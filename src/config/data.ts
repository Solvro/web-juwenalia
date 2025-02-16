import type { NavLink } from "@/lib/types";

export const FOOTER_LINKS = {
  contact: {
    phone: "+48 000 000 000",
    mail: "mail@example.com",
  },
  socials: {
    fb: process.env.JUWE_FB_URL ?? "https://facebook.com/",
    ig: process.env.JUWE_IG_URL ?? "https://instagram.com/",
    tt: process.env.JUWE_TIKTOK_URL ?? "https://tiktok.com/",
  },
  privacyPolicy: "https://example.com/",
  bugReport: "https://example.com.",
};

export const NAV_LINKS: NavLink[] = [
  {
    name: "Strona główna",
    url: "/",
    label: "Przejdź do strony głównej",
  },
  {
    name: "Artyści",
    url: "/artists",
    label: "Przejdź do strony z artystami",
  },
  {
    name: "Mapa wydarzenia",
    url: "/map",
    label: "Przejdź do strony z mapą wydarzenia",
  },
  {
    name: "Aktualności",
    url: "/news",
    label: "Przejdź do strony z aktualnościami",
  },
];
