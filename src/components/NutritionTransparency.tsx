'use client';

import Image from 'next/image';
import { BRAND_INFO } from '@/data/products';
import { ShieldCheck, Scale, Check, HeartPulse, Sparkles, MessageCircle, FileText } from 'lucide-react';

export default function NutritionTransparency() {
  const nutritionMetrics = [
    {
      label: 'Energy Value',
      value: '495.06',
      unit: 'kcal',
      desc: 'Clean sustained energy from whole millets and legumes',
    },
    {
      label: 'Dietary Fibre',
      value: '8.50',
      unit: 'grams',
      highlight: true,
      desc: 'Supports healthy digestion and prolonged satiety',
    },
    {
      label: 'Wholesome Protein',
      value: '10.61',
      unit: 'grams',
      highlight: true,
      desc: 'Naturally derived from Ragi and Urad lentils',
    },
    {
      label: 'Total Sugars',
      value: '< 2.0',
      unit: 'grams',
      desc: 'Naturally low sugar; zero artificial sweeteners',
    },
    {
      label: 'Carbohydrates',
      value: '61.63',
      unit: 'grams',
      desc: 'Complex slow-release carbohydrates from whole grains',
    },
  ];

  return (
    <section id="nutrition" className="py-20 sm:py-28 bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b3823]/10 text-[#1b3823] text-xs font-bold uppercase tracking-wider">
            <FileText className="w-4 h-4 text-[#a77826]" />
            <span>Certified Transparency</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142a1a]">
            Verified Laboratory Nutritional Profile
          </h2>

          <p className="text-base text-[#516154] leading-relaxed">
            Every batch of Nevora snacks is formulated with calibrated wholesome ingredients.
            Here is the exact certified breakdown verified on our official packaging.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Packaging Back Cover Photo Display */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm bg-white rounded-3xl p-4 brand-shadow-lg border border-[#eee6d6]">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#faf7f0]">
                <Image
                  src="/images/snacks/back-100g.jpg"
                  alt="Nevora Certified Packaging Back with Nutrition and FSSAI"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-contain"
                />
              </div>
              <div className="p-4 text-center space-y-1">
                <span className="text-xs font-bold text-[#1b3823] flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#3f7e4d]" />
                  Official Packaging Back Label
                </span>
                <p className="text-[11px] text-[#627065]">
                  FSSAI Lic No. {BRAND_INFO.fssai} • Manufactured in Durg, Chhattisgarh
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Metric Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {nutritionMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className={`p-5 rounded-2xl border transition-all ${
                    metric.highlight
                      ? 'bg-[#1b3823] text-[#fdfbf7] border-[#1b3823] shadow-md'
                      : 'bg-white text-[#142a1a] border-[#eee6d6] brand-shadow'
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${
                        metric.highlight ? 'text-[#deb05a]' : 'text-[#627065]'
                      }`}
                    >
                      {metric.label}
                    </span>
                    <span
                      className={`text-xs font-medium ${
                        metric.highlight ? 'text-white/80' : 'text-[#627065]'
                      }`}
                    >
                      per 100g
                    </span>
                  </div>

                  <div className="mt-2 flex items-baseline gap-1.5">
                    <span className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight">
                      {metric.value}
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        metric.highlight ? 'text-[#deb05a]' : 'text-[#a77826]'
                      }`}
                    >
                      {metric.unit}
                    </span>
                  </div>

                  <p
                    className={`mt-2 text-xs leading-relaxed ${
                      metric.highlight ? 'text-white/80' : 'text-[#516154]'
                    }`}
                  >
                    {metric.desc}
                  </p>
                </div>
              ))}

              {/* FSSAI & Quality Badge Box */}
              <div className="p-5 rounded-2xl bg-[#f4ede1] border border-[#dfd4bf] flex flex-col justify-between">
                <div className="flex items-center gap-2 text-[#1b3823] font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#3f7e4d]" />
                  <span>Licensed & Certified</span>
                </div>
                <div className="my-2">
                  <div className="text-xl font-bold font-serif text-[#1b3823]">
                    fssai Certified
                  </div>
                  <div className="text-xs font-mono font-semibold text-[#627065] mt-0.5">
                    License: {BRAND_INFO.fssai}
                  </div>
                </div>
                <p className="text-[11px] text-[#516154]">
                  Rigorous microbiological and chemical purity testing standards.
                </p>
              </div>
            </div>

            {/* Inquire & Direct Wholesale Callout */}
            <div className="p-6 rounded-3xl bg-white border border-[#eee6d6] brand-shadow flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="font-serif font-bold text-base text-[#142a1a]">
                  Distributor, Retailer, or Bulk Inquiries?
                </h4>
                <p className="text-xs text-[#627065]">
                  Connect directly with the founding team at Srijan Agrotech.
                </p>
              </div>

              <a
                href={`${BRAND_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
                  'Hi Nevora team! I am interested in exploring distribution/bulk supply for your products.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#1b3823] hover:bg-[#254d2e] text-white text-xs font-bold transition-all flex items-center gap-2 flex-shrink-0 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
