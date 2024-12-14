"use client";
import {
  MapContainer,
  Marker,
  Polygon,
  Popup,
  TileLayer
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

const trams = [
  {
    lineNumber: 0,
    terminus: "Zoo, Dworzec Główny"
  },
  {
    lineNumber: 2,
    terminus: "Krzyki, Biskupin"
  },
  {
    lineNumber: 4,
    terminus: "Biskupin, Oporów"
  },
  {
    lineNumber: 10,
    terminus: "Leśnica, Biskupin"
  },
  {
    lineNumber: 19,
    terminus: "Zoo, Kozanów (Dokerska)"
  },
  {
    lineNumber: 78,
    terminus: "Tarnogaj, Biskupin"
  }
];

const busses = [
  {
    lineNumber: 145,
    terminus: "Iwiny - Rondo, Sępolno"
  },
  {
    lineNumber: 146,
    terminus: "Bartoszowice, Gaj - Pętla"
  },
  {
    lineNumber: 253,
    terminus: "Leśnica, Sępolno"
  },
  {
    lineNumber: 255,
    terminus: "Iwiny - Rondo, Sępolno"
  },
  {
    lineNumber: 315,
    terminus: "Swojczyce, Reja"
  },
  {
    lineNumber: 345,
    terminus: "Stadion Olimpijski (Pętla po mieście)"
  }
];

interface LeafletElement extends Element {
  _leaflet_id?: string | null;
}

export function InteractiveMap() {
  useEffect(() => {
    return () => {
      // Clean up the map container when the component is unmounted
      const container: LeafletElement | null = document.querySelector(".leaflet-container");
      if (container) {
        container._leaflet_id = null;
      }
    };
  }, []);

  return (
    <div className="h-screen">
      <h1>Map Demo</h1>
      <MapContainer
        center={[51.106972989320404, 17.077329824567546]}
        zoom={16}
        scrollWheelZoom={true}
        className="w-[900px] mx-auto h-[900px]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copycenter">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polygon
          positions={[
            [51.10588330048589, 17.077913814910783],
            [51.10714558243972, 17.07337712840188],
            [51.1090699006493, 17.075023384204258],
            [51.108488803099426, 17.07701102945874],
            [51.109612886848886, 17.078255204381414],
            [51.10914134657534, 17.08050078833304]
          ]}
        >
          <Popup>Hala Stulecia - Juwenalia 2025</Popup>
        </Polygon>
        <Marker position={[51.107093550006816, 17.07346238414613]}>
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
                  <td className="font-bold text-center w-fit">
                    {tram.lineNumber}
                  </td>
                  <td>{tram.terminus}</td>
                </tr>
              ))}
              </tbody>
            </table>
          </Popup>
        </Marker>
        <Marker position={[51.10745169656501, 17.07265278898644]}>
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
                  <td className="font-bold text-center w-fit">
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
