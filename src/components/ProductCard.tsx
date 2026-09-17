'use client';

import Image from 'next/image';
import { Product, BRAND_INFO } from '@/data/products';
import { MessageCircle, Eye, Scale, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  const isSpice = product.category === 'spices';

  // Flavor color indicators
  const getFlavorBadge = (flavor?: string) => {
    switch (flavor) {
      case 'tomato':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'masala':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'periperi':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'classic':
      default:
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
    }
  };

  const directWhatsAppMsg = `Hi Nevora! I'd like to order ${product.name} (${product.weight}). Please share price and order info.`;

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-[#eee6d6] overflow-hidden brand-shadow hover:brand-shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Top Image Container */}
      <div
        onClick={() => onSelect(product)}
        className="relative aspect-[16/11] w-full bg-[#f8f4eb] overflow-hidden cursor-pointer flex items-center justify-center p-3"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Veg Dot Icon */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur p-1 rounded border border-[#eee6d6] shadow-xs">
          <span className="w-3.5 h-3.5 rounded-xs border border-emerald-700 p-0.5 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span>
          </span>
        </div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
          {product.badge && (
            <span
              className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs ${
                isSpice
                  ? 'bg-[#c44f2c] text-white'
                  : 'bg-[#1b3823] text-[#fdfbf7]'
              }`}
            >
              {product.badge}
            </span>
          )}
          {product.flavorName && (
            <span
              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${getFlavorBadge(
                product.flavor
              )}`}
            >
              {product.flavorName}
            </span>
          )}
        </div>

        {/* Weight indicator */}
        <div className="absolute bottom-2.5 right-2.5 bg-white/95 backdrop-blur px-2.5 py-1 rounded-md text-[11px] font-bold text-[#1b3823] border border-[#eee6d6] flex items-center gap-1 shadow-xs">
          <Scale className="w-3 h-3 text-[#c9933b]" />
          <span>{product.weight}</span>
        </div>

        {/* Hover Quick View overlay badge */}
        <div className="absolute inset-0 bg-[#1b3823]/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#1b3823] text-xs font-semibold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5" />
            Quick View & Nutrition
          </span>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Category Tag */}
          <div className="text-[10px] font-bold tracking-wider uppercase text-[#a77826]">
            {isSpice ? 'Low RPM Grinded Spices' : 'Wholesome Millet Snack'}
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onSelect(product)}
            className="font-serif text-lg font-bold text-[#142a1a] cursor-pointer hover:text-[#254d2e] transition-colors leading-snug pt-0.5"
          >
            {product.name}
          </h3>

          {/* Subtitle */}
          <p className="text-xs text-[#627065] line-clamp-1 mt-0.5">
            {product.subtitle}
          </p>

          {/* Quick Highlight Badges */}
          <div className="flex flex-wrap gap-1 mt-3">
            {product.highlights.slice(0, 3).map((h) => (
              <span
                key={h}
                className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#f4ede1] text-[#3e4a40]"
              >
                {h}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-3 border-t border-[#eee6d6] flex items-center gap-2">
          <button
            onClick={() => onSelect(product)}
            className="flex-1 py-2 px-3 rounded-xl border border-[#eee6d6] hover:border-[#1b3823] text-xs font-semibold text-[#1b3823] hover:bg-[#f8f4eb] transition-colors flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5 text-[#a77826]" />
            <span>Nutrition</span>
          </button>

          <a
            href={`${BRAND_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
              directWhatsAppMsg
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Order directly on WhatsApp"
            className="flex-1 py-2 px-3 rounded-xl bg-[#1b3823] hover:bg-[#254d2e] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Order</span>
          </a>
        </div>
      </div>
    </div>
  );
}
