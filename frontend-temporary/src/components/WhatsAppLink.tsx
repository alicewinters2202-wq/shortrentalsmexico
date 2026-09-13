'use client';

import { trackWhatsAppClick } from '@/lib/analytics';

interface Props {
  href: string;
  source: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

// Thin client-side wrapper so Server Component pages can render a tracked
// WhatsApp link without needing to become Client Components themselves.
export default function WhatsAppLink({ href, source, className, style, children }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(source)}
      className={className}
      style={style}
    >
      {children}
    </a>
  );
}
