'use client';
import { useState, useEffect } from 'react';

const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://shortrentalsmexico-backend.onrender.com';

interface Property {
  id: number;
  slug: string;
  city: string;
  address: string;
  available: boolean;
  availableFrom: string | null;
  pricePerMonth: number;
  override: { available?: boolean; availableFrom?: string | null; pricePerMonth?: number } | null;
}

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [saving, setSaving] = useState<number | null>(null);
  const [error, setError] = useState('');

  async function login() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${BACKEND}/api/admin/properties`, {
        headers: { 'x-admin-password': password },
      });
      if (!res.ok) { setError('Contraseña incorrecta'); setLoading(false); return; }
      const data = await res.json();
      setProperties(data);
      setAuthed(true);
    } catch {
      setError('Error conectando al servidor');
    }
    setLoading(false);
  }

  async function update(id: number, changes: { available?: boolean; availableFrom?: string | null; pricePerMonth?: number }) {
    setSaving(id);
    await fetch(`${BACKEND}/api/admin/properties/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
      body: JSON.stringify(changes),
    });
    const res = await fetch(`${BACKEND}/api/admin/properties`, { headers: { 'x-admin-password': password } });
    setProperties(await res.json());
    setSaving(null);
  }

  async function clear(id: number) {
    setSaving(id);
    await fetch(`${BACKEND}/api/admin/properties/${id}/clear`, {
      method: 'POST',
      headers: { 'x-admin-password': password },
    });
    const res = await fetch(`${BACKEND}/api/admin/properties`, { headers: { 'x-admin-password': password } });
    setProperties(await res.json());
    setSaving(null);
  }

  const filtered = properties.filter(p =>
    p.city.toLowerCase().includes(search.toLowerCase()) ||
    p.address.toLowerCase().includes(search.toLowerCase())
  );

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="w-full max-w-sm p-8 rounded-2xl" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
          <h1 className="font-serif text-2xl mb-6" style={{ color: 'var(--ink)' }}>Admin Panel</h1>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && login()}
            className="w-full px-4 py-3 rounded-xl mb-4 text-sm outline-none"
            style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)', color: 'var(--ink)' }}
          />
          {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
          <button
            onClick={login}
            disabled={loading}
            className="w-full py-3 rounded-xl font-semibold text-sm text-white"
            style={{ backgroundColor: 'var(--gold)' }}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-serif text-3xl" style={{ color: 'var(--ink)' }}>Admin Panel</h1>
          <span className="text-sm" style={{ color: 'var(--muted)' }}>{properties.length} propiedades</span>
        </div>

        <input
          type="text"
          placeholder="Buscar por ciudad o dirección..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-xl mb-6 text-sm outline-none"
          style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', color: 'var(--ink)' }}
        />

        <div className="space-y-3">
          {filtered.map(p => (
            <div key={p.id} className="rounded-2xl p-4" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: 'var(--cream)', color: 'var(--muted)' }}>
                      {p.city}
                    </span>
                    {p.override && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-amber-900/30 text-amber-400">modificada</span>
                    )}
                  </div>
                  <p className="text-sm font-medium" style={{ color: 'var(--ink)' }}>{p.address}</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>
                    ${p.pricePerMonth.toLocaleString('es-MX')} MXN/mes ·
                    {p.available ? ' ✅ Disponible' : ` 🔴 Ocupada hasta ${p.availableFrom || '?'}`}
                  </p>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={() => update(p.id, { available: true, availableFrom: null })}
                    disabled={saving === p.id}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-900/40 text-emerald-400"
                  >
                    Marcar disponible
                  </button>
                  <button
                    onClick={() => {
                      const fecha = prompt('Fecha disponible (YYYY-MM-DD):', p.availableFrom || '');
                      if (fecha) update(p.id, { available: false, availableFrom: fecha });
                    }}
                    disabled={saving === p.id}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold bg-red-900/40 text-red-400"
                  >
                    Marcar ocupada
                  </button>
                  <button
                    onClick={() => {
                      const precio = prompt('Nuevo precio mensual (MXN):', String(p.pricePerMonth));
                      if (precio && !isNaN(Number(precio))) update(p.id, { pricePerMonth: Number(precio) });
                    }}
                    disabled={saving === p.id}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-900/40 text-blue-400"
                  >
                    Cambiar precio
                  </button>
                  {p.override && (
                    <button
                      onClick={() => clear(p.id)}
                      disabled={saving === p.id}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold bg-stone-700/40 text-stone-400"
                    >
                      Resetear
                    </button>
                  )}
                  {saving === p.id && <span className="text-xs" style={{ color: 'var(--muted)' }}>Guardando...</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}