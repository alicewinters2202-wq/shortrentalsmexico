'use client';

import { useState } from 'react';

interface Props {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  onContextMenu?: (e: React.MouseEvent) => void;
  draggable?: boolean;
}

/**
 * A plain <img> that fades in once loaded instead of popping in abruptly.
 * Purely cosmetic -- doesn't change loading behavior (still respects
 * `loading="lazy"`), just smooths the moment the image actually appears.
 */
export default function FadeImage({ src, alt, className = '', loading = 'lazy', onContextMenu, draggable }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading={loading}
      onLoad={() => setLoaded(true)}
      onContextMenu={onContextMenu}
      draggable={draggable}
      className={`${className} transition-all duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
    />
  );
}
