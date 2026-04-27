'use client';
import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [isEn, setIsEn] = useState(false);

  useEffect(() => {
    setIsEn(document.cookie.includes('lang=en'));
  }, []);

  const message = isEn
    ? "Hi, I saw your website and I would like information about your available properties."
    : "Hola, vi su pagina y quisiera informacion sobre sus propiedades disponibles.";

  const url = "https://wa.me/5215662548748?text=" + encodeURIComponent(message);

  return (
    
     <a href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
      aria-label="WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M12 2C6.477 2 2 6.477 2 12c0