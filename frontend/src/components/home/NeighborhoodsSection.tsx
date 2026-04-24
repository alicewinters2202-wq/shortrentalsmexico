import Link from "next/link";

interface Props { lang: string }

const COLONIAS = [
  {
    slug: "polanco",
    name: "Polanco",
    desc_es: "La zona mas exclusiva de CDMX. Embajadas, restaurantes de lujo y boutiques internacionales.",
    desc_en: "The most exclusive area in CDMX. Embassies, luxury restaurants and international boutiques.",
    emoji: "🏛️",
    color: "rgba(120,53,15,0.85)",
  },
  {
    slug: "roma-norte",
    name: "Roma Norte",
    desc_es: "Cafes, galerías y la mejor escena gastronómica de la ciudad.",
    desc_en: "Cafes, galleries and the best gastronomic scene in the city.",
    emoji: "☕",
    color: "rgba(6,78,59,0.85)",
  },
  {
    slug: "condesa",
    name: "Condesa",
    desc_es: "Parques, arquitectura art deco y vida tranquila en el corazon de CDMX.",
    desc_en: "Parks, art deco architecture and quiet living in the heart of CDMX.",
    emoji: "🌳",
    color: "rgba(30,58,138,0.85)",
  },
  {
    slug: "hipodromo",
    name: "Hipodromo Condesa",
    desc_es: "Edificios modernos con albercas, gimnasios y roof gardens a mejor precio.",
    desc_en: "Modern buildings with pools, gyms and roof gardens at better prices.",
    emoji: "🏊",
    color: "rgba(76,29,149,0.85)",
  },
  {
    slug: "juarez",
    name: "Juarez",
    desc_es: "La colonia en auge. Centralidad maxima y precios accesibles cerca de Reforma.",
    desc_en: "The booming neighborhood. Maximum centrality and affordable prices near Reforma.",
    emoji: "🏙️",
    color: "rgba(136,19,55,0.85)",
  },
];

export default function NeighborhoodsSection({ lang }: Props) {
  const es = lang !== "en";
  return (
    <section className="px-6 py-20" style={{ backgroundColor: "var(--card)" }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--gold)" }}>
          {es ? "Ciudad de Mexico" : "Mexico City"}
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl mb-2" style={{ color: "var(--ink)" }}>
          {es ? "Elige tu colonia" : "Choose your neighborhood"}
        </h2>
        <p className="text-sm mb-10" style={{ color: "var(--muted)" }}>
          {es
            ? "Cada colonia tiene su propio caracter. Encuentra la que va contigo."
            : "Each neighborhood has its own character. Find the one that fits you."}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {COLONIAS.map((c) => (
            <Link
              key={c.slug}
              href={`/colonias/${c.slug}`}
              className="group relative overflow-hidden rounded-2xl flex flex-col justify-end p-5 transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: "var(--cream)", aspectRatio: "3/4" }}
            >
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(to top, ${c.color}, transparent)` }}
              />
              <span className="relative text-4xl mb-2">{c.emoji}</span>
              <h3 className="relative font-serif text-xl text-white mb-1">{c.name}</h3>
              <p className="relative text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                {es ? c.desc_es : c.desc_en}
              </p>
              <span className="relative mt-3 text-xs font-semibold" style={{ color: "var(--gold)" }}>
                {es ? "Ver propiedades →" : "View properties →"}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}