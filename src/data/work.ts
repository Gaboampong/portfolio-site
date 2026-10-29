import type { ImageMetadata } from 'astro';
import kuchillDesk from '../assets/work/kuchill-desk.webp';
import kuchillMob from '../assets/work/kuchill-mob.webp';
import digihubDesk from '../assets/work/digihub-desk.webp';
import digihubMob from '../assets/work/digihub-mob.webp';
import chaleDesk from '../assets/work/chale-desk.webp';
import chaleMob from '../assets/work/chale-mob.webp';

export interface Product {
  slug: string;
  theme: 'kuchill' | 'digihub' | 'chale';
  name: string;
  kind: string;
  tagline: string;
  summary: string;
  url: string;
  host: string;
  facts: string[];
  stack: string[];
  desktop: { src: ImageMetadata; alt: string };
  phone: { src: ImageMetadata; alt: string };
}

export const products: Product[] = [
  {
    slug: 'kuchill',
    theme: 'kuchill',
    name: 'KUCHILL',
    kind: 'Fashion e-commerce',
    tagline: 'Ready-to-wear and made-to-order, sold straight from the studio.',
    summary:
      'The online store for KUCHILL, an Accra fashion label. Shoppers browse and filter the collection, book a made-to-order consultation, and sign up for the Chill Passport to get early access to drops.',
    url: 'https://kuchillgh.com',
    host: 'kuchillgh.com',
    facts: [
      'Shop with category filters, New In, and price sorting',
      'Made-to-order consultation booking',
      'Chill Passport sign-up for early drop access',
      'Analytics run only after a visitor accepts cookies',
    ],
    stack: ['Next.js', 'React'],
    desktop: { src: kuchillDesk, alt: 'KUCHILL home page on desktop: the KUCHILL wordmark over a full-bleed campaign photo, under a red announcement bar.' },
    phone: { src: kuchillMob, alt: 'KUCHILL on a phone: campaign photo, wordmark, and the shop filters below.' },
  },
  {
    slug: 'digihub',
    theme: 'digihub',
    name: 'DigiHub',
    kind: 'Marketplace',
    tagline: 'Find products. Discover stores. Connect with sellers.',
    summary:
      'A marketplace that connects shoppers in Ghana with local stores and sellers. People search across products and stores, browse by category, find sellers near them, and contact them directly. Businesses can sign up and open a storefront themselves.',
    url: 'https://digihubgh.com',
    host: 'digihubgh.com',
    facts: [
      'One search across products and stores',
      'Store pages with verified-seller badges',
      'Near-me discovery and trade-ins',
      'Self-serve onboarding for businesses',
    ],
    stack: ['Next.js', 'React'],
    desktop: { src: digihubDesk, alt: 'DigiHub home page on desktop: the headline "Find products. Discover stores. Connect with sellers." with a search field and category chips.' },
    phone: { src: digihubMob, alt: 'DigiHub on a phone: the search hero and category chips.' },
  },
  {
    slug: 'chale',
    theme: 'chale',
    name: 'Chale, where?',
    kind: 'Consumer web app',
    tagline: 'Stop arguing about where to go. The board picks the spot.',
    summary:
      'A going-out guide that settles the "where should we go?" debate. Tell it the vibe and a split-flap board calls out a place. It also pulls in this weekend’s events, cinema showtimes, and food, fuel, cash, and pharmacies near you. Born in Accra, it works in any city.',
    url: 'https://chalewhere.app',
    host: 'chalewhere.app',
    facts: [
      '280+ Accra restaurant menus, checked against the source daily',
      'Weekend events merged from five ticketing sources',
      'Silverbird showtimes with links to book seats',
      'Design based on Ghana’s hand-painted signboards, with light and dark modes',
    ],
    stack: ['Astro', 'React', 'TypeScript', 'Tailwind CSS', 'OpenStreetMap'],
    desktop: { src: chaleDesk, alt: 'Chale, where? on desktop: "Morning, chale." above a yellow card that picks African Regent Hotel, with this weekend’s events below.' },
    phone: { src: chaleMob, alt: 'Chale, where? on a phone: today’s pick, mood chips, and a bottom tab bar.' },
  },
];

export interface System {
  kind: string;
  title: string;
  summary: string;
  stack: string[];
}

// Internal and client systems that can't be shown publicly.
export const systems: System[] = [
  {
    kind: 'Enterprise platforms',
    title: 'MIS and intranet systems',
    summary:
      'Internal platforms that bring staff and department records, communications, administration, and workflows into one secure system with role-based access. I worked on the database design, business logic, permissions, and interface.',
    stack: ['PHP', 'PostgreSQL', 'Role-based access'],
  },
  {
    kind: 'Business intelligence',
    title: 'Real-time BI dashboard',
    summary:
      'A dashboard that reads live from the source database and turns operational data into KPIs, trends, and drill-down views, so teams stop waiting for manually prepared reports.',
    stack: ['SQL', 'Database integration', 'Data visualization'],
  },
  {
    kind: 'Data engineering',
    title: 'Database engineering and reporting',
    summary:
      'Relational schemas, optimized SQL, SAP BusinessObjects universes, and Power BI reports, with validation at every step so the numbers hold up in review.',
    stack: ['SQL', 'SAP BO', 'Power BI'],
  },
];
