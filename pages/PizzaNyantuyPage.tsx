
import React from 'react';
import { ArrowLeft, ChefHat, Clock, Flame, MapPin } from 'lucide-react';
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
          <Badge className="bg-brand-orange/20 border-brand-orange/40 text-white mb-6 backdrop-blur-md">
            The New Generation of Pizza
          </Badge>
          <h1 className={`${designSystem.heading.h1} mb-6 text-white`}>Pizza Nyantuy</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light text-gray-100 mb-8">
            Artisan sourdough pizza dengan cita rasa lokal yang bikin nagih.
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
            <h3 className={designSystem.heading.h4}>Sourdough Base</h3>
            <p className={designSystem.text.body + " mt-2"}>
              Adonan fermentasi 48 jam yang ringan, renyah, dan mudah dicerna.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Flame size={32} />
            </div>
            <h3 className={designSystem.heading.h4}>Wood Fired</h3>
            <p className={designSystem.text.body + " mt-2"}>
              Dipanggang dalam oven kayu tradisional untuk aroma smokey yang khas.
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
          <p className={designSystem.text.body + " mt-4"}>Pilihan favorit Nyantuy People</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Supreme Cheese", price: "IDR 85K", desc: "Mozzarella, Cheddar, Parmesan, Blue Cheese", img: "https://picsum.photos/seed/pizzasupreme/500/350" },
            { name: "Pepperoni Feast", price: "IDR 95K", desc: "Double Pepperoni, Mozzarella, Tomato Sauce", img: "https://picsum.photos/seed/pizzapepperoni/500/350" },
            { name: "Truffle Mushroom", price: "IDR 110K", desc: "Truffle Oil, Champignon, White Sauce", img: "https://picsum.photos/seed/pizzatruffle/500/350" },
            { name: "Rendang Special", price: "IDR 105K", desc: "Beef Rendang, Mozzarella, Green Chili", img: "https://picsum.photos/seed/pizzarendang/500/350" },
            { name: "Spicy Tuna", price: "IDR 90K", desc: "Tuna Chunk, Chili Flakes, Corn, Mayo", img: "https://picsum.photos/seed/pizzatuna/500/350" },
            { name: "Sweet Choco", price: "IDR 65K", desc: "Nutella, Banana, Cheese, Almond", img: "https://picsum.photos/seed/pizzachoco/500/350" }
          ].map((item, idx) => (
            <Card key={idx} className="group flex flex-col h-full border border-transparent hover:border-brand-orange/20 transition-all p-0 overflow-hidden">
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
      </Section>

      {/* Outlets */}
      <Section bg="white">
        <div className="bg-brand-dark rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className={designSystem.heading.h2 + " mb-6"}>Temukan Kami</h2>
            <p className="text-xl text-gray-300 mb-8">
              Hadir di 15+ lokasi strategis di Jakarta, Bandung, dan Surabaya.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
               <span className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full">
                 <MapPin size={18} className="text-brand-orange" /> Jakarta Selatan
               </span>
               <span className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full">
                 <MapPin size={18} className="text-brand-orange" /> Bandung Wetan
               </span>
               <span className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full">
                 <MapPin size={18} className="text-brand-orange" /> Surabaya Pusat
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
