"use client";

import { Marker } from "@adamscybot/react-leaflet-component-marker";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin } from "lucide-react";
import { useEffect } from "react";
import { MapContainer, Popup, TileLayer, useMap } from "react-leaflet";

import { wrLegendItems } from "@/config/wr-legend-items";
import type { LeafletElement } from "@/lib/types";

import { HorizontalRule } from "../horizontal-rule";
import { WrMapLegend } from "./wr-map-legend";

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
      <h1 className="mt-8 pl-5 text-4xl font-semibold">Mapa Wydarzenia</h1>
      <HorizontalRule />
      <MapContainer
        center={[51.106_972, 17.077_329]}
        zoom={16}
        scrollWheelZoom={true}
        dragging={false}
        className="relative z-0 mx-auto h-[50vh] w-[90%] touch-auto rounded-3xl object-cover sm:h-[75vh]"
      >
        <MapInitializer />
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
      <WrMapLegend className="my-10" items={wrLegendItems} />
    </div>
  );
}
