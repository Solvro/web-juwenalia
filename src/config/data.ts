import type { NavLink } from "@/lib/types";

export const FOOTER_LINKS = {
  contact: {
    mail: "kontakt@juwenalia.wroc.pl",
  },
  socials: {
    fb:
      process.env.JUWE_FB_URL ??
      "https://www.facebook.com/juwenaliawroclawrazem/",
    ig:
      process.env.JUWE_IG_URL ?? "https://www.instagram.com/juwewroclawrazem/",
    tt:
      process.env.JUWE_TIKTOK_URL ?? "https://www.tiktok.com/@juwewroclawrazem",
  },
  privacyPolicy:
    "https://www.termsfeed.com/live/98368f7b-984b-40a8-963d-7210e4c673eb",
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
