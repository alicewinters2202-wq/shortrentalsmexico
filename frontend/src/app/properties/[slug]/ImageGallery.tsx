'use client';
import { useState, useEffect, useRef } from 'react';
import { imageUrl } from '@/types/preview';

interface Props {
  images: string[];
  address: string;
}

export default function ImageGallery({ images, address }: Props) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (images.length <= 1 || paused) return;
    timerRef.current = setInterval(() => {
      setCurrent((i) => (i + 1) % images.length);
    }, 4000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [images.length, paused]);

  if (!images.length) {
    return (
      <div className="w-full aspect-[16/7] rounded-3xl flex items-center justify-center mb-10"
        style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
        <p className="text-sm" style={{ color: 'var(--muted)' }}>Sin imágenes disponibles</p>
      </div>
    );
  }

  const prev = () => { setCurrent((i) => (i - 1 + images.length) % images.length); setPaused(true); };
  const next = () => { setCurrent((i) => (i + 1) % images.length); setPaused(true); };

  return (
    <div className="mb-10">
      <div
        className="w-full aspect-[16/7] rounded-3xl overflow-hidden relative mb-3"
        style={{ backgroundColor: 'var(--card)' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl(images[current])}
          alt={`${address} — ${current + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/85 backdrop-blur-sm rounded-full w-11 h-11 flex items-center justify-center text-xl text-[--ink] hover:bg-white shadow transition-colors"
              aria-label="Anterior"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/85 backdrop-blur-sm rounded-full w-11 h-11 flex items-center justify-center text-xl text-[--ink] hover:bg-white shadow transition-colors"
              aria-label="Siguiente"
            >
              ›
            </button>
            {/* Puntos indicadores */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setPaused(true); }}
                  className={`rounded-full transition-all ${i === current ? 'w-5 h-2 bg-white' : 'w-2 h-2 bg-white/50'}`}
                />
              ))}
            </div>
          </>
        )}
        <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
          {current + 1} / {images.length}
        </div>
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setPaused(true); }}
              className={`flex-shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                i === current
                  ? 'border-[--gold] opacity-100 scale-105'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imageUrl(img)} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}