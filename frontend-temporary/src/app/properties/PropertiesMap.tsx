'use client';

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { formatMXN } from '@/types/preview';

export interface MapPoint {
  id: number;
  slug: string;
  lat: number;
  lng: number;
  city: string;
  address: string;
  pricePerMonth: number;
}

interface Props {
  points: MapPoint[];
  accentColor: string;
}

export default function PropertiesMap({ points, accentColor }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const L = (await import('leaflet')).default;
      if (cancelled || !containerRef.current) return;

      if (!mapRef.current) {
        mapRef.current = L.map(containerRef.current, { scrollWheelZoom: true });
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 18,
        }).addTo(mapRef.current);
      }
      const map = mapRef.current;

      // Clear previous markers before redrawing (filters may have changed).
      map.eachLayer((layer: L.Layer) => {
        if (layer instanceof L.Marker) map.removeLayer(layer);
      });

      const icon = L.divIcon({
        className: '',
        html: `<div style="background:${accentColor};width:14px;height:14px;border-radius:9999px;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,0.4)"></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
      });

      const bounds: [number, number][] = [];
      points.forEach((p) => {
        const marker = L.marker([p.lat, p.lng], { icon }).addTo(map);
        const streetName = p.address.split(',')[0];
        marker.bindPopup(
          `<a href="/properties/${p.slug}" style="font-weight:600;text-decoration:none;color:#1C1C1E;display:block;margin-bottom:2px;">${streetName}</a>` +
            `<span style="color:#86868B;font-size:12px;">${p.city.trim()}</span><br/>` +
            `<strong style="font-size:13px;">${formatMXN(p.pricePerMonth)}/mes</strong>`,
        );
        bounds.push([p.lat, p.lng]);
      });

      if (bounds.length > 0) {
        map.fitBounds(bounds, { padding: [40, 40], maxZoom: 13 });
      } else {
        map.setView([23.6345, -102.5528], 5); // Fallback: center of Mexico
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [points, accentColor]);

  useEffect(() => {
    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '600px' }} className="rounded-2xl overflow-hidden" />;
}
