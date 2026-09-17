'use client';

import Image from 'next/image';
import { Product, BRAND_INFO } from '@/data/products';
import { X, MessageCircle, Check, Sparkles, ShieldCheck, Scale } from 'lucide-react';
import { useEffect } from 'react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetailModal({
  product,
  onClose,
}: ProductDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const whatsappMessage = `Hi Nevora team! I am interested in ordering:
Product: ${product.name} (${product.weight})
Category: ${product.category === 'snacks' ? 'Millet Snack' : 'Traditional Spice'}
Could you please share pricing and delivery details?`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#fdfbf7] rounded-3xl shadow-2xl border border-[#eee6d6] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-[#1b3823] shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image Area */}
          <div className="relative aspect-square md:aspect-auto md:h-full bg-[#f6f2ea] flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-[#eee6d6]">
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
              <span className="absolute top-4 left-4 bg-[#1b3823] text-[#fdfbf7] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                {product.badge}
              </span>
            )}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#1b3823] border border-[#eee6d6] flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-[#c9933b]" />
              <span>Net Weight: {product.weight}</span>
            </div>
          </div>

          {/* Product Info Area */}
          <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[80vh] overflow-y-auto">
            <div className="space-y-4">
              {/* Category & Veg indicator */}
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-widest text-[#a77826]">
                  {product.category === 'snacks'
                    ? `Millet Snack • ${product.flavorName || 'Specialty'}`
                    : 'Authentic Slow-Ground Spice'}
                </span>
                <span className="w-4 h-4 rounded-sm border border-emerald-700 p-0.5 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-700"></span>
                </span>
              </div>

              {/* Title */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#142a1a]">
                  {product.name}
                </h2>
                {product.hindiName && (
                  <p className="font-serif text-lg text-[#c44f2c] font-medium">
                    {product.hindiName}
                  </p>
                )}
                <p className="text-sm font-medium text-[#627065]">{product.subtitle}</p>
              </div>

              {/* Description */}
              <p className="text-sm text-[#3e4a40] leading-relaxed">
                {product.description}
              </p>

              {/* Key Highlights */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b3823]">
                  Highlights
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {product.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-[#e5efe7] text-[#1b3823]"
                    >
                      <Check className="w-3 h-3 text-[#3f7e4d]" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ingredients */}
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b3823]">
                  Ingredients
                </h4>
                <p className="text-xs text-[#516154] leading-relaxed bg-[#faf7f0] p-2.5 rounded-lg border border-[#eee6d6]">
                  {product.ingredients.join(', ')}
                </p>
              </div>

              {/* Nutrition Facts Table (if available) */}
              {product.nutrition && (
                <div className="space-y-1.5 pt-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b3823]">
                    Nutritional Value (per 100g)
                  </h4>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 text-center bg-[#f4ede1]/50 p-2.5 rounded-lg border border-[#eee6d6]">
                    <div>
                      <div className="text-[10px] text-[#627065]">Energy</div>
                      <div className="text-xs font-bold text-[#142a1a]">
                        {product.nutrition.energy}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#627065]">Protein</div>
                      <div className="text-xs font-bold text-[#142a1a]">
                        {product.nutrition.protein}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#627065]">Dietary Fibre</div>
                      <div className="text-xs font-bold text-[#254d2e]">
                        {product.nutrition.fibre}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#627065]">Carbs</div>
                      <div className="text-xs font-bold text-[#142a1a]">
                        {product.nutrition.carbs}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#627065]">Sugars</div>
                      <div className="text-xs font-bold text-[#142a1a]">
                        {product.nutrition.sugars}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Bottom WhatsApp CTA */}
            <div className="pt-6 mt-4 border-t border-[#eee6d6]">
              <a
                href={`${BRAND_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1b3823] hover:bg-[#254d2e] text-[#fdfbf7] font-semibold text-sm shadow-md transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Inquire / Order on WhatsApp</span>
              </a>
              <div className="flex items-center justify-center gap-3 text-[11px] text-[#627065] mt-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#3f7e4d]" />
                  FSSAI Certified: {BRAND_INFO.fssai}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
