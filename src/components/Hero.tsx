'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { BRAND_INFO } from '@/data/products';
import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Flame,
  Sparkles,
  Check,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Leaf,
} from 'lucide-react';

interface SlideData {
  id: string;
  badge: string;
  headline3D: string;
  headlineSubtitle: string;
  headlineHighlight: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  placeholderLabel: string;
  placeholderDetail: string;
  accentPill: string;
  offers: Array<{ freeCount: string; threshold: string; code: string }>;
  primaryCtaText: string;
  primaryCtaHref: string;
  bgGradient: string;
}

const SLIDES: SlideData[] = [
  {
    id: 'snack-overdose',
    badge: 'SNACK OVERDOSE',
    headline3D: 'SALE!',
    headlineSubtitle: 'Get Upto',
    headlineHighlight: '40% OFF',
    description:
      'Say goodbye to junk food guilt! Nevora brings you irresistible, ultra-crunchy snacks made from 100% Finger Millet (Ragi), pure cold-pressed oils, and heritage spices cold-ground at Low RPM for unmatched aroma.',
    imageSrc: '/images/snacks/chakli-classic.jpg',
    imageAlt: 'Nevora Wholesome Ragi Millet Snacks',
    placeholderLabel: 'Hero Banner Image Placeholder',
    placeholderDetail: 'Finger Millet Chakli Bowl • Low RPM Red Chili • Fresh Lemon Zest',
    accentPill: '🔥 100% Finger Millet',
    offers: [
      { freeCount: '2 FREE', threshold: '₹599', code: '2FREE' },
      { freeCount: '3 FREE', threshold: '₹799', code: '3FREE' },
      { freeCount: '5 FREE', threshold: '₹999', code: '5FREE' },
    ],
    primaryCtaText: 'Explore Snacks & Spices',
    primaryCtaHref: '#products',
    bgGradient: 'from-[#19433B] via-[#143B33] to-[#0E2823]',
  },
  {
    id: 'heritage-spices',
    badge: 'AROMA LOCKED',
    headline3D: 'SPICES!',
    headlineSubtitle: 'Stone Ground',
    headlineHighlight: 'PURE & FRESH',
    description:
      'Traditional heritage spices slowly cold-ground on stone mills at ultra-low RPM. Preserves 100% volatile natural essential oils, vibrant natural color, and medicinal aroma without heat degradation.',
    imageSrc: '/images/masala/kutta-haldi.png',
    imageAlt: 'Nevora Low RPM Cold Ground Spices',
    placeholderLabel: 'Hero Spices Visual Placeholder',
    placeholderDetail: 'Pure Haldi, Mirchi & Dhaniya • Low RPM Cold Processed',
    accentPill: '⚙️ Low RPM Stone Ground',
    offers: [
      { freeCount: '1 FREE', threshold: '₹499', code: 'SPICE1' },
      { freeCount: '20% OFF', threshold: 'COMBOS', code: 'SPICE20' },
      { freeCount: 'FLAT ₹150', threshold: 'OVER ₹899', code: 'AROMA150' },
    ],
    primaryCtaText: 'Explore Pure Spices',
    primaryCtaHref: '#spices',
    bgGradient: 'from-[#1B3F36] via-[#173830] to-[#0D241F]',
  },
  {
    id: 'super-combos',
    badge: 'ZERO PALM OIL',
    headline3D: 'CRUNCH!',
    headlineSubtitle: 'Save Flat',
    headlineHighlight: '25% OFF',
    description:
      'Pantry-friendly super combos! Crunchy Millet Sticks, Crispy Chips, Desi Mixture & Fine Bhujiya crafted with heart-healthy cold-pressed oils. 10.6g natural protein and zero maida in every bite.',
    imageSrc: '/images/snacks/sticks-classic.jpg',
    imageAlt: 'Nevora Healthy Millet Super Combos',
    placeholderLabel: 'Hero Combo Visual Placeholder',
    placeholderDetail: 'Millet Sticks & Crispy Chips Assortment • Zero Maida Munch',
    accentPill: '🌿 0% Maida • 0% Palm Oil',
    offers: [
      { freeCount: '2 FREE', threshold: '₹599', code: '2FREE' },
      { freeCount: 'BUY 3 GET 1', threshold: 'FREE PACK', code: 'B3G1' },
      { freeCount: 'FLAT ₹200', threshold: 'OVER ₹1199', code: 'COMBOMAX' },
    ],
    primaryCtaText: 'Explore Value Combos',
    primaryCtaHref: '#combos',
    bgGradient: 'from-[#16443C] via-[#133C34] to-[#0C2923]',
  },
];

const QUICK_CATEGORIES = [
  { id: 'chakli', name: 'Millet Chakli', emoji: '🥨', tag: 'Bestseller', href: '#products' },
  { id: 'chips', name: 'Crunchy Chips', emoji: '🍟', tag: 'Light & Crisp', href: '#products' },
  { id: 'sticks', name: 'Millet Sticks', emoji: '🥢', tag: 'High Fibre', href: '#products' },
  { id: 'mixture', name: 'Desi Mixture', emoji: '🥣', tag: 'Tea-Time Pick', href: '#products' },
  { id: 'bhujiya', name: 'Fine Bhujiya', emoji: '🍜', tag: 'Hot Favorite', href: '#products' },
  { id: 'spices', name: 'Low RPM Spices', emoji: '🌶️', tag: 'Aroma Locked', href: '#spices' },
  { id: 'combos', name: 'Value Combos', emoji: '🎁', tag: 'Save 20%', href: '#combos' },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Auto-slide every 3 seconds (slides from right to left)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  // Touch swipe handling for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diffX = touchStartX.current - touchEndX.current;
    if (diffX > 45) {
      // Swiped Left -> Next Slide
      handleNext();
    } else if (diffX < -45) {
      // Swiped Right -> Prev Slide
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const directWhatsAppMsg = encodeURIComponent(
    'Hi Nevora! I am craving healthy snacks. Please share your current menu, combos, and offers!'
  );

  return (
    <section className="relative overflow-hidden bg-[#FDFBF7]">
      {/* ========================================================================= */}
      {/* FULL-WIDTH AUTO-SLIDING CAROUSEL (3 SEC INTERVAL, RIGHT TO LEFT)         */}
      {/* ========================================================================= */}
      <div
        className="w-full relative overflow-hidden bg-[#183F37] select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Subtle Textured Background Pattern across entire width */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay z-0"
          style={{
            backgroundImage:
              'radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ffffff 1px, #183F37 1px)',
            backgroundSize: '28px 28px',
            backgroundPosition: '0 0, 14px 14px',
          }}
        />

        {/* Ambient atmospheric lighting */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-3xl pointer-events-none z-0" />

        {/* 3-Second Active Slide Progress Bar (at top of banner) */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-black/20 z-30">
          <div
            key={currentSlide}
            className={`h-full bg-[#FFDE00] transition-all ${
              isPaused ? 'opacity-80' : 'carousel-progress-bar'
            }`}
            style={{
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
          />
        </div>

        {/* Slides Track: Slides horizontally from right to left */}
        <div
          className="flex transition-transform duration-700 ease-in-out w-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {SLIDES.map((slide, sIdx) => (
            <div
              key={slide.id}
              className={`w-full flex-shrink-0 min-w-full bg-gradient-to-b ${slide.bgGradient} relative text-white`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
                  {/* ------------------------------------------------------------- */}
                  {/* LEFT COLUMN: Retail Ticket, 3D Headline, Badges & Coupons      */}
                  {/* ------------------------------------------------------------- */}
                  <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-5">
                    {/* Orange Ticket with Notches and 3 Sunburst Rays */}
                    <div className="relative inline-block mt-1">
                      {/* Sunburst Rays */}
                      <div className="absolute -top-3.5 -left-3.5 flex items-center justify-center pointer-events-none">
                        <svg
                          className="w-7 h-7 text-[#FFD200] animate-pulse"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        >
                          <line x1="12" y1="2" x2="12" y2="7" />
                          <line x1="4.93" y1="4.93" x2="8.46" y2="8.46" />
                          <line x1="2" y1="12" x2="7" y2="12" />
                        </svg>
                      </div>

                      {/* Notched Ticket Badge */}
                      <div className="relative bg-[#FF5A00] text-white px-7 sm:px-9 py-2 sm:py-2.5 rounded-2xl shadow-xl border border-orange-400/40">
                        {/* Left & Right Notches */}
                        <span className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#183F37] border-r border-orange-600/50 shadow-inner" />
                        <span className="absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#183F37] border-l border-orange-600/50 shadow-inner" />

                        <span className="font-sans font-black text-xl sm:text-2xl md:text-3xl tracking-wider uppercase text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                          {slide.badge}
                        </span>
                      </div>
                    </div>

                    {/* Giant 3D Text Flanked by Yellow Lightning Bolts */}
                    <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4 my-0.5">
                      {/* Left Lightning Bolt */}
                      <div className="text-[#FFDE00] drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] transform -rotate-12">
                        <svg className="w-9 h-12 sm:w-13 sm:h-18 fill-[#FFDE00]" viewBox="0 0 24 24">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                      </div>

                      {/* 3D Typography */}
                      <h1
                        className="font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#FFDE00] select-none leading-none"
                        style={{
                          textShadow:
                            '3px 3px 0 #E65100, 6px 6px 0 #C2410C, 9px 9px 0 #9A3412, 12px 12px 18px rgba(0, 0, 0, 0.65)',
                        }}
                      >
                        {slide.headline3D}
                      </h1>

                      {/* Right Lightning Bolt */}
                      <div className="text-[#FFDE00] drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] transform rotate-12">
                        <svg className="w-9 h-12 sm:w-13 sm:h-18 fill-[#FFDE00]" viewBox="0 0 24 24">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                      </div>
                    </div>

                    {/* Subtitle / Discount Highlight */}
                    <div className="space-y-1.5">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight drop-shadow-sm">
                        {slide.headlineSubtitle}{' '}
                        <span className="text-[#FFDE00]">{slide.headlineHighlight}</span>
                      </div>

                      {/* Preserved Current Content: Nevora Brand Copy */}
                      <p className="text-xs sm:text-sm md:text-base text-emerald-100/90 max-w-xl leading-relaxed font-medium">
                        {slide.description}
                      </p>
                    </div>

                    {/* Trust Badges Bar */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 pt-1 text-[11px] sm:text-xs font-bold text-white">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-400/30 backdrop-blur-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        0% Maida
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-400/30 backdrop-blur-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        0% Palm Oil
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-900/60 border border-amber-400/40 text-amber-200 backdrop-blur-xs">
                        <Flame className="w-3.5 h-3.5 text-amber-400" />
                        10.6g Natural Protein
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-400/30 backdrop-blur-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        Low RPM Cold Ground
                      </span>
                    </div>

                    {/* Three Promo / Coupon Cards */}
                    <div className="w-full pt-1">
                      <div className="grid grid-cols-3 gap-2 sm:gap-3.5 max-w-lg mx-auto lg:mx-0">
                        {slide.offers.map((promo) => {
                          const isCopied = copiedCode === promo.code;
                          return (
                            <div
                              key={promo.code}
                              className="flex flex-col items-center justify-between p-2 sm:p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-amber-400/60 transition-all text-center group"
                            >
                              <div className="text-[10px] sm:text-xs font-black uppercase text-white leading-tight mb-2">
                                GET <span className="text-[#FFDE00] font-extrabold">{promo.freeCount}</span>
                                <span className="block text-[9px] sm:text-[11px] font-bold text-emerald-100">
                                  OVER {promo.threshold}
                                </span>
                              </div>

                              <button
                                onClick={() => handleCopyCode(promo.code)}
                                className={`w-full py-1.5 px-1.5 sm:px-2 rounded-lg text-[10px] sm:text-xs font-black tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-1 ${
                                  isCopied
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-[#FF5A00] hover:bg-[#ff6c1a] text-white border border-dashed border-white/70 active:scale-95'
                                }`}
                                title="Click to copy promo code"
                              >
                                {isCopied ? (
                                  <>
                                    <Check className="w-3 h-3 text-white" />
                                    <span>COPIED!</span>
                                  </>
                                ) : (
                                  <>
                                    <span className="hidden sm:inline">USE:</span>
                                    <span className="font-extrabold text-amber-200">{promo.code}</span>
                                  </>
                                )}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                      <p className="text-[10px] text-emerald-200/70 mt-1.5 text-center lg:text-left">
                        *Codes auto apply at checkout. Free shipping across India.
                      </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2 w-full sm:w-auto">
                      <a
                        href={slide.primaryCtaHref}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#FFDE00] hover:bg-[#ffea4d] text-[#183F37] font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-black/20 hover:-translate-y-0.5 transition-all"
                      >
                        <span>{slide.primaryCtaText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>

                      <a
                        href={`${BRAND_INFO.whatsappBaseUrl}?text=${directWhatsAppMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-md hover:-translate-y-0.5 transition-all"
                      >
                        <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                        <span>Instant WhatsApp Order</span>
                      </a>
                    </div>

                    {/* Social Proof */}
                    <div className="flex items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs text-emerald-200">
                      <div className="flex text-amber-400 text-sm">★★★★★</div>
                      <span className="font-bold text-white">4.9 / 5</span>
                      <span className="text-emerald-300/80">• Loved by 15,000+ happy munchers across India</span>
                    </div>
                  </div>

                  {/* ------------------------------------------------------------- */}
                  {/* RIGHT COLUMN: Food Photography Area with Placeholder           */}
                  {/* ------------------------------------------------------------- */}
                  <div className="lg:col-span-5 relative flex items-center justify-center py-2 lg:py-0">
                    <div className="relative w-full aspect-square max-w-[440px] lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-700/50 bg-gradient-to-b from-[#1C4B41] to-[#12332C] p-3 sm:p-4 flex flex-col items-center justify-center group">
                      {/* Product Visual Container */}
                      <div className="relative w-full h-full rounded-2xl overflow-hidden flex items-center justify-center bg-[#153a33]">
                        <Image
                          src={slide.imageSrc}
                          alt={slide.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 550px"
                          priority={sIdx === 0}
                          className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
                        />

                        {/* Soft Vignette Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#183F37] via-transparent to-transparent opacity-80" />

                        {/* Decorative Tag */}
                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-amber-400/40 text-amber-300 px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md">
                          <span>🍋 Fresh Spices & Lemon Crunch</span>
                        </div>

                        {/* Placeholder Badge Indicator (as requested by user) */}
                        <div className="absolute bottom-4 inset-x-4 bg-[#183F37]/90 backdrop-blur-md border border-emerald-400/40 rounded-xl p-3 text-center shadow-lg">
                          <div className="flex items-center justify-center gap-1.5 text-[#FFDE00] text-[11px] font-black uppercase tracking-wider mb-0.5">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>{slide.placeholderLabel}</span>
                          </div>
                          <p className="text-[11px] text-emerald-100">
                            {slide.placeholderDetail}
                          </p>
                        </div>
                      </div>

                      {/* Floating Accent Stamp */}
                      <div className="absolute -top-2.5 -right-2 bg-[#FF5A00] text-white font-black text-xs px-3.5 py-1.5 rounded-full shadow-lg border-2 border-white uppercase tracking-wider transform rotate-3">
                        {slide.accentPill}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation: Left & Right Chevrons (Desktop Hover) */}
        <button
          onClick={handlePrev}
          className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white items-center justify-center transition-all z-20 hover:scale-105 shadow-lg"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="hidden md:flex absolute right-12 lg:right-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white items-center justify-center transition-all z-20 hover:scale-105 shadow-lg"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Vertical Pagination Dots on Far-Right (Exact Snackible Style) */}
        <div className="hidden lg:flex flex-col items-center gap-3 absolute right-5 top-1/2 -translate-y-1/2 z-20">
          {SLIDES.map((slide, idx) => {
            const isActive = currentSlide === idx;
            return (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                className={`relative flex items-center justify-center transition-all ${
                  isActive ? 'w-6 h-6 rounded-full border-2 border-[#FFDE00]' : 'w-3 h-3'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              >
                <span
                  className={`rounded-full transition-all ${
                    isActive ? 'w-2.5 h-2.5 bg-[#FFDE00]' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/80'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Mobile Horizontal Pagination Dots (at bottom center of banner) */}
        <div className="lg:hidden flex items-center justify-center gap-2 pb-4 pt-1 z-20 relative">
          {SLIDES.map((slide, idx) => {
            const isActive = currentSlide === idx;
            return (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all rounded-full ${
                  isActive ? 'w-6 h-2 bg-[#FFDE00]' : 'w-2 h-2 bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* QUICK CATEGORY ICONS STRIP ("Shop By Craving / Mood")                     */}
      {/* ========================================================================= */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-5">
          <span className="text-xs font-black uppercase tracking-widest text-[#D97706]">
            Explore What You Crave Today
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {QUICK_CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={cat.href}
              className="group flex flex-col items-center p-3 rounded-2xl bg-white hover:bg-amber-50/70 border border-amber-200/60 hover:border-amber-300 shadow-xs hover:shadow-md transition-all duration-200 text-center"
            >
              <div className="text-3xl mb-1.5 group-hover:scale-110 transition-transform">
                {cat.emoji}
              </div>
              <span className="text-xs font-bold text-[#0E2118] group-hover:text-[#D97706] transition-colors leading-tight">
                {cat.name}
              </span>
              <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full mt-1">
                {cat.tag}
              </span>
            </a>
          ))}
        </div>
      </div> */}
    </section>
  );
}
