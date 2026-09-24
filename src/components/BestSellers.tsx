'use client';

import ProductCardEcommerce, { EcommerceProduct } from './ProductCardEcommerce';
import { ArrowRight, Flame } from 'lucide-react';

const BESTSELLER_PRODUCTS: EcommerceProduct[] = [
  {
    id: 'chips-periperi',
    name: 'PERI PERI RAGI CHIPS | SOURCE OF CALCIUM',
    subtitle: 'Fiery peri-peri dusted crunchy finger millet chips',
    tagline: '100% Millet • Cold-Pressed Oil',
    badge: '16% OFF',
    image: '/images/snacks/chips-periperi.jpg',
    rating: 4.9,
    reviewsCount: 35,
    weights: [
      { label: '50g', price: 42, originalPrice: 50 },
      { label: '150g', price: 99, originalPrice: 120 },
    ],
    benefits: [
      { id: 'b1', title: 'Source of Dietary Fibre', icon: 'fibre', position: 'top-left' },
      { id: 'b2', title: 'Rich in Protein (10.6g)', icon: 'protein', position: 'top-right' },
      { id: 'b3', title: 'No Palm Oil Always', icon: 'no-palm', position: 'bottom-right' },
    ],
  },
  {
    id: 'chakli-classic',
    name: 'SIGNATURE RAGI CHAKLI | LOW RPM SEASONED',
    subtitle: 'Classic sea salt & curry leaves roasted finger millet spirals',
    tagline: 'Authentic South Indian Crunch',
    badge: 'BESTSELLER',
    image: '/images/snacks/chakli-classic.jpg',
    rating: 5.0,
    reviewsCount: 88,
    weights: [
      { label: '85g', price: 65, originalPrice: 75 },
      { label: '130g', price: 89, originalPrice: 110 },
    ],
    benefits: [
      { id: 'b1', title: '100% Finger Millet (Ragi)', icon: 'no-maida', position: 'top-left' },
      { id: 'b2', title: 'Low RPM Cold Ground Spices', icon: 'cold-ground', position: 'top-right' },
      { id: 'b3', title: 'Zero Palm Oil & Zero Maida', icon: 'no-palm', position: 'bottom-right' },
    ],
  },
  {
    id: 'chips-masala',
    name: 'MASALA MANIA RAGI CHIPS | CHATPATA CRUNCH',
    subtitle: 'Heritage Indian spices blended on wafer-thin millet chips',
    tagline: 'Guilt-Free Tea-Time Snack',
    badge: 'NEW',
    image: '/images/snacks/chips-masala.jpg',
    rating: 4.8,
    reviewsCount: 42,
    weights: [
      { label: '50g', price: 42, originalPrice: 50 },
      { label: '150g', price: 99, originalPrice: 120 },
    ],
    benefits: [
      { id: 'b1', title: 'Source of Dietary Fibre', icon: 'fibre', position: 'top-left' },
      { id: 'b2', title: 'Cold-Pressed Heart-Healthy Oil', icon: 'no-palm', position: 'top-right' },
      { id: 'b3', title: '0% Trans Fat & Preservatives', icon: 'no-maida', position: 'bottom-right' },
    ],
  },
  {
    id: 'mixture-classic',
    name: 'DESI MILLET MIXTURE | HIGH FIBRE NAMKEEN',
    subtitle: 'Wholesome millet bites tossed with roasted peanuts & curry leaves',
    tagline: 'Classic Desi Chai-Time Medley',
    badge: 'BESTSELLER',
    image: '/images/snacks/mixture-classic.jpg',
    rating: 4.9,
    reviewsCount: 53,
    weights: [
      { label: '85g', price: 65, originalPrice: 75 },
      { label: '130g', price: 89, originalPrice: 110 },
    ],
    benefits: [
      { id: 'b1', title: '10.6g Natural Protein', icon: 'protein', position: 'top-left' },
      { id: 'b2', title: 'No Palm Oil Guaranteed', icon: 'no-palm', position: 'top-right' },
      { id: 'b3', title: 'High Dietary Fibre', icon: 'fibre', position: 'bottom-right' },
    ],
  },
];

export default function BestSellers() {
  return (
    <section id="bestsellers" className="py-12 sm:py-16 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Snackible Hatched Underline (Image 2) */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 text-[11px] font-black uppercase tracking-wider mb-2">
            <Flame className="w-3.5 h-3.5 text-amber-600" />
            Loved By 15,000+ Munchers
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0E2118] uppercase">
            BEST SELLERS
          </h2>
          <span className="hatched-divider" />
          <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto">
            Our most devoured finger millet innovations. Hover on desktop or tap on mobile to reveal nutritional benefits!
          </p>
        </div>

        {/* 2-in-a-row on Mobile, 4-in-a-row on Desktop Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {BESTSELLER_PRODUCTS.map((product) => (
            <ProductCardEcommerce key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-neutral-50 text-[#164a40] border-2 border-[#164a40] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xs hover:shadow-md transition-all"
          >
            <span>View All Bestseller Snacks</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
