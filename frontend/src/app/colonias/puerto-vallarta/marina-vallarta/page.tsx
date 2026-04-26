import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in Marina Vallarta, Puerto Vallarta | ShortStayMX",
  description: "Furnished apartments in Marina Vallarta, Puerto Vallarta. Luxury marina living with golf course and beach access.",
};

export default async function MarinaVallartaPage() {
  const { lang } = await getT();
  const es = lang !== "en";
  const properties = await fetchPreview();
  const colonia = properties.filter(p =>
    p.city === "Puerto Vallarta" &&
    (p.address.toLowerCase().includes("marina vallarta") ||
     p.address.toLowerCase().includes("paseo de la marina") ||
     p.address.toLowerCase().includes("vela") ||
     p.address.toLowerCase().includes("isla iguana"))
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
            Puerto Vallarta
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Marina Vallarta</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "Marina Vallarta es la zona mas moderna y exclusiva de Puerto Vallarta. Con una marina de clase mundial, campo de golf, hoteles de lujo y condominios frente al mar."
              : "Marina Vallarta is the most modern and exclusive area of Puerto Vallarta. With a world-class marina, golf course, luxury hotels and oceanfront condominiums."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "Sus torres residenciales ofrecen vistas panoramicas a la bahia de Banderas, con acceso directo a la marina y a solo 5 minutos del aeropuerto internacional."
              : "Its residential towers offer panoramic views of Banderas Bay, with direct marina access and just 5 minutes from the international airport."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es
              ? "Expatriados, ejecutivos y jubilados que buscan lujo, marina y vistas al mar."
              : "Expats, executives and retirees seeking luxury, marina living and sea views."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: "⛵",
              title_es: "Marina de clase mundial", title_en: "World-class marina",
              desc_es: "Una de las marinas mas importantes del Pacifico mexicano",
              desc_en: "One of the most important marinas on the Mexican Pacific"
            },
            {
              icon: "⛳",
              title_es: "Campo de golf", title_en: "Golf course",
              desc_es: "Campo de golf de 18 hoyos frente a la bahia de Banderas",
              desc_en: "18-hole golf course overlooking Banderas Bay"
            },
            {
              icon: "✈️",
              title_es: "Cerca del aeropuerto", title_en: "Near the airport",
              desc_es: "A 5 minutos del aeropuerto internacional de Puerto Vallarta",
              desc_en: "5 minutes from Puerto Vallarta international airport"
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
          {es ? "Propiedades en Marina Vallarta" : "Properties in Marina Vallarta"}
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
