'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';
import { useAuthStore } from '@/store/auth.store';

export default function RegisterPage() {
  const router = useRouter();
  const setAuth = useAuthStore((s) => s.setAuth);
  const [form, setForm] = useState({ name: '', email: '', password: '', phone: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await api.post('/auth/register', form);
      setAuth(res.data.user, res.data.token);
      router.push('/');
    } catch {
      setError('Error al registrarse. El email puede estar en uso.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <Link href="/" className="text-rose-500 font-bold text-2xl block mb-6">
          airbnb
        </Link>
        <h1 className="text-xl font-semibold text-gray-900 mb-6">Crear cuenta</h1>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 outline-none focus:border-rose-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 outline-none focus:border-rose-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 outline-none focus:border-rose-400"
              placeholder="Opcional"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <input
              type="password"
              required
              minLength={6}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 outline-none focus:border-rose-400"
            />
          </div>
          <button
            type="submit"
            className="bg-rose-500 text-white py-3 rounded-full hover:bg-rose-600 transition-colors font-medium mt-2"
          >
            Crear cuenta
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-6 text-center">
          ¿Ya tienes cuenta?{' '}
          <Link href="/auth/login" className="text-rose-500 hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
