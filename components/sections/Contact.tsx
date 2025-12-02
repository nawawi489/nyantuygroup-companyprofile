
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Section, Button } from '../ui/System';
import { designSystem } from '../../theme';

const Contact: React.FC = () => {
  return (
    <Section id="partner" bg="offWhite" className="!pt-0">
      <div className="bg-brand-dark rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[20rem] h-[20rem] bg-brand-orange/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2 text-white">
            <h2 className={`${designSystem.heading.h2} mb-6`}>Let's Grow Together.</h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              Tertarik membuka franchise Pizza Nyantuy, Rujaklah, atau Burgerta'? Atau punya ide kolaborasi seru? Yuk, ngobrol santai!
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-brand-orange transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Email Us</p>
                  <p className="font-bold text-lg">partnership@nyantuygroup.com</p>
                </div>
              </div>
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-brand-orange transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">WhatsApp</p>
                  <p className="font-bold text-lg">+62 812 3456 7890</p>
                </div>
              </div>
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-brand-orange transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Headquarters</p>
                  <p className="font-bold text-lg">South Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <form className="bg-white p-8 md:p-10 rounded-3xl shadow-xl space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-1">Full Name</label>
                  <input type="text" className="w-full bg-brand-offWhite border-2 border-transparent rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange/50 focus:bg-white transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-1">Phone</label>
                  <input type="tel" className="w-full bg-brand-offWhite border-2 border-transparent rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange/50 focus:bg-white transition-all" placeholder="+62..." />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Email</label>
                <input type="email" className="w-full bg-brand-offWhite border-2 border-transparent rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange/50 focus:bg-white transition-all" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Subject</label>
                <div className="relative">
                  <select className="w-full bg-brand-offWhite border-2 border-transparent rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange/50 focus:bg-white transition-all text-gray-600 appearance-none">
                    <option>Franchise Inquiry</option>
                    <option>Supplier Proposal</option>
                    <option>Media & Press</option>
                    <option>Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Message</label>
                <textarea rows={4} className="w-full bg-brand-offWhite border-2 border-transparent rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange/50 focus:bg-white transition-all resize-none" placeholder="Tell us more about your interest..."></textarea>
              </div>
              
              <Button variant="primary" fullWidth className="mt-4 shadow-xl">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
