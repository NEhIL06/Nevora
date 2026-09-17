'use client';

import Image from 'next/image';
import { BRAND_INFO } from '@/data/products';
import { Sparkles, ShieldCheck, ArrowRight, MessageCircle, HeartPulse, Wheat } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-24 bg-gradient-to-b from-[#f8f4eb] via-[#fdfbf7] to-[#fdfbf7]">
      {/* Decorative background blur shapes */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#c9933b]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-[#254d2e]/5 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Story & Call to action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b3823]/10 border border-[#1b3823]/20 text-[#1b3823] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#a77826]" />
              <span>Pure • Authentic • Traditional</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#142a1a] tracking-tight leading-[1.15]">
              New Era of{' '}
              <span className="relative inline-block text-[#254d2e]">
                Everyday Food
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-[#c9933b]/60"
                  viewBox="0 0 260 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 9C60 3 190 3 257 9"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#3e4a40] max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Wholesome millet snacks crafted with <strong>zero maida</strong> and{' '}
              <strong>zero palm oil</strong>, complemented by heritage spices slow-ground at{' '}
              <strong>Low RPM</strong> to retain unadulterated farm freshness.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1b3823] hover:bg-[#254d2e] text-[#fdfbf7] font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <span>Explore All Products</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={`${BRAND_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
                  'Hello Nevora, I am interested in placing an order for your millet snacks and low RPM spices!'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#f4ede1] hover:bg-[#eee6d6] text-[#1b3823] font-semibold text-base border border-[#dfd4bf] transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Key Trust Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#eee6d6]">
              <div className="p-3 rounded-xl bg-white/70 border border-[#eee6d6] text-center sm:text-left">
                <div className="font-bold text-sm text-[#1b3823]">0% Maida</div>
                <div className="text-xs text-[#627065]">100% Ragi Millet</div>
              </div>
              <div className="p-3 rounded-xl bg-white/70 border border-[#eee6d6] text-center sm:text-left">
                <div className="font-bold text-sm text-[#1b3823]">0% Palm Oil</div>
                <div className="text-xs text-[#627065]">Cold Pressed Oils</div>
              </div>
              <div className="p-3 rounded-xl bg-white/70 border border-[#eee6d6] text-center sm:text-left">
                <div className="font-bold text-sm text-[#1b3823]">Low RPM</div>
                <div className="text-xs text-[#627065]">Aroma Locked Spices</div>
              </div>
              <div className="p-3 rounded-xl bg-white/70 border border-[#eee6d6] text-center sm:text-left">
                <div className="font-bold text-sm text-[#1b3823]">100% Pure</div>
                <div className="text-xs text-[#627065]">No Preservatives</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Spotlight Card: Signature Millet Snack */}
            <div className="bg-white rounded-3xl p-4 sm:p-5 brand-shadow border border-[#eee6d6] transition-all duration-300 hover:shadow-md">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#faf7f0]">
                <Image
                  src="/images/snacks/chakli-classic.jpg"
                  alt="Nevora Ragi Chakli"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
                <div className="absolute top-3 left-3 bg-[#1b3823] text-[#fdfbf7] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                  Signature Snack
                </div>
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur px-2.5 py-1 rounded-lg text-xs font-bold text-[#1b3823] border border-[#eee6d6] shadow-xs">
                  Net Wt: 130g
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif font-bold text-xl text-[#142a1a]">
                      Ragi Chakli Classic
                    </h3>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      Bestseller
                    </span>
                  </div>
                  <p className="text-xs text-[#627065] mt-0.5">
                    100% Finger Millet • High Dietary Fibre • Zero Palm Oil
                  </p>
                </div>
                <span className="w-4 h-4 rounded-xs border border-emerald-700 p-0.5 flex items-center justify-center flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-700"></span>
                </span>
              </div>
            </div>

            {/* Secondary Spotlight Card: Heritage Low RPM Spice Banner */}
            <div className="bg-gradient-to-r from-white via-white to-[#fff9f6] rounded-2xl p-3.5 sm:p-4 brand-shadow border border-[#eee6d6] hover:border-[#c9933b]/60 transition-all duration-300 hover:shadow-md flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden bg-[#fff5f5] border border-[#f0ded6] flex-shrink-0">
                  <Image
                    src="/images/masala/kutta-mirchi.png"
                    alt="Nevora Kutta Mirchi"
                    fill
                    sizes="72px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-[#c44f2c] uppercase tracking-wider">
                      Slow Grinded Spices
                    </span>
                    <span className="text-[10px] text-[#627065]">• 130g</span>
                  </div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#142a1a] truncate">
                    Kutta Mirchi (कुट्टा मिर्ची)
                  </h4>
                  <p className="text-[11px] text-[#627065] line-clamp-1">
                    Low RPM cold grinding locks natural heat & pungent aroma
                  </p>
                </div>
              </div>

              <a
                href="#spices"
                className="flex-shrink-0 px-3 py-2 rounded-xl bg-[#faf7f0] hover:bg-[#1b3823] text-[#1b3823] hover:text-white border border-[#eee6d6] text-xs font-semibold transition-all"
                title="View All Low RPM Spices"
              >
                View Spices →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
