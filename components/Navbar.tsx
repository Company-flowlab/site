import React, { useState, useEffect } from 'react';
import { FlowLabLogo } from './IconComponents';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#metodo', label: 'Método' },
    { href: '#quemsomos', label: 'Quem Somos' },
    { href: '#infoproduto', label: 'Template' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#planos', label: 'Planos' },
    { href: '#faq', label: 'FAQ' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // O 'block: start' garante que a seção alinhe no topo da tela.
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Fecha o menu mobile se estiver aberto
    if (isOpen) {
        setIsOpen(false);
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="flex items-center gap-2" aria-label="FlowLab - Página Inicial">
            <FlowLabLogo className="h-8 w-auto" />
            <span className="text-2xl font-bold text-brand-dark">FlowLab</span>
          </a>
          
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-brand-dark font-medium hover:text-brand-purple transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="https://tally.so/r/mRN0Qj" target="_blank" rel="noopener noreferrer" className="hidden lg:inline-block bg-gradient-to-r from-brand-purple to-brand-blue text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200">
              Comprar Agora
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-brand-dark focus:outline-none" aria-label="Abrir menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'}`}>
          <nav className="flex flex-col space-y-4 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)} 
                className="text-brand-dark font-medium text-lg hover:text-brand-purple transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a href="https://tally.so/r/mRN0Qj" target="_blank" rel="noopener noreferrer" className="w-full text-center bg-gradient-to-r from-brand-purple to-brand-blue text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200 mt-4">
              Comprar Agora
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
