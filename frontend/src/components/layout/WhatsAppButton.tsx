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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.79