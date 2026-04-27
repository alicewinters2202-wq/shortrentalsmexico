import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Rentas amuebladas en Roma Norte, CDMX | ShortStayMX",
  description: "Departamentos amueblados en Roma Norte, la colonia mas vibrante de Ciudad de Mexico. Cafes de especialidad, restaurantes premiados, Parque Mexico y vida cultural a tu puerta.",
};

export default async function RomaNortePage() {
  const { lang } = await getT();
  const es = lang !== "en";
  const properties = await fetchPreview();
  const colonia = properties.filter(p =>
    p.city === "Ciudad de México" &&
    (p.address.toLowerCase().includes("roma") ||
     p.address.toLowerCase().includes("córdoba") ||
     p.address.toLowerCase().includes("cordoba") ||
     p.address.toLowerCase().includes("querétaro") ||
     p.address.toLowerCase().includes("queretaro") ||
     p.address.toLowerCase().includes("sinaloa") ||
     p.address.toLowerCase().includes("jalapa") ||
     p.address.toLowerCase().includes("colima") ||
     p.address.toLowerCase().includes("chihuahua") ||
     p.address.toLowerCase().includes("salamanca"))
  );
  return (
    <div style={{ backgroundColor: "var(--cream)", minHeight: "100vh" }}>
      <nav className="sticky top-0 z-40 backdrop-blur-md" style={{ backgroundColor: "rgba(28,28,30,0.9)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-4">
          <Link href="/colonias" className="text-sm transition-colors hover:opacity-80" style={{ color: "var(--muted)" }}>← Colonias</Link>
          <span style={{ color: "var(--border)" }}>|</span>
          <Link href="/" className="font-serif font-medium" style={{ color: "var(--ink)" }}>ShortStayMX</Link>
          <div className="ml-auto"><LangToggle currentLang={lang} className="text-[--muted] hover:text-[--ink]" /></div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-3xl mb-16">
          <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--gold)" }}>{es ? "Ciudad de Mexico" : "Mexico City"}</p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Roma Norte</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "Roma Norte es la colonia mas vibrante, creativa y deseada de Ciudad de Mexico. Inmortalizada por la pelicula Roma de Alfonso Cuaron, ganadora del Oscar, esta colonia combina arquitectura art deco de los anos 30, calles arboladas de jacarandas, la mejor escena de cafes de especialidad de la ciudad, restaurantes que aparecen en las mejores listas internacionales, y una comunidad creativa e internacional extraordinariamente activa." : "Roma Norte is the most vibrant, creative and sought-after neighborhood in Mexico City. Immortalized by Alfonso Cuarón's Oscar-winning film Roma, this neighborhood combines 1930s art deco architecture, jacaranda-lined streets, the city's best specialty coffee scene, restaurants that appear on the best international lists, and an extraordinarily active creative and international community."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "El Parque Mexico y el Parque Rio de Janeiro son los pulmones verdes de la colonia y sus principales puntos de encuentro social. Por las mananas estan llenos de corredores y personas paseando perros. Los fines de semana hay mercados de productores organicos y artesanales. La Avenida Alvaro Obregon, con su camellOn arbolado, es el corazon social de Roma Norte." : "Parque Mexico and Parque Rio de Janeiro are the green lungs of the neighborhood and its main social meeting points. In the mornings they are full of runners and dog walkers. On weekends there are organic producer and artisan markets. Avenida Álvaro Obregón, with its tree-lined median, is the social heart of Roma Norte."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "La escena gastronomica de Roma Norte es sin duda la mejor de CDMX. Hay decenas de cafes de especialidad, restaurantes creativos reconocidos internacionalmente, bares con cocteleria de autor y mercados gourmet. Es el paraiso para los amantes de la buena comida y el buen cafe." : "Roma Norte's gastronomic scene is without a doubt the best in CDMX. There are dozens of specialty cafes, internationally recognized creative restaurants, bars with craft cocktails and gourmet markets. It is paradise for lovers of good food and good coffee."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es ? "Nomadas digitales, creativos, artistas, expatriados jovenes y profesionales que valoran la cultura, la gastronomia y la vida de barrio." : "Digital nomads, creatives, artists, young expats and professionals who value culture, gastronomy and neighborhood life."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: "☕", title_es: "Capital del cafe", title_en: "Coffee capital", desc_es: "Decenas de cafes de especialidad con granos de origen y metodos alternativos en cada cuadra", desc_en: "Dozens of specialty cafes with single-origin beans and alternative brewing methods on every block" },
            { icon: "🎨", title_es: "Vida cultural", title_en: "Cultural life", desc_es: "Galerias, museos, mercados de arte, musica en vivo y eventos culturales internacionales todo el ano", desc_en: "Galleries, museums, art markets, live music and international cultural events year-round" },
            { icon: "🌳", title_es: "Parques increibles", title_en: "Amazing parks", desc_es: "Parque Mexico y Parque Rio de Janeiro, dos de los mas iconicos de CDMX, en el corazon de la colonia", desc_en: "Parque Mexico and Parque Rio de Janeiro, two of the most iconic in CDMX, at the heart of the neighborhood" },
          ].map(r => (
            <div key={r.title_es} className="rounded-2xl p-6" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
              <span className="text-3xl mb-3 block">{r.icon}</span>
              <h3 className="font-serif text-lg mb-2" style={{ color: "var(--ink)" }}>{es ? r.title_es : r.title_en}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{es ? r.desc_es : r.desc_en}</p>
            </div>
          ))}
        </div>
        <h2 className="font-serif text-3xl mb-8" style={{ color: "var(--ink)" }}>{es ? "Propiedades en Roma Norte" : "Properties in Roma Norte"}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {colonia.length === 0 ? (
            <p style={{ color: "var(--muted)" }}>{es ? "No hay propiedades disponibles actualmente." : "No properties available at the moment."}</p>
          ) : colonia.map(p => {
            const { street, neighborhood } = parseAddress(p.address);
            return (
              <Link key={p.id} href={`/properties/${p.slug}`} className="group block">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden" style={{ backgroundColor: "var(--card)" }}>
                  {p.images[0] && <img src={imageUrl(p.images[0])} alt={street} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white font-serif text-lg">{street}</p>
                    <p className="text-white/70 text-xs">{neighborhood}</p>
                  </div>
                </div>
                <div className="mt-3 px-1">
                  <p className="text-xs" style={{ color: "var(--muted)" }}>{p.bedrooms} {es ? "rec" : "bed"} · {p.bathrooms} {es ? "baños" : "bath"} · {p.maxGuests} {es ? "huespedes" : "guests"}</p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-semibold text-sm" style={{ color: "var(--ink)" }}>{formatMXN(Math.round(p.pricePerMonth / 30))}</span>
                    <span className="text-xs" style={{ color: "var(--muted)" }}>{es ? "/ noche" : "/ night"}</span>
                    <span className="text-xs" style={{ color: "var(--muted)" }}>·</span>
                    <span className="text-sm" style={{ color: "var(--ink)" }}>{formatMXN(p.pricePerMonth)}</span>
                    <span className="text-xs" style={{ color: "var(--muted)" }}>{es ? "/ mes" : "/ month"}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-12 p-6 rounded-2xl" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
          <p className="text-sm mb-2" style={{ color: "var(--ink)" }}>{es ? "¿Quieres saber mas sobre vivir en Roma Norte?" : "Want to know more about living in Roma Norte?"}</p>
          <Link href="/blog/roma-norte-guia-completa" className="text-sm font-semibold" style={{ color: "var(--gold)" }}>
            {es ? "Lee nuestra guia completa de Roma Norte →" : "Read our complete guide to Roma Norte →"}
          </Link>
        </div>
      </div>
    </div>
  );
}
