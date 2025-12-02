
import { Brand, Stat } from './types';
import { ASSETS } from './assets/images';

export const BRANDS: Brand[] = [
  {
    id: 'pizza-nyantuy',
    name: 'Pizza Nyantuy',
    description: 'Pizza artisan dengan adonan sourdough lembut dan topping premium yang melimpah. Konsep "casual dining" yang cocok untuk hangout generasi Z dan milenial.',
    color: 'bg-orange-500',
    icon: 'pizza',
    image: ASSETS.pizza,
    stats: '50+ Outlets'
  },
  {
    id: 'rujaklah',
    name: 'Rujaklah',
    description: 'Modern twist dari jajanan tradisional. Buah segar premium dengan 12 pilihan saus signature, disajikan dalam kemasan on-the-go yang praktis dan higienis.',
    color: 'bg-red-500',
    icon: 'flame',
    image: ASSETS.fruit,
    stats: 'Best Seller 2024'
  },
  {
    id: 'burgerta',
    name: "Burgerta'",
    description: 'Smash burger autentik dengan 100% Australian beef patty. Menghadirkan cita rasa burger gourmet dengan harga yang tetap terjangkau untuk pasar Indonesia.',
    color: 'bg-yellow-500',
    icon: 'sandwich',
    image: ASSETS.burger,
    stats: 'Top Rated App'
  }
];

export const STATS: Stat[] = [
  { id: 1, value: "3+", label: "Leading Brands" },
  { id: 2, value: "250k+", label: "Happy Customers" },
  { id: 3, value: "200%", label: "Annual Growth" },
  { id: 4, value: "15+", label: "Cities Nationwide" }
];

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Brands', href: '#brands' },
  { label: 'About', href: '#about' },
  { label: 'Partnership', href: '#partner' },
];
