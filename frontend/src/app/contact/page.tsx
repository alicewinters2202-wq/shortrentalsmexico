'use client';
import { useState } from 'react';
import Link from 'next/link';
import { trackWhatsAppClick } from '@/lib/analytics';
import { useLang } from '@/store/lang.store';
import { useT } from '@/lib/i18n';

export default function ContactPage() {
  const { lang } = useLang();
  const t = useT(lang);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!name || !message) return;
    const text = lang === 'en'
      ? `Hi, I saw your site, shortstaymx.com.\n\nName: ${name}\nEmail: ${email}\nCity of interest: ${city}\nMessage: ${message}`
      : `Hola, vi su sitio, shortstaymx.com.\n\nNombre: ${name}\nEmail: ${email}\nCiudad de interés: ${city}\nMensaje: ${message}`;
    const url = `https://wa.me/525643232610?text=${encodeURIComponent(text)}`;
    trackWhatsAppClick('contact_form');
    window.open(url, '_blank');
  };

  const cities = ['Ciudad de México', 'Puerto Vallarta', 'Nuevo Vallarta', 'Cancún', 'Tulum', 'Playa del Carmen', 'Guadalajara', 'Monterrey', 'Mérida', 'San Miguel de Allende', 'Chapala', 'Santiago'];

  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <nav className="sticky top-0 z-40 backdrop-blur-md" style={{ backgroundColor: 'rgba(28,28,30,0.9)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-4">
          <Link href="/" className="text-sm transition-colors hover:opacity-80" style={{ color: 'var(--muted)' }}>← {lang === 'en' ? 'Home' : 'Inicio'}</Link>
          <span style={{ color: 'var(--border)' }}>|</span>
          <Link href="/" className="font-serif font-medium" style={{ color: 'var(--ink)' }}>ShortStayMX</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="max-w-2xl mb-16">
          <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: 'var(--gold)' }}>
            {lang === 'en' ? 'Contact' : 'Contacto'}
          </p>
          <h1 className="italic text-5xl sm:text-6xl mb-4" style={{ color: 'var(--ink)', fontFamily: 'var(--font-display), serif' }}>
            {lang === 'en' ? "We're here to help" : 'Estamos aquí para ayudarte'}
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {lang === 'en'
              ? "Have questions about a property, or want help finding the right option? Reach us directly on WhatsApp or fill out the form."
              : '¿Tienes preguntas sobre alguna propiedad o quieres que te ayudemos a encontrar la opción ideal? Contáctanos directamente por WhatsApp o llena el formulario.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info de contacto */}
          <div className="space-y-6">
            {[
              { icon: '💬', title: 'WhatsApp', desc: lang === 'en' ? 'Response in minutes' : 'Respuesta en minutos', value: '+52 56 4323 2610', href: 'https://wa.me/525643232610' },
              { icon: '🕐', title: lang === 'en' ? 'Hours' : 'Horario', desc: lang === 'en' ? 'Monday to Sunday' : 'Lunes a Domingo', value: '8:00 am – 10:00 pm' },
            ].map(item => (
              <div key={item.title} className="rounded-2xl p-6 flex items-start gap-4" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <p className="text-xs uppercase tracking-widest font-medium mb-1" style={{ color: 'var(--muted)' }}>{item.desc}</p>
                  <p className="font-serif text-xl mb-1" style={{ color: 'var(--ink)' }}>{item.title}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('contact_page_card')} className="text-sm font-medium hover:opacity-80" style={{ color: 'var(--gold)' }}>{item.value}</a>
                  ) : (
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="rounded-2xl p-6" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
              <p className="font-serif text-xl mb-3" style={{ color: 'var(--ink)' }}>
                {lang === 'en' ? 'Need help choosing?' : '¿Necesitas ayuda para elegir?'}
              </p>
              <p className="text-sm mb-4" style={{ color: 'var(--muted)' }}>
                {lang === 'en'
                  ? 'Our team can help you find the ideal property based on your budget, city, and dates.'
                  : 'Nuestro equipo puede ayudarte a encontrar la propiedad ideal según tu presupuesto, ciudad y fechas.'}
              </p>
              <a href={`https://wa.me/525643232610?text=${encodeURIComponent(
                  lang === 'en'
                    ? "Hi, I saw your site, shortstaymx.com, and I need help finding a property in Mexico."
                    : 'Hola, vi su sitio, shortstaymx.com, y necesito ayuda para encontrar una propiedad en México.'
                )}`}
                target="_blank" rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('contact_page_direct')}
                className="inline-block px-6 py-3 rounded-full text-sm font-medium text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: 'var(--gold)' }}>
                {lang === 'en' ? 'Talk to an agent' : 'Hablar con un agente'} →
              </a>
            </div>
          </div>

          {/* Formulario */}
          <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <h2 className="font-serif text-2xl mb-6" style={{ color: 'var(--ink)' }}>
              {lang === 'en' ? 'Send us a message' : 'Envíanos un mensaje'}
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-widest font-medium mb-2" style={{ color: 'var(--muted)' }}>{t.nameLabel} *</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                  style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)', color: 'var(--ink)' }}
                  placeholder={lang === 'en' ? 'Your full name' : 'Tu nombre completo'} />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-medium mb-2" style={{ color: 'var(--muted)' }}>{t.emailLabel}</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                  style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)', color: 'var(--ink)' }}
                  placeholder={lang === 'en' ? 'you@email.com' : 'tu@email.com'} />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-medium mb-2" style={{ color: 'var(--muted)' }}>
                  {lang === 'en' ? 'City of interest' : 'Ciudad de interés'}
                </label>
                <select value={city} onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                  style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)', color: 'var(--ink)' }}>
                  <option value="">{lang === 'en' ? 'Select a city' : 'Selecciona una ciudad'}</option>
                  {cities.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-medium mb-2" style={{ color: 'var(--muted)' }}>{t.messageLabel} *</label>
                <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors resize-none"
                  style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)', color: 'var(--ink)' }}
                  placeholder={lang === 'en' ? 'How can we help?' : '¿En qué podemos ayudarte?'} />
              </div>
              <button onClick={handleSubmit} disabled={!name || !message}
                className="w-full py-3 rounded-full text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-40"
                style={{ backgroundColor: 'var(--gold)' }}>
                {lang === 'en' ? 'Send via WhatsApp' : 'Enviar por WhatsApp'} →
              </button>
              <p className="text-xs text-center" style={{ color: 'var(--muted)' }}>
                {lang === 'en' ? 'Clicking this opens WhatsApp with your message pre-filled' : 'Al hacer clic se abrirá WhatsApp con tu mensaje prellenado'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
