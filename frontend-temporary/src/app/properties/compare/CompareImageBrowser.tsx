'use client';

import { useState } from 'react';
import { imageUrl } from '@/types/preview';

interface Props {
  images: string[];
  alt: string;
}

export default function CompareImageBrowser({ images, alt }: Props) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-2 flex items-center justify-center" style={{ backgroundColor: 'var(--card)' }}>
        <span className="text-xs" style={{ color: 'var(--muted)' }}>—</span>
      </div>
    );
  }

  function go(delta: number, e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setIndex((i) => (i + delta + images.length) % images.length);
  }

  return (
    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-2 group" style={{ backgroundColor: 'var(--card)' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imageUrl(images[index])} alt={alt} className="w-full h-full object-cover" />

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => go(-1, e)}
            aria-label="Previous photo"
            className="absolute left-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => go(1, e)}
            aria-label="Next photo"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          >
            ›
          </button>
          <span
            className="absolute bottom-1.5 right-1.5 text-[10px] px-1.5 py-0.5 rounded-full text-white font-medium"
            style={{ backgroundColor: 'rgba(0,0,0,0.55)' }}
          >
            {index + 1}/{images.length}
          </span>
        </>
      )}
    </div>
  );
}
