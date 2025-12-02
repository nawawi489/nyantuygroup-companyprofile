
import { Brand, Stat } from './types';
import { ASSETS } from './assets/images';

export const BRANDS: Brand[] = [
  {
    id: 'pizza-nyantuy',
    name: 'Pizza Nyantuy',
    description: 'Pizza dengan cita rasa lokal, berkualitas dan harga merakyat.',
    color: 'bg-orange-500',
    icon: 'pizza',
    image: ASSETS.pizza,
    stats: '5 Outlets'
  },
  {
    id: 'rujaklah',
    name: 'Rujaklah',
    description: 'Modern twist dari jajanan tradisional. Buah segar premium dengan pilihan saus signature, disajikan dalam kemasan on-the-go yang praktis dan higienis.',
    color: 'bg-red-500',
    icon: 'flame',
    image: ASSETS.comingSoon,
    stats: ""
  },
  {
    id: 'burgerta',
    name: "Burgerta'",
    description: 'Smash burger autentik dengan 100% daging sapi asli. Menghadirkan cita rasa burger gourmet dengan harga yang tetap terjangkau untuk pasar Indonesia.',
    color: 'bg-yellow-500',
    icon: 'sandwich',
    image: ASSETS.comingSoon,
    stats: ""
  }
];

export const STATS: Stat[] = [
  { id: 1, value: "3+", label: "Leading Brands" },
  { id: 2, value: "1k+", label: "Happy Customers" },
  { id: 3, value: "100%", label: "Annual Growth" }
];

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Brands', href: '#brands' },
  { label: 'About', href: '#about' },
  { label: 'Partnership', href: '#partner' },
];

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/',
  linkedin: 'https://linkedin.com/company/',
  whatsapp: 'https://wa.me/6282251196714',
  tiktok: 'https://tiktok.com/'
};
