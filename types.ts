export interface Brand {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string; // Representing icon name
  image: string;
  stats: string;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
}

export enum SectionId {
  HOME = 'home',
  BRANDS = 'brands',
  ABOUT = 'about',
  PARTNER = 'partner'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}