'use client';

import Image from 'next/image';
import { PRODUCTS, BRAND_INFO, Product } from '@/data/products';
import { Sparkles, Flame, CheckCircle, Shield, MessageCircle, Scale } from 'lucide-react';

interface SpicesSpotlightProps {
  onSelectProduct?: (product: Product) => void;
}

export default function SpicesSpotlight({ onSelectProduct }: SpicesSpotlightProps) {
  const spices = PRODUCTS.filter((p) => p.category === 'spices');

  return (
    <section id="spices" className="py-20 sm:py-28 bg-[#142a1a] text-[#fdfbf7] relative overflow-hidden">
      {/* Warm ambient spice glow effects */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#c44f2c]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-[#c9933b]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#deb05a] text-xs font-semibold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 text-[#deb05a]" />
            <span>Heritage Low RPM Cold Grinding</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            The Science & Soul of <span className="text-[#deb05a]">Low RPM Spices</span>
          </h2>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed">
            Conventional high-speed mills spin at over 3,000 RPM, scorching delicate botanical oils
            and dissipating fragrance into thin air. Nevora gently cold-pounds spices at low revolutions,
            preserving authentic home-style texture, vibrant color, and raw medicinal power.
          </p>
        </div>

        {/* 3 Spices Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {spices.map((spice) => {
            const directMsg = `Hi Nevora! I would like to order ${spice.name} (${spice.weight}) Low RPM Grinded Spice. Please share availability.`;

            return (
              <div
                key={spice.id}
                className="group relative bg-[#1b3823]/80 rounded-3xl border border-white/15 overflow-hidden flex flex-col justify-between hover:border-[#deb05a]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl"
              >
                {/* Image card */}
                <div className="relative aspect-[4/3] w-full bg-[#0d1a10]/50 p-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src={spice.image}
                    alt={spice.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#c44f2c] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                    {spice.badge}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur px-2.5 py-1 rounded-md text-xs font-bold text-[#deb05a] border border-white/10 flex items-center gap-1">
                    <Scale className="w-3 h-3" />
                    <span>{spice.weight}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-serif text-2xl font-bold text-[#fdfbf7]">
                        {spice.name}
                      </h3>
                      {spice.hindiName && (
                        <span className="font-serif text-lg text-[#deb05a] font-medium">
                          {spice.hindiName}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#deb05a] font-semibold tracking-wide uppercase">
                      {spice.subtitle}
                    </p>
                    <p className="text-xs text-white/75 leading-relaxed pt-1">
                      {spice.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <div className="flex flex-wrap gap-1.5">
                      {spice.highlights.map((hl) => (
                        <span
                          key={hl}
                          className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded bg-white/10 text-white/90"
                        >
                          <CheckCircle className="w-3 h-3 text-[#deb05a]" />
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Order Button */}
                  <div className="pt-4">
                    <a
                      href={`${BRAND_INFO.whatsappBaseUrl}?text=${encodeURIComponent(directMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#deb05a] hover:bg-[#c9933b] text-[#142a1a] font-bold text-xs transition-colors shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 text-[#142a1a]" />
                      <span>Order {spice.name} on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Low RPM Matters Feature Callout */}
        <div className="bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-10 backdrop-blur">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#deb05a]/20 flex items-center justify-center text-[#deb05a] mx-auto md:mx-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white">0% Heat Degradation</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                By maintaining temperatures below 38°C during slow cold milling, essential oils like
                piperine, curcumin, and linalool never evaporate.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#deb05a]/20 flex items-center justify-center text-[#deb05a] mx-auto md:mx-0">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white">Authentic Coarse Texture</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                Recreating the beloved texture of traditional stone pestles ("Kutta" style),
                infusing everyday curries and gravies with rustic body and deep color.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#deb05a]/20 flex items-center justify-center text-[#deb05a] mx-auto md:mx-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white">From Our Fields to Your Home</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                Single-origin whole chillies, golden turmeric fingers, and plump coriander seeds sourced
                responsibly and packed fresh with zero artificial coloring.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
