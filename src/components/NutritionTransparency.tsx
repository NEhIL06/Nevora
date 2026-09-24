'use client';

import Image from 'next/image';
import { BRAND_INFO } from '@/data/products';
import { ShieldCheck, Scale, Check, HeartPulse, Sparkles, MessageCircle, FileText, Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Ananya S.',
    location: 'Bengaluru',
    rating: 5,
    tag: 'Verified Buyer',
    text: 'My kids used to crave store-bought potato chips every evening. I replaced them with Nevora Ragi Chakli & Peri Peri Chips — they devoured the entire pack and didn’t even realize it was 100% millet! Zero maida, zero palm oil. Total win.',
  },
  {
    name: 'Vikram Joshi',
    location: 'Mumbai',
    rating: 5,
    tag: 'Fitness Enthusiast',
    text: '10.6g of natural protein and 8.5g of fiber per 100g is unheard of in Indian namkeen! The crunch is so satisfying without feeling heavy or greasy. Also ordered the Kutta Mirchi spice — the aroma is legitimately next level.',
  },
  {
    name: 'Pooja Agarwal',
    location: 'Raipur',
    rating: 5,
    tag: 'Home Chef',
    text: 'The Low RPM turmeric and coriander have completely transformed my curries. You can tell they haven’t been burnt in factory mills because the fragrance when you bloom them in hot oil is pure nostalgia.',
  },
];

export default function NutritionTransparency() {
  const nutritionMetrics = [
    {
      label: 'Dietary Fibre',
      value: '8.50',
      unit: 'grams',
      highlight: true,
      tag: '🔥 8x More than Maida',
      desc: 'High prebiotic dietary fiber supports smooth digestion and keeps you full for longer.',
    },
    {
      label: 'Wholesome Protein',
      value: '10.61',
      unit: 'grams',
      highlight: true,
      tag: '💪 High Plant Protein',
      desc: 'Naturally abundant protein derived purely from whole Ragi grains and premium Urad lentils.',
    },
    {
      label: 'Energy Value',
      value: '495.06',
      unit: 'kcal',
      desc: 'Clean sustained energy with complex carbs that prevent sudden sugar spikes.',
    },
    {
      label: 'Total Sugars',
      value: '< 2.0',
      unit: 'grams',
      desc: 'Naturally ultra-low sugar. Zero artificial sweeteners, zero maltodextrin.',
    },
    {
      label: 'Carbohydrates',
      value: '61.63',
      unit: 'grams',
      desc: 'Slow-burning, complex grain carbohydrates that nourish active bodies.',
    },
  ];

  return (
    <section id="nutrition" className="py-20 sm:py-28 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider border border-amber-200">
            <FileText className="w-4 h-4 text-[#D97706]" />
            <span>Certified Laboratory Backing</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E2118]">
            Full Nutritional Transparency
          </h2>

          <p className="text-base text-[#4B5563] leading-relaxed">
            Every single batch of Nevora snacks is formulated with calibrated wholesome ingredients and verified by certified laboratory testing.
          </p>
        </div>

        {/* Nutrition Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          {/* Packaging Back Cover Photo Display */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm bg-white rounded-3xl p-5 border-2 border-amber-200/80 shadow-xl">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#FAF7F0] to-[#F5EFE3]">
                <Image
                  src="/images/snacks/back-100g.jpg"
                  alt="Nevora Certified Packaging Back with Nutrition and FSSAI"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-contain p-2"
                />
              </div>
              <div className="p-4 text-center space-y-1">
                <span className="text-xs font-extrabold text-[#0E2118] flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Official Packaging Back Label
                </span>
                <p className="text-[11px] text-[#6B7280]">
                  FSSAI Central Lic No. {BRAND_INFO.fssai} • Made with Pride in Durg, Chhattisgarh
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Metric Cards */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {nutritionMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className={`p-5 rounded-2xl border transition-all ${
                    metric.highlight
                      ? 'bg-[#164A40] text-white border-[#164A40] shadow-lg shadow-emerald-950/20'
                      : 'bg-white text-[#0E2118] border-amber-200/80 shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${
                        metric.highlight ? 'text-amber-400' : 'text-[#6B7280]'
                      }`}
                    >
                      {metric.label}
                    </span>
                    {metric.tag && (
                      <span className="text-[10px] font-black uppercase bg-amber-400 text-black px-2 py-0.5 rounded-full">
                        {metric.tag}
                      </span>
                    )}
                  </div>

                  <div className="mt-2 flex items-baseline gap-1.5">
                    <span className="text-3xl font-black">{metric.value}</span>
                    <span
                      className={`text-xs font-semibold ${
                        metric.highlight ? 'text-emerald-200' : 'text-[#6B7280]'
                      }`}
                    >
                      {metric.unit} / 100g
                    </span>
                  </div>

                  <p
                    className={`text-xs mt-2 leading-relaxed ${
                      metric.highlight ? 'text-white/80' : 'text-[#4B5563]'
                    }`}
                  >
                    {metric.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick trust strip */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-center justify-between text-xs font-semibold">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                Tested in NABL accredited labs
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                100% Free from Palm Oil
              </span>
              <span className="hidden sm:flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                100% Vegetarian
              </span>
            </div>
          </div>
        </div>

        {/* Snackible-Style Customer Reviews / Social Proof Strip */}
        <div className="pt-16 border-t border-amber-200/60">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="flex items-center justify-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0E2118]">
              Loved by 15,000+ Snackers Across India
            </h3>
            <p className="text-xs sm:text-sm text-[#4B5563]">
              Real feedback from health-conscious foodies and families who switched to Nevora.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((review, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-amber-200/70 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400 text-sm">★★★★★</div>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      {review.tag}
                    </span>
                  </div>
                  <p className="text-xs text-[#374151] leading-relaxed italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-amber-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#0E2118]">{review.name}</span>
                  <span className="text-[#9CA3AF]">{review.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
