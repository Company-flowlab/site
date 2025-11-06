
import React from 'react';
import { FlowLabLogo } from './IconComponents';

interface FooterProps {
  onNavigate: (page: 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-brand-dark text-gray-400">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <FlowLabLogo className="h-7 w-auto" />
            <span className="text-xl font-bold text-white">FlowLab</span>
          </div>
          <div className="text-sm text-center md:text-left mb-6 md:mb-0">
            <p>&copy; {new Date().getFullYear()} FlowLab. Todos os direitos reservados.</p>
            <p>Transformando potencial em performance.</p>
          </div>
          <div className="flex space-x-6">
            <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">Política de Privacidade</button>
            <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">Termos de Uso</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
