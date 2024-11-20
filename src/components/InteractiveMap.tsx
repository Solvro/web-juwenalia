"use client";
import {
	MapContainer,
	Marker,
	Polygon,
	Polyline,
	Popup,
	SVGOverlay,
	TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function InteractiveMap() {

	return (
		<div className="h-screen">
			<h1>Map Demo</h1>
			<MapContainer
				center={[51.10951971396077, 17.058494910345214]}
				zoom={17}
				scrollWheelZoom={true}
				className="w-[900px] mx-auto h-[900px]"
			>
				{/* <ImageOverlay url="middle-earth-map.jpg" bounds={[[0,0], [302.9278, 227.195]]} className="w-max h-max"></ImageOverlay> */}
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[51.10951971396077, 17.058494910345214]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
				<Polygon positions={[[51.11056530328368, 17.062864459186084], [51.110797615354834, 17.06210355052188], [51.1115501675664, 17.06149378124988], [51.11231579506628, 17.064188231793672]]}>
					<Popup>Popup in Polygon</Popup>
				</Polygon>
				{/* <SVGOverlay
					attributes={{ stroke: "red" }}
					bounds={[
						[51.11234851390756, 17.064151749871414],
						[51.11047695895013, 17.060607791709366],
					]}
				>
					<rect x="0" y="0" width="100%" height="100%" fill="blue" opacity="50%" />
					<circle r="5" cx="10" cy="10" fill="red" />
					<polygon points="220,10 300,210 170,250 123,234" scale="1" />
					<text x="50%" y="50%" stroke="white">
						text
					</text>
				</SVGOverlay> */}
			</MapContainer>
		</div>
	);
}
