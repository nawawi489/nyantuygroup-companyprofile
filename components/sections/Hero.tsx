
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button, Badge } from '../ui/System';
import { designSystem } from '../../theme';
import Stats from './Stats';

const Hero: React.FC = () => {
  return (
    <header id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-offWhite">
      {/* Background Elements */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-[35rem] h-[35rem] bg-brand-softYellow rounded-full blur-3xl opacity-60 -z-10 animate-pulse duration-[5000ms]"></div>
      <div className="absolute top-20 right-0 w-[20rem] h-[20rem] bg-brand-orange/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <Badge className="mb-8">Est. 2024 • Makassar, Indonesia</Badge>
        
        <h1 className={`${designSystem.heading.h1} text-brand-dark mb-8 max-w-5xl mx-auto drop-shadow-sm`}>
          Empowering F&B Brands That <span className="text-brand-orange relative whitespace-nowrap">
            People Love.
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-yellow -z-10 opacity-70" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Nyantuy Group menaungi brand kuliner modern yang dapat dipercaya, relevan dan membentuk standar baru dalam industri kuliner.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <Button variant="primary" size="lg" onClick={() => window.location.href='#brands'}>
            Explore Brands <ArrowRight size={20} className="ml-2" />
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.location.href='#partner'}>
            Partner With Us
          </Button>
        </div>

        <Stats />
      </div>
    </header>
  );
};

export default Hero;
