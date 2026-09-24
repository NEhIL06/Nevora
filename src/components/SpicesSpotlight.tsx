'use client';

import Image from 'next/image';
import { PRODUCTS, BRAND_INFO, Product, getProductPricing } from '@/data/products';
import { Sparkles, Flame, CheckCircle, Shield, MessageCircle, Scale, ThermometerSnowflake, Zap } from 'lucide-react';

interface SpicesSpotlightProps {
  onSelectProduct?: (product: Product) => void;
}

export default function SpicesSpotlight({ onSelectProduct }: SpicesSpotlightProps) {
  const spices = PRODUCTS.filter((p) => p.category === 'spices');

  return (
    <section id="spices" className="py-20 sm:py-28 bg-[#0E2118] text-[#FAF6EF] relative overflow-hidden">
      {/* Warm ambient spice glow effects */}
      <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-black uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>Farm-To-Table Heritage Grinding</span>
          </div> */}

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            The Magic of <span className="text-[#F59E0B]">Low RPM Spices</span>
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/80 leading-relaxed font-normal">
            Did you know standard factory mills run at 3,000+ RPM? The extreme friction heat scorches the volatile botanical oils, robbing your spices of flavor. Nevora gently cold-pounds heritage spices at low revolutions to lock in pure aroma and medicinal potency.
          </p>
        </div>

        {/* Science Comparison Strip (Snackible Inspired Proof) */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-16">
          <div className="bg-red-950/40 rounded-2xl p-5 border border-red-800/40 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0 font-bold text-lg">
              <Zap className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-red-200">Ordinary High-Speed Grinding (3000+ RPM)</h4>
              <p className="text-xs text-red-200/70 mt-1 leading-relaxed">
                Excessive friction generates 80°C+ heat. Burns essential aromatic oils, fades natural color, and requires artificial coloring agents to look fresh.
              </p>
            </div>
          </div>

          <div className="bg-emerald-900/40 rounded-2xl p-5 border border-emerald-500/50 flex items-start gap-4 shadow-lg shadow-emerald-950/50">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/30 text-emerald-300 flex items-center justify-center flex-shrink-0 font-bold text-lg">
              <ThermometerSnowflake className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-emerald-200">Nevora Slow Cold-Pounding (Low RPM)</h4>
              <p className="text-xs text-emerald-200/80 mt-1 leading-relaxed">
                Gently cold-milled below 35°C. Preserves 100% of volatile curcumin, piperine, and aromatic pinene oils. You smell the farm difference the second you open the pouch!
              </p>
            </div>
          </div>
        </div> */}

        {/* 3 Spices Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {spices.map((spice) => {
            const pricing = getProductPricing(spice);
            const directMsg = encodeURIComponent(
              `Hi Nevora! I would like to order ${spice.name} (${spice.weight}) Low RPM Spice at ₹${pricing.price}. Please share availability and shipping details.`
            );

            return (
              <div
                key={spice.id}
                className="group relative bg-[#133022]/90 rounded-3xl border border-emerald-800/60 overflow-hidden flex flex-col justify-between hover:border-amber-400/80 transition-all duration-300 hover:-translate-y-1.5 shadow-2xl hover:shadow-amber-500/10"
              >
                {/* Image card */}
                <div className="relative aspect-[4/3] w-full bg-[#071410] p-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src={spice.image}
                    alt={spice.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute top-3 left-3 bg-[#C2410C] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md z-10">
                    {spice.badge}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur px-2.5 py-0.5 rounded-full text-xs font-bold text-amber-400 border border-white/10 flex items-center gap-1 z-10">
                    <Scale className="w-3 h-3" />
                    <span>{spice.weight}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-serif text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                        {spice.name}
                      </h3>
                      {spice.hindiName && (
                        <span className="font-serif text-lg text-amber-400 font-bold">
                          {spice.hindiName}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-amber-300 font-semibold tracking-wide uppercase">
                      {spice.subtitle}
                    </p>
                    <p className="text-xs text-emerald-100/75 leading-relaxed pt-1">
                      {spice.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2 border-t border-emerald-800/60">
                    <div className="flex flex-wrap gap-1.5">
                      {spice.highlights.map((hl) => (
                        <span
                          key={hl}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md bg-emerald-950/80 border border-emerald-700/50 text-emerald-200"
                        >
                          <CheckCircle className="w-3 h-3 text-amber-400" />
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & Order Action */}
                  <div className="pt-4 border-t border-emerald-800/60 flex items-center justify-between gap-3">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xl font-black text-white">
                          ₹{pricing.price}
                        </span>
                        <span className="text-xs text-gray-400 line-through">
                          ₹{pricing.originalPrice}
                        </span>
                      </div>
                      <span className="text-[10px] text-amber-400 font-bold">{pricing.discountText}</span>
                    </div>

                    <a
                      href={`${BRAND_INFO.whatsappBaseUrl}?text=${directMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs shadow-md transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-black" />
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
