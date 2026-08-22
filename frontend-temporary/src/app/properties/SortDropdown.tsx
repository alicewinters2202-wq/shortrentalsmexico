'use client';

import { useRouter } from 'next/navigation';

interface Option {
  value: string;
  label: string;
}

interface Props {
  cityParam?: string;
  guestsParam?: number;
  sortParam?: string;
  options: Option[];
  placeholder: string;
  accentColor: string;
}

export default function SortDropdown({ cityParam, guestsParam, sortParam, options, placeholder, accentColor }: Props) {
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = e.target.value;
    const params = new URLSearchParams();
    if (cityParam) params.set('city', cityParam);
    if (guestsParam !== undefined) params.set('guests', String(guestsParam));
    if (sort) params.set('sort', sort);
    const qs = params.toString();
    router.push(`/properties${qs ? `?${qs}` : ''}`);
  };

  return (
    <select
      value={sortParam ?? ''}
      onChange={handleChange}
      className="text-sm rounded-full px-4 py-2 outline-none cursor-pointer"
      style={{
        backgroundColor: 'var(--card)',
        border: `1px solid ${sortParam ? accentColor : 'var(--border)'}`,
        color: sortParam ? accentColor : 'var(--muted)',
      }}
    >
      <option value="" style={{ backgroundColor: 'var(--card)', color: 'var(--muted)' }}>{placeholder}</option>
      {options.map((o) => (
        <option key={o.value} value={o.value} style={{ backgroundColor: 'var(--card)', color: 'var(--ink)' }}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
