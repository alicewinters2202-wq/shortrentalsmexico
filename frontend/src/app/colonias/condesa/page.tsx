import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Rentas amuebladas en Condesa, CDMX | ShortStayMX",
  description: "Departamentos amueblados en la Condesa, Ciudad de Mexico. Arquitectura art deco, Parque Mexico, Avenida Amsterdam y la mejor calidad de vida en CDMX.",
};

export default async function CondesaPage() {
  const { lang } = await getT();
  const es = lang !== "en";
  const properties = await fetchPreview();
  const colonia = properties.filter(p =>
    p.city === "Ciudad de México" &&
    (p.address.toLowerCase().includes("condesa") ||
     p.address.toLowerCase().includes("tlaxcala") ||
     p.address.toLowerCase().includes("juan de la barrera") ||
     p.address.toLowerCase().includes("nuevo león") ||
     p.address.toLowerCase().includes("nuevo leon") ||
     p.address.toLowerCase().includes("amsterdam") ||
     p.address.toLowerCase().includes("ámsterdam"))
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
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Condesa</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "La Condesa es una de las colonias mas queridas y codiciadas de Ciudad de Mexico. Con su arquitectura art deco unica en Mexico — resultado del boom inmobiliario de los anos 30 —, sus calles circulares flanqueadas por jacarandas, el iconico Parque Mexico, la Avenida Amsterdam perfecta para correr y andar en bicicleta, y una excelente oferta gastronomica, es el lugar ideal para quienes buscan calidad de vida, tranquilidad y acceso a todo lo mejor de CDMX." : "Condesa is one of the most beloved and coveted neighborhoods in Mexico City. With its art deco architecture unique in Mexico — the result of the real estate boom of the 1930s —, its circular streets flanked by jacaranda trees, the iconic Parque Mexico, Avenida Amsterdam perfect for running and cycling, and an excellent gastronomic offering, it is the ideal place for those seeking quality of life, tranquility and access to the best of CDMX."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "El Parque Mexico es el corazon de la Condesa. Con sus fuentes art deco, jardines bien cuidados, una pequena laguna con patos y caminos arbolados, es el punto de encuentro social por excelencia. Rodeado de cafes con terraza es perfecto para comenzar el dia. La Avenida Amsterdam, que rodea circularmente el parque, forma uno de los circuitos de running mas populares de toda la ciudad." : "Parque Mexico is the heart of Condesa. With its art deco fountains, well-maintained gardens, a small duck pond and tree-lined paths, it is the social meeting point par excellence. Surrounded by cafes with terraces, it is perfect for starting the day. Avenida Amsterdam, which circularly surrounds the park, forms one of the most popular running circuits in the entire city."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es ? "Parejas jovenes, profesionales, nomadas digitales y familias pequenas que buscan tranquilidad, vida de barrio y la mejor calidad de vida de CDMX." : "Young couples, professionals, digital nomads and small families seeking tranquility, neighborhood life and the best quality of life in CDMX."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: "🌿", title_es: "Parque Mexico", title_en: "Parque Mexico", desc_es: "El parque mas iconico de CDMX con fuentes art deco, jardines y la famosa laguna con patos", desc_en: "The most iconic park in CDMX with art deco fountains, gardens and the famous duck pond" },
            { icon: "🚴", title_es: "Ciudad ciclista", title_en: "Cyclist-friendly", desc_es: "Avenida Amsterdam y ciclovias hacen de la Condesa uno de los mejores barrios para andar en bici de CDMX", desc_en: "Avenida Amsterdam and bike lanes make Condesa one of the best neighborhoods for cycling in CDMX" },
            { icon: "🍽️", title_es: "Gastronomia de nivel", title_en: "Top gastronomy", desc_es: "Restaurantes premiados, cafes de especialidad y vida de barrio autentica en cada esquina", desc_en: "Award-winning restaurants, specialty cafes and authentic neighborhood life on every corner" },
          ].map(r => (
            <div key={r.title_es} className="rounded-2xl p-6" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
              <span className="text-3xl mb-3 block">{r.icon}</span>
              <h3 className="font-serif text-lg mb-2" style={{ color: "var(--ink)" }}>{es ? r.title_es : r.title_en}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{es ? r.desc_es : r.desc_en}</p>
            </div>
          ))}
        </div>
        <h2 className="font-serif text-3xl mb-8" style={{ color: "var(--ink)" }}>{es ? "Propiedades en Condesa" : "Properties in Condesa"}</h2>
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
          <p className="text-sm mb-2" style={{ color: "var(--ink)" }}>{es ? "¿Quieres saber mas sobre vivir en Condesa?" : "Want to know more about living in Condesa?"}</p>
          <Link href="/blog/condesa-guia-completa" className="text-sm font-semibold" style={{ color: "var(--gold)" }}>
            {es ? "Lee nuestra guia completa de Condesa →" : "Read our complete guide to Condesa →"}
          </Link>
        </div>
      </div>
    </div>
  );
}
