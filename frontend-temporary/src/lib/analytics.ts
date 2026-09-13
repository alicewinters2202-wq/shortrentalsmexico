// Fires a Google Analytics event whenever someone clicks through to WhatsApp.
// `source` identifies which part of the site the click came from, so GA can
// break down which pages/CTAs actually drive contact attempts.
export function trackWhatsAppClick(source: string) {
  if (typeof window === 'undefined') return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === 'function') {
    gtag('event', 'whatsapp_click', { source });
  }
}
