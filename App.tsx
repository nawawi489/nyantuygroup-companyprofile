
import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Brands from './components/sections/Brands';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="font-sans text-brand-dark bg-brand-offWhite overflow-x-hidden selection:bg-brand-orange/20 selection:text-brand-dark">
      <Navbar />
      
      <main>
        <Hero />
        <Brands />
        <About />
        <Contact />
      </main>

      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
