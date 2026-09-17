'use client';

import Image from 'next/image';
import { BRAND_INFO } from '@/data/products';
import { Check, X, ShieldCheck, Heart, Leaf, Sun, Award } from 'lucide-react';

export default function PurityPromise() {
  const pillars = [
    {
      icon: <Leaf className="w-6 h-6 text-[#254d2e]" />,
      title: 'Traditional Ingredients',
      description:
        'Finger millet (Ragi), crunchy peanuts, protein-packed urad dal, fragrant curry leaves, and traditional spices.',
    },
    {
      icon: <Sun className="w-6 h-6 text-[#c9933b]" />,
      title: 'Zero Preservatives & 0% Maida',
      description:
        'Clean-label snacking with no refined flour, zero chemical stabilizers, and zero synthetic taste enhancers.',
    },
    {
      icon: <Heart className="w-6 h-6 text-[#c44f2c]" />,
      title: 'Good for Your Gut & Heart',
      description:
        'Packed with 8.5g dietary fibre and over 10.6g natural protein per 100g. Made exclusively with cold-pressed oils—zero palm oil.',
    },
    {
      icon: <Award className="w-6 h-6 text-[#1b3823]" />,
      title: 'Good for the Planet',
      description:
        'Millets require 70% less water than rice or wheat, enriching soil and revitalizing smallholder farming communities in India.',
    },
  ];

  return (
    <section id="purity" className="py-20 sm:py-28 bg-[#f8f4eb] border-y border-[#eee6d6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b3823]/10 text-[#1b3823] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#3f7e4d]" />
            <span>The Nevora Clean Standard</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142a1a]">
            Wholesome Food with Nothing to Hide
          </h2>

          <p className="text-base text-[#516154] leading-relaxed">
            Most convenience snacks in the market hide palm oil and refined wheat flour behind colorful packets.
            At Nevora, our ingredients list is as transparent and clean as home cooking.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-3xl p-6 sm:p-7 brand-shadow border border-[#eee6d6] space-y-3 flex flex-col justify-between"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#faf7f0] border border-[#eee6d6] flex items-center justify-center">
                {pillar.icon}
              </div>
              <h3 className="font-serif font-bold text-lg text-[#142a1a] pt-1">
                {pillar.title}
              </h3>
              <p className="text-xs text-[#516154] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Table: Nevora vs Standard Commercial Snacks */}
        <div className="bg-white rounded-3xl brand-shadow-lg border border-[#eee6d6] overflow-hidden">
          <div className="p-6 sm:p-8 bg-[#1b3823] text-[#fdfbf7]">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              The Real Difference in Every Bite
            </h3>
            <p className="text-xs sm:text-sm text-white/80 mt-1">
              Check what goes into your body when you choose Nevora over ultra-processed snacks.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#eee6d6] text-xs font-bold text-[#627065] uppercase tracking-wider bg-[#faf7f0]">
                  <th className="py-4 px-6">Criteria</th>
                  <th className="py-4 px-6 bg-[#1b3823]/5 text-[#1b3823] font-bold">
                    Nevora Millet Snacks
                  </th>
                  <th className="py-4 px-6 text-gray-400">Standard Commercial Snacks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eee6d6] text-sm text-[#222a23]">
                <tr>
                  <td className="py-4 px-6 font-semibold">Primary Grain Base</td>
                  <td className="py-4 px-6 bg-[#1b3823]/5 font-bold text-[#1b3823] flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    100% Nutrient-Dense Finger Millet (Ragi)
                  </td>
                  <td className="py-4 px-6 text-gray-500">Refined Wheat Flour (Maida) & Potato Starch</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Cooking Oil</td>
                  <td className="py-4 px-6 bg-[#1b3823]/5 font-bold text-[#1b3823] flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Cold Pressed Healthy Vegetable Oils (0% Palm Oil)
                  </td>
                  <td className="py-4 px-6 text-red-600 flex items-center gap-1.5">
                    <X className="w-4 h-4 text-red-500" />
                    Cheap Palm Oil & Hydrogenated Fats
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Dietary Fibre per 100g</td>
                  <td className="py-4 px-6 bg-[#1b3823]/5 font-bold text-[#1b3823] flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    High Fibre: 8.50 grams
                  </td>
                  <td className="py-4 px-6 text-gray-500">Typically less than 1.5 - 2.0 grams</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Protein Content per 100g</td>
                  <td className="py-4 px-6 bg-[#1b3823]/5 font-bold text-[#1b3823] flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    10.61 grams (Urad dal & Ragi)
                  </td>
                  <td className="py-4 px-6 text-gray-500">Low (Empty carbohydrate calories)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Preservatives & Additives</td>
                  <td className="py-4 px-6 bg-[#1b3823]/5 font-bold text-[#1b3823] flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Zero Chemical Preservatives
                  </td>
                  <td className="py-4 px-6 text-red-600 flex items-center gap-1.5">
                    <X className="w-4 h-4 text-red-500" />
                    TBHQ, INS 551, Artificial Flavor enhancers
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
