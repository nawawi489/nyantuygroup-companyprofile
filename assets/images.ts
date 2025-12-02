
import pizzaImg from './img/pizza-nyantuy.png';
import rakyatReguler from './img/rakyat-reguler.jpg';
import smookedBeef from './img/smooked-beef.jpg';
import juraganCheese from './img/juragan-cheese-chocomond.jpg';
import img3787 from './img/IMG_3787.jpg';
import img3788 from './img/IMG_3788.jpg';

// Centralized asset management
// Using a high-quality image that serves as the "Shop Front" or "Interior"

export const ASSETS = {
  // Updated: Menggunakan direct image URL yang valid. 
  storeIllustration: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop",
  
  // Existing assets
  pizza: pizzaImg,
  menu1: rakyatReguler,
  menu2: smookedBeef,
  menu3: juraganCheese,
  menu4: img3787,
  menu5: img3788,
  menu6: img3788, // Using duplicate for now as IMG_5608 is missing
  fruit: "https://picsum.photos/seed/fruit/600/400",
  burger: "https://picsum.photos/seed/burger/600/400",
  comingSoon: "https://placehold.co/600x400/EEE/31343C?font=montserrat&text=Coming+Soon",
  
  // Team avatars
  team1: "https://picsum.photos/seed/26/100",
  team2: "https://picsum.photos/seed/27/100",
  team3: "https://picsum.photos/seed/28/100",
  team4: "https://picsum.photos/seed/29/100"
};
