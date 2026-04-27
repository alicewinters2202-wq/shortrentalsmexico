'use client';
import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [isEn, setIsEn] = useState(false);

  useEffect(() => {
    setIsEn(document.cookie.includes('lang=en'));
  }, []);

  const message = isEn
    ? 'Hi, I saw your website and I would like information about your available properties.'
    : 'Hola, vi su pagina y quisiera informacion sobre sus propiedades disponibles.';

  const url = 'https://wa.me/5215662548748?text=' + encodeURIComponent(message);

  return (
    <a href={url} target='_blank' rel='noopener noreferrer' className='fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110' style={{ backgroundColor: '#25D366' }} aria-label='WhatsApp'>
      <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 24 24' fill='white'>
        <path d='M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm4.93 13.22c-.2.58-1.21 1.12-1.65 1.18-.44.07-.86.1-2.77-.58-2.32-.83-3.81-3.19-3.93-3.34-.11-.14-.94-1.24-.94-2.37s.6-1.69.81-1.92c.21-.23.46-.29.61-.29.15 0 .31 0 .44.01.14.01.33-.05.52.39.19.46.64 1.58.7 1.69.06.12.1.25.02.4-.08.15-.12.24-.23.37-.11.13-.24.29-.34.39-.11.11-.23.24-.1.46.13.23.59.97 1.27 1.58.87.77 1.6 1.01 1.83 1.13.23.11.36.1.5-.06.13-.15.57-.67.72-.9.15-.23.3-.19.51-.11.21.07 1.33.63 1.56.74.23.11.38.17.44.27.06.09.06.55-.15 1.13z' />
      </svg>
    </a>
  );
}
