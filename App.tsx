
import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Brands from './components/sections/Brands';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import AIAssistant from './components/AIAssistant';
import PizzaNyantuyPage from './pages/PizzaNyantuyPage';
import ComingSoonPage from './pages/ComingSoonPage';
import { BRANDS } from './constants';

const App: React.FC = () => {
  // Simple state-based router: 'home' | 'pizza-nyantuy' | 'rujaklah' | 'burgerta'
  const [currentView, setCurrentView] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentView(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getBrandName = (id: string) => {
    const brand = BRANDS.find(b => b.id === id);
    return brand ? brand.name : 'Unknown Brand';
  };

  return (
    <div className="font-sans text-brand-dark bg-brand-offWhite overflow-x-hidden selection:bg-brand-orange/20 selection:text-brand-dark">
      <Navbar 
        currentView={currentView} 
        onNavigateHome={() => handleNavigate('home')} 
      />
      
      <main>
        {currentView === 'home' && (
          <>
            <Hero />
            <Brands onNavigate={handleNavigate} />
            <About />
            <Contact />
          </>
        )}

        {currentView === 'pizza-nyantuy' && (
          <PizzaNyantuyPage onBack={() => handleNavigate('home')} />
        )}

        {(currentView === 'rujaklah' || currentView === 'burgerta') && (
          <ComingSoonPage 
            brandName={getBrandName(currentView)} 
            onBack={() => handleNavigate('home')} 
          />
        )}
      </main>

      {currentView === 'home' && <Footer />}
      {currentView !== 'home' && <Footer />} {/* Render Footer on all pages, or conditionally if desired */}
      
      <AIAssistant />
    </div>
  );
};

export default App;
