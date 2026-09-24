'use client';

import ProductCardEcommerce, { EcommerceProduct } from './ProductCardEcommerce';
import { Sparkles, ArrowRight } from 'lucide-react';

const NEW_ARRIVAL_PRODUCTS: EcommerceProduct[] = [
  {
    id: 'cheddar-chakli',
    name: 'CHEDDAR CHEESE PROTEIN CHAKLI | 18% PROTEIN',
    subtitle: 'Creamy cheddar cheese infused roasted millet spirals',
    tagline: 'High Protein • 18% Per Serve',
    badge: 'NEW',
    image: '/images/snacks/chakli-classic.jpg',
    rating: 4.9,
    reviewsCount: 19,
    weights: [
      { label: '50g', price: 65, originalPrice: 75 },
      { label: '150g', price: 149, originalPrice: 175 },
    ],
    benefits: [
      { id: 'b1', title: 'Source of Dietary Fibre', icon: 'fibre', position: 'top-left' },
      { id: 'b2', title: 'Rich in Protein (18%)', icon: 'protein', position: 'top-right' },
      { id: 'b3', title: 'No Palm Oil Always', icon: 'no-palm', position: 'bottom-right' },
    ],
  },
  {
    id: 'sweet-chilli-chakli',
    name: 'SWEET CHILLI PROTEIN CHAKLI | 17% PROTEIN',
    subtitle: 'Sweet Thai chilli kick blended with crunchy millet spirals',
    tagline: 'Sweet, Spicy & High Protein',
    badge: 'BESTSELLER',
    image: '/images/snacks/chakli-periperi.jpg',
    rating: 4.8,
    reviewsCount: 14,
    weights: [
      { label: '50g', price: 65, originalPrice: 75 },
      { label: '150g', price: 149, originalPrice: 175 },
    ],
    benefits: [
      { id: 'b1', title: '17% Natural Protein', icon: 'protein', position: 'top-left' },
      { id: 'b2', title: 'Low RPM Cold Ground Chili', icon: 'cold-ground', position: 'top-right' },
      { id: 'b3', title: 'Zero Palm Oil & Zero Maida', icon: 'no-palm', position: 'bottom-right' },
    ],
  },
  {
    id: 'jowar-bhakarwadi',
    name: 'JOWAR BHAKARWADI | RICH IN DIETARY FIBRE',
    subtitle: 'Traditional sweet & spicy pinwheels reinvented with ancient jowar millet',
    tagline: 'Authentic Maharashtrian Heritage',
    badge: 'NEW',
    image: '/images/snacks/sticks-classic.jpg',
    rating: 5.0,
    reviewsCount: 24,
    weights: [
      { label: '50g', price: 60, originalPrice: 70 },
      { label: '150g', price: 135, originalPrice: 160 },
    ],
    benefits: [
      { id: 'b1', title: 'Ancient Jowar Millet', icon: 'no-maida', position: 'top-left' },
      { id: 'b2', title: 'Rich in Dietary Fibre', icon: 'fibre', position: 'top-right' },
      { id: 'b3', title: 'Zero Artificial Additives', icon: 'no-palm', position: 'bottom-right' },
    ],
  },
  {
    id: 'cheddar-jowar-chips',
    name: 'CHEDDAR CHEESE JOWAR CHIPS | DIETARY FIBRE',
    subtitle: 'Gourmet cheese melted on popped wafer-light jowar millet crisps',
    tagline: 'Guilt-Free Cheesy Crunch',
    badge: '16% OFF',
    image: '/images/snacks/chips-tomato.jpg',
    rating: 4.7,
    reviewsCount: 16,
    weights: [
      { label: '50g', price: 42, originalPrice: 50 },
      { label: '150g', price: 99, originalPrice: 120 },
    ],
    benefits: [
      { id: 'b1', title: 'Source of Dietary Fibre', icon: 'fibre', position: 'top-left' },
      { id: 'b2', title: 'Zero Trans Fat Guarantee', icon: 'no-palm', position: 'top-right' },
      { id: 'b3', title: '100% Wholesome Grains', icon: 'no-maida', position: 'bottom-right' },
    ],
  },
];

export default function NewArrivals() {
  return (
    <section id="new-arrivals" className="py-12 sm:py-16 bg-[#FFFDF9] border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Snackible Hatched Underline (Image 3) */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-900 text-[11px] font-black uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            Just Dropped From The Kitchen
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0E2118] uppercase">
            NEW ARRIVALS
          </h2>
          <span className="hatched-divider" />
          <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto">
            Discover our freshest millet recipe experiments and high-protein creations. Tap or hover on any product to reveal its superpowers!
          </p>
        </div>

        {/* 2-in-a-row on Mobile, 4-in-a-row on Desktop Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {NEW_ARRIVAL_PRODUCTS.map((product) => (
            <ProductCardEcommerce key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
