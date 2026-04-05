export type BrandId = 'rz-kitchen' | 'wss-labs' | 'rxz-ventures' | 'cahayateras';

export interface Brand {
  id: BrandId;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  color: string; // Tailwind class reference
  hex: string; // Specific hex code for animations
  industry: 'F&B' | 'Tech' | 'Retail' | 'Finance';
  logo?: string; // Optional path to the logo image
  bgImage?: string; // Path to the background wallpaper image to show on hover
}

export const BRANDS: Brand[] = [
  {
    id: 'rz-kitchen',
    name: 'RZ Kitchen',
    shortName: 'Kitchen',
    tagline: 'Excellence in Food & Beverage',
    description: 'Culinary experiences designed to bring people together through exceptional taste and service.',
    color: 'bg-brand-kitchen',
    hex: '#e11d48', // Rose-600
    industry: 'F&B',
    logo: '/logos/FYNA.png?v=2',
  },
  {
    id: 'wss-labs',
    name: 'WSS Digital Labs',
    shortName: 'Digital Labs',
    tagline: 'Driving Innovation in Software',
    description: 'Cutting-edge digital products, media solutions, and software engineering for the modern enterprise.',
    color: 'bg-brand-tech',
    hex: '#2563eb', // Blue-600
    industry: 'Tech',
    logo: '/logos/WSS LOGO.png?v=2',
  },
  {
    id: 'rxz-ventures',
    name: 'RXZ Ventures',
    shortName: 'Ventures',
    tagline: 'Modern Retail & Physical Goods',
    description: 'Managing a diverse portfolio of retail brands and physical product distribution.',
    color: 'bg-brand-retail',
    hex: '#059669', // Emerald-600
    industry: 'Retail',
    logo: '/logos/DePrintiz.png?v=2',
  },
  {
    id: 'cahayateras',
    name: 'Cahayateras Consultation',
    shortName: 'Consultation',
    tagline: 'Expert Business & Financial Advice',
    description: 'Strategic financial planning and business consultation to ensure sustainable growth.',
    color: 'bg-brand-finance',
    hex: '#d97706', // Amber-600
    industry: 'Finance',
    logo: '/logos/CAHAYA TERAS.png?v=2',
  },
];
