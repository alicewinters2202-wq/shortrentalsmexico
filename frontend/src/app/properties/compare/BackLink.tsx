'use client';

import { useRouter } from 'next/navigation';

export default function BackLink({ label, fallbackHref }: { label: string; fallbackHref: string }) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Prefer real browser history (preserves whatever filters/sort were active),
    // falling back to the plain listing page if there's no history to go back to
    // (e.g. someone opened this property link directly).
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  };

  return (
    <a href={fallbackHref} onClick={handleClick} className="text-sm transition-colors hover:opacity-80" style={{ color: 'var(--muted)' }}>
      {label}
    </a>
  );
}
