'use client';
import { useState } from 'react';

const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://shortrentalsmexico-backend.onrender.com';

interface Property {
  id: number;
  slug: string;
  city: string;
  address: string;
  available: boolean;
  availableFrom: string | null;
  occupiedSince: string | null;
  pricePerMonth: number;
  override: { available?: boolean; availableFrom?: string | null; occupiedSince?: string | null; pricePerMonth?: number } | null;
}

interface EditState {
  occupiedSince: string;
  availableFrom: string;
  pricePerMonth: string;
  mode: 'view' | 'ocupada' | 'precio';
}

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [saving, setSaving] = useState<number | null>(null);
  const [error, setError] = useState('');
  const [editing, setEditing] = useState<Record<number, EditState>>({});

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

  async function reload() {
    const res = await fetch(`${BACKEND}/api/admin/properties`, { headers: { 'x-admin-password': password } });
    setProperties(await res.json());
  }

  async function update(id: number, changes: object) {
    setSaving(id);
    await fetch(`${BACKEND}/api/admin/properties/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
      body: JSON.stringify(changes),
    });
    await reload();
    setSaving(null);
    setEditing(e => ({ ...e, [id]: { ...e[id], mode: 'view' } }));
  }

  async function clear(id: number) {
    setSaving(id);
    await fetch(`${BACKEND}/api/admin/properties/${id}/clear`, {
      method: 'POST',
      headers: { 'x-admin-password': password },
    });
    await reload();
    setSaving(null);
  }

  function getEdit(p: Property): EditState {
    return editing[p.id] || {
      occupiedSince: p.occupiedSince || new Date().toISOString().split('T')[0],
      availableFrom: p.availableFrom || '',
      pricePerMonth: String(p.pricePerMonth),
      mode: 'view',
    };
  }

  function setEdit(id: number, changes: Partial<EditState>) {
    setEditing(e => ({ ...e, [id]: { ...getEdit(properties.find(p => p.id === id)!), ...changes } }));
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
          <button onClick={login} disabled={loading} className="w-full py-3 rounded-xl font-semibold text-sm text-white" style={{ backgroundColor: 'var(--gold)' }}>
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
          {filtered.map(p => {
            const edit = getEdit(p);
            return (
              <div key={p.id} className="rounded-2xl p-4" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: 'var(--cream)', color: 'var(--muted)' }}>
                        {p.city}
                      </span>
                      {p.override && <span className="text-xs px-2 py-0.5 rounded-full bg-amber-900/30 text-amber-400">modificada</span>}
                    </div>
                    <p className="text-sm font-medium" style={{ color: 'var(--ink)' }}>{p.address}</p>
                    <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>
                      ${p.pricePerMonth.toLocaleString('es-MX')} MXN/mes ·
                      {p.available ? ' ✅ Disponible' : ` 🔴 Ocupada${p.occupiedSince ? ` desde ${p.occupiedSince}` : ''} hasta ${p.availableFrom || '?'}`}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    {edit.mode === 'view' && (
                      <>
                        <button onClick={() => update(p.id, { available: true, availableFrom: null, occupiedSince: null })} disabled={saving === p.id} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-900/40 text-emerald-400">
                          ✅ Disponible
                        </button>
                        <button onClick={() => setEdit(p.id, { mode: 'ocupada' })} disabled={saving === p.id} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-red-900/40 text-red-400">
                          🔴 Ocupada
                        </button>
                        <button onClick={() => setEdit(p.id, { mode: 'precio' })} disabled={saving === p.id} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-900/40 text-blue-400">
                          💰 Precio
                        </button>
                        {p.override && (
                          <button onClick={() => clear(p.id)} disabled={saving === p.id} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-stone-700/40 text-stone-400">
                            Resetear
                          </button>
                        )}
                      </>
                    )}

                    {edit.mode === 'ocupada' && (
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="flex flex-col gap-1">
                          <label className="text-xs" style={{ color: 'var(--muted)' }}>Ocupada desde</label>
                          <input type="date" value={edit.occupiedSince} onChange={e => setEdit(p.id, { occupiedSince: e.target.value })}
                            className="px-2 py-1 rounded-lg text-xs outline-none"
                            style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)', color: 'var(--ink)' }} />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-xs" style={{ color: 'var(--muted)' }}>Disponible desde</label>
                          <input type="date" value={edit.availableFrom} onChange={e => setEdit(p.id, { availableFrom: e.target.value })}
                            className="px-2 py-1 rounded-lg text-xs outline-none"
                            style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)', color: 'var(--ink)' }} />
                        </div>
                        <div className="flex gap-1 mt-4">
                          <button onClick={() => update(p.id, { available: false, occupiedSince: edit.occupiedSince, availableFrom: edit.availableFrom })}
                            disabled={saving === p.id || !edit.availableFrom}
                            className="px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-900/40 text-emerald-400">
                            {saving === p.id ? '...' : 'Guardar'}
                          </button>
                          <button onClick={() => setEdit(p.id, { mode: 'view' })} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-stone-700/40 text-stone-400">
                            Cancelar
                          </button>
                        </div>
                      </div>
                    )}

                    {edit.mode === 'precio' && (
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col gap-1">
                          <label className="text-xs" style={{ color: 'var(--muted)' }}>Precio MXN/mes</label>
                          <input type="number" value={edit.pricePerMonth} onChange={e => setEdit(p.id, { pricePerMonth: e.target.value })}
                            className="px-2 py-1 rounded-lg text-xs outline-none w-32"
                            style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)', color: 'var(--ink)' }} />
                        </div>
                        <div className="flex gap-1 mt-4">
                          <button onClick={() => update(p.id, { pricePerMonth: Number(edit.pricePerMonth) })}
                            disabled={saving === p.id}
                            className="px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-900/40 text-emerald-400">
                            {saving === p.id ? '...' : 'Guardar'}
                          </button>
                          <button onClick={() => setEdit(p.id, { mode: 'view' })} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-stone-700/40 text-stone-400">
                            Cancelar
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}