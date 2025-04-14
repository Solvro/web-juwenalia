"use client";

import { Marker } from "@adamscybot/react-leaflet-component-marker";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import {
  MapContainer,
  Polyline,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";

import type { LeafletElement, WrItemPoint, WrItemPolyline } from "@/lib/types";

import { MapPin } from "./map-pin";
import { WrMapLegend } from "./wr-map-legend";

interface Props {
  WrMapProps: {
    mapPoints: WrItemPoint[];
    mapPolylines: WrItemPolyline[];
  };
}

export function InteractiveMap({ WrMapProps }: Props) {
  const { mapPoints, mapPolylines } = WrMapProps;

  useEffect(() => {
    return () => {
      const container: LeafletElement | null =
        document.querySelector(".leaflet-container");
      if (container !== null) {
        container._leaflet_id = null;
      }
    };
  }, []);

  function MapInitializer() {
    const map = useMap();
    useEffect(() => {
      map.dragging.enable();
      if (L.Browser.mobile) {
        map.dragging.disable();
      }
    }, [map]);
    return null;
  }

  return (
    <div>
      <MapContainer
        center={[51.123_211, 17.011_204]}
        zoom={16}
        scrollWheelZoom={true}
        dragging={false}
        className="relative z-0 mt-16 h-[50vh] w-full touch-auto rounded-3xl object-cover sm:h-[75vh]"
      >
        <MapInitializer />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copycenter">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mapPoints.map((item) => (
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

        {mapPolylines.map((polyline) => (
          <Polyline
            key={polyline.name}
            pathOptions={{ color: polyline.color }}
            positions={polyline.coordinates}
            weight={10}
          />
        ))}
      </MapContainer>
      <h2 className="mt-4 hidden w-full font-semibold sm:block">Legenda</h2>
      <WrMapLegend className="my-10" items={WrMapProps} />
    </div>
  );
}
