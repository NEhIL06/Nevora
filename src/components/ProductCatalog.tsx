'use client';

import { useState, useMemo } from 'react';
import { PRODUCTS, Product } from '@/data/products';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';
import { Search, SlidersHorizontal, Sparkles, X } from 'lucide-react';

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'snacks' | 'spices'>('all');
  const [selectedFlavor, setSelectedFlavor] = useState<string>('all');
  const [selectedSnackType, setSelectedSnackType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  // Filter logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }

      // Flavor filter (only relevant for snacks)
      if (selectedCategory !== 'spices' && selectedFlavor !== 'all') {
        if (p.flavor !== selectedFlavor) return false;
      }

      // Snack type filter
      if (selectedCategory !== 'spices' && selectedSnackType !== 'all') {
        if (p.snackType !== selectedSnackType) return false;
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
  }, [selectedCategory, selectedFlavor, selectedSnackType, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedFlavor('all');
    setSelectedSnackType('all');
    setSearchQuery('');
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedFlavor !== 'all' ||
    selectedSnackType !== 'all' ||
    searchQuery.trim() !== '';

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4ede1] text-[#a77826] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Product Range</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142a1a]">
            Explore All 23 Handcrafted Products
          </h2>
          <p className="text-sm sm:text-base text-[#516154] leading-relaxed">
            From nutrient-rich crunchy finger millet (Ragi) snacks across 4 tempting flavors,
            to stone-style low RPM coarse spices directly from Indian farms.
          </p>
        </div>

        {/* Controls Container */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 brand-shadow border border-[#eee6d6] mb-10 space-y-5">
          {/* Main Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#eee6d6] pb-4">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedFlavor('all');
                }}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-[#1b3823] text-white shadow-sm'
                    : 'bg-[#f4ede1]/60 text-[#3e4a40] hover:bg-[#eee6d6]'
                }`}
              >
                All Products (23)
              </button>
              <button
                onClick={() => setSelectedCategory('snacks')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === 'snacks'
                    ? 'bg-[#1b3823] text-white shadow-sm'
                    : 'bg-[#f4ede1]/60 text-[#3e4a40] hover:bg-[#eee6d6]'
                }`}
              >
                Millet Snacks (20)
              </button>
              <button
                onClick={() => {
                  setSelectedCategory('spices');
                  setSelectedFlavor('all');
                  setSelectedSnackType('all');
                }}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === 'spices'
                    ? 'bg-[#c44f2c] text-white shadow-sm'
                    : 'bg-[#f4ede1]/60 text-[#3e4a40] hover:bg-[#eee6d6]'
                }`}
              >
                Low RPM Spices (3)
              </button>
            </div>

            {/* Instant Search Bar */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-[#8a998c] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search Chakli, Haldi, Peri Peri..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-8 py-2 rounded-full border border-[#eee6d6] text-xs sm:text-sm text-[#142a1a] focus:outline-none focus:border-[#1b3823] focus:ring-1 focus:ring-[#1b3823] bg-[#faf7f0]/50 placeholder:text-[#8a998c]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Sub-Filters for Snacks: Flavors & Shapes (only show when not in Spices) */}
          {selectedCategory !== 'spices' && (
            <div className="space-y-3 pt-1">
              {/* Flavor Selector */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-[#627065] mr-1 flex items-center gap-1">
                  <SlidersHorizontal className="w-3 h-3 text-[#a77826]" />
                  Flavor:
                </span>
                {[
                  { key: 'all', label: 'All Flavors' },
                  { key: 'classic', label: 'Classic Authentic' },
                  { key: 'tomato', label: 'Tomato Tangy' },
                  { key: 'masala', label: 'Desi Masala' },
                  { key: 'periperi', label: 'Peri Peri Hot' },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setSelectedFlavor(item.key)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      selectedFlavor === item.key
                        ? 'bg-[#254d2e] text-white shadow-xs'
                        : 'bg-white border border-[#eee6d6] text-[#516154] hover:bg-[#f8f4eb]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Snack Shapes / Format */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-[#627065] mr-1">Snack Type:</span>
                {[
                  { key: 'all', label: 'All Types' },
                  { key: 'chakli', label: 'Chakli Spirals' },
                  { key: 'sticks', label: 'Crunchy Sticks' },
                  { key: 'chips', label: 'Wafer Chips' },
                  { key: 'mixture', label: 'Namkeen Mixture' },
                  { key: 'bhujiya', label: 'Delicate Bhujiya' },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setSelectedSnackType(item.key)}
                    className={`px-3 py-1 rounded-md text-[11px] font-medium transition-all ${
                      selectedSnackType === item.key
                        ? 'bg-[#a77826] text-white'
                        : 'bg-white border border-[#eee6d6] text-[#627065] hover:bg-[#f4ede1]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Active Filter Summary Bar */}
          <div className="flex items-center justify-between text-xs text-[#627065] pt-2 border-t border-[#eee6d6]/60">
            <span>
              Showing{' '}
              <strong className="text-[#1b3823] font-bold">
                {filteredProducts.length}
              </strong>{' '}
              products
            </span>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1 text-[#c44f2c] hover:underline font-semibold"
              >
                <X className="w-3.5 h-3.5" />
                Reset all filters
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
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
          <div className="text-center py-16 bg-white rounded-3xl border border-[#eee6d6] p-8 max-w-md mx-auto space-y-4">
            <p className="text-base text-[#627065]">
              No products found matching your search or filter criteria.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 rounded-full bg-[#1b3823] text-white text-xs font-semibold hover:bg-[#254d2e] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Detail & Nutrition Modal */}
      <ProductDetailModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
      />
    </section>
  );
}
