import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#00D646] p-4 rounded-full shadow-lg hover:scale-110 transition-transform hover:shadow-green-500/50 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} className="text-white fill-white" />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        ¡Escribinos!
      </span>
    </a>
  );
};

export default FloatingWhatsApp;