'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  /** Delay before the reveal animation starts, once in view (seconds). */
  delay?: number;
}

/**
 * Wraps content that should fade + slide in once scrolled into view,
 * instead of everything being static/flat from the start. Reveals once
 * and stays visible (doesn't re-hide on scroll-out), matching the usual
 * "unfolds as you scroll" pattern rather than a distracting repeat effect.
 */
export default function ScrollReveal({ children, className = '', delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${visible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${delay}s` : '0s' }}
    >
      {children}
    </div>
  );
}
