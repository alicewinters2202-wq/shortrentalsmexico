import Link from 'next/link';
import { imageUrl, coverImageUrl, parseAddress, formatMXN } from '@/types/preview';
import type { PropertyPreview } from '@/types/preview';

interface Props {
  properties: PropertyPreview[];
  currentId: number;
  city: string;
  bedrooms: number;
  lang: 'en' | 'es';
  accentColor: string;
  title: string;
}

export default function SimilarProperties({ properties, currentId, city, bedrooms, lang, accentColor, title }: Props) {
  const inCity = properties.filter((p) => p.id !== currentId && p.city.trim() === city.trim());

  // Prefer exact bedroom matches; if there aren't enough, fill remaining
  // slots with the closest bedroom counts rather than showing nothing.
  const exact = inCity.filter((p) => p.bedrooms === bedrooms);
  const rest = inCity
    .filter((p) => p.bedrooms !== bedrooms)
    .sort((a, b) => Math.abs(a.bedrooms - bedrooms) - Math.abs(b.bedrooms - bedrooms));

  const similar = [...exact, ...rest].slice(0, 3);

  if (similar.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="font-serif text-2xl mb-4" style={{ color: 'var(--ink)' }}>{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {similar.map((p) => {
          const { street } = parseAddress(p.address);
          const mainImage = p.images[0];
          return (
            <Link key={p.id} href={`/properties/${p.slug}`} className="group block hover-float">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--card)' }}>
                {mainImage ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={coverImageUrl(p) ?? imageUrl(mainImage)}
                    alt={street}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full" />
                )}
              </div>
              <p className="mt-3 text-base font-serif" style={{ color: 'var(--ink)' }}>{street}</p>
              <p className="text-sm mt-0.5" style={{ color: 'var(--muted)' }}>
                {p.bedrooms} {lang === 'en' ? 'bd' : 'rec'} · {formatMXN(p.pricePerMonth)}{lang === 'en' ? '/mo' : '/mes'}
              </p>
              <p className="text-xs mt-1 font-semibold" style={{ color: accentColor }}>
                {lang === 'en' ? 'View property →' : 'Ver propiedad →'}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
