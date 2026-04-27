'use client';
import { useState, useEffect } from 'react';

interface Props {
  images: string[];
}

export default function HeroSlideshow({ images }: Props) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {images.map((src, i) => (
        <img key={src} src={src} alt='Hero' className='absolute inset-0 w-full h-full object-cover transition-opacity duration-1000' style={{ opacity: i === current ? 1 : 0 }} />
      ))}
    </>
  );
}
