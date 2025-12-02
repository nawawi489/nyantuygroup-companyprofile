
export const theme = {
  colors: {
    brand: {
      orange: '#F97316',
      softOrange: '#FFA94D',
      yellow: '#F6C90E',
      softYellow: '#FCD34D',
      offWhite: '#FFF8F2',
      beige: '#FBF7F2',
      dark: '#1F2937'
    }
  },
  fonts: {
    sans: 'Inter, sans-serif',
    display: 'DM Sans, sans-serif',
    poppins: 'Poppins, sans-serif'
  },
  radius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '2.5rem',
    full: '9999px'
  }
};

export const designSystem = {
  heading: {
    h1: "font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight",
    h2: "font-display font-bold text-4xl md:text-5xl leading-tight",
    h3: "font-display font-bold text-3xl leading-snug",
    h4: "font-display font-bold text-2xl leading-snug",
    subtitle: "text-brand-orange font-bold text-sm tracking-widest uppercase mb-3"
  },
  text: {
    body: "text-gray-600 leading-relaxed",
    caption: "text-sm text-gray-500"
  },
  layout: {
    container: "container mx-auto px-6",
    section: "py-24 relative"
  }
};
