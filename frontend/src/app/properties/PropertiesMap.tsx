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
  /** id of a property to highlight with a larger marker (e.g. the one being viewed) */
  highlightId?: number;
  height?: number;
}

// Above this zoom level, pins switch from plain dots to price labels
// (like Airbnb) since there's enough room for them not to overlap.
const PRICE_LABEL_ZOOM = 13;

function formatPriceShort(price: number): string {
  const thousands = Math.round(price / 1000);
  return `$${thousands}k`;
}

export default function PropertiesMap({ points, accentColor, highlightId, height = 600 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const leafletRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markersRef = useRef<any[]>([]);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const L = (await import('leaflet')).default;
      if (cancelled || !containerRef.current) return;
      leafletRef.current = L;

      if (!mapRef.current) {
        mapRef.current = L.map(containerRef.current, { scrollWheelZoom: true });
        // Geoapify's "osm-bright" style: free, no credit card, and
        // explicitly permits commercial use (unlike MapTiler's free tier).
        const geoapifyKey = process.env.NEXT_PUBLIC_GEOAPIFY_KEY || 'c82a5a0f3d3948308f2a21a480ba7aa1';
        L.tileLayer(`https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=${geoapifyKey}`, {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://www.geoapify.com/">Geoapify</a>',
          maxZoom: 19,
        }).addTo(mapRef.current);
      }
      const map = mapRef.current;

      // Establish the map's view (center/zoom) BEFORE adding any markers.
      // Adding markers or calling getZoom() on a brand-new map with no
      // view set yet throws in Leaflet, which was silently aborting
      // everything below it -- including this fitBounds call itself,
      // leaving the map with no viewport and therefore no tiles or pins.
      const bounds: [number, number][] = points.map((p) => [p.lat, p.lng]);
      if (bounds.length > 0) {
        map.fitBounds(bounds, { padding: [40, 40], maxZoom: 14 });
      } else {
        map.setView([23.6345, -102.5528], 5); // Fallback: center of Mexico
      }

      function buildIcon(p: MapPoint, isHighlighted: boolean, zoom: number) {
        if (isHighlighted) {
          return L.divIcon({
            className: '',
            html: `<div style="background:${accentColor};width:24px;height:24px;border-radius:9999px;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;font-size:12px;">★</div>`,
            iconSize: [24, 24],
            iconAnchor: [12, 12],
          });
        }
        if (zoom >= PRICE_LABEL_ZOOM) {
          const label = formatPriceShort(p.pricePerMonth);
          return L.divIcon({
            className: '',
            html: `<div style="background:#fff;color:#1C1C1E;padding:5px 10px;border-radius:9999px;font-size:12px;font-weight:700;white-space:nowrap;box-shadow:0 1px 4px rgba(0,0,0,0.35);border:1.5px solid ${accentColor};">${label}</div>`,
            iconSize: [64, 28],
            iconAnchor: [32, 14],
          });
        }
        return L.divIcon({
          className: '',
          html: `<div style="background:${accentColor};width:14px;height:14px;border-radius:9999px;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,0.4)"></div>`,
          iconSize: [14, 14],
          iconAnchor: [7, 7],
        });
      }

      function drawMarkers() {
        markersRef.current.forEach((m) => map.removeLayer(m));
        markersRef.current = [];

        const zoom = map.getZoom();
        points.forEach((p) => {
          const isHighlighted = p.id === highlightId;
          const marker = L.marker([p.lat, p.lng], {
            icon: buildIcon(p, isHighlighted, zoom),
            zIndexOffset: isHighlighted ? 1000 : 0,
          }).addTo(map);
          const streetName = p.address.split(',')[0];
          marker.bindPopup(
            `<a href="/properties/${p.slug}" style="text-decoration:none;color:inherit;display:block;">` +
              `<span style="font-weight:600;color:#1C1C1E;display:block;margin-bottom:2px;">${streetName}</span>` +
              `<span style="color:#86868B;font-size:12px;">${p.city.trim()}</span><br/>` +
              `<strong style="font-size:13px;color:#1C1C1E;">${formatMXN(p.pricePerMonth)}/mes</strong>` +
              `</a>`,
          );
          markersRef.current.push(marker);
        });
      }

      // Redraw markers whenever the zoom level crosses the price-label
      // threshold, so pins switch style like Airbnb's map does.
      map.off('zoomend');
      map.on('zoomend', drawMarkers);

      drawMarkers();
    })();

    return () => {
      cancelled = true;
    };
  }, [points, accentColor, highlightId]);

  useEffect(() => {
    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: `${height}px` }} className="rounded-2xl overflow-hidden" />;
}
