import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

const pin = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface MapItem {
  locationName: string;
  businessName: string;
  location: string;
  daysOpen: string;
  hoursOpen: string;
  lat: number;
  lng: number;
}

interface MapCardProps {
  location: MapItem;
}

function MapCard({ location }: MapCardProps) {
  return (
    <div className="bg-card border-border rounded-2xl overflow-hidden">
      <div className="h-50">
        <MapContainer
          center={[location.lat, location.lng]}
          zoom={15}
          scrollWheelZoom={false}
          dragging={false}
          doubleClickZoom={false}
          touchZoom={false}
          zoomControl={false}
          attributionControl={false}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[location.lat, location.lng]} icon={pin} />
        </MapContainer>
      </div>
      <div className="px-6.5 py-7">
        <div className="flex items-center gap-2.25 mb-1.75">
          <div className="w-2.25 h-2.25 bg-purple-deep rotate-45"></div>
          <span className="text-sm tracking-[0.16em] uppercase text-purple-deep font-semibold">
            {location.locationName}
          </span>
        </div>
        <h3 className="font-serif font-semibold text-[27px] mb-3">
          {location.businessName}
        </h3>
        <p className="text-[14.5px] leading-[1.6] text-plum-ink m-0">
          {location.location}
        </p>
        <p className="text-[13.5px] leading-[1.6] text-subtle-ink mt-2.5">
          {location.daysOpen} · {location.hoursOpen}
        </p>
      </div>
    </div>
  );
}

export default MapCard;
