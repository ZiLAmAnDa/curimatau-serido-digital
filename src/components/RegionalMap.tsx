import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Card } from "@/components/ui/card";

// Fix for default marker icons in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const municipalities = [
  { name: "Cuité", coords: [-6.48500, -36.15694], state: "PB" },
  { name: "Jaçanã", coords: [-6.41856, -36.20310], state: "RN" },
  { name: "Nova Floresta", coords: [-6.45500, -36.20278], state: "PB" },
  { name: "Picuí", coords: [-6.51056, -36.34694], state: "PB" },
  { name: "Coronel Ezequiel", coords: [-6.38306, -36.21250], state: "RN" },
];

const RegionalMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current).setView([-6.45, -36.25], 10);
    mapInstanceRef.current = map;

    // Add tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add markers for each municipality
    municipalities.forEach((city) => {
      const marker = L.marker([city.coords[0], city.coords[1]]).addTo(map);
      marker.bindPopup(`
        <div class="text-center">
          <strong class="text-lg">${city.name}</strong>
          <br/>
          <span class="text-sm text-gray-600">${city.state}</span>
        </div>
      `);
    });

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <Card className="overflow-hidden shadow-lg border-border">
      <div ref={mapRef} className="w-full h-[500px] md:h-[600px]" />
    </Card>
  );
};

export default RegionalMap;
