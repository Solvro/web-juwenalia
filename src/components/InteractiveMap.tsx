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
				center={[51.106972989320404, 17.077329824567546]}
				zoom={16}
				scrollWheelZoom={true}
				className="w-[900px] mx-auto h-[900px]"
			>
				{/* <ImageOverlay url="middle-earth-map.jpg" bounds={[[0,0], [302.9278, 227.195]]} className="w-max h-max"></ImageOverlay> */}
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copycenter">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Polygon positions={[[51.10588330048589, 17.077913814910783], [51.10714558243972, 17.07337712840188], [51.1090699006493, 17.075023384204258], [51.108488803099426, 17.07701102945874], [51.109612886848886, 17.078255204381414], [51.10914134657534, 17.08050078833304]]}>
					<Popup>Hala Stulecia - Juwenalia 2025</Popup>
				</Polygon>
				<Marker position={[51.107093550006816, 17.07346238414613]}>
					<Popup>
						<table className="gap-2">
							<tr>
								<th>Linia <br />Tramwajowa</th>
								<th>Przystanki <br />Końcowe</th>
							</tr>
							<tr>
								<td className="font-bold text-center w-fit">0</td>
								<td>Zoo, Dworzec Główny</td>
							</tr>
							<tr>
								<td className="font-bold text-center w-fit">2</td>
								<td>Krzyki, Biskupin</td>
							</tr>
							<tr>
								<td className="font-bold text-center w-fit">4</td>
								<td>Biskupin, Oporów</td>
							</tr>
							<tr>
								<td className="font-bold text-center w-fit">10</td>
								<td>Leśnica, Biskupin</td>
							</tr>
							<tr>
								<td className="font-bold text-center w-fit">19</td>
								<td>Zoo, Kozanów (Dokerska)</td>
							</tr>
							<tr>
								<td className="font-bold text-center w-fit">78</td>
								<td>Tarnogaj, Biskupin</td>
							</tr>
						</table>
					</Popup>
				</Marker>
				<Marker position={[51.10745169656501, 17.07265278898644]}>
					<Popup>
						<table className="gap-2">
							<tr>
								<th>Linia <br />Autobusowa</th>
								<th>Przystanki <br />Końcowe</th>
							</tr>
							<tr>
								<td className="font-bold text-center w-fit">145</td>
								<td>Iwiny - Rondo, Sępolno</td>
							</tr>
							<tr>
								<td className="font-bold text-center w-fit">146</td>
								<td>Bartoszowice, Gaj - Pętla</td>
							</tr>
							<tr>
								<td className="font-bold text-center w-fit">253</td>
								<td>Leśnica, Sępolno</td>
							</tr>
							<tr>
								<td className="font-bold text-center w-fit">255</td>
								<td>Iwiny - Rondo, Sępolno</td>
							</tr>
							<tr>
								<td className="font-bold text-center w-fit">315</td>
								<td>Swojczyce, Reja</td>
							</tr>
							<tr>
								<td className="font-bold text-center w-fit">345</td>
								<td>Stadion Olimpijski (Pętla po mieście)</td>
							</tr>
						</table>
					</Popup>
				</Marker>
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
