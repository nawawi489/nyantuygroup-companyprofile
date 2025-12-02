import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Pizza, Flame, Sandwich, Instagram, Linkedin, Mail, MapPin, Phone, Target, Lightbulb, CheckCircle2 } from 'lucide-react';
import { BRANDS, NAV_LINKS, STATS } from './constants';
import { Brand } from './types';
import AIAssistant from './components/AIAssistant';
import { ASSETS } from './assets/images';

// Reusable Section Components placed in App.tsx for cohesion as requested by file structure guidance
// (Ideally these would be in components/ folder, but we will inline small ones for the single file requirement limits if needed, 
// but here I will separate them logically within the file or just build the main layout here).

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Active Section Observer
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -50% 0px', // Trigger when section is near the center/top
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
    <div className="font-sans text-brand-dark bg-brand-offWhite overflow-x-hidden">
      
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 z-50">
             {/* Logo Placeholder */}
            <div className="w-10 h-10 bg-gradient-to-br from-brand-orange to-brand-yellow rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30 text-white font-bold font-display text-xl">
              N
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-brand-dark">
              Nyantuy<span className="text-brand-orange">Group</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 bg-white/80 backdrop-blur-md px-8 py-2.5 rounded-full border border-white/60 shadow-sm transition-all hover:bg-white hover:shadow-md">
            {NAV_LINKS.map(link => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className={`text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-brand-orange font-bold scale-105' 
                      : 'text-gray-600 hover:text-brand-orange hover:scale-105'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <a 
              href="#partner"
              className="bg-brand-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden z-50 text-brand-dark bg-white/50 p-2 rounded-lg backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-brand-offWhite z-40 flex flex-col justify-center items-center gap-8 lg:hidden animate-in slide-in-from-top-10">
            {NAV_LINKS.map(link => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-display font-bold transition-colors ${
                   activeSection === link.href.substring(1) ? 'text-brand-orange' : 'text-brand-dark hover:text-brand-orange'
                }`}
              >
                {link.label}
              </a>
            ))}
             <a 
              href="#partner"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 bg-brand-orange text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg shadow-orange-200"
            >
              Get in Touch
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-[35rem] h-[35rem] bg-brand-softYellow rounded-full blur-3xl opacity-60 -z-10"></div>
        <div className="absolute top-20 right-0 w-[20rem] h-[20rem] bg-brand-orange/5 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-1.5 bg-brand-orange/10 border border-brand-orange/20 rounded-full">
            <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">Est. 2024 • Makassar, Indonesia</span>
          </div>
          
          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-brand-dark leading-[1.1] mb-8 max-w-4xl mx-auto drop-shadow-sm">
            Empowering F&B Brands That <span className="text-brand-orange italic underline decoration-wavy decoration-2 underline-offset-8">People Love.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Nyantuy Group menaungi brand kuliner modern yang dapat dipercaya, relevan dan membentuk standar baru dalam industri kuliner. Kami membangun produk yang dapat dinikmati berbagai lapisan masyarakat.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#brands" 
              className="px-8 py-4 bg-brand-orange text-white rounded-full font-bold text-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-xl shadow-orange-500/20 flex items-center gap-2"
            >
              Our Brands <ArrowRight size={20} />
            </a>
            <a 
              href="#partner" 
              className="px-8 py-4 bg-transparent border-2 border-brand-dark text-brand-dark rounded-full font-bold text-lg hover:bg-brand-dark hover:text-white transition-all"
            >
              Partner With Us
            </a>
          </div>

          {/* Stats Cards Floating */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
            {STATS.map(stat => (
              <div key={stat.id} className="bg-white p-6 rounded-3xl shadow-lg shadow-gray-100 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center justify-center border border-gray-100">
                <span className="font-display font-bold text-3xl md:text-4xl text-brand-orange mb-2">{stat.value}</span>
                <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* House of Brands Section */}
      <section id="brands" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-3">Our Portfolio</h2>
            <h3 className="font-display font-bold text-4xl md:text-5xl text-brand-dark">House of Brands</h3>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Setiap brand kami memiliki karakter unik yang dirancang untuk memikat hati dan lidah pelanggan setia kami.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {BRANDS.map(brand => {
              // Dynamic Icon Rendering
              let BrandIcon = Pizza;
              if (brand.icon === 'flame') BrandIcon = Flame;
              if (brand.icon === 'sandwich') BrandIcon = Sandwich;

              return (
                <div key={brand.id} className="group relative bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Image Header */}
                  <div className="h-64 overflow-hidden relative">
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10 ${brand.color}`}></div>
                    <img src={brand.image} alt={brand.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-dark shadow-sm">
                      {brand.stats}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <div className={`w-12 h-12 ${brand.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg transform -translate-y-14 border-4 border-white group-hover:scale-110 transition-transform`}>
                      <BrandIcon size={24} />
                    </div>
                    
                    <h4 className="font-display font-bold text-2xl text-brand-dark mb-3 -mt-6">{brand.name}</h4>
                    <p className="text-gray-500 leading-relaxed mb-6">
                      {brand.description}
                    </p>
                    
                    <button className="text-brand-orange font-bold text-sm uppercase tracking-wide flex items-center gap-2 group-hover:gap-4 transition-all">
                      Explore Brand <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section - Expanded with Vision & Mission */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute -left-20 top-1/4 w-96 h-96 bg-brand-beige rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute -right-20 bottom-1/4 w-96 h-96 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-24">
             <h2 className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-3">About Us</h2>
             <h3 className="font-display font-bold text-4xl md:text-5xl text-brand-dark">Our Journey & Purpose</h3>
          </div>

          {/* Story Row */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-yellow/30 rounded-full -z-10"></div>
              {/* UPDATED IMAGE FROM ASSETS */}
              <img 
                src={ASSETS.storeIllustration}
                alt="Nyantuy Group Store Front" 
                className="rounded-[2.5rem] shadow-2xl w-full object-cover aspect-4/3 z-10 relative border-4 border-white" 
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-orange/10 rounded-full -z-10"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-10 -left-4 bg-white p-5 rounded-2xl shadow-xl max-w-xs hidden sm:block z-20">
                  <p className="font-display font-bold text-lg text-brand-dark italic">"Serving happiness since 2024"</p>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h4 className="font-display font-bold text-3xl text-brand-dark mb-6">Redefining Modern <br/> Comfort Food.</h4>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Berawal dari semangat untuk menghadirkan kuliner berkualitas yang inklusif, Nyantuy Group hadir sebagai rumah bagi brand-brand inovatif. Kami percaya bahwa setiap suapan harus membawa kebahagiaan.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Kami tidak hanya membangun bisnis makanan, tetapi juga komunitas. Melalui pendekatan yang <span className="font-bold text-brand-orange">youthful</span> dan adaptif, kami terus berinovasi menciptakan tren rasa baru yang dicintai generasi muda Indonesia.
              </p>
              
              <div className="flex gap-5 items-center bg-brand-beige p-4 rounded-2xl border border-orange-100">
                  <div className="flex -space-x-4">
                    {[1,2,3,4].map(i => (
                      <img key={i} className="w-12 h-12 rounded-full border-2 border-white object-cover" src={`https://picsum.photos/seed/${i + 25}/100`} alt={`Member ${i}`} />
                    ))}
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-brand-dark text-white flex items-center justify-center text-xs font-bold">
                      +50
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
             {/* Vision Card */}
            <div className="bg-brand-offWhite p-10 rounded-[2.5rem] border border-orange-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-40 h-40 bg-brand-yellow/20 rounded-bl-[80px] transition-transform duration-500 group-hover:scale-110"></div>
               
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm text-brand-orange relative z-10 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                  <Target size={32} />
               </div>
               
               <h3 className="font-display font-bold text-3xl text-brand-dark mb-4 relative z-10">Visi Kami</h3>
               <p className="text-gray-600 text-lg leading-relaxed relative z-10">
                 Menjadi ekosistem F&B terdepan di Indonesia yang menginspirasi gaya hidup positif melalui inovasi kuliner, pengalaman pelanggan yang autentik, dan pertumbuhan yang berkelanjutan.
               </p>
            </div>

            {/* Mission Card */}
            <div className="bg-brand-dark text-white p-10 rounded-[2.5rem] hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
               <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-tr-[80px] transition-transform duration-500 group-hover:scale-110"></div>
               
               <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 text-brand-yellow backdrop-blur-sm relative z-10 group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors">
                  <Lightbulb size={32} />
               </div>
               
               <h3 className="font-display font-bold text-3xl mb-6 relative z-10">Misi Kami</h3>
               <ul className="space-y-4 text-gray-300 relative z-10">
                 <li className="flex items-start gap-3">
                   <div className="mt-1 min-w-[20px]"><CheckCircle2 size={20} className="text-brand-orange" /></div>
                   <span className="leading-relaxed">Menyajikan produk berkualitas tinggi dengan harga yang jujur dan terjangkau.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="mt-1 min-w-[20px]"><CheckCircle2 size={20} className="text-brand-orange" /></div>
                   <span className="leading-relaxed">Memberdayakan talenta lokal dan UMKM melalui kemitraan yang transparan.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="mt-1 min-w-[20px]"><CheckCircle2 size={20} className="text-brand-orange" /></div>
                   <span className="leading-relaxed">Terus berinovasi dalam rasa, teknologi, dan pelayanan pelanggan.</span>
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="partner" className="py-24 bg-brand-offWhite">
        <div className="container mx-auto px-6">
          <div className="bg-brand-dark rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[20rem] h-[20rem] bg-brand-orange/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/2 text-white">
                <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Let's Grow Together.</h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Tertarik membuka franchise Pizza Nyantuy, Rujaklah, atau Burgerta'? Atau punya ide kolaborasi seru? Yuk, ngobrol santai!
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email Us</p>
                      <p className="font-bold">partnership@nyantuygroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">WhatsApp</p>
                      <p className="font-bold">+62 812 3456 7890</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Headquarters</p>
                      <p className="font-bold">South Jakarta, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <form className="bg-white p-8 rounded-3xl shadow-xl space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 uppercase">Full Name</label>
                      <input type="text" className="w-full bg-brand-offWhite border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-orange transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 uppercase">Phone</label>
                      <input type="tel" className="w-full bg-brand-offWhite border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-orange transition-all" placeholder="+62..." />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Email</label>
                    <input type="email" className="w-full bg-brand-offWhite border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-orange transition-all" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Subject</label>
                    <select className="w-full bg-brand-offWhite border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-orange transition-all text-gray-600">
                      <option>Franchise Inquiry</option>
                      <option>Supplier Proposal</option>
                      <option>Media & Press</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Message</label>
                    <textarea rows={4} className="w-full bg-brand-offWhite border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-orange transition-all" placeholder="Tell us more..."></textarea>
                  </div>
                  <button type="button" className="w-full bg-brand-orange text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center text-white font-bold font-display">N</div>
                <span className="font-display font-bold text-xl text-brand-dark">NyantuyGroup</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Empowering the next generation of culinary entrepreneurs with modern, scalable, and delicious brands.
              </p>
            </div>
            
            <div className="flex gap-16 flex-wrap">
              <div>
                <h4 className="font-bold text-brand-dark mb-4">Brands</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li><a href="#" className="hover:text-brand-orange transition-colors">Pizza Nyantuy</a></li>
                  <li><a href="#" className="hover:text-brand-orange transition-colors">Rujaklah</a></li>
                  <li><a href="#" className="hover:text-brand-orange transition-colors">Burgerta'</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-brand-dark mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li><a href="#" className="hover:text-brand-orange transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-brand-orange transition-colors">Career</a></li>
                  <li><a href="#" className="hover:text-brand-orange transition-colors">News</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-brand-dark mb-4">Social</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 Nyantuy Group. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-brand-orange">Privacy Policy</a>
              <a href="#" className="hover:text-brand-orange">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Assistant Widget */}
      <AIAssistant />
    </div>
  );
};

export default App;