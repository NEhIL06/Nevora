'use client';

import Image from 'next/image';
import { Product, BRAND_INFO, getProductPricing, getProductRating } from '@/data/products';
import { MessageCircle, Eye, Scale, Star, Sparkles, Check } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  const isSpice = product.category === 'spices';
  const pricing = getProductPricing(product);
  const ratingInfo = getProductRating(product);
  const [copied, setCopied] = useState(false);

  // Flavor-specific badge colors
  const getFlavorStyles = (flavor?: string) => {
    switch (flavor) {
      case 'tomato':
        return {
          bg: 'bg-red-50 text-red-700 border-red-200',
          emoji: '🍅',
        };
      case 'masala':
        return {
          bg: 'bg-amber-50 text-amber-900 border-amber-300',
          emoji: '🌿',
        };
      case 'periperi':
        return {
          bg: 'bg-orange-50 text-orange-800 border-orange-300',
          emoji: '🌶️',
        };
      case 'classic':
      default:
        return {
          bg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          emoji: '🧂',
        };
    }
  };

  const flavorStyle = getFlavorStyles(product.flavor);

  const directWhatsAppMsg = encodeURIComponent(
    `Hi Nevora! I would like to order ${product.name} (${product.weight}) at ₹${pricing.price}. Please share payment and shipping info!`
  );

  return (
    <div className="group relative flex flex-col bg-white rounded-3xl border border-amber-100 hover:border-amber-300 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Top Image Container */}
      <div
        onClick={() => onSelect(product)}
        className="relative aspect-[4/3] w-full bg-gradient-to-b from-[#FAF7F0] to-[#F5EFE3] overflow-hidden cursor-pointer flex items-center justify-center p-3"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-108"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Veg Dot Icon */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs p-1 rounded-md border border-emerald-300 shadow-xs z-10">
          <span className="w-3.5 h-3.5 rounded-xs border border-emerald-700 p-0.5 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span>
          </span>
        </div>

        {/* Top Left Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start z-10">
          {product.badge && (
            <span
              className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs ${
                isSpice
                  ? 'bg-amber-600 text-white'
                  : 'bg-[#C2410C] text-white'
              }`}
            >
              {product.badge}
            </span>
          )}
          {product.flavorName && (
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shadow-2xs ${flavorStyle.bg}`}
            >
              {flavorStyle.emoji} {product.flavorName}
            </span>
          )}
        </div>

        {/* Weight indicator */}
        <div className="absolute bottom-2.5 right-2.5 bg-white/95 backdrop-blur px-2.5 py-0.5 rounded-full text-[11px] font-bold text-[#0E2118] border border-amber-200/80 flex items-center gap-1 shadow-xs z-10">
          <Scale className="w-3 h-3 text-[#D97706]" />
          <span>{product.weight}</span>
        </div>

        {/* Hover Quick View overlay */}
        <div className="absolute inset-0 bg-[#0E2118]/25 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#0E2118] text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5 text-[#D97706]" />
            Quick Nutrition & Details
          </span>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          {/* Rating & Review row */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1">
              <div className="flex items-center text-amber-500">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              </div>
              <span className="font-extrabold text-[#0E2118]">{ratingInfo.rating}</span>
              <span className="text-[#9CA3AF]">({ratingInfo.count})</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
              {isSpice ? 'Low RPM Ground' : '0% Palm Oil'}
            </span>
          </div>

          {/* Product Name */}
          <div
            onClick={() => onSelect(product)}
            className="cursor-pointer group/title"
          >
            <h3 className="font-serif text-lg font-bold text-[#0E2118] group-hover/title:text-[#D97706] transition-colors line-clamp-1">
              {product.name}
            </h3>
            {product.hindiName ? (
              <p className="font-serif text-xs font-semibold text-[#D97706]">
                {product.hindiName} • {product.subtitle}
              </p>
            ) : (
              <p className="text-xs text-[#6B7280] line-clamp-1">
                {product.subtitle}
              </p>
            )}
          </div>

          {/* Key Bullet Tags */}
          <div className="flex flex-wrap gap-1 pt-1">
            {isSpice ? (
              <>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200">
                  🌿 100% Pure Rhizomes
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-red-50 text-red-900 border border-red-200">
                  ⚡ Aroma Locked
                </span>
              </>
            ) : (
              <>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-900 border border-emerald-200">
                  🌾 100% Ragi
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200">
                  🚫 Zero Maida
                </span>
              </>
            )}
          </div>
        </div>

        {/* Price & Action Row */}
        <div className="pt-2 border-t border-amber-100/80 space-y-2.5">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-black text-[#0E2118]">
                ₹{pricing.price}
              </span>
              <span className="text-xs font-semibold text-[#9CA3AF] line-through">
                ₹{pricing.originalPrice}
              </span>
            </div>
            <span className="text-[10px] font-black uppercase text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-full border border-emerald-200">
              {pricing.discountText}
            </span>
          </div>

          {/* Action Button: WhatsApp Order */}
          <a
            href={`${BRAND_INFO.whatsappBaseUrl}?text=${directWhatsAppMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-2xl bg-[#164A40] hover:bg-[#0E2118] text-white font-bold text-xs shadow-md hover:shadow-lg transition-all duration-200 group/btn"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400 group-hover/btn:scale-110 transition-transform" />
            <span>Order on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
