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
    name: "Nasz zespół",
    url: "/our-team",
    label: "Przejdź do strony o organizatorach wydarzenia",
  },
];

export const HERO_BG_BLUR_HASH =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAAXNSR0IArs4c6QAAAIhJREFUGFdFjbsKwkAUBee6eWgKIUhIowTExiDih+j/N36AQkA0BDHZvVfWxilONZyRumrMUEQEA8zi/pHDpjVLPIr9hPcUCGrRRM2Qy7G1uizwwcjmOV0/MoaAemXmQM77na2rgsdrYlUuud560tQxeCWLD6emsdwlDJ/Atlxwf450kxIkZuALpi9AOLz+vL4AAAAASUVORK5CYII=";

export const ORGANISATION_ROLES = {
  UNIVERSITY: "0",
  STUDENT_ORGANISATION: "1",
  MAIN_PARTNER: "2",
  MEDIA_PARTNER: "3",
  SPONSOR: "4",
} as const;
