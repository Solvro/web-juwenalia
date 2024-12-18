"use client";

import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { MapContainer, Marker, Polygon, Popup, TileLayer } from "react-leaflet";

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

interface LeafletElement extends Element {
  _leaflet_id?: string | null;
}

export function InteractiveMap() {
  useEffect(() => {
    return () => {
      // Clean up the map container when the component is unmounted
      const container: LeafletElement | null =
        document.querySelector(".leaflet-container");
      if (container !== null) {
        container._leaflet_id = null;
      }
    };
  }, []);

  return (
    <div className="h-screen">
      <h1>Map Demo</h1>
      <MapContainer
        center={[51.106_972_989_320_404, 17.077_329_824_567_546]}
        zoom={16}
        scrollWheelZoom={true}
        className="mx-auto h-[900px] w-[900px]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copycenter">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polygon
          positions={[
            [51.105_883_300_485_89, 17.077_913_814_910_783],
            [51.107_145_582_439_72, 17.073_377_128_401_88],
            [51.109_069_900_649_3, 17.075_023_384_204_258],
            [51.108_488_803_099_426, 17.077_011_029_458_74],
            [51.109_612_886_848_886, 17.078_255_204_381_414],
            [51.109_141_346_575_34, 17.080_500_788_333_04],
          ]}
        >
          <Popup>Hala Stulecia - Juwenalia 2025</Popup>
        </Polygon>
        <Marker position={[51.107_093_550_006_816, 17.073_462_384_146_13]}>
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
        </Marker>
      </MapContainer>
    </div>
  );
}
