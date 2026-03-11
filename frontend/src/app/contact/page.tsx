import Navbar from '@/components/layout/Navbar';

export default function ContactPage() {
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
            <p className="text-2xl font-bold text-rose-600">01 800 000 0000</p>
            <p className="text-sm text-gray-500">Lun – Dom, 8am – 10pm</p>
          </div>
        </div>

        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 outline-none focus:border-rose-400"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 outline-none focus:border-rose-400"
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
            <textarea
              rows={5}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 outline-none focus:border-rose-400"
              placeholder="¿En qué podemos ayudarte?"
            />
          </div>
          <button
            type="submit"
            className="bg-rose-500 text-white px-6 py-3 rounded-full hover:bg-rose-600 transition-colors font-medium"
          >
            Enviar mensaje
          </button>
        </form>
      </main>
    </>
  );
}
