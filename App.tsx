
import React, { useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Method from './components/Method';
import AboutUs from './components/AboutUs';
import Infoproduct from './components/Infoproduct';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';

type Page = 'home' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onNavigateHome={() => navigateTo('home')} />;
  }

  if (currentPage === 'terms') {
    return <TermsOfUse onNavigateHome={() => navigateTo('home')} />;
  }

  return (
    <div className="bg-brand-light">
      <AnnouncementBar text="OFERTA DE LANÇAMENTO: Garanta seu template com preço especial por tempo limitado!" />
      <Navbar />
      <main>
        <Hero />
        <Method />
        <AboutUs />
        <Infoproduct />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer onNavigate={navigateTo} />
      <WhatsAppFloat />
    </div>
  );
};

export default App;