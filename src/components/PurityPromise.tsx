'use client';

import { useState } from 'react';
import Image from 'next/image';
import { BRAND_INFO } from '@/data/products';
import {
  Check,
  X as CloseIcon,
  ShieldCheck,
  Play,
  Sparkles,
  Leaf,
  Flame,
  MessageCircle,
} from 'lucide-react';

/* =========================================================================
 * DATA
 * ========================================================================= */
const PILLARS = [
  {
    icon: '🌾',
    title: '100% Whole Ragi Superfood',
    description:
      'Finger millet (Ragi) packed with 3× more calcium than milk, natural iron, and complex carbs that keep you energised without blood-sugar spikes.',
  },
  {
    icon: '🚫',
    title: 'Zero Maida & Zero Palm Oil',
    description:
      'Clean-label snacking with zero refined wheat flour, zero hydrogenated palm oils, zero chemical stabilisers, and zero MSG.',
  },
  {
    icon: '❤️',
    title: 'Heart & Gut Friendly',
    description:
      'Packed with 8.5g prebiotic dietary fibre and 10.6g natural protein per 100g. Made exclusively with cold-pressed oils for clean digestion.',
  },
  {
    icon: '🌱',
    title: 'Planet & Farmer Positive',
    description:
      'Millets require 70% less water than rice or wheat. Every pack supports smallholder farmers across India.',
  },
];

interface MediaCard {
  id: string;
  type: 'video' | 'quote' | 'image' | 'stat';
  bgColor: string;
  textColor: string;
  content: {
    label?: string;
    headline: string;
    body?: string;
    stat?: { value: string; unit: string; caption: string };
    image?: string;
    cta?: { label: string; href: string };
  };
}

const MEDIA_CARDS: MediaCard[] = [
  {
    id: 'event',
    type: 'image',
    bgColor: 'bg-[#0E2118]',
    textColor: 'text-white',
    content: {
      label: 'Real Events. Real Crunch.',
      headline: 'We took our\nPeri Peri Ragi Chips\nto an event',
      image: '/images/snacks/chips-periperi.jpg',
    },
  },
  {
    id: 'brand',
    type: 'quote',
    bgColor: 'bg-[#FAF6EF]',
    textColor: 'text-[#0E2118]',
    content: {
      headline: 'Order now\ndirectly from us',
      body: 'Skip the middleman. Fresh from our kitchen to your door — via WhatsApp, faster than any quick-commerce app.',
      cta: { label: 'Order on WhatsApp', href: `${BRAND_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Hi Nevora! I would like to place an order for millet snacks and low-RPM spices.')}` },
    },
  },
  {
    id: 'product-crunch',
    type: 'image',
    bgColor: 'bg-amber-50',
    textColor: 'text-[#0E2118]',
    content: {
      label: 'Snackible Style Crunch',
      headline: '100% Ragi Millet. Zero Compromise.',
      image: '/images/snacks/chakli-classic.jpg',
    },
  },
  {
    id: 'stat-protein',
    type: 'stat',
    bgColor: 'bg-[#164A40]',
    textColor: 'text-white',
    content: {
      headline: 'Natural Protein',
      stat: {
        value: '10.6g',
        unit: 'per 100g',
        caption: 'vs. under 3g in regular packaged snacks.',
      },
    },
  },
  {
    id: 'spice',
    type: 'image',
    bgColor: 'bg-[#1B3823]',
    textColor: 'text-white',
    content: {
      label: 'Low RPM Stone Ground',
      headline: 'Spices that still smell like home.',
      image: '/images/masala/kutta-haldi.png',
    },
  },
  {
    id: 'stat-fibre',
    type: 'stat',
    bgColor: 'bg-amber-500',
    textColor: 'text-[#0E2118]',
    content: {
      headline: 'Dietary Fibre',
      stat: {
        value: '8.5g',
        unit: 'per 100g',
        caption: 'For clean gut health and sustained energy — no crash, no bloat.',
      },
    },
  },
  {
    id: 'video-story',
    type: 'video',
    bgColor: 'bg-[#0E2118]',
    textColor: 'text-white',
    content: {
      label: 'Brand Story',
      headline: 'Watch how Nevora snacks are handcrafted.',
      image: '/images/snacks/sticks-classic.jpg',
    },
  },
  {
    id: 'zero-palm',
    type: 'quote',
    bgColor: 'bg-emerald-900',
    textColor: 'text-white',
    content: {
      headline: '0% Palm Oil.\nAlways.',
      body: 'Every single Nevora product is cooked in 100% cold-pressed oils — never hydrogenated, never refined, never palm. A commitment, not a marketing claim.',
    },
  },
];

const COMPARISON_ROWS = [
  { criteria: 'Primary Grain Base', nevora: '100% Whole Finger Millet (Ragi)', standard: 'Refined Wheat Flour (Maida) & Starch' },
  { criteria: 'Cooking Oil Used', nevora: 'Cold-Pressed Oils (Zero Trans Fats)', standard: 'Cheap Hydrogenated Palm Oil' },
  { criteria: 'Dietary Fibre (per 100g)', nevora: '8.50 Grams (High Prebiotic Gut Health)', standard: 'Less than 1.5 Grams' },
  { criteria: 'Natural Protein (per 100g)', nevora: '10.61 Grams (Whole Ragi & Urad Lentils)', standard: 'Under 3 Grams' },
  { criteria: 'Spice Quality', nevora: 'Low RPM Cold-Ground Heritage Spices', standard: 'Artificial Tastemakers & Chemical Powders' },
  { criteria: 'Chemical Additives', nevora: 'Zero Preservatives, Zero Synthetic Colors', standard: 'TBHQ, Synthetic Colors, MSG (INS 621)' },
];

/* =========================================================================
 * COMPONENT
 * ========================================================================= */
export default function PurityPromise() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section id="purity" className="bg-[#FAF6EF]">
      {/* ================================================================== */}
      {/* PART 1 — EDITORIAL HEADER + 4 PILLARS (Cards unchanged, better type) */}
      {/* ================================================================== */}
      <div className="py-16 sm:py-24 border-b border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header — Image 1 style */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-widest border border-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>The Nevora Clean-Food Standard</span>
            </div>

            {/* Mixed-weight editorial heading matching reference image 1 */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#0E2118] leading-tight tracking-tight">
              Real Food with{' '}
              <span className="italic text-[#D97706] font-black">Nothing to Hide</span>
            </h2>

            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
              Most convenience snacks disguise palm oil and refined wheat flour under misleading{' '}
              <span className="text-[#D97706] font-semibold italic">healthy</span> labels. At Nevora,
              we <span className="underline underline-offset-2 font-semibold">list</span> every
              single ingredient on the front of our packaging.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-amber-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-2xl">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#0E2118] leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed mt-1.5">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-3xl shadow-xl border-2 border-amber-200/80 overflow-hidden">
            {/* Table Header Banner */}
            <div className="p-6 sm:p-8 bg-[#164A40] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-amber-400">
                  Nutritional Showdown
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold mt-1">
                  Nevora Millet Snacks vs Standard Junk Snacks
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/80 mt-1">
                  See the tangible difference in every bite when you choose clean whole-grain nutrition.
                </p>
              </div>
              <div className="bg-amber-400 text-black font-black text-xs px-4 py-2 rounded-full uppercase tracking-wider shadow-sm flex-shrink-0">
                100% Guilt-Free
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-amber-200/70 text-xs font-black text-[#4B5563] uppercase tracking-wider bg-[#FFFDF9]">
                    <th className="py-4 px-6">Criteria</th>
                    <th className="py-4 px-6 bg-emerald-50/70 text-[#164A40] font-black border-x border-emerald-100">
                      ✨ Nevora Millet Snacks
                    </th>
                    <th className="py-4 px-6 text-gray-400">Standard Packaged Snacks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-amber-100 text-sm text-[#0E2118]">
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.criteria}>
                      <td className="py-4 px-6 font-bold text-[#0E2118]">{row.criteria}</td>
                      <td className="py-4 px-6 bg-emerald-50/50 font-bold text-emerald-800 border-x border-emerald-100">
                        <span className="inline-flex items-center gap-2">
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          {row.nevora}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-[#6B7280]">
                        <span className="inline-flex items-center gap-2">
                          <CloseIcon className="w-4 h-4 text-red-500 flex-shrink-0" />
                          {row.standard}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================== */}
      {/* PART 2 — "THIS IS WHAT MU(N)CH BETTER LOOKS LIKE!" (Image 2 style) */}
      {/* ================================================================== */}
      <div className="py-16 sm:py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading — Exact Image 2 style: all-caps, letter-spaced, sans-serif */}
          <div className="text-center mb-10 sm:mb-14">
            <h2
              className="font-sans font-black text-[#0E2118] uppercase tracking-[0.08em] text-3xl sm:text-4xl lg:text-5xl leading-tight"
              style={{ letterSpacing: '0.06em' }}
            >
              THIS IS WHAT MU(N)CH BETTER LOOKS LIKE!
            </h2>
            {/* Hatched zigzag underline divider (matches Image 2) */}
            <span className="hatched-divider mt-3" style={{ width: '200px' }} />
          </div>

          {/* ============================================================ */}
          {/* Media Mosaic Grid                                             */}
          {/* Exactly 8 cards: mix of image, video, stat, quote            */}
          {/* Desktop: 4 col, Mobile: 2 col, each card same aspect ratio   */}
          {/* ============================================================ */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {MEDIA_CARDS.map((card) => (
              <div
                key={card.id}
                className={`relative rounded-2xl overflow-hidden ${card.bgColor} ${card.textColor} aspect-square flex flex-col justify-between p-4 sm:p-5 group cursor-pointer`}
                onClick={() => card.type === 'video' && setVideoModalOpen(true)}
              >
                {/* Background Image (for image/video cards) */}
                {card.content.image && (
                  <>
                    <Image
                      src={card.content.image}
                      alt={card.content.headline}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-108 opacity-70"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </>
                )}

                {/* Card Content */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  {/* Top Label */}
                  {card.content.label && (
                    <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full self-start border border-white/10">
                      {card.content.label}
                    </span>
                  )}

                  {/* Stat Cards */}
                  {card.type === 'stat' && card.content.stat && (
                    <div className="flex flex-col gap-1.5 justify-center h-full">
                      <Sparkles className={`w-5 h-5 mb-1 ${card.bgColor === 'bg-amber-500' ? 'text-[#0E2118]' : 'text-amber-300'}`} />
                      <div className={`font-black text-4xl sm:text-5xl leading-none ${card.bgColor === 'bg-amber-500' ? 'text-[#0E2118]' : 'text-[#FFDE00]'}`}>
                        {card.content.stat.value}
                      </div>
                      <div className={`text-xs font-black uppercase tracking-wider ${card.bgColor === 'bg-amber-500' ? 'text-[#0E2118]/70' : 'text-white/70'}`}>
                        {card.content.stat.unit}
                      </div>
                      <div className={`text-sm font-bold mt-1 ${card.bgColor === 'bg-amber-500' ? 'text-[#0E2118]' : 'text-white'}`}>
                        {card.content.headline}
                      </div>
                      <p className={`text-[11px] leading-relaxed mt-0.5 ${card.bgColor === 'bg-amber-500' ? 'text-[#0E2118]/70' : 'text-white/70'}`}>
                        {card.content.stat.caption}
                      </p>
                    </div>
                  )}

                  {/* Quote Cards */}
                  {card.type === 'quote' && (
                    <div className="flex flex-col gap-3 justify-center h-full">
                      {/* Brand script text for the brand card */}
                      <div className={`font-serif text-xl sm:text-2xl font-black leading-tight ${card.bgColor === 'bg-[#FAF6EF]' ? 'text-[#164A40]' : 'text-white'}`}>
                        {card.content.headline.split('\n').map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < card.content.headline.split('\n').length - 1 && <br />}
                          </span>
                        ))}
                      </div>
                      {card.content.body && (
                        <p className={`text-xs sm:text-sm leading-relaxed ${card.bgColor === 'bg-[#FAF6EF]' ? 'text-[#4B5563]' : 'text-white/80'}`}>
                          {card.content.body}
                        </p>
                      )}
                      {card.content.cta && (
                        <a
                          href={card.content.cta.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-md transition-colors self-start"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-white text-transparent" />
                          {card.content.cta.label}
                        </a>
                      )}
                    </div>
                  )}

                  {/* Video + Image cards: Bottom Text */}
                  {(card.type === 'image' || card.type === 'video') && (
                    <div className="mt-auto space-y-1.5">
                      {card.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                            <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-[#164A40] ml-1 text-[#164A40]" />
                          </div>
                        </div>
                      )}
                      <p className="font-serif font-black text-sm sm:text-base text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] whitespace-pre-line">
                        {card.content.headline}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <div className="mt-10 sm:mt-14 bg-[#0E2118] rounded-3xl p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-5 text-white">
            <div className="text-center sm:text-left space-y-1">
              <span className="text-xs font-black uppercase tracking-widest text-amber-400">
                Start Munching Better Today
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold">
                Snack without the guilt. Crunch without the compromise.
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/80 max-w-lg">
                Order any Nevora millet snack or low-RPM spice directly on WhatsApp. Free delivery across India on orders above ₹499.
              </p>
            </div>
            <a
              href={`${BRAND_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Hi Nevora! I would like to explore your full snack and spice range. Please share your menu!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-sm uppercase tracking-wider shadow-lg hover:-translate-y-0.5 transition-all flex-shrink-0"
            >
              <MessageCircle className="w-5 h-5 fill-white text-transparent" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* ================================================================== */}
      {/* VIDEO MODAL                                                         */}
      {/* ================================================================== */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-[#0E2118] rounded-3xl p-6 sm:p-8 border border-emerald-800 text-center text-white">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close video"
            >
              <CloseIcon className="w-5 h-5" />
            </button>

            <div className="py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto text-2xl">
                🎬
              </div>
              <h4 className="font-serif text-2xl font-bold">Nevora — Behind The Crunch</h4>
              <p className="text-sm text-emerald-100/70 max-w-md mx-auto">
                Video placeholder: embed your brand documentary, Instagram Reel, or YouTube link directly here once ready.
              </p>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="px-6 py-2.5 rounded-full bg-[#164a40] hover:bg-[#1d6055] text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


