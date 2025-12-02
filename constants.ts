import { Brand, Stat } from './types';

export const BRANDS: Brand[] = [
  {
    id: 'pizza-nyantuy',
    name: 'Pizza Nyantuy',
    description: 'Pizza lezat dengan topping melimpah yang cocok buat nongkrong santai. Favorit anak muda masa kini.',
    color: 'bg-orange-500',
    icon: 'pizza',
    image: 'https://picsum.photos/seed/pizza/600/400',
    stats: '50+ Outlets'
  },
  {
    id: 'rujaklah',
    name: 'Rujaklah',
    description: 'Segarnya buah tropis dipadukan dengan bumbu rujak pedas manis yang nendang. Sehat dan menyegarkan!',
    color: 'bg-red-500',
    icon: 'flame',
    image: 'https://picsum.photos/seed/fruit/600/400',
    stats: 'Best Seller 2024'
  },
  {
    id: 'burgerta',
    name: "Burgerta'",
    description: 'Burger premium dengan patty juicy dan saus rahasia yang bikin nagih. Cita rasa internasional, harga lokal.',
    color: 'bg-yellow-500',
    icon: 'sandwich',
    image: 'https://picsum.photos/seed/burger/600/400',
    stats: 'Top Rated'
  }
];

export const STATS: Stat[] = [
  { id: 1, value: "3+", label: "Brand Kuliner" },
  { id: 2, value: "10,000+", label: "Pelanggan/Bulan" },
  { id: 3, value: "200%", label: "Growth YTD" },
  { id: 4, value: "15+", label: "Kota di Indonesia" }
];

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Brands', href: '#brands' },
  { label: 'About', href: '#about' },
  { label: 'Partnership', href: '#partner' },
];