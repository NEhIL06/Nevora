'use client';

import { useState } from 'react';
import Image from 'next/image';
import { BRAND_INFO } from '@/data/products';
import {
  Star,
  Check,
  ShoppingBag,
  Sparkles,
  Leaf,
  ShieldCheck,
  Flame,
  Zap,
} from 'lucide-react';

export interface BenefitAnnotation {
  id: string;
  title: string;
  icon: 'fibre' | 'protein' | 'no-palm' | 'cold-ground' | 'no-maida' | 'calcium';
  position: 'top-left' | 'top-right' | 'bottom-right' | 'center-left';
}

export interface EcommerceProduct {
  id: string;
  name: string;
  subtitle: string;
  tagline?: string;
  badge?: 'BESTSELLER' | 'NEW' | '16% OFF' | '20% OFF';
  image: string;
  rating: number;
  reviewsCount: number;
  weights: Array<{
    label: string;
    price: number;
    originalPrice: number;
  }>;
  benefits: BenefitAnnotation[];
  category?: string;
}

interface ProductCardEcommerceProps {
  product: EcommerceProduct;
}

export default function ProductCardEcommerce({ product }: ProductCardEcommerceProps) {
  const [selectedWeightIdx, setSelectedWeightIdx] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const currentPricing = product.weights[selectedWeightIdx] || product.weights[0];

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const directWhatsAppOrder = `${BRAND_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    `Hi Nevora! I would like to order ${product.name} (${currentPricing.label}) at ₹${currentPricing.price}. Please share payment details!`
  )}`;

  // Helper to render icon for benefit
  const renderBenefitIcon = (iconType: BenefitAnnotation['icon']) => {
    switch (iconType) {
      case 'fibre':
        return <Leaf className="w-4 h-4 text-emerald-600" />;
      case 'protein':
        return <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />;
      case 'no-palm':
        return <ShieldCheck className="w-4 h-4 text-red-500" />;
      case 'cold-ground':
        return <Sparkles className="w-4 h-4 text-amber-600" />;
      case 'no-maida':
      case 'calcium':
      default:
        return <Flame className="w-4 h-4 text-orange-500" />;
    }
  };

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-neutral-200/90 hover:border-emerald-600/40 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* ===================================================================== */}
      {/* 1. PRODUCT IMAGE CONTAINER WITH BENEFIT REVEAL ANIMATION (IMAGE 4)   */}
      {/* ===================================================================== */}
      <div
        className="relative aspect-square w-full bg-[#FAF8F5] overflow-hidden cursor-pointer select-none"
        onClick={() => setIsRevealed(!isRevealed)}
        title="Tap or hover to inspect product benefits"
      >
        {/* Main Product Image */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1 pointer-events-none">
          {product.badge && (
            <span
              className={`text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md shadow-xs ${
                product.badge === 'BESTSELLER'
                  ? 'bg-[#c97a10] text-white'
                  : product.badge === 'NEW'
                  ? 'bg-[#ea580c] text-white'
                  : 'bg-amber-400 text-neutral-900 font-extrabold'
              }`}
            >
              {product.badge}
            </span>
          )}
        </div>

        {/* 100% Veg Mark (Top Right) */}
        <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-xs p-1 rounded-md border border-neutral-200/80 shadow-2xs z-10 pointer-events-none">
          <span className="w-3.5 h-3.5 rounded-xs border border-emerald-700 p-0.5 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
          </span>
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* BENEFIT REVEAL OVERLAY (IMAGE 4 STYLE)                            */}
        {/* Fades in smoothly on Desktop Hover & Mobile Tap                   */}
        {/* ----------------------------------------------------------------- */}
        <div
          className={`absolute inset-0 bg-black/45 backdrop-blur-[2px] transition-all duration-500 ease-out flex flex-col justify-between p-3 z-20 ${
            isRevealed ? 'opacity-100 scale-100' : 'opacity-0 scale-98 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto'
          }`}
        >
          {/* Subtle top indicator */}
          <div className="flex items-center justify-between text-white/90">
            <span className="text-[9px] font-extrabold uppercase tracking-widest bg-emerald-900/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-emerald-400/40 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-300" />
              Nevora Purity
            </span>
            <span className="text-[8px] text-white/70 font-semibold bg-black/40 px-1.5 py-0.5 rounded-sm">
              Tap to close
            </span>
          </div>

          {/* Annotated Circular Benefit Badges with Swirly Pointers */}
          <div className="relative w-full h-full flex flex-col justify-around py-1">
            {product.benefits.map((b) => (
              <div
                key={b.id}
                className="flex items-center gap-2 annotation-float"
              >
                {/* Circular Badge */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-lg border-2 border-white flex items-center justify-center flex-shrink-0">
                  {renderBenefitIcon(b.icon)}
                </div>

                {/* Annotation Text & Pointer */}
                <div className="flex items-center">
                  {/* Curved/Swirly Arrow SVG pointing into the center */}
                  <svg
                    className="w-4 h-4 text-white/90 -rotate-12 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 12h12M12 6l6 6-6 6" />
                  </svg>
                  <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight pl-1">
                    {b.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom quick reassurance */}
          <div className="text-[9px] text-center text-amber-200 font-bold bg-black/60 py-1 px-2 rounded-md">
            🌾 Traditional Ingredients • Modern Goodness
          </div>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* 2. CARD CONTENT: TITLE, WEIGHTS, RATINGS & PRICING                   */}
      {/* ===================================================================== */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between space-y-2.5">
        <div className="space-y-1.5">
          {/* Product Title in Uppercase */}
          <h3 className="font-bold text-xs sm:text-[13px] tracking-tight text-neutral-900 leading-snug line-clamp-2 uppercase min-h-[34px]">
            {product.name}
            {product.tagline && (
              <span className="block font-medium text-neutral-500 text-[11px] normal-case truncate mt-0.5">
                {product.tagline}
              </span>
            )}
          </h3>

          {/* Weight Selectors (Pill buttons: e.g. 50g | 150g) */}
          <div className="flex items-center gap-1.5 pt-0.5">
            {product.weights.map((w, idx) => (
              <button
                key={w.label}
                onClick={() => setSelectedWeightIdx(idx)}
                className={`px-2 py-0.5 rounded text-[10px] font-bold border transition-colors ${
                  selectedWeightIdx === idx
                    ? 'border-[#164a40] bg-[#164a40] text-white shadow-2xs'
                    : 'border-neutral-200 bg-neutral-50 text-neutral-600 hover:border-neutral-300'
                }`}
              >
                {w.label}
              </button>
            ))}
          </div>

          {/* Star Rating with Reviews Count */}
          <div className="flex items-center gap-1 text-[11px] text-neutral-500 pt-0.5">
            <div className="flex text-amber-400 text-xs">★★★★★</div>
            <span className="font-semibold text-neutral-700">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Pricing & Add to Cart Button */}
        <div className="space-y-2 pt-1 border-t border-neutral-100">
          {/* Price display */}
          <div className="flex items-baseline gap-1.5">
            <span className="text-base sm:text-lg font-black text-neutral-900">
              ₹{currentPricing.price}
            </span>
            {currentPricing.originalPrice > currentPricing.price && (
              <span className="text-xs text-neutral-400 line-through font-medium">
                ₹{currentPricing.originalPrice}
              </span>
            )}
          </div>

          {/* Action Buttons: Add to Cart & WhatsApp */}
          <div className="grid grid-cols-1 gap-1.5">
            <button
              onClick={handleAddToCart}
              className={`w-full py-2 sm:py-2.5 px-3 rounded-lg text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                addedToCart
                  ? 'bg-emerald-700 text-white'
                  : 'bg-[#164a40] hover:bg-[#0e2118] text-white active:scale-98 shadow-xs'
              }`}
            >
              {addedToCart ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>ADDED TO BAG!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
                  <span>ADD TO CART</span>
                </>
              )}
            </button>

            {/* Micro WhatsApp link */}
            <a
              href={directWhatsAppOrder}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold text-center text-emerald-800 hover:text-emerald-950 py-0.5 transition-colors"
            >
              Order on WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
