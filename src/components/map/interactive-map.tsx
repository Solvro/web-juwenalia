"use client";

// @ts-ignore
import { Marker } from "@adamscybot/react-leaflet-component-marker";
import "leaflet/dist/leaflet.css";
import { MapPin } from "lucide-react";
import { useEffect } from "react";
import { MapContainer, Popup, TileLayer } from "react-leaflet";

import { wrLegendItems } from "@/config/wr-legend-items";
import { LeafletElement } from "@/lib/types";

import { WrMapLegend } from "./wr-map-legend";

const trams = [
  {
    lineNumber: 0,
    terminus: "Zoo, Dworzec Główny",
  },
  {
    lineNumber: 2,
    terminus: "Krzyki, Biskupin",
  },
  {
    lineNumber: 4,
    terminus: "Biskupin, Oporów",
  },
  {
    lineNumber: 10,
    terminus: "Leśnica, Biskupin",
  },
  {
    lineNumber: 19,
    terminus: "Zoo, Kozanów (Dokerska)",
  },
  {
    lineNumber: 78,
    terminus: "Tarnogaj, Biskupin",
  },
];

const busses = [
  {
    lineNumber: 145,
    terminus: "Iwiny - Rondo, Sępolno",
  },
  {
    lineNumber: 146,
    terminus: "Bartoszowice, Gaj - Pętla",
  },
  {
    lineNumber: 253,
    terminus: "Leśnica, Sępolno",
  },
  {
    lineNumber: 255,
    terminus: "Iwiny - Rondo, Sępolno",
  },
  {
    lineNumber: 315,
    terminus: "Swojczyce, Reja",
  },
  {
    lineNumber: 345,
    terminus: "Stadion Olimpijski (Pętla po mieście)",
  },
];

export function InteractiveMap() {
  useEffect(() => {
    return () => {
      const container: LeafletElement | null =
        document.querySelector(".leaflet-container");
      if (container !== null) {
        container._leaflet_id = null;
      }
    };
  }, []);

  return (
    <div>
      <h1 className="mt-8 pl-5 text-4xl font-semibold">Mapa Wydarzenia</h1>
      <hr className="mb-16 mt-5" />
      <MapContainer
        center={[51.106_972_989_320_404, 17.077_329_824_567_546]}
        zoom={16}
        scrollWheelZoom={true}
        dragging={true}
        className="mx-auto h-[75vh] w-[90%] touch-auto rounded-3xl object-cover"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copycenter">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {wrLegendItems.map((item) => (
          <Marker
            key={item.name}
            position={item.coordinates}
            icon={<MapPin className="h-8 w-8" color={item.color} />}
          >
            <Popup>
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p>{item.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <h2 className="mx-auto mt-4 hidden w-[90%] font-semibold sm:block">
        Legenda
      </h2>
      <WrMapLegend className="my-10 grid" items={wrLegendItems} />
      {/* <Marker position={[51.107_093_550_006_816, 17.073_462_384_146_13]}>
          <Popup>
            <table className="gap-2">
              <thead>
                <tr>
                  <th>
                    Linia <br />
                    Tramwajowa
                  </th>
                  <th>
                    Przystanki <br />
                    Końcowe
                  </th>
                </tr>
              </thead>
              <tbody>
                {trams.map((tram) => (
                  <tr key={tram.lineNumber}>
                    <td className="w-fit text-center font-bold">
                      {tram.lineNumber}
                    </td>
                    <td>{tram.terminus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Popup>
        </Marker>
        <Marker position={[51.107_451_696_565_01, 17.072_652_788_986_44]}>
          <Popup>
            <table className="gap-2">
              <thead>
                <tr>
                  <th>
                    Linia <br />
                    Autobusowa
                  </th>
                  <th>
                    Przystanki <br />
                    Końcowe
                  </th>
                </tr>
              </thead>
              <tbody>
                {busses.map((bus) => (
                  <tr key={bus.lineNumber}>
                    <td className="w-fit text-center font-bold">
                      {bus.lineNumber}
                    </td>
                    <td>{bus.terminus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Popup>
        </Marker> */}
    </div>
  );
}
