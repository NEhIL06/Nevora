'use client';

import Image from 'next/image';
import { Product, BRAND_INFO, getProductPricing, getProductRating } from '@/data/products';
import { X, MessageCircle, Check, Sparkles, ShieldCheck, Scale, Star, Heart, Flame } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetailModal({
  product,
  onClose,
}: ProductDetailModalProps) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      setQuantity(1);
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const isSpice = product.category === 'spices';
  const pricing = getProductPricing(product);
  const ratingInfo = getProductRating(product);
  const totalPrice = pricing.price * quantity;

  const whatsappMessage = encodeURIComponent(
    `Hi Nevora team! I would like to order:
- Product: ${product.name} (${product.weight})
- Quantity: ${quantity} pack(s)
- Total Price: ₹${totalPrice}
Please share payment link and estimated delivery time.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#FFFDF9] rounded-3xl shadow-2xl border-2 border-amber-200/80 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white text-[#0E2118] border border-amber-200 shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image Area */}
          <div className="relative aspect-square md:aspect-auto md:h-full bg-gradient-to-b from-[#FAF7F0] to-[#F5EFE3] flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-amber-100">
            <div className="relative w-full h-full min-h-[280px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {product.badge && (
              <span className="absolute top-4 left-4 bg-[#C2410C] text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                {product.badge}
              </span>
            )}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#0E2118] border border-amber-200 flex items-center gap-1.5 shadow-sm">
              <Scale className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Net Weight: {product.weight}</span>
            </div>
          </div>

          {/* Product Info Area */}
          <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[80vh] overflow-y-auto space-y-5">
            <div className="space-y-4">
              {/* Category & Rating */}
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-black tracking-widest text-[#D97706]">
                  {isSpice ? 'Heritage Low RPM Spice' : `Millet Snack • ${product.flavorName || 'Specialty'}`}
                </span>
                <div className="flex items-center gap-1 text-xs">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-extrabold text-[#0E2118]">{ratingInfo.rating}</span>
                  <span className="text-[#9CA3AF]">({ratingInfo.count} reviews)</span>
                </div>
              </div>

              {/* Title & Price */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0E2118]">
                  {product.name}
                </h2>
                {product.hindiName && (
                  <p className="font-serif text-base text-[#D97706] font-semibold mt-0.5">
                    {product.hindiName} • {product.subtitle}
                  </p>
                )}

                {/* Price Display */}
                <div className="flex items-baseline gap-2 pt-2">
                  <span className="text-2xl font-black text-[#0E2118]">
                    ₹{pricing.price}
                  </span>
                  <span className="text-sm font-semibold text-[#9CA3AF] line-through">
                    ₹{pricing.originalPrice}
                  </span>
                  <span className="text-xs font-extrabold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200">
                    {pricing.discountText}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                {product.description}
              </p>

              {/* Nutrition Highlights Box (For Snacks) */}
              {product.nutrition && (
                <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-2">
                  <span className="text-[11px] font-black uppercase text-amber-900 tracking-wider flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-amber-600" />
                    Key Certified Macros (per 100g)
                  </span>
                  <div className="grid grid-cols-4 gap-2 text-center text-xs">
                    <div className="bg-white p-2 rounded-xl border border-amber-100">
                      <div className="font-black text-[#0E2118]">{product.nutrition.protein}</div>
                      <div className="text-[10px] text-[#6B7280]">Protein</div>
                    </div>
                    <div className="bg-white p-2 rounded-xl border border-amber-100">
                      <div className="font-black text-[#0E2118]">{product.nutrition.fibre}</div>
                      <div className="text-[10px] text-[#6B7280]">Fibre</div>
                    </div>
                    <div className="bg-white p-2 rounded-xl border border-amber-100">
                      <div className="font-black text-[#0E2118]">{product.nutrition.energy}</div>
                      <div className="text-[10px] text-[#6B7280]">Energy</div>
                    </div>
                    <div className="bg-white p-2 rounded-xl border border-amber-100">
                      <div className="font-black text-[#0E2118]">{product.nutrition.sugars}</div>
                      <div className="text-[10px] text-[#6B7280]">Sugars</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Ingredients & Highlights */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#0E2118] uppercase tracking-wide">
                  Purity Highlights:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {product.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200"
                    >
                      <Check className="w-3 h-3 text-emerald-600" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ingredients list */}
              <div className="text-xs text-[#6B7280]">
                <strong className="text-[#0E2118]">Ingredients: </strong>
                {product.ingredients.join(', ')}
              </div>
            </div>

            {/* Quantity Selector & Order CTA */}
            <div className="pt-4 border-t border-amber-100 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0E2118]">Select Quantity:</span>
                <div className="flex items-center border border-amber-200 rounded-full bg-white p-1">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm hover:bg-amber-100 text-[#0E2118]"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-[#0E2118]">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm hover:bg-amber-100 text-[#0E2118]"
                  >
                    +
                  </button>
                </div>
              </div>

              <a
                href={`${BRAND_INFO.whatsappBaseUrl}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#164A40] hover:bg-[#0E2118] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                <span>Order {quantity} Pack(s) on WhatsApp • ₹{totalPrice}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
