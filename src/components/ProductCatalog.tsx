'use client';

import { useState, useMemo } from 'react';
import { PRODUCTS, Product, CURATED_COMBOS, BRAND_INFO } from '@/data/products';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';
import { Search, SlidersHorizontal, Sparkles, X, Gift, Check, MessageCircle, Flame } from 'lucide-react';

const CATEGORY_TABS = [
  { id: 'all', label: 'All Products', icon: '✨', count: 23 },
  { id: 'chakli', label: 'Millet Chakli', icon: '🥨', count: 4 },
  { id: 'sticks', label: 'Crunchy Sticks', icon: '🥢', count: 4 },
  { id: 'chips', label: 'Wafer Chips', icon: '🍟', count: 4 },
  { id: 'mixture', label: 'Desi Mixture', icon: '🥣', count: 4 },
  { id: 'bhujiya', label: 'Fine Bhujiya', icon: '🍜', count: 4 },
  { id: 'spices', label: 'Low RPM Spices', icon: '🌶️', count: 3 },
];

const FLAVORS = [
  { id: 'all', label: 'All Flavors', dot: 'bg-gray-400' },
  { id: 'classic', label: 'Classic Authentic', dot: 'bg-emerald-500' },
  { id: 'periperi', label: 'Peri Peri Fiery', dot: 'bg-orange-500' },
  { id: 'tomato', label: 'Tangy Tomato', dot: 'bg-red-500' },
  { id: 'masala', label: 'Desi Masala', dot: 'bg-amber-600' },
];

export default function ProductCatalog() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedFlavor, setSelectedFlavor] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  // Filter logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category / Tab filter
      if (activeTab === 'spices') {
        if (p.category !== 'spices') return false;
      } else if (activeTab !== 'all') {
        if (p.category !== 'snacks' || p.snackType !== activeTab) return false;
      }

      // Flavor filter (applies to snacks)
      if (p.category === 'snacks' && selectedFlavor !== 'all') {
        if (p.flavor !== selectedFlavor) return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesSub = p.subtitle.toLowerCase().includes(query);
        const matchesHindi = p.hindiName?.toLowerCase().includes(query);
        const matchesFlavor = p.flavorName?.toLowerCase().includes(query);
        const matchesHighlights = p.highlights.some((h) =>
          h.toLowerCase().includes(query)
        );
        return matchesName || matchesSub || matchesHindi || matchesFlavor || matchesHighlights;
      }

      return true;
    });
  }, [activeTab, selectedFlavor, searchQuery]);

  const hasActiveFilters = activeTab !== 'all' || selectedFlavor !== 'all' || searchQuery.trim() !== '';

  const resetFilters = () => {
    setActiveTab('all');
    setSelectedFlavor('all');
    setSearchQuery('');
  };

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curated Combos Banner Section (Snackible Inspired) */}
        <div id="combos" className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider">
              <Gift className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Snackible-Style Curated Value Packs</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#0E2118]">
              Snack Combos & Gift Boxes
            </h2>
            <p className="text-sm text-[#4B5563]">
              Can’t decide on just one? Save up to 21% with our crowd-favorite snacking bundles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CURATED_COMBOS.map((combo) => {
              const comboMsg = encodeURIComponent(
                `Hi Nevora! I want to order the "${combo.title}" (${combo.itemsCount}) for ₹${combo.price}. Please share payment details!`
              );

              return (
                <div
                  key={combo.id}
                  className="bg-white rounded-3xl border-2 border-amber-200/80 p-5 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Top Tag & Discount */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full bg-amber-500 text-white">
                        {combo.tag}
                      </span>
                      <span className="text-xs font-black text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {combo.discount}
                      </span>
                    </div>

                    {/* Visual */}
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-amber-50 to-orange-50/40">
                      <img
                        src={combo.image}
                        alt={combo.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-2.5 left-2.5 bg-black/75 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-0.5 rounded-md">
                        {combo.itemsCount}
                      </div>
                    </div>

                    {/* Titles */}
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#0E2118] group-hover:text-[#D97706] transition-colors">
                        {combo.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#D97706] mt-0.5">
                        {combo.subtitle}
                      </p>
                      <p className="text-xs text-[#6B7280] mt-1.5 leading-relaxed">
                        {combo.description}
                      </p>
                    </div>

                    {/* Items checklist */}
                    <div className="space-y-1.5 pt-2 border-t border-amber-100">
                      {combo.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#374151] font-medium">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="pt-5 mt-4 border-t border-amber-100 flex items-center justify-between gap-3">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-black text-[#0E2118]">
                          ₹{combo.price}
                        </span>
                        <span className="text-xs font-bold text-[#9CA3AF] line-through">
                          ₹{combo.originalPrice}
                        </span>
                      </div>
                      <span className="text-[10px] text-emerald-700 font-bold">Pan-India WhatsApp Delivery</span>
                    </div>

                    <a
                      href={`${BRAND_INFO.whatsappBaseUrl}?text=${comboMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-[#164A40] hover:bg-[#0E2118] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>Order Box</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section Heading for All Products */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          {/* <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Clean-Label Snacking & Purity Spices</span>
          </div> */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E2118]">
            Explore The Full Nevora Pantry
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
            100% Finger Millet snacks crafted with zero maida and cold-pressed oils, paired with slow cold-pounded heritage spices.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-amber-200/70 shadow-md mb-8 space-y-4">
          {/* Main Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    if (tab.id === 'spices') setSelectedFlavor('all');
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-[#164A40] text-white shadow-md'
                      : 'bg-[#FAF6EF] text-[#374151] hover:bg-amber-100/60'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-black/5 text-[#6B7280]'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sub-Filters: Flavors + Search */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-amber-100">
            {/* Flavor Pills (for snacks) */}
            {activeTab !== 'spices' ? (
              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
                <span className="text-xs font-bold text-[#6B7280] mr-1 hidden sm:inline">
                  Flavors:
                </span>
                {FLAVORS.map((flavor) => (
                  <button
                    key={flavor.id}
                    onClick={() => setSelectedFlavor(flavor.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedFlavor === flavor.id
                        ? 'bg-amber-500 text-white shadow-xs'
                        : 'bg-white border border-amber-200/80 text-[#374151] hover:bg-amber-50'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${flavor.dot}`} />
                    <span>{flavor.label}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200">
                ⚙️ Slow Stone-Style Ground at Low RPM (Essential Oils Retained)
              </div>
            )}

            {/* Search Input */}
            <div className="relative w-full sm:w-64 flex-shrink-0">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search snacks, spices..."
                className="w-full pl-9 pr-8 py-2 rounded-full text-xs bg-[#FAF6EF] border border-amber-200/80 focus:bg-white focus:border-[#164A40] focus:outline-none transition-colors text-[#0E2118]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Active filter count and reset */}
          {hasActiveFilters && (
            <div className="flex items-center justify-between text-xs pt-2 text-[#4B5563] border-t border-amber-100/60">
              <span>
                Showing <strong>{filteredProducts.length}</strong> matching products
              </span>
              <button
                onClick={resetFilters}
                className="text-[#C2410C] font-bold hover:underline inline-flex items-center gap-1"
              >
                <X className="w-3 h-3" />
                Reset All Filters
              </button>
            </div>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(p) => setActiveProduct(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-amber-200/60 p-8 space-y-4">
            <div className="text-4xl">🔍</div>
            <h3 className="font-serif text-xl font-bold text-[#0E2118]">
              No matching products found
            </h3>
            <p className="text-xs text-[#6B7280] max-w-md mx-auto">
              We couldn&apos;t find any item matching your criteria. Try resetting filters or searching for something else like &quot;chakli&quot; or &quot;mirchi&quot;.
            </p>
            <button
              onClick={resetFilters}
              className="px-5 py-2 rounded-full bg-[#164A40] text-white font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Product Details Modal */}
        <ProductDetailModal
          product={activeProduct}
          onClose={() => setActiveProduct(null)}
        />
      </div>
    </section>
  );
}
