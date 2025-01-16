import { SunIcon } from "lucide-react";

import type { MapLevel } from "@/lib/types";

export const MAP_ITEMS: MapLevel[] = [
  {
    name: "Outside",
    description: "Scena plenerowa, gastronomia, atrakcje",
    icon: <SunIcon className="size-10" />,
    image: {
      src: "/hala-stulecia-zewnatrz.png",
      alt: "Hala Stulecia Widok Satelitarny",
    },
    nodes: [
      {
        name: "Strefa Wyłączona",
        color: "#CD2E32",
      },
      {
        name: "Scena Plenerowa",
        color: "#D2CBA3",
      },
      {
        name: "Zaplecze Techniczne",
        color: "#5F6EB6",
      },
      {
        name: "Gastro",
        color: "#BBE880",
      },
      {
        name: "Partnerzy/Atrakcje",
        color: "#CB6BA9",
      },
    ],
  },
  {
    name: "Ground Floor",
    description: "Trybuna A, strefa dla gości",
    icon: <div className="text-3xl font-bold">1</div>,
    image: {
      src: "/hala-stulecia-poziom-0.png",
      alt: "Hala Stulecia Parter",
    },
    nodes: [
      {
        name: "Coś ciekawego",
        color: "#CD7E32",
      },
      {
        name: "Coś ciekawszego",
        color: "#32CBA3",
      },
      {
        name: "Coś jeszcze ciekawszego",
        color: "#5F6EB6",
      },
      {
        name: "Coś najciekawszego",
        color: "#BBE880",
      },
    ],
  },
  {
    name: "Floor 1",
    description: "Strefa atrakcji, backstage",
    icon: <div className="text-3xl font-bold">0</div>,
    image: {
      src: "/hala-stulecia-poziom-1.png",
      alt: "Hala Stulecia Piętro 1",
    },
    nodes: [
      {
        name: "Coś ciekawego 1",
        color: "#CD7E32",
      },
      {
        name: "Coś ciekawszego 1",
        color: "#32CBA3",
      },
      {
        name: "Coś jeszcze ciekawszego 1",
        color: "#5F6EB6",
      },
      {
        name: "Coś najciekawszego 1",
        color: "#BBE880",
      },
    ],
  },
  {
    name: "Floor -1",
    description: "Scena techno, gastronomia, strefa partnera",
    icon: <div className="text-3xl font-bold">-1</div>,
    image: {
      src: "/hala-stulecia-piwnica.png",
      alt: "Hala Stulecia Piętro -1",
    },
    nodes: [
      {
        name: "Coś ciekawego 2",
        color: "#CD7E32",
      },
      {
        name: "Coś ciekawszego 2",
        color: "#32CBA3",
      },
      {
        name: "Coś jeszcze ciekawszego 2",
        color: "#5F6EB6",
      },
      {
        name: "Coś najciekawszego 2",
        color: "#BBE880",
      },
    ],
  },
];
