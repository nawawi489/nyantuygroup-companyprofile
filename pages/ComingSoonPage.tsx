
import React from 'react';
import { ArrowLeft, Hammer } from 'lucide-react';
import { Button } from '../components/ui/System';
import { designSystem } from '../theme';

interface Props {
  brandName: string;
  onBack: () => void;
}

const ComingSoonPage: React.FC<Props> = ({ brandName, onBack }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-offWhite relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl animate-pulse"></div>
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="text-center relative z-10 max-w-2xl px-6">
        <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center mx-auto mb-8 animate-bounce">
          <Hammer size={48} className="text-brand-orange" />
        </div>
        
        <h1 className={`${designSystem.heading.h1} text-brand-dark mb-6`}>
          Coming Soon
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-4">
          Halaman untuk <span className="font-bold text-brand-orange">{brandName}</span> sedang kami racik.
        </p>
        
        <p className={`${designSystem.text.body} mb-12`}>
          Tim kami sedang menyiapkan konten terbaik untuk menampilkan kelezatan brand ini.
          Silakan kembali lagi nanti!
        </p>
        
        <Button variant="outline" size="lg" onClick={onBack}>
          <ArrowLeft size={20} className="mr-2" /> Back to Home
        </Button>
      </div>
    </div>
  );
};

export default ComingSoonPage;
