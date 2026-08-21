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

interface AdminReview {
  id: number;
  slug: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
  approved: boolean;
}

interface EditState {
  occupiedSince: string;
  availableFrom: string;
  pricePerMonth: string;
  mode: 'view' | 'ocupada' | 'precio' | 'resenas';
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
  const [reviewsBySlug, setReviewsBySlug] = useState<Record<string, AdminReview[]>>({});
  const [reviewLoading, setReviewLoading] = useState<string | null>(null);
  const [newReview, setNewReview] = useState<Record<string, { name: string; rating: number; comment: string }>>({});

  async function login() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${BACKEND}/api/admin/properties`, {
        headers: { 'x-admin-password': password },
      });
      if (!res.ok) { setError('Contrasena incorrecta'); setLoading(false); return; }
      const data = await res.json();
      setProperties(data);
      setAuthed(true);
    } catch {
      setError('Error conectando al servidor');
    }
    setLoading(false);
  }

  async function reload() {
    try {
      const res = await fetch(`${BACKEND}/api/admin/properties`, { headers: { 'x-admin-password': password } });
      setProperties(await res.json());
    } catch {
      alert('Error al recargar. El backend puede estar dormido, espera 30 segundos.');
    }
  }

  async function update(id: number, changes: object) {
    setSaving(id);
    try {
      const res = await fetch(`${BACKEND}/api/admin/properties/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
        body: JSON.stringify(changes),
      });
      if (!res.ok) { alert('Error al guardar: ' + res.status); setSaving(null); return; }
      await reload();
    } catch {
      alert('Error conectando al servidor. El backend puede estar dormido, espera 30 segundos.');
    }
    setSaving(null);
    setEditing(e => ({ ...e, [id]: { ...e[id], mode: 'view' } }));
  }

  async function clear(id: number) {
    setSaving(id);
    try {
      await fetch(`${BACKEND}/api/admin/properties/${id}/clear`, {
        method: 'POST',
        headers: { 'x-admin-password': password },
      });
      await reload();
    } catch {
      alert('Error al resetear.');
    }
    setSaving(null);
  }

  async function loadReviews(slug: string) {
    setReviewLoading(slug);
    try {
      const res = await fetch(`${BACKEND}/api/admin/reviews/${encodeURIComponent(slug)}`, {
        headers: { 'x-admin-password': password },
      });
      const data = await res.json();
      setReviewsBySlug((r) => ({ ...r, [slug]: data }));
    } catch {
      alert('Error al cargar reseñas.');
    }
    setReviewLoading(null);
  }

  async function addReview(slug: string) {
    const form = newReview[slug];
    if (!form || !form.rating || !form.comment?.trim()) return;
    setReviewLoading(slug);
    try {
      const res = await fetch(`${BACKEND}/api/admin/reviews/${encodeURIComponent(slug)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
        body: JSON.stringify({ name: form.name || 'Anónimo', rating: form.rating, comment: form.comment }),
      });
      if (!res.ok) { alert('Error al guardar reseña.'); setReviewLoading(null); return; }
      setNewReview((r) => ({ ...r, [slug]: { name: '', rating: 0, comment: '' } }));
      await loadReviews(slug);
    } catch {
      alert('Error conectando al servidor.');
    }
    setReviewLoading(null);
  }

  async function approveReview(slug: string, reviewId: number) {
    setReviewLoading(slug);
    try {
      await fetch(`${BACKEND}/api/admin/reviews/${reviewId}/approve`, {
        method: 'POST',
        headers: { 'x-admin-password': password },
      });
      await loadReviews(slug);
    } catch {
      alert('Error al aprobar reseña.');
    }
    setReviewLoading(null);
  }

  async function deleteReview(slug: string, reviewId: number) {
    setReviewLoading(slug);
    try {
      await fetch(`${BACKEND}/api/admin/reviews/${reviewId}`, {
        method: 'DELETE',
        headers: { 'x-admin-password': password },
      });
      await loadReviews(slug);
    } catch {
      alert('Error al borrar reseña.');
    }
    setReviewLoading(null);
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
            placeholder="Contrasena"
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
    <div className="min-h-screen px-4 py-6 sm:p-6" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
          <h1 className="font-serif text-3xl" style={{ color: 'var(--ink)' }}>Admin Panel</h1>
          <span className="text-sm" style={{ color: 'var(--muted)' }}>{properties.length} propiedades</span>
        </div>

        <input
          type="text"
          placeholder="Buscar por ciudad o direccion..."
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
                      ${(p.pricePerMonth || 0).toLocaleString('es-MX')} MXN/mes ·
                      {p.available ? ' Disponible' : ` Ocupada${p.occupiedSince ? ` desde ${p.occupiedSince}` : ''} hasta ${p.availableFrom || '?'}`}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    {edit.mode === 'view' && (
                      <>
                        <button onClick={() => update(p.id, { available: true })} disabled={saving === p.id} className="px-3 py-2 rounded-full text-xs font-semibold bg-emerald-900/40 text-emerald-400">
                          {saving === p.id ? '...' : 'Disponible'}
                        </button>
                        <button onClick={() => setEdit(p.id, { mode: 'ocupada' })} disabled={saving === p.id} className="px-3 py-2 rounded-full text-xs font-semibold bg-red-900/40 text-red-400">
                          Ocupada
                        </button>
                        <button onClick={() => setEdit(p.id, { mode: 'precio' })} disabled={saving === p.id} className="px-3 py-2 rounded-full text-xs font-semibold bg-blue-900/40 text-blue-400">
                          Precio
                        </button>
                        <button onClick={() => { setEdit(p.id, { mode: 'resenas' }); if (!reviewsBySlug[p.slug]) loadReviews(p.slug); }} disabled={saving === p.id} className="px-3 py-2 rounded-full text-xs font-semibold bg-violet-900/40 text-violet-400">
                          Reseñas
                        </button>
                        {p.override && (
                          <button onClick={() => clear(p.id)} disabled={saving === p.id} className="px-3 py-2 rounded-full text-xs font-semibold bg-stone-700/40 text-stone-400">
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
                            className="px-3 py-2 rounded-lg text-xs outline-none"
                            style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)', color: 'var(--ink)' }} />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-xs" style={{ color: 'var(--muted)' }}>Disponible desde</label>
                          <input type="date" value={edit.availableFrom} onChange={e => setEdit(p.id, { availableFrom: e.target.value })}
                            className="px-3 py-2 rounded-lg text-xs outline-none"
                            style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)', color: 'var(--ink)' }} />
                        </div>
                        <div className="flex gap-1 mt-4">
                          <button onClick={() => update(p.id, { available: false, occupiedSince: edit.occupiedSince, availableFrom: edit.availableFrom })}
                            disabled={saving === p.id || !edit.availableFrom}
                            className="px-3 py-2 rounded-full text-xs font-semibold bg-emerald-900/40 text-emerald-400">
                            {saving === p.id ? '...' : 'Guardar'}
                          </button>
                          <button onClick={() => setEdit(p.id, { mode: 'view' })} className="px-3 py-2 rounded-full text-xs font-semibold bg-stone-700/40 text-stone-400">
                            Cancelar
                          </button>
                        </div>
                      </div>
                    )}

                    {edit.mode === 'precio' && (
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="flex flex-col gap-1">
                          <label className="text-xs" style={{ color: 'var(--muted)' }}>Precio MXN/mes</label>
                          <input type="number" value={edit.pricePerMonth} onChange={e => setEdit(p.id, { pricePerMonth: e.target.value })}
                            className="px-3 py-2 rounded-lg text-sm outline-none w-32"
                            style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)', color: 'var(--ink)' }} />
                        </div>
                        <div className="flex gap-1 mt-4">
                          <button onClick={() => update(p.id, { pricePerMonth: Number(edit.pricePerMonth) })}
                            disabled={saving === p.id}
                            className="px-3 py-2 rounded-full text-xs font-semibold bg-emerald-900/40 text-emerald-400">
                            {saving === p.id ? '...' : 'Guardar'}
                          </button>
                          <button onClick={() => setEdit(p.id, { mode: 'view' })} className="px-3 py-2 rounded-full text-xs font-semibold bg-stone-700/40 text-stone-400">
                            Cancelar
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {edit.mode === 'resenas' && (
                  <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                    {reviewLoading === p.slug && !reviewsBySlug[p.slug] ? (
                      <p className="text-xs" style={{ color: 'var(--muted)' }}>Cargando...</p>
                    ) : (
                      <>
                        <div className="space-y-2 mb-4">
                          {(reviewsBySlug[p.slug] || []).length === 0 && (
                            <p className="text-xs" style={{ color: 'var(--muted)' }}>Sin reseñas todavía.</p>
                          )}
                          {(reviewsBySlug[p.slug] || []).map((r) => (
                            <div key={r.id} className="flex items-start justify-between gap-3 rounded-xl p-3" style={{ backgroundColor: 'var(--cream)' }}>
                              <div className="flex-1">
                                <p className="text-xs font-medium flex items-center gap-2 flex-wrap" style={{ color: 'var(--ink)' }}>
                                  {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)} · {r.name}
                                  {!r.approved && (
                                    <span className="px-1.5 py-0.5 rounded-full text-[9px] font-semibold bg-amber-900/40 text-amber-400">
                                      Pendiente
                                    </span>
                                  )}
                                </p>
                                <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>{r.comment}</p>
                              </div>
                              <div className="flex gap-1.5 flex-shrink-0">
                                {!r.approved && (
                                  <button
                                    onClick={() => approveReview(p.slug, r.id)}
                                    disabled={reviewLoading === p.slug}
                                    className="px-2 py-1 rounded-full text-[10px] font-semibold bg-emerald-900/40 text-emerald-400"
                                  >
                                    Aprobar
                                  </button>
                                )}
                                <button
                                  onClick={() => deleteReview(p.slug, r.id)}
                                  disabled={reviewLoading === p.slug}
                                  className="px-2 py-1 rounded-full text-[10px] font-semibold bg-red-900/40 text-red-400"
                                >
                                  Borrar
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="rounded-xl p-3" style={{ backgroundColor: 'var(--cream)' }}>
                          <p className="text-xs font-medium mb-2" style={{ color: 'var(--ink)' }}>Agregar reseña</p>
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <input
                              type="text"
                              placeholder="Nombre del huésped"
                              value={newReview[p.slug]?.name || ''}
                              onChange={(e) => setNewReview((r) => ({ ...r, [p.slug]: { ...(r[p.slug] || { rating: 0, comment: '' }), name: e.target.value } }))}
                              className="px-2 py-1.5 rounded-lg text-xs outline-none flex-1 min-w-[140px]"
                              style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', color: 'var(--ink)' }}
                            />
                            <div className="flex gap-0.5">
                              {[1, 2, 3, 4, 5].map((s) => (
                                <button
                                  key={s}
                                  type="button"
                                  onClick={() => setNewReview((r) => ({ ...r, [p.slug]: { ...(r[p.slug] || { name: '', comment: '' }), rating: s } }))}
                                  className="text-lg leading-none"
                                  style={{ color: (newReview[p.slug]?.rating || 0) >= s ? 'var(--gold)' : 'var(--border)' }}
                                >
                                  ★
                                </button>
                              ))}
                            </div>
                          </div>
                          <textarea
                            placeholder="Texto de la reseña..."
                            rows={2}
                            value={newReview[p.slug]?.comment || ''}
                            onChange={(e) => setNewReview((r) => ({ ...r, [p.slug]: { ...(r[p.slug] || { name: '', rating: 0 }), comment: e.target.value } }))}
                            className="w-full px-2 py-1.5 rounded-lg text-xs outline-none resize-none mb-2"
                            style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', color: 'var(--ink)' }}
                          />
                          <div className="flex gap-2">
                            <button
                              onClick={() => addReview(p.slug)}
                              disabled={reviewLoading === p.slug || !newReview[p.slug]?.rating || !newReview[p.slug]?.comment?.trim()}
                              className="px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-900/40 text-emerald-400 disabled:opacity-30"
                            >
                              {reviewLoading === p.slug ? '...' : 'Agregar'}
                            </button>
                            <button onClick={() => setEdit(p.id, { mode: 'view' })} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-stone-700/40 text-stone-400">
                              Cerrar
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
