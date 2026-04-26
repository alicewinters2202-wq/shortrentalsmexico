import Link from "next/link";

interface Props { lang: string }

const CIUDADES = [
  {
    ciudad_es: "Ciudad de Mexico",
    ciudad_en: "Mexico City",
    colonias: [
      { slug: "polanco", name: "Polanco", emoji: "🏛️", color: "rgba(120,53,15,0.85)", desc_es: "La zona mas exclusiva de CDMX.", desc_en: "The most exclusive area in CDMX." },
      { slug: "roma-norte", name: "Roma Norte", emoji: "☕", color: "rgba(6,78,59,0.85)", desc_es: "Cafes, galerias y la mejor gastronomia.", desc_en: "Cafes, galleries and the best gastronomy." },
      { slug: "condesa", name: "Condesa", emoji: "🌳", color: "rgba(30,58,138,0.85)", desc_es: "Parques y arquitectura art deco.", desc_en: "Parks and art deco architecture." },
      { slug: "hipodromo", name: "Hipodromo", emoji: "🏊", color: "rgba(76,29,149,0.85)", desc_es: "Amenidades completas a mejor precio.", desc_en: "Full amenities at better prices." },
      { slug: "juarez", name: "Juarez", emoji: "🏙️", color: "rgba(136,19,55,0.85)", desc_es: "Centralidad maxima cerca de Reforma.", desc_en: "Maximum centrality near Reforma." },
    ],
  },
  {
    ciudad_es: "Cancun",
    ciudad_en: "Cancun",
    colonias: [
      { slug: "cancun/zona-hotelera", name: "Zona Hotelera", emoji: "🏖️", color: "rgba(6,78,59,0.85)", desc_es: "Frente al Mar Caribe con playas de arena blanca.", desc_en: "Facing the Caribbean Sea with white sand beaches." },
      { slug: "cancun/puerto-cancun", name: "Puerto Cancun", emoji: "⛵", color: "rgba(30,58,138,0.85)", desc_es: "Marina exclusiva con campo de golf y laguna.", desc_en: "Exclusive marina with golf course and lagoon." },
    ],
  },
  {
    ciudad_es: "Guadalajara",
    ciudad_en: "Guadalajara",
    colonias: [
      { slug: "guadalajara/puerta-de-hierro", name: "Puerta de Hierro", emoji: "🏢", color: "rgba(120,53,15,0.85)", desc_es: "La zona mas exclusiva de Zapopan.", desc_en: "The most exclusive area in Zapopan." },
      { slug: "guadalajara/americana", name: "Col. Americana", emoji: "☕", color: "rgba(6,78,59,0.85)", desc_es: "Bohemia, cafes y la mejor escena cultural.", desc_en: "Bohemian, cafes and the best cultural scene." },
      { slug: "guadalajara/providencia", name: "Providencia", emoji: "🌳", color: "rgba(76,29,149,0.85)", desc_es: "Tranquila y elegante, entre el centro y el norte.", desc_en: "Quiet and elegant, between downtown and the north." },
    ],
  },
  {
    ciudad_es: "Monterrey",
    ciudad_en: "Monterrey",
    colonias: [
      { slug: "monterrey/san-pedro", name: "San Pedro Garza Garcia", emoji: "🏙️", color: "rgba(30,58,138,0.85)", desc_es: "El municipio mas prospero de Mexico.", desc_en: "The most prosperous municipality in Mexico." },
      { slug: "monterrey/valle-oriente", name: "Valle Oriente", emoji: "🏢", color: "rgba(136,19,55,0.85)", desc_es: "El corredor empresarial mas moderno del norte.", desc_en: "The most modern business corridor in the north." },
    ],
  },
  {
    ciudad_es: "San Miguel de Allende",
    ciudad_en: "San Miguel de Allende",
    colonias: [
      { slug: "san-miguel/centro", name: "Centro Historico", emoji: "⛪", color: "rgba(120,53,15,0.85)", desc_es: "Patrimonio UNESCO con calles empedradas.", desc_en: "UNESCO Heritage with cobblestone streets." },
      { slug: "san-miguel/villa-de-los-frailes", name: "Villa de los Frailes", emoji: "🏡", color: "rgba(6,78,59,0.85)", desc_es: "Residencial tranquilo cerca del centro.", desc_en: "Quiet residential area close to centro." },
    ],
  },
  {
    ciudad_es: "Merida",
    ciudad_en: "Merida",
    colonias: [
      { slug: "merida/centro", name: "Centro", emoji: "🏛️", color: "rgba(120,53,15,0.85)", desc_es: "Corazon historico de la Ciudad Blanca.", desc_en: "Historic heart of the White City." },
      { slug: "merida/altabrisa", name: "Altabrisa", emoji: "🏬", color: "rgba(30,58,138,0.85)", desc_es: "Zona moderna con servicios de primer nivel.", desc_en: "Modern area with top-tier services." },
      { slug: "merida/temozon-norte", name: "Temozon Norte", emoji: "⛳", color: "rgba(76,29,149,0.85)", desc_es: "La zona mas exclusiva al norte de Merida.", desc_en: "The most exclusive area north of Merida." },
    ],
  },
  {
    ciudad_es: "Puerto Vallarta",
    ciudad_en: "Puerto Vallarta",
    colonias: [
      { slug: "puerto-vallarta/marina-vallarta", name: "Marina Vallarta", emoji: "⛵", color: "rgba(30,58,138,0.85)", desc_es: "Marina de clase mundial frente a la bahia.", desc_en: "World-class marina facing the bay." },
      { slug: "puerto-vallarta/zona-hotelera", name: "Zona Hotelera", emoji: "🌅", color: "rgba(6,78,59,0.85)", desc_es: "Playas de la Bahia de Banderas.", desc_en: "Beaches of Banderas Bay." },
      { slug: "puerto-vallarta/zona-romantica", name: "Zona Romantica", emoji: "🎨", color: "rgba(136,19,55,0.85)", desc_es: "El corazon bohemio y cultural de Vallarta.", desc_en: "The bohemian and cultural heart of Vallarta." },
    ],
  },
  {
    ciudad_es: "Nuevo Vallarta",
    ciudad_en: "Nuevo Vallarta",
    colonias: [
      { slug: "nuevo-vallarta/flamingos", name: "Flamingos", emoji: "🏖️", color: "rgba(6,78,59,0.85)", desc_es: "Marina y playa frente al Pacifico.", desc_en: "Marina and beach on the Pacific." },
      { slug: "nuevo-vallarta/bucerias", name: "Bucerias", emoji: "🌊", color: "rgba(120,53,15,0.85)", desc_es: "Pueblo costero autentico con vida tranquila.", desc_en: "Authentic coastal town with peaceful life." },
    ],
  },
  {
    ciudad_es: "Playa del Carmen",
    ciudad_en: "Playa del Carmen",
    colonias: [
      { slug: "playa-del-carmen/mayakoba", name: "Mayakoba", emoji: "🌿", color: "rgba(6,78,59,0.85)", desc_es: "El desarrollo mas exclusivo de la Riviera Maya.", desc_en: "The most exclusive development in the Riviera Maya." },
      { slug: "playa-del-carmen/playacar", name: "Playacar", emoji: "🏖️", color: "rgba(30,58,138,0.85)", desc_es: "Fraccionamiento privado junto a la Quinta Avenida.", desc_en: "Private development next to Fifth Avenue." },
    ],
  },
  {
    ciudad_es: "Tulum",
    ciudad_en: "Tulum",
    colonias: [
      { slug: "tulum/aldea-zama", name: "Aldea Zama", emoji: "🌿", color: "rgba(6,78,59,0.85)", desc_es: "El desarrollo mas exclusivo de Tulum.", desc_en: "The most exclusive development in Tulum." },
      { slug: "tulum/la-veleta", name: "La Veleta", emoji: "🌴", color: "rgba(120,53,15,0.85)", desc_es: "Selva y modernidad a precio accesible.", desc_en: "Jungle and modernity at accessible prices." },
    ],
  },
];

export default function NeighborhoodsSection({ lang }: Props) {
  const es = lang !== "en";
  return (
    <section className="px-6 py-20" style={{ backgroundColor: "var(--card)" }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--gold)" }}>
          {es ? "Mexico" : "Mexico"}
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl mb-2" style={{ color: "var(--ink)" }}>
          {es ? "Elige tu zona" : "Choose your area"}
        </h2>
        <p className="text-sm mb-16" style={{ color: "var(--muted)" }}>
          {es
            ? "Cada colonia tiene su propio caracter. Encuentra la que va contigo."
            : "Each neighborhood has its own character. Find the one that fits you."}
        </p>
        <div className="space-y-16">
          {CIUDADES.map((ciudad) => (
            <div key={ciudad.ciudad_es}>
              <h3 className="font-serif text-2xl mb-6" style={{ color: "var(--ink)" }}>
                {es ? ciudad.ciudad_es : ciudad.ciudad_en}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {ciudad.colonias.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/colonias/${c.slug}`}
                    className="group relative overflow-hidden rounded-2xl flex flex-col justify-end p-4 transition-transform hover:scale-[1.02]"
                    style={{ backgroundColor: "var(--cream)", aspectRatio: "3/4" }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(to top, ${c.color}, transparent)` }}
                    />
                    <span className="relative text-3xl mb-2">{c.emoji}</span>
                    <h4 className="relative font-serif text-base text-white mb-1 leading-tight">{c.name}</h4>
                    <p className="relative text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                      {es ? c.desc_es : c.desc_en}
                    </p>
                    <span className="relative mt-2 text-xs font-semibold" style={{ color: "var(--gold)" }}>
                      {es ? "Ver →" : "View →"}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
