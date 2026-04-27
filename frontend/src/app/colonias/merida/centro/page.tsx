import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in Centro, Merida | ShortStayMX",
  description: "Furnished apartments in Centro, Merida. Colonial architecture, vibrant culture and the best of Yucatan life.",
};

export default async function MeridaCentroPage() {
  const { lang } = await getT();
  const es = lang !== "en";
  const properties = await fetchPreview();
  const colonia = properties.filter(p =>
    p.city === "Mérida" &&
    (p.address.toLowerCase().includes("centro") ||
     p.address.toLowerCase().includes("parque santiago") ||
     p.address.toLowerCase().includes("san ramon") ||
     p.address.toLowerCase().includes("san ramón") ||
     p.address.toLowerCase().includes("c. 61") ||
     p.address.toLowerCase().includes("c. 27") ||
     p.address.toLowerCase().includes("c. 33") ||
     p.address.toLowerCase().includes("c. 23"))
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
            {es ? "Mérida" : "Merida"}
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Centro</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "El Centro de Mérida es el corazon histórico y cultural de la Ciudad Blanca. Con sus casonas coloniales, mercados tradicionales, restaurantes de cocina yucateca y una vida cultural muy activa, es uno de los centros históricos mas vivos de Mexico."
              : "Merida's Centro is the historic and cultural heart of the White City. With its colonial mansions, traditional markets, Yucatecan cuisine restaurants and a very active cultural life, it is one of the most vibrant historic centers in Mexico."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "Vivir en el Centro significa acceso a la Plaza Grande, el Paseo de Montejo, museos, galerías y la mejor gastronomia yucateca. Una experiencia autentica de la cultura del sureste mexicano."
              : "Living in Centro means access to Plaza Grande, Paseo de Montejo, museums, galleries and the best Yucatecan gastronomy. An authentic experience of southeastern Mexican culture."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es
              ? "Expatriados, nomadas digitales y profesionales que buscan cultura, gastronomia y vida autentica mexicana."
              : "Expats, digital nomads and professionals seeking culture, gastronomy and authentic Mexican life."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: "🏛️",
              title_es: "Arquitectura colonial", title_en: "Colonial architecture",
              desc_es: "Casonas y edificios coloniales en perfecta conservacion",
              desc_en: "Colonial mansions and buildings in perfect preservation"
            },
            {
              icon: "🍽️",
              title_es: "Cocina yucateca", title_en: "Yucatecan cuisine",
              desc_es: "La mejor gastronomia del sureste mexicano a tu puerta",
              desc_en: "The best gastronomy of southeastern Mexico at your door"
            },
            {
              icon: "🎭",
              title_es: "Vida cultural", title_en: "Cultural life",
              desc_es: "Festivales, musica, teatro y eventos culturales todo el ano",
              desc_en: "Festivals, music, theater and cultural events year-round"
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
          {es ? "Propiedades en Centro" : "Properties in Centro"}
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

