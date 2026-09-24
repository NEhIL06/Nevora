'use client';

import { useState } from 'react';
import Image from 'next/image';

interface CategoryCircle {
  id: string;
  name: string;
  image: string;
  href: string;
  tag?: string;
}

const CATEGORY_ITEMS: CategoryCircle[] = [
  {
    id: 'all',
    name: 'ALL SNACKS',
    image: '/images/snacks/chakli-classic.jpg',
    href: '#bestsellers',
    tag: 'All Flavors',
  },
  {
    id: 'chips',
    name: 'RAGI CHIPS',
    image: '/images/snacks/chips-classic.jpg',
    href: '#bestsellers',
    tag: 'Light & Crisp',
  },
  {
    id: 'sticks',
    name: 'MILLET STICKS',
    image: '/images/snacks/sticks-classic.jpg',
    href: '#bestsellers',
    tag: 'High Protein',
  },
  {
    id: 'gifting',
    name: 'GIFTING COMBOS',
    image: '/images/snacks/chakli-tomato.jpg',
    href: '#combos',
    tag: 'Save 20%',
  },
  {
    id: 'chakli',
    name: 'MILLET CHAKLI',
    image: '/images/snacks/chakli-periperi.jpg',
    href: '#bestsellers',
    tag: 'Bestseller',
  },
  {
    id: 'bhujiya',
    name: 'FINE BHUJIYA',
    image: '/images/snacks/bhujiya-classic.jpg',
    href: '#new-arrivals',
    tag: 'Desi Crunch',
  },
  {
    id: 'mixture',
    name: 'DESI MIXTURE',
    image: '/images/snacks/mixture-classic.jpg',
    href: '#bestsellers',
    tag: 'Tea Time',
  },
  {
    id: 'spices',
    name: 'LOW RPM SPICES',
    image: '/images/masala/kutta-haldi.png',
    href: '#spices',
    tag: 'Stone Ground',
  },
  {
    id: 'everyday',
    name: 'EVERYDAY FOODS',
    image: '/images/snacks/chips-tomato.jpg',
    href: '#universe',
    tag: 'Cookies & Atta',
  },
];

const NUTRITION_ITEMS: CategoryCircle[] = [
  { id: 'protein', name: 'RICH IN PROTEIN', image: '/images/snacks/sticks-periperi.jpg', href: '#bestsellers', tag: '10.6g Natural' },
  { id: 'fibre', name: 'HIGH FIBRE', image: '/images/snacks/chakli-classic.jpg', href: '#bestsellers', tag: '8.5g Dietary' },
  { id: 'nopalm', name: '0% PALM OIL', image: '/images/snacks/chips-classic.jpg', href: '#bestsellers', tag: 'Cold Pressed' },
  { id: 'nomaida', name: '0% MAIDA', image: '/images/snacks/bhujiya-classic.jpg', href: '#new-arrivals', tag: '100% Millet' },
  { id: 'lowrpm', name: 'LOW RPM AROMA', image: '/images/masala/kutta-mirchi.png', href: '#spices', tag: 'Cold Ground' },
];

const MOOD_ITEMS: CategoryCircle[] = [
  { id: 'chai', name: 'TEA-TIME BINGE', image: '/images/snacks/chakli-classic.jpg', href: '#bestsellers', tag: 'Desi Pairing' },
  { id: 'midnight', name: 'MIDNIGHT CRAVING', image: '/images/snacks/chips-masala.jpg', href: '#bestsellers', tag: 'Guilt-Free' },
  { id: 'workout', name: 'POST-WORKOUT', image: '/images/snacks/sticks-classic.jpg', href: '#bestsellers', tag: 'Protein Punch' },
  { id: 'kids', name: 'KIDS TIFFIN', image: '/images/snacks/chips-tomato.jpg', href: '#new-arrivals', tag: 'Crunchy Bites' },
  { id: 'festive', name: 'FESTIVAL GIFTING', image: '/images/masala/kutta-dhaniya.png', href: '#combos', tag: 'Gift Packs' },
];

export default function ShopByCategory() {
  const [activeTab, setActiveTab] = useState<'categories' | 'nutrition' | 'mood'>('categories');

  const currentItems =
    activeTab === 'categories'
      ? CATEGORY_ITEMS
      : activeTab === 'nutrition'
      ? NUTRITION_ITEMS
      : MOOD_ITEMS;

  return (
    <section className="py-12 sm:py-16 bg-[#FFFDF9] border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading with Snackible Hatched Underline (Image 1) */}
        <div className="mb-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0E2118] uppercase">
            SHOP BY
          </h2>
          <span className="hatched-divider" />

          {/* Filter Tabs: Categories | Nutrition | Mood */}
          <div className="inline-flex items-center gap-2 sm:gap-4 text-xs sm:text-sm font-bold text-neutral-600">
            <button
              onClick={() => setActiveTab('categories')}
              className={`transition-all rounded-md px-3 py-1 font-bold ${
                activeTab === 'categories'
                  ? 'bg-[#1D6055] text-white shadow-xs'
                  : 'hover:text-[#164a40]'
              }`}
            >
              Categories
            </button>
            <span className="text-neutral-300">|</span>
            <button
              onClick={() => setActiveTab('nutrition')}
              className={`transition-all rounded-md px-3 py-1 font-bold ${
                activeTab === 'nutrition'
                  ? 'bg-[#1D6055] text-white shadow-xs'
                  : 'hover:text-[#164a40]'
              }`}
            >
              Nutrition
            </button>
            <span className="text-neutral-300">|</span>
            <button
              onClick={() => setActiveTab('mood')}
              className={`transition-all rounded-md px-3 py-1 font-bold ${
                activeTab === 'mood'
                  ? 'bg-[#1D6055] text-white shadow-xs'
                  : 'hover:text-[#164a40]'
              }`}
            >
              Mood
            </button>
          </div>
        </div>

        {/* Circular Avatars Row (Smooth Horizontal Scrolling on Mobile, Flex on Desktop) */}
        <div className="flex items-center justify-start lg:justify-center gap-4 sm:gap-6 overflow-x-auto pb-4 pt-2 no-scrollbar px-2">
          {currentItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="flex flex-col items-center group flex-shrink-0 w-20 sm:w-24 text-center cursor-pointer"
            >
              {/* Circular Avatar Container */}
              <div className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-full overflow-hidden border-2 border-neutral-200 group-hover:border-[#1D6055] shadow-xs group-hover:shadow-md transition-all duration-300 bg-amber-50/50 p-1">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="88px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Title */}
              <span className="text-[10px] sm:text-[11px] font-black tracking-wider uppercase text-neutral-800 group-hover:text-[#1D6055] transition-colors mt-2.5 leading-tight">
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
