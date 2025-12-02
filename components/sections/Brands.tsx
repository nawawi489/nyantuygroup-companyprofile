
import React from 'react';
import { ArrowRight, Pizza, Flame, Sandwich } from 'lucide-react';
import { BRANDS } from '../../constants';
import { Section, Card } from '../ui/System';
import { designSystem } from '../../theme';

interface BrandsProps {
  onNavigate: (brandId: string) => void;
}

const Brands: React.FC<BrandsProps> = ({ onNavigate }) => {
  return (
    <Section id="brands" bg="white">
      <div className="text-center mb-16">
        <h2 className={designSystem.heading.subtitle}>Our Portfolio</h2>
        <h3 className={`${designSystem.heading.h2} text-brand-dark`}>House of Brands</h3>
        <p className={`${designSystem.text.body} mt-4 max-w-xl mx-auto`}>
          Setiap brand kami memiliki karakter unik yang dirancang untuk memikat hati dan lidah pelanggan setia kami.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {BRANDS.map(brand => {
          let BrandIcon = Pizza;
          if (brand.icon === 'flame') BrandIcon = Flame;
          if (brand.icon === 'sandwich') BrandIcon = Sandwich;

          return (
            <Card key={brand.id} className="group h-full flex flex-col">
              {/* Image Header */}
              <div className="h-64 overflow-hidden relative">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10 ${brand.color}`}></div>
                <img src={brand.image} alt={brand.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-brand-dark shadow-sm uppercase tracking-wide">
                  {brand.stats}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 flex-1 flex flex-col relative">
                <div className={`w-14 h-14 ${brand.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg transform -translate-y-16 border-4 border-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <BrandIcon size={28} />
                </div>
                
                <h4 className={`${designSystem.heading.h4} text-brand-dark mb-3 -mt-8`}>{brand.name}</h4>
                <p className={`${designSystem.text.body} mb-8 flex-1`}>
                  {brand.description}
                </p>
                
                <button 
                  onClick={() => onNavigate(brand.id)}
                  className="text-brand-orange font-bold text-sm uppercase tracking-wide flex items-center gap-2 group-hover:gap-4 transition-all mt-auto"
                >
                  Explore Brand <ArrowRight size={16} />
                </button>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

export default Brands;
