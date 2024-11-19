"use client";
import {
	ImageOverlay,
	MapContainer,
	Marker,
	Popup,
	SVGOverlay,
	TileLayer,
	useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function InteractiveMap() {
	const bounds = [
		[51.49, -0.08],
		[51.5, -0.06],
	];

	return (
		<div className="h-screen">
			<h1>Map Demo</h1>
			<MapContainer
				center={[51.505, -0.09]}
				zoom={14}
				scrollWheelZoom={true}
				className="w-[900px] mx-auto h-[900px]"
			>
				{/* <ImageOverlay url="middle-earth-map.jpg" bounds={[[0,0], [302.9278, 227.195]]} className="w-max h-max"></ImageOverlay> */}
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[51.505, -0.09]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
				<SVGOverlay attributes={{ stroke: "red" }} bounds={bounds}>
					<rect x="0" y="0" width="100%" height="100%" fill="blue" />
					<circle r="5" cx="10" cy="10" fill="red" />
					<text x="50%" y="50%" stroke="white">
						text
					</text>
				</SVGOverlay>
			</MapContainer>
		</div>
	);
}
