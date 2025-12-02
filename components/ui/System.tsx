import React from 'react';

// Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-brand-orange text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20 hover:scale-105 hover:shadow-xl",
    secondary: "bg-brand-dark text-white hover:bg-gray-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    outline: "bg-transparent border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white",
    ghost: "bg-transparent text-brand-orange hover:bg-brand-orange/10"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const width = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

// Card Component
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true, ...props }) => {
  const hoverStyles = hoverEffect 
    ? "hover:shadow-2xl hover:-translate-y-2 transition-all duration-500" 
    : "";
    
  return (
    <div className={`bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 overflow-hidden ${hoverStyles} ${className}`} {...props}>
      {children}
    </div>
  );
};

// Section Component
interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bg?: 'white' | 'offWhite' | 'dark';
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, bg = 'offWhite' }) => {
  const bgColors = {
    white: 'bg-white',
    offWhite: 'bg-brand-offWhite',
    dark: 'bg-brand-dark'
  };

  return (
    <section id={id} className={`${bgColors[bg]} py-24 relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-6 relative z-10">
        {children}
      </div>
    </section>
  );
};

// Badge Component
export const Badge: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => (
  <div className={`inline-block px-4 py-1.5 bg-brand-orange/10 border border-brand-orange/20 rounded-full ${className}`}>
    <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">
      {children}
    </span>
  </div>
);