import Link from 'next/link';
import { fetchPreview, imageUrl, coverImageUrl, parseAddress, formatMXN } from '@/types/preview';
import { getT } from '@/lib/lang';
import BackLink from './BackLink';

export const dynamic = 'force-dynamic';

export default async function ComparePage({
  searchParams,
}: {
  searchParams: Promise<{ ids?: string }>;
}) {
  const { t, lang } = await getT();
  let ids: number[] = [];
  try {
    const sp = await searchParams;
    ids = (sp?.ids ?? '')
      .split(',')
      .map((s) => parseInt(s, 10))
      .filter((n) => !isNaN(n));
  } catch {
    ids = [];
  }

  const properties = await fetchPreview();
  // Preserve the order the user selected them in, not the catalog order.
  const selected = ids
    .map((id) => properties.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .slice(0, 3);

  if (selected.length === 0) {
    return (
      <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }} className="flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="font-serif text-2xl mb-3" style={{ color: 'var(--ink)' }}>
            {lang === 'en' ? 'Nothing to compare yet' : 'Nada que comparar todavía'}
          </p>
          <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
            {lang === 'en'
              ? 'Pick 2 or 3 properties using the "Compare" button on the listings page.'
              : 'Elige 2 o 3 propiedades usando el botón "Comparar" en la página de propiedades.'}
          </p>
          <Link href="/properties" className="text-sm font-semibold underline" style={{ color: 'var(--ochre)' }}>
            {lang === 'en' ? '← Back to properties' : '← Volver a propiedades'}
          </Link>
        </div>
      </div>
    );
  }

  const rows: { label: string; render: (p: (typeof selected)[number]) => React.ReactNode }[] = [
    { label: lang === 'en' ? 'City' : 'Ciudad', render: (p) => p.city.trim() },
    { label: lang === 'en' ? 'Monthly price' : 'Precio mensual', render: (p) => formatMXN(p.pricePerMonth) },
    { label: lang === 'en' ? 'Daily rate' : 'Tarifa diaria', render: (p) => formatMXN(Math.round(p.pricePerMonth / 30)) },
    { label: lang === 'en' ? 'Bedrooms' : 'Recámaras', render: (p) => String(p.bedrooms) },
    { label: lang === 'en' ? 'Bathrooms' : 'Baños', render: (p) => String(p.bathrooms) },
    { label: lang === 'en' ? 'Max guests' : 'Huéspedes máx.', render: (p) => String(p.maxGuests) },
    { label: lang === 'en' ? 'Size' : 'Tamaño', render: (p) => `${p.sqMeters} m²` },
    { label: lang === 'en' ? 'Parking' : 'Estacionamiento', render: (p) => String(p.parkingSpots) },
    { label: lang === 'en' ? 'Wifi speed' : 'Velocidad wifi', render: (p) => `${p.wifiSpeed} Mbps` },
    {
      label: lang === 'en' ? 'Pet friendly' : 'Pet friendly',
      render: (p) => (p.petFriendlyNegotiable ? (lang === 'en' ? 'Negotiable' : 'Negociable') : p.petFriendly ? (lang === 'en' ? 'Yes' : 'Sí') : (lang === 'en' ? 'No' : 'No')),
    },
    { label: lang === 'en' ? 'Balcony' : 'Balcón', render: (p) => (p.balcony ? (lang === 'en' ? 'Yes' : 'Sí') : (lang === 'en' ? 'No' : 'No')) },
    {
      label: lang === 'en' ? 'Availability' : 'Disponibilidad',
      render: (p) => (p.available ? (lang === 'en' ? 'Available now' : 'Disponible ahora') : (lang === 'en' ? 'Currently booked' : 'Actualmente reservada')),
    },
    { label: lang === 'en' ? 'Amenities' : 'Amenidades', render: (p) => (p.amenities.length ? p.amenities.join(', ') : '—') },
  ];

  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <div className="max-w-6xl mx-auto px-6 py-10">
        <BackLink fallbackHref="/properties" label={lang === 'en' ? '← Back to properties' : '← Volver a propiedades'} />
        <h1 className="font-serif text-3xl mt-4 mb-8" style={{ color: 'var(--ink)' }}>
          {lang === 'en' ? 'Compare properties' : 'Comparar propiedades'}
        </h1>

        <div className="overflow-x-auto rounded-2xl" style={{ border: '1px solid var(--border)' }}>
          <table className="w-full text-sm min-w-[560px]">
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th className="p-4 text-left" style={{ color: 'var(--muted)' }}></th>
                {selected.map((p) => {
                  const { street } = parseAddress(p.address);
                  const mainImage = p.images[0];
                  return (
                    <th key={p.id} className="p-4 text-left align-top">
                      <Link href={`/properties/${p.slug}`} className="block hover-float">
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-2" style={{ backgroundColor: 'var(--card)' }}>
                          {mainImage ? (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img src={coverImageUrl(p) ?? imageUrl(mainImage)} alt={street} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="text-xs" style={{ color: 'var(--muted)' }}>{t.noImage}</span>
                            </div>
                          )}
                        </div>
                        <p className="font-serif text-base leading-tight" style={{ color: 'var(--ink)' }}>{street}</p>
                      </Link>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.label} style={{ backgroundColor: i % 2 === 0 ? 'transparent' : 'var(--card)' }}>
                  <td className="p-4 text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--muted)' }}>
                    {row.label}
                  </td>
                  {selected.map((p) => (
                    <td key={p.id} className="p-4" style={{ color: 'var(--ink)' }}>
                      {row.render(p)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
