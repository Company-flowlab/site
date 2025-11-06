
import React from 'react';
import { WhatsAppIcon } from './IconComponents';

const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href="https://wa.me/5521992094859"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-200"
      aria-label="Fale conosco no WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppFloat;