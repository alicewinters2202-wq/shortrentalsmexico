'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!name || !message) return;
    const text = `Hola, me contacto desde ShortStayMX.\n\nNombre: ${name}\nEmail: ${email}\nCiudad de interés: ${city}\nMensaje: ${message}`;
    const url = `https://wa.me/525662548748?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <nav className="sticky top-0 z-40 backdrop-blur-md" style={{ backgroundColor: 'rgba(28,28,30,0.9)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-4">
          <Link href="/" className="text-sm transition-colors hover:opacity-80" style={{ color: 'var(--muted)' }}>← Home</Link>
          <span style={{ color: 'var(--border)' }}>|</span>
          <Link href="/" className="font-serif font-medium" style={{ color: 'var(--ink)' }}>ShortStayMX</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="max-w-2xl mb-16">
          <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: 'var(--gold)' }}>Contacto</p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-4" style={{ color: 'var(--ink)' }}>
            Estamos aquí para ayudarte
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            ¿Tienes preguntas sobre alguna propiedad o quieres que te ayudemos a encontrar la opción ideal? Contáctanos directamente por WhatsApp o llena el formulario.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info de contacto */}
          <div className="space-y-6">
            {[
              { icon: '💬', title: 'WhatsApp', desc: 'Respuesta en minutos', value: '+52 56 6254 8748', href: 'https://wa.me/525662548748' },
              { icon: '📧', title: 'Email', desc: 'Respuesta en 24 horas', value: 'shortstaymx2021@gmail.com', href: 'mailto:shortstaymx2021@gmail.com' },
              { icon: '🕐', title: 'Horario', desc: 'Lunes a Domingo', value: '8:00 am – 10:00 pm' },
            ].map(item => (
              <div key={item.title} className="rounded-2xl p-6 flex items-start gap-4" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <p className="text-xs uppercase tracking-widest font-medium mb-1" style={{ color: 'var(--muted)' }}>{item.desc}</p>
                  <p className="font-serif text-xl mb-1" style={{ color: 'var(--ink)' }}>{item.title}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:opacity-80" style={{ color: 'var(--gold)' }}>{item.value}</a>
                  ) : (
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="rounded-2xl p-6" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
              <p className="font-serif text-xl mb-3" style={{ color: 'var(--ink)' }}>¿Necesitas ayuda para elegir?</p>
              <p className="text-sm mb-4" style={{ color: 'var(--muted)' }}>Nuestro equipo puede ayudarte a encontrar la propiedad ideal según tu presupuesto, ciudad y fechas.</p>
              <a href="https://wa.me/525662548748?text=Hola%2C%20necesito%20ayuda%20para%20encontrar%20una%20propiedad%20en%20México."
                target="_blank" rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-full text-sm font-medium text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: 'var(--gold)' }}>
                Hablar con un agente →
              </a>
            </div>
          </div>

          {/* Formulario */}
          <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <h2 className="font-serif text-2xl mb-6" style={{ color: 'var(--ink)' }}>Envíanos un mensaje</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-widest font-medium mb-2" style={{ color: 'var(--muted)' }}>Nombre *</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                  style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)', color: 'var(--ink)' }}
                  placeholder="Tu nombre completo" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-medium mb-2" style={{ color: 'var(--muted)' }}>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                  style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)', color: 'var(--ink)' }}
                  placeholder="tu@email.com" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-medium mb-2" style={{ color: 'var(--muted)' }}>Ciudad de interés</label>
                <select value={city} onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                  style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)', color: 'var(--ink)' }}>
                  <option value="">Selecciona una ciudad</option>
                  {['Ciudad de México', 'Puerto Vallarta', 'Nuevo Vallarta', 'Cancún', 'Tulum', 'Playa del Carmen', 'Guadalajara', 'Monterrey', 'Mérida', 'San Miguel de Allende', 'Chapala', 'Santiago'].map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-medium mb-2" style={{ color: 'var(--muted)' }}>Mensaje *</label>
                <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors resize-none"
                  style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)', color: 'var(--ink)' }}
                  placeholder="¿En qué podemos ayudarte?" />
              </div>
              <button onClick={handleSubmit} disabled={!name || !message}
                className="w-full py-3 rounded-full text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-40"
                style={{ backgroundColor: 'var(--gold)' }}>
                Enviar por WhatsApp →
              </button>
              <p className="text-xs text-center" style={{ color: 'var(--muted)' }}>Al hacer clic se abrirá WhatsApp con tu mensaje prellenado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}