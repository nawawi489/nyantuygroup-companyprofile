
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../constants';
import { Button } from '../ui/System';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id], header[id]');
    sections.forEach(section => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 z-50 group">
          <div className="w-10 h-10 bg-gradient-to-br from-brand-orange to-brand-yellow rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30 text-white font-bold font-display text-xl group-hover:rotate-12 transition-transform">
            N
          </div>
          <span className="font-display font-bold text-2xl tracking-tight text-brand-dark">
            Nyantuy<span className="text-brand-orange">Group</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/60 shadow-sm transition-all hover:bg-white hover:shadow-md">
          {NAV_LINKS.map(link => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a 
                key={link.label} 
                href={link.href} 
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive 
                    ? 'bg-brand-orange text-white shadow-md shadow-orange-200' 
                    : 'text-gray-600 hover:text-brand-orange hover:bg-orange-50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <Button variant="secondary" size="sm" onClick={() => window.location.href='#partner'}>
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden z-50 text-brand-dark bg-white/50 p-2 rounded-lg backdrop-blur-md hover:bg-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-brand-offWhite/98 backdrop-blur-xl z-40 flex flex-col justify-center items-center gap-8 lg:hidden animate-in slide-in-from-top-10 duration-300">
          {NAV_LINKS.map(link => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-3xl font-display font-bold transition-colors ${
                 activeSection === link.href.substring(1) ? 'text-brand-orange' : 'text-brand-dark hover:text-brand-orange'
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button size="lg" onClick={() => {
            setIsMobileMenuOpen(false);
            window.location.href='#partner';
          }}>
            Partner With Us
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
