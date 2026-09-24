'use client';

import Image from 'next/image';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface UniversePillar {
  id: string;
  category: string;
  subtitle: string;
  badge: string;
  items: string[];
  image: string;
  comingSoon?: boolean;
}

const PILLARS: UniversePillar[] = [
  {
    id: 'millets',
    category: '01. Raw Millets & Grains',
    subtitle: 'Ancient nutrient-dense Indian grains sourced directly from local farmers',
    badge: 'Core Foundation',
    items: ['Finger Millet (Ragi)', 'Sorghum (Jowar)', 'Pearl Millet (Bajra)', 'Foxtail Millet', 'Kodo Millet'],
    image: '/images/snacks/chakli-classic.jpg',
  },
  {
    id: 'staples',
    category: '02. Everyday Staples',
    subtitle: 'Pure flours and grains designed for regular daily family cooking',
    badge: 'Coming Soon',
    items: ['Millet Multi-Grain Atta', 'Heritage Cold-Pressed Oils', 'Stone-Ground Low RPM Spices', 'Unpolished Rice'],
    image: '/images/masala/kutta-haldi.png',
    comingSoon: true,
  },
  {
    id: 'snacks',
    category: '03. Healthy Millet Snacks',
    subtitle: 'Ultra-crunchy, craveable munchies with zero maida and zero palm oil',
    badge: 'Available Now',
    items: ['Millet Chakli (4 Flavors)', 'Millet Sticks (High Fibre)', 'Wafer-Thin Chips', 'Desi Tea-Time Mixture', 'Fine Bhujiya'],
    image: '/images/snacks/chips-classic.jpg',
  },
  {
    id: 'everyday-foods',
    category: '04. Everyday Foods',
    subtitle: 'Reinventing pantry favorites into nutritious, guilt-free daily formats',
    badge: 'In Development',
    items: ['Millet Cookies', 'Ragi Noodles', 'Millet Pasta', 'Crisp Khakhra', 'Jaggery Powder'],
    image: '/images/snacks/sticks-classic.jpg',
    comingSoon: true,
  },
];

export default function ProductUniverse() {
  return (
    <section id="universe" className="py-16 sm:py-24 bg-[#FAF7F0] border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c97a10]">
            Brand Architecture
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#0E2118] tracking-tight mt-1">
            The Nevora Product Universe
          </h2>
          <span className="hatched-divider" />
          <p className="text-xs sm:text-sm text-neutral-600">
            Nevora is not just a snack brand. We are building a modern everyday food ecosystem that connects traditional Indian grains with modern consumption.
          </p>
        </div>

        {/* 4 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-3xl p-5 border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-amber-50/50 mb-4">
                  <Image
                    src={pillar.image}
                    alt={pillar.category}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 right-2.5">
                    <span
                      className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs ${
                        pillar.comingSoon
                          ? 'bg-amber-100 text-amber-900 border border-amber-300'
                          : 'bg-[#164a40] text-white'
                      }`}
                    >
                      {pillar.badge}
                    </span>
                  </div>
                </div>

                {/* Pillar Title & Subtitle */}
                <h3 className="font-serif text-lg font-bold text-[#0E2118] group-hover:text-[#164a40] transition-colors">
                  {pillar.category}
                </h3>
                <p className="text-xs text-neutral-500 mt-1 mb-3 leading-relaxed">
                  {pillar.subtitle}
                </p>

                {/* Items List */}
                <ul className="space-y-1.5 pt-2 border-t border-neutral-100">
                  {pillar.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-neutral-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="pt-4 mt-4 border-t border-neutral-100">
                <a
                  href="#products"
                  className="w-full inline-flex items-center justify-between text-xs font-bold text-[#164a40] group-hover:text-[#0e2118]"
                >
                  <span>{pillar.comingSoon ? 'Join Waitlist on WhatsApp' : 'Explore Current Range'}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
