
import React from 'react';
import { STATS } from '../../constants';

const Stats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
      {STATS.map(stat => (
        <div 
          key={stat.id} 
          className="bg-white p-6 rounded-3xl shadow-lg shadow-gray-100 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center justify-center border border-gray-100 group"
        >
          <span className="font-display font-bold text-3xl md:text-4xl text-brand-orange mb-2 group-hover:scale-110 transition-transform">{stat.value}</span>
          <span className="text-gray-500 text-xs md:text-sm font-bold uppercase tracking-wider">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Stats;
