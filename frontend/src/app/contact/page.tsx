'use client';
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!name || !message) return;
    const text = `Hola, me contacto desde ShortStayMX.\n\nNombre: ${name}\nEmail: ${email}\nMensaje: ${message}`;
    const url = `https://wa.me/525563783517?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Servicio al cliente</h1>
        <p className="text-gray-500 mb-10">Estamos aquí para ayudarte las 24 horas del día.</p>

        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6 mb-8 flex items-center gap-4">
          <span className="text-4xl">📞</span>
          <div>
            <p className="text-sm text-gray-500">Línea de atención</p>
            <p className="text-2xl font-bold text-rose-600">+52 55 6378 3517</p>
            <p className="text-sm text-gray-500">Lun – Dom, 8am – 10pm</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 outline-none focus:border-rose-400"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 outline-none focus:border-rose-400"
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
            <textarea
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 outline-none focus:border-rose-400"
              placeholder="¿En qué podemos ayudarte?"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-rose-500 text-white px-6 py-3 rounded-full hover:bg-rose-600 transition-colors font-medium"
          >
            Enviar por WhatsApp
          </button>
        </div>
      </main>
    </>
  );
}
