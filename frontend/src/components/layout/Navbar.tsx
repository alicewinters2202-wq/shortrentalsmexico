import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-rose-500 font-bold text-2xl tracking-tight">
          airbnb
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <Link href="/properties" className="hover:text-rose-500 transition-colors">
            Explorar
          </Link>
          <Link href="/contact" className="hover:text-rose-500 transition-colors">
            Contacto
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/auth/login"
            className="text-sm text-gray-700 hover:text-rose-500 transition-colors"
          >
            Iniciar sesión
          </Link>
          <Link
            href="/auth/register"
            className="bg-rose-500 text-white text-sm px-4 py-2 rounded-full hover:bg-rose-600 transition-colors"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </nav>
  );
}
