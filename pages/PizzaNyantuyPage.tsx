
import React from 'react';
import { ArrowLeft, ChefHat, Clock, Flame, MapPin, MessageCircle } from 'lucide-react';
import { Button, Section, Card, Badge } from '../components/ui/System';
import { designSystem } from '../theme';
import { ASSETS } from '../assets/images';

interface Props {
  onBack: () => void;
}

const PizzaNyantuyPage: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark/40 z-10"></div>
        <img 
          src={ASSETS.pizza} 
          alt="Pizza Nyantuy Hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-6 relative z-20 text-center text-white">
          <Badge className="bg-brand-white/20 border-brand-white/40 text-brand-white mb-6 backdrop-blur-md">
            The New Generation of Pizza
          </Badge>
          <h1 className={`${designSystem.heading.h1} mb-6 text-white`}>Pizza Nyantuy</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light text-gray-100 mb-8">
            Pizza Enak, Harga Merakyat!
          </p>
          <Button variant="primary" size="lg" onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth'})}>
            Lihat Menu
          </Button>
        </div>
      </div>

      {/* Why Us */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-100 text-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
              <ChefHat size={32} />
            </div>
            <h3 className={designSystem.heading.h4}>Soft Base</h3>
            <p className={designSystem.text.body + " mt-2"}>
              Dibuat sendiri dengan adonan roti pizza yang lembut, .
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Flame size={32} />
            </div>
            <h3 className={designSystem.heading.h4}>Food Grade Packaging</h3>
            <p className={designSystem.text.body + " mt-2"}>
              Dikemas dengan kemasan yang aman dan berkualitas.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock size={32} />
            </div>
            <h3 className={designSystem.heading.h4}>Freshly Made</h3>
            <p className={designSystem.text.body + " mt-2"}>
              Dibuat segar saat dipesan dengan bahan-bahan premium pilihan.
            </p>
          </div>
        </div>
      </Section>

      {/* Menu Highlight */}
      <Section id="menu" bg="offWhite">
        <div className="text-center mb-16">
          <h2 className={designSystem.heading.h2 + " text-brand-dark"}>Signature Menu</h2>
          <p className={designSystem.text.body + " mt-4"}>Pilihan Favorit Rakyat Nyantuy</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Rakyat Reguler", price: "IDR 29K", desc: "Sosis, Cheddar, Jagung Manis, Sayuran", img: ASSETS.menu1 },
            { name: "Smooked Beef", price: "IDR 40K", desc: "Pizza Reguler dengan extra topping dan smooked beef", img: ASSETS.menu2 },
            { name: "Juragan Chocomond", price: "IDR 60K", desc: "Coklat lumer, almond, Keju Mozza", img: ASSETS.menu3 }
          ].map((item, idx) => (
            <Card 
              key={idx} 
              className={`group flex flex-col h-full border border-transparent hover:border-brand-orange/20 transition-all p-0 overflow-hidden ${idx === 2 ? 'md:col-span-2 lg:col-span-1 md:w-2/3 md:mx-auto lg:w-auto' : ''}`}
            >
               <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 right-4 z-20">
                     <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      {item.price}
                    </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h4 className="font-display font-bold text-xl mb-2 text-brand-dark">{item.name}</h4>
                <p className="text-gray-500 text-sm mb-6 flex-1 leading-relaxed">{item.desc}</p>
                <Button variant="ghost" size="sm" className="pl-0 text-brand-orange self-start group-hover:translate-x-2 transition-transform">
                  Order Now →
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/6285793444353" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button variant="outline" size="lg" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white gap-2">
              <MessageCircle size={20} />
              Info Selengkapnya
            </Button>
          </a>
        </div>
      </Section>

      {/* Outlets */}
      <Section bg="white">
        <div className="bg-brand-dark rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className={designSystem.heading.h2 + " mb-6"}>Temukan Kami</h2>
            <p className="text-xl text-gray-300 mb-8">
              Hadir di 5 lokasi strategis di Makassar, Gowa.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
               <span className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full">
                 <MapPin size={18} className="text-brand-orange" /> Sungai Poso
               </span>
               <span className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full">
                 <MapPin size={18} className="text-brand-orange" /> Mangka Dg Bombong
               </span>
               <span className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full">
                 <MapPin size={18} className="text-brand-orange" /> Goa Ria
               </span>
               <span className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full">
                 <MapPin size={18} className="text-brand-orange" /> Barombong
               </span>
               <span className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full">
                 <MapPin size={18} className="text-brand-orange" /> Limbung
               </span>
            </div>
            <Button variant="primary" onClick={onBack}>
              <ArrowLeft size={18} className="mr-2" /> Kembali ke Beranda
            </Button>
          </div>
          
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        </div>
      </Section>
    </div>
  );
};

export default PizzaNyantuyPage;
