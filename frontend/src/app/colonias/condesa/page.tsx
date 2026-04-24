import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in Condesa, CDMX | ShortStayMX",
  description: "Furnished apartments in Condesa, Mexico City. Parks, restaurants and quiet living in one of the most beloved neighborhoods in the capital.",
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
          <Link href="/" className="font-serif font-medium" style={{ color: "var(--ink)" }}>ShortStayMX</Link>
          <div className="ml-auto"><LangToggle currentLang={lang} className="text-[--muted] hover:text-[--ink]" /></div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-3xl mb-16">
          <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--gold)" }}>
            {es ? "Ciudad de Mexico" : "Mexico City"}
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Condesa</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "La Condesa es una de las colonias mas queridas de la Ciudad de Mexico. Con su arquitectura art deco, calles circulares, parques y una escena de restaurantes y cafes de primera, es el lugar ideal para quienes buscan calidad de vida en la capital."
              : "Condesa is one of the most beloved neighborhoods in Mexico City. With its art deco architecture, circular streets, parks and a top-notch restaurant and cafe scene, it is the ideal place for those seeking quality of life in the capital."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "El famoso Parque Mexico y el Parque Espana son los pulmones de la colonia. La Avenida Amsterdam es perfecta para correr, andar en bici o simplemente caminar."
              : "The famous Parque Mexico and Parque España are the lungs of the neighborhood. Avenida Amsterdam is perfect for running, cycling or simply walking."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es
              ? "Parejas jovenes, profesionales, nomadas digitales y familias pequenas que buscan tranquilidad y vida de barrio."
              : "Young couples, professionals, digital nomads and small families seeking tranquility and neighborhood life."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: "🌿",
              title_es: "Parque Mexico", title_en: "Parque Mexico",
              desc_es: "Uno de los parques mas iconicos de CDMX a pasos de tu departamento",
              desc_en: "One of the most iconic parks in CDMX steps from your apartment"
            },
            {
              icon: "🚴",
              title_es: "Ciudad ciclista", title_en: "Cyclist-friendly",
              desc_es: "Avenida Amsterdam y ciclovias hacen de la Condesa ideal para ciclistas",
              desc_en: "Avenida Amsterdam and bike lanes make Condesa ideal for cyclists"
            },
            {
              icon: "🍽️",
              title_es: "Gastronomia de nivel", title_en: "Top gastronomy",
              desc_es: "Restaurantes premiados y cafes de especialidad en cada esquina",
              desc_en: "Award-winning restaurants and specialty cafes on every corner"
            },
          ].map(r => (
            <div key={r.title_es} className="rounded-2xl p-6" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
              <span className="text-3xl mb-3 block">{r.icon}</span>
              <h3 className="font-serif text-lg mb-2" style={{ color: "var(--ink)" }}>{es ? r.title_es : r.title_en}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{es ? r.desc_es : r.desc_en}</p>
            </div>
          ))}
        </div>
        <h2 className="font-serif text-3xl mb-8" style={{ color: "var(--ink)" }}>
          {es ? "Propiedades en Condesa" : "Properties in Condesa"}
        </h2>
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
                  <p className="text-xs" style={{ color: "var(--muted)" }}>
                    {p.bedrooms} {es ? "rec" : "bed"} · {p.bathrooms} {es ? "baños" : "bath"} · {p.maxGuests} {es ? "huespedes" : "guests"}
                  </p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-semibold text-sm" style={{ color: "var(--ink)" }}>{formatMXN(p.pricePerMonth)}</span>
                    <span className="text-xs" style={{ color: "var(--muted)" }}>{es ? "/ mes" : "/ month"}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
