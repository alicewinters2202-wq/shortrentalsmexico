import Link from "next/link";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Rentas amuebladas por colonia en Mexico | ShortStayMX",
  description: "Encuentra departamentos amueblados en las mejores colonias de Mexico: Polanco, Roma Norte, Condesa, Cancun, Tulum, Puerto Vallarta y mas.",
};

const CITIES = [
  {
    city_es: "Ciudad de Mexico",
    city_en: "Mexico City",
    emoji: "🏙️",
    colonias: [
      { name: "Polanco", slug: "polanco", desc_es: "La zona mas exclusiva de CDMX", desc_en: "The most exclusive area in CDMX" },
      { name: "Roma Norte", slug: "roma-norte", desc_es: "Bohemia, cafes y gastronomia", desc_en: "Bohemian, cafes and gastronomy" },
      { name: "Condesa", slug: "condesa", desc_es: "Art deco, Parque Mexico y tranquilidad", desc_en: "Art deco, Parque Mexico and tranquility" },
      { name: "Hipodromo Condesa", slug: "hipodromo", desc_es: "Amenidades completas a mejor precio", desc_en: "Full amenities at better prices" },
      { name: "Juarez", slug: "juarez", desc_es: "Zona en auge junto a Reforma", desc_en: "Booming area next to Reforma" },
    ],
  },
  {
    city_es: "Cancun",
    city_en: "Cancun",
    emoji: "🏖️",
    colonias: [
      { name: "Zona Hotelera", slug: "cancun/zona-hotelera", desc_es: "Frente al Mar Caribe turquesa", desc_en: "Facing the turquoise Caribbean Sea" },
      { name: "Puerto Cancun", slug: "cancun/puerto-cancun", desc_es: "Marina exclusiva y campo de golf", desc_en: "Exclusive marina and golf course" },
    ],
  },
  {
    city_es: "Guadalajara",
    city_en: "Guadalajara",
    emoji: "🌺",
    colonias: [
      { name: "Puerta de Hierro", slug: "guadalajara/puerta-de-hierro", desc_es: "La zona mas exclusiva de Zapopan", desc_en: "The most exclusive area of Zapopan" },
      { name: "Colonia Americana", slug: "guadalajara/americana", desc_es: "Bohemia, Av. Chapultepec y cafes", desc_en: "Bohemian, Av. Chapultepec and cafes" },
      { name: "Providencia", slug: "guadalajara/providencia", desc_es: "Tranquila, elegante y bien ubicada", desc_en: "Quiet, elegant and well located" },
    ],
  },
  {
    city_es: "Monterrey",
    city_en: "Monterrey",
    emoji: "🏢",
    colonias: [
      { name: "San Pedro Garza Garcia", slug: "monterrey/san-pedro", desc_es: "El municipio mas prospero de Mexico", desc_en: "The most prosperous municipality in Mexico" },
      { name: "Valle Oriente", slug: "monterrey/valle-oriente", desc_es: "Corredor empresarial moderno", desc_en: "Modern business corridor" },
    ],
  },
  {
    city_es: "San Miguel de Allende",
    city_en: "San Miguel de Allende",
    emoji: "⛪",
    colonias: [
      { name: "Centro Historico", slug: "san-miguel/centro", desc_es: "Patrimonio UNESCO, arte y cultura", desc_en: "UNESCO Heritage, art and culture" },
      { name: "Villa de los Frailes", slug: "san-miguel/villa-de-los-frailes", desc_es: "Tranquilo y cerca del centro", desc_en: "Quiet and close to the center" },
    ],
  },
  {
    city_es: "Merida",
    city_en: "Merida",
    emoji: "🏛️",
    colonias: [
      { name: "Centro", slug: "merida/centro", desc_es: "Colonial, gastronomia yucateca y cultura", desc_en: "Colonial, Yucatecan gastronomy and culture" },
      { name: "Altabrisa", slug: "merida/altabrisa", desc_es: "Zona moderna con todos los servicios", desc_en: "Modern area with all services" },
      { name: "Temozon Norte", slug: "merida/temozon-norte", desc_es: "Fraccionamientos de lujo y golf", desc_en: "Luxury developments and golf" },
    ],
  },
  {
    city_es: "Puerto Vallarta",
    city_en: "Puerto Vallarta",
    emoji: "🌊",
    colonias: [
      { name: "Marina Vallarta", slug: "puerto-vallarta/marina-vallarta", desc_es: "Marina, golf y junto al aeropuerto", desc_en: "Marina, golf and next to the airport" },
      { name: "Zona Hotelera", slug: "puerto-vallarta/zona-hotelera", desc_es: "Vistas al Pacifico y playas", desc_en: "Pacific views and beaches" },
      { name: "Zona Romantica", slug: "puerto-vallarta/zona-romantica", desc_es: "Arte, cultura y Playa los Muertos", desc_en: "Art, culture and Playa los Muertos" },
    ],
  },
  {
    city_es: "Nuevo Vallarta",
    city_en: "Nuevo Vallarta",
    emoji: "🌴",
    colonias: [
      { name: "Flamingos", slug: "nuevo-vallarta/flamingos", desc_es: "Frente al Pacifico con marina de lujo", desc_en: "Pacific beachfront with luxury marina" },
      { name: "Bucerias", slug: "nuevo-vallarta/bucerias", desc_es: "Pueblo costero autentico y accesible", desc_en: "Authentic and accessible coastal town" },
    ],
  },
  {
    city_es: "Playa del Carmen",
    city_en: "Playa del Carmen",
    emoji: "🐚",
    colonias: [
      { name: "Mayakoba", slug: "playa-del-carmen/mayakoba", desc_es: "El desarrollo mas exclusivo del Caribe", desc_en: "The most exclusive development in the Caribbean" },
      { name: "Playacar", slug: "playa-del-carmen/playacar", desc_es: "Privado, junto a la Quinta Avenida", desc_en: "Private, next to Fifth Avenue" },
    ],
  },
  {
    city_es: "Tulum",
    city_en: "Tulum",
    emoji: "🌿",
    colonias: [
      { name: "Aldea Zama", slug: "tulum/aldea-zama", desc_es: "El desarrollo mas exclusivo de Tulum", desc_en: "The most exclusive development in Tulum" },
      { name: "La Veleta", slug: "tulum/la-veleta", desc_es: "Selva, tranquilidad y mejor precio", desc_en: "Jungle, tranquility and better prices" },
    ],
  },
];

export default async function ColoniasPage() {
  const { lang } = await getT();
  const es = lang !== "en";
  return (
    <div style={{ backgroundColor: "var(--cream)", minHeight: "100vh" }}>
      <nav className="sticky top-0 z-40 backdrop-blur-md" style={{ backgroundColor: "rgba(28,28,30,0.9)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-4">
          <Link href="/" className="text-sm transition-colors hover:opacity-80" style={{ color: "var(--muted)" }}>← Home</Link>
          <span style={{ color: "var(--border)" }}>|</span>
          <Link href="/" className="font-serif font-medium" style={{ color: "var(--ink)" }}>ShortStayMX</Link>
          <div className="ml-auto"><LangToggle currentLang={lang} className="text-[--muted] hover:text-[--ink]" /></div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-3xl mb-16">
          <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--gold)" }}>
            {es ? "Elige tu colonia" : "Choose your neighborhood"}
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>
            {es ? "Rentas por colonia" : "Rentals by neighborhood"}
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
            {es
              ? "Explora departamentos amueblados en las mejores colonias de Mexico. Cada zona tiene su propio caracter y se adapta a diferentes estilos de vida. Encuentra la que mejor se adapta a ti."
              : "Explore furnished apartments in the best neighborhoods in Mexico. Each area has its own character and suits different lifestyles. Find the one that best suits you."}
          </p>
        </div>

        <div className="space-y-16">
          {CITIES.map(city => (
            <div key={city.city_es}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{city.emoji}</span>
                <h2 className="font-serif text-3xl" style={{ color: "var(--ink)" }}>
                  {es ? city.city_es : city.city_en}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {city.colonias.map(col => (
                  <Link key={col.slug} href={`/colonias/${col.slug}`} className="group block">
                    <div className="rounded-2xl p-6 h-full transition-all hover:border-[var(--gold)]" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                      <h3 className="font-serif text-xl mb-2" style={{ color: "var(--ink)" }}>{col.name}</h3>
                      <p className="text-sm" style={{ color: "var(--muted)" }}>{es ? col.desc_es : col.desc_en}</p>
                      <p className="text-xs font-semibold mt-4" style={{ color: "var(--gold)" }}>
                        {es ? "Ver propiedades →" : "View properties →"}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
