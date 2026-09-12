interface Props {
  lang: 'en' | 'es';
  accentColor: string;
}

export default function WhatsIncluded({ lang, accentColor }: Props) {
  const items =
    lang === 'en'
      ? [
          'Fully equipped kitchen with appliances',
          'Bed linens and towels provided',
          'Basic cooking essentials & spices',
          'High-speed WiFi',
        ]
      : [
          'Cocina completamente equipada con electrodomésticos',
          'Sábanas y toallas incluidas',
          'Básicos de cocina y especias',
          'WiFi de alta velocidad',
        ];

  const title = lang === 'en' ? "What's included" : 'Qué incluye';
  const tagline =
    lang === 'en'
      ? 'Bring your suitcase — everything else is ready.'
      : 'Solo trae tu maleta — todo lo demás ya está listo.';

  return (
    <div>
      <h2 className="font-serif text-2xl mb-1" style={{ color: 'var(--ink)' }}>{title}</h2>
      <p className="text-sm mb-4" style={{ color: 'var(--muted)' }}>{tagline}</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink)' }}>
            <span style={{ color: accentColor }} className="mt-0.5">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
