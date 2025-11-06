
import React, { useState } from 'react';

interface AnnouncementBarProps {
  text: string;
}

const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ text }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-brand-orange via-brand-magenta to-brand-purple p-2 text-center text-sm font-semibold text-white">
      <span>{text}</span>
      <button 
        onClick={() => setIsVisible(false)} 
        className="absolute top-1/2 right-4 -translate-y-1/2 text-white hover:opacity-75 transition-opacity"
        aria-label="Fechar anúncio"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default AnnouncementBar;
