
import React from 'react';
import { Target, Lightbulb, CheckCircle2 } from 'lucide-react';
import { Section } from '../ui/System';
import { designSystem } from '../../theme';
import { ASSETS } from '../../assets/images';

const About: React.FC = () => {
  return (
    <Section id="about" bg="offWhite">
      {/* Background Blobs */}
      <div className="absolute -left-20 top-1/4 w-96 h-96 bg-brand-beige rounded-full mix-blend-multiply filter blur-3xl opacity-70 pointer-events-none"></div>
      <div className="absolute -right-20 bottom-1/4 w-96 h-96 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 pointer-events-none"></div>
      
      <div className="text-center mb-16 lg:mb-24">
          <h2 className={designSystem.heading.subtitle}>About Us</h2>
          <h3 className={`${designSystem.heading.h2} text-brand-dark`}>Our Journey & Purpose</h3>
      </div>

      {/* Story Row */}
      <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
        <div className="lg:w-1/2 relative group">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-yellow/30 rounded-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
          <img 
            src={ASSETS.storeIllustration}
            alt="Nyantuy Group Store Front" 
            className="rounded-[2.5rem] shadow-2xl w-full object-cover aspect-4/3 z-10 relative border-4 border-white transform transition-transform duration-500 hover:rotate-1" 
          />
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-orange/10 rounded-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
          
          <div className="absolute bottom-10 -left-4 bg-white p-5 rounded-2xl shadow-xl max-w-xs hidden sm:block z-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <p className="font-display font-bold text-lg text-brand-dark italic">"Serving happiness since 2024"</p>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <h4 className={`${designSystem.heading.h3} text-brand-dark mb-6`}>Redefining Modern <br/> Comfort Food.</h4>
          <p className={`${designSystem.text.body} text-lg mb-6`}>
            Berawal dari semangat untuk menghadirkan kuliner berkualitas yang inklusif, Nyantuy Group hadir sebagai rumah bagi brand-brand inovatif. Kami percaya bahwa setiap suapan harus membawa kebahagiaan.
          </p>
          <p className={`${designSystem.text.body} text-lg mb-8`}>
            Kami tidak hanya membangun bisnis makanan, tetapi juga komunitas. Melalui pendekatan yang <span className="font-bold text-brand-orange">youthful</span> dan adaptif, kami terus berinovasi menciptakan tren rasa baru yang dicintai semua kalangan.
          </p>
          
          <div className="flex gap-5 items-center bg-white p-4 rounded-2xl border border-orange-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <img key={i} className="w-12 h-12 rounded-full border-2 border-white object-cover" src={`https://picsum.photos/seed/${i + 40}/100`} alt={`Member ${i}`} />
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-white bg-brand-dark text-white flex items-center justify-center text-xs font-bold">
                  +15
                </div>
              </div>
              <div className="flex flex-col justify-center border-l border-gray-200 pl-5">
                <span className="font-bold text-brand-dark text-lg leading-tight">Professional Team</span>
                <span className="text-sm text-gray-500">Dedicated to excellence</span>
              </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Row */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-10 rounded-[2.5rem] border border-orange-100 hover:shadow-xl hover:border-brand-orange/30 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-yellow/20 rounded-bl-[80px] transition-transform duration-500 group-hover:scale-125"></div>
            
            <div className="w-16 h-16 bg-brand-offWhite rounded-2xl flex items-center justify-center mb-8 shadow-sm text-brand-orange relative z-10 group-hover:bg-brand-orange group-hover:text-white transition-colors">
              <Target size={32} />
            </div>
            
            <h3 className={`${designSystem.heading.h3} text-brand-dark mb-4 relative z-10`}>Visi Kami</h3>
            <p className="text-gray-600 text-lg leading-relaxed relative z-10">
              Menjadi ekosistem F&B terdepan di Indonesia yang menginspirasi gaya hidup positif melalui inovasi kuliner, pengalaman pelanggan yang autentik, dan pertumbuhan yang berkelanjutan.
            </p>
        </div>

        <div className="bg-brand-dark text-white p-10 rounded-[2.5rem] hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-tr-[80px] transition-transform duration-500 group-hover:scale-125"></div>
            
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 text-brand-yellow backdrop-blur-sm relative z-10 group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors">
              <Lightbulb size={32} />
            </div>
            
            <h3 className={`${designSystem.heading.h3} mb-6 relative z-10`}>Misi Kami</h3>
            <ul className="space-y-4 text-gray-300 relative z-10">
              <li className="flex items-start gap-3 group/item">
                <CheckCircle2 size={24} className="text-brand-orange mt-0.5 group-hover/item:scale-110 transition-transform" />
                <span className="leading-relaxed">Menyajikan produk berkualitas tinggi dengan harga yang jujur dan terjangkau.</span>
              </li>
              <li className="flex items-start gap-3 group/item">
                <CheckCircle2 size={24} className="text-brand-orange mt-0.5 group-hover/item:scale-110 transition-transform" />
                <span className="leading-relaxed">Memberdayakan talenta lokal dan UMKM melalui kemitraan yang transparan.</span>
              </li>
              <li className="flex items-start gap-3 group/item">
                <CheckCircle2 size={24} className="text-brand-orange mt-0.5 group-hover/item:scale-110 transition-transform" />
                <span className="leading-relaxed">Terus berinovasi dalam rasa, teknologi, dan pelayanan pelanggan.</span>
              </li>
            </ul>
        </div>
      </div>
    </Section>
  );
};

export default About;
