'use client';
import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const [isEn, setIsEn] = useState(false);

  useEffect(() => {
    const check = () => {
      const cookies = document.cookie.split(';').map(c => c.trim());
      const langCookie = cookies.find(c => c.startsWith('lang='));
      setIsEn(langCookie === 'lang=en');
    };
    check();
    const interval = setInterval(check, 500);
    return () => clearInterval(interval);
  }, []);

  const message = isEn
    ? 'Hi, I saw your website and I would like information about your available properties.'
    : 'Hola, vi su pagina y quisiera informacion sobre sus propiedades disponibles.';

  const url = 'https://wa.me/5215662548748?text=' + encodeURIComponent(message);

  return (
    <a href={url} target='_blank' rel='noopener noreferrer' className='fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110' style={{ backgroundColor: '#25D366' }} aria-label='WhatsApp'>
      <FaWhatsapp size={30} color='white' />
    </a>
  );
}
