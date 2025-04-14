import { SunIcon } from "lucide-react";

import type { MapLevel } from "@/lib/types";

export const MAP_ITEMS: MapLevel[] = [
  {
    name: "Outside",
    description: "Scena plenerowa, gastronomia, atrakcje",
    icon: (
      <div className="grid h-full w-full place-items-center">
        <SunIcon className="h-full w-full shrink-0" />
      </div>
    ),
    image: {
      src: "/hala-stulecia-zewnatrz.png",
      alt: "Teren Juwenaliów Widok Satelitarny",
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
];
