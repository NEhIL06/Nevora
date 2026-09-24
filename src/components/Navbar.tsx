'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { BRAND_INFO } from '@/data/products';
import {
  Search,
  User,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Flame,
  CheckCircle2,
} from 'lucide-react';

const CATEGORIES = [
  { name: 'Millet Chakli', desc: '100% Ragi • Crunchy spiral snack', href: '#products', emoji: '🥨' },
  { name: 'Crunchy Chips', desc: 'Zero Palm Oil • Crisp & light', href: '#products', emoji: '🍟' },
  { name: 'Millet Sticks', desc: 'High Fibre • Chatpata crunch', href: '#products', emoji: '🥢' },
  { name: 'Desi Mixture', desc: 'Heritage recipe • Tea-time pick', href: '#products', emoji: '🥣' },
  { name: 'Fine Bhujiya', desc: 'Protein-packed • Authentic taste', href: '#products', emoji: '🍜' },
  { name: 'Low RPM Spices', desc: 'Cold ground • Aroma locked', href: '#spices', emoji: '🌶️' },
  { name: 'Value Combos', desc: 'Best deals • Save up to 25%', href: '#combos', emoji: '🎁' },
];

const SEARCHABLE_ITEMS = [
  { title: 'Finger Millet (Ragi) Chakli', tag: 'Bestseller Snack', href: '#products' },
  { title: 'Millet Sticks - Peri Peri & Masala', tag: 'Protein Snack', href: '#products' },
  { title: 'Millet Chips - Classic Salted & Tomato', tag: 'Guilt-Free Munch', href: '#products' },
  { title: 'Desi Millet Mixture', tag: 'Tea-time snack', href: '#products' },
  { title: 'Fine Millet Bhujiya', tag: 'Low Fat Namkeen', href: '#products' },
  { title: 'Low RPM Stone Ground Haldi (Turmeric)', tag: 'Cold Ground Spice', href: '#spices' },
  { title: 'Low RPM Mirchi & Dhaniya Spices', tag: 'Pure Essential Spices', href: '#spices' },
  { title: 'Nevora Super Saver Value Combos', tag: 'Gift & Family Pack', href: '#combos' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [bagOpen, setBagOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const catDropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (catDropdownRef.current && !catDropdownRef.current.contains(e.target as Node)) {
        setCategoriesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search input when modal opens
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [searchOpen]);

  const filteredSearch = searchQuery.trim()
    ? SEARCHABLE_ITEMS.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : SEARCHABLE_ITEMS.slice(0, 4);

  const directWhatsAppOrder = `${BRAND_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    'Hi Nevora! I would like to place an order for healthy snacks and low-RPM spices.'
  )}`;

  return (
    <>
      <header className="sticky top-0 z-50 bg-white">
        {/* 1. Top Announcement Bar (Exact Snackible Style) */}
        <div className="bg-[#164a40] text-white text-[11px] sm:text-xs font-semibold py-2 px-3 text-center tracking-wide overflow-hidden shadow-inner">
          <div className="max-w-7xl mx-auto flex items-center justify-center">
            {/* Desktop single line centered */}
            <p className="hidden md:block truncate">
              Snack Overdose Sale | Get Upto 40% OFF | 2 FREE snacks on orders over ₹599 | 3 FREE snacks on orders over ₹799 | 5 FREE snacks on orders over ₹999 | Code Auto Applies
            </p>
            {/* Mobile clean ticker / marquee view */}
            <div className="md:hidden w-full overflow-hidden whitespace-nowrap">
              <div className="marquee-inner text-[11px]">
                <span className="mx-3 font-bold text-amber-300">⚡ Snack Overdose Sale</span>
                <span className="mx-1">•</span>
                <span className="mx-3">Get Upto 40% OFF</span>
                <span className="mx-1">•</span>
                <span className="mx-3">2 FREE snacks over ₹599</span>
                <span className="mx-1">•</span>
                <span className="mx-3">3 FREE snacks over ₹799</span>
                <span className="mx-1">•</span>
                <span className="mx-3">Code Auto Applies</span>
                <span className="mx-4 text-emerald-400">|</span>
                <span className="mx-3 font-bold text-amber-300">⚡ Snack Overdose Sale</span>
                <span className="mx-1">•</span>
                <span className="mx-3">Get Upto 40% OFF</span>
                <span className="mx-1">•</span>
                <span className="mx-3">2 FREE snacks over ₹599</span>
                <span className="mx-1">•</span>
                <span className="mx-3">3 FREE snacks over ₹799</span>
                <span className="mx-1">•</span>
                <span className="mx-3">Code Auto Applies</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Main Navigation Bar */}
        <div
          className={`bg-white border-b transition-all duration-200 ${
            scrolled ? 'border-neutral-200 shadow-sm' : 'border-neutral-200/80'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Upper Row: Search (Left), Centered Brand Logo (Center), Account & Cart (Right) */}
            <div className="relative flex items-center justify-between h-16 sm:h-20">
              {/* Left Action: Search Icon (Desktop) & Hamburger (Mobile) */}
              <div className="flex items-center gap-2 sm:gap-4 flex-1">
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileOpen(true)}
                  className="lg:hidden p-2 -ml-2 rounded-xl text-neutral-800 hover:text-[#164a40] hover:bg-neutral-100 transition-colors"
                  aria-label="Open Navigation Menu"
                >
                  <Menu className="w-6 h-6" />
                </button>

                {/* Search Button */}
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 rounded-full text-neutral-800 hover:text-[#164a40] hover:bg-neutral-100 transition-colors group flex items-center gap-2"
                  aria-label="Search snacks and spices"
                >
                  <Search className="w-5 h-5 transition-transform group-hover:scale-110" />
                  <span className="hidden xl:inline text-xs text-neutral-500 font-medium">Search snacks...</span>
                </button>
              </div>

              {/* Center: Brand Logo (Centered exactly like Snackible) */}
              <div className="flex-shrink-0 text-center">
                <a href="#" className="inline-flex flex-col items-center group">
                  <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-[#164a40]/30 shadow-xs">
                      <Image
                        src="/images/logo.jpeg"
                        alt="Nevora"
                        fill
                        sizes="36px"
                        className="object-cover"
                        priority
                      />
                    </div>
                    <span className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight text-[#164a40] leading-none group-hover:text-[#0e2118] transition-colors">
                      Nevora
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase text-[#c97a10] mt-0.5 font-sans">
                    Mu(n)ch Better
                  </span>
                </a>
              </div>

              {/* Right: User Profile & Shopping Bag Icons */}
              <div className="flex items-center justify-end gap-2 sm:gap-4 flex-1">
                {/* User / WhatsApp Support */}
                <a
                  href={directWhatsAppOrder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-neutral-800 hover:text-[#164a40] hover:bg-neutral-100 transition-colors hidden sm:flex items-center"
                  aria-label="Customer Account & WhatsApp Support"
                  title="WhatsApp Support & Account"
                >
                  <User className="w-5 h-5" />
                </a>

                {/* Shopping Bag / Cart */}
                <button
                  onClick={() => setBagOpen(true)}
                  className="relative p-2 rounded-full text-neutral-800 hover:text-[#164a40] hover:bg-neutral-100 transition-colors group"
                  aria-label="View Shopping Bag"
                >
                  <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-110" />
                  <span className="absolute 1 top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#164a40] text-white text-[9px] font-bold flex items-center justify-center">
                    0
                  </span>
                </button>
              </div>
            </div>

            {/* Lower Row: Centered Navigation Menu Links (Desktop) */}
            <nav className="hidden lg:flex items-center justify-center gap-7 pb-3.5 pt-0.5 border-t border-neutral-100/80">
              {/* Dropdown: SHOP BY CATEGORIES */}
              <div className="relative" ref={catDropdownRef}>
                <button
                  onClick={() => setCategoriesOpen(!categoriesOpen)}
                  onMouseEnter={() => setCategoriesOpen(true)}
                  className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold tracking-wider uppercase text-neutral-800 hover:text-[#164a40] transition-colors py-1 group"
                >
                  <span>Shop By Categories</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-neutral-500 transition-transform duration-200 group-hover:text-[#164a40] ${
                      categoriesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Mega Dropdown Panel */}
                {categoriesOpen && (
                  <div
                    onMouseLeave={() => setCategoriesOpen(false)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-[380px] bg-white rounded-2xl shadow-xl border border-neutral-200 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  >
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#c97a10] px-3 py-1.5">
                      Snacks & Heritage Spices
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {CATEGORIES.map((cat) => (
                        <a
                          key={cat.name}
                          href={cat.href}
                          onClick={() => setCategoriesOpen(false)}
                          className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-neutral-50 text-left transition-colors group"
                        >
                          <span className="text-xl p-1.5 rounded-lg bg-amber-50 group-hover:bg-emerald-50 transition-colors">
                            {cat.emoji}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-bold text-[#0e2118] group-hover:text-[#164a40]">
                              {cat.name}
                            </div>
                            <div className="text-[11px] text-neutral-500 truncate">{cat.desc}</div>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Direct Links */}
              <a
                href="#products"
                className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-neutral-800 hover:text-[#164a40] transition-colors py-1"
              >
                Protein Snacks
              </a>

              <a
                href="#products"
                className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-neutral-800 hover:text-[#164a40] transition-colors py-1"
              >
                Healthy Indulgences
              </a>

              <a
                href="#spices"
                className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-neutral-800 hover:text-[#164a40] transition-colors py-1"
              >
                Low RPM Spices
              </a>

              <a
                href="#combos"
                className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-neutral-800 hover:text-[#164a40] transition-colors py-1"
              >
                Value Combos & Gifting
              </a>

              <a
                href="#purity"
                className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-neutral-800 hover:text-[#164a40] transition-colors py-1"
              >
                Corporate Gifting
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* 3. Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer Menu */}
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-2xl z-50 flex flex-col justify-between">
            {/* Top Bar inside Drawer */}
            <div>
              <div className="p-4 border-b border-neutral-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#164a40]/30">
                    <Image src="/images/logo.jpeg" alt="Nevora" fill sizes="32px" className="object-cover" />
                  </div>
                  <div>
                    <span className="font-serif text-xl font-extrabold text-[#164a40] block leading-none">
                      Nevora
                    </span>
                    <span className="text-[9px] font-bold tracking-wider uppercase text-[#c97a10]">
                      Mu(n)ch Better
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Search Bar */}
              <div className="p-4 border-b border-neutral-100 bg-neutral-50">
                <div
                  onClick={() => {
                    setMobileOpen(false);
                    setSearchOpen(true);
                  }}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white border border-neutral-200 text-neutral-500 text-xs cursor-pointer shadow-2xs"
                >
                  <Search className="w-4 h-4 text-neutral-400" />
                  <span>Search snacks, ragi chakli, spices...</span>
                </div>
              </div>

              {/* Nav Links */}
              <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-250px)]">
                {/* Expandable Categories */}
                <div>
                  <button
                    onClick={() => setMobileCategoriesOpen(!mobileCategoriesOpen)}
                    className="w-full flex items-center justify-between py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-900 hover:bg-neutral-50 transition-colors"
                  >
                    <span>Shop By Categories</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${mobileCategoriesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {mobileCategoriesOpen && (
                    <div className="pl-4 pr-1 py-1 space-y-1">
                      {CATEGORIES.map((cat) => (
                        <a
                          key={cat.name}
                          href={cat.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2 py-2 px-3 rounded-lg text-xs font-medium text-neutral-700 hover:bg-amber-50/60"
                        >
                          <span>{cat.emoji}</span>
                          <span>{cat.name}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <a
                  href="#products"
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-900 hover:bg-neutral-50 transition-colors"
                >
                  Protein Snacks
                </a>

                <a
                  href="#products"
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-900 hover:bg-neutral-50 transition-colors"
                >
                  Healthy Indulgences
                </a>

                <a
                  href="#spices"
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-900 hover:bg-neutral-50 transition-colors"
                >
                  Low RPM Spices
                </a>

                <a
                  href="#combos"
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-900 hover:bg-neutral-50 transition-colors"
                >
                  Value Combos & Gifting
                </a>

                <a
                  href="#purity"
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-900 hover:bg-neutral-50 transition-colors"
                >
                  Corporate Gifting
                </a>
              </nav>
            </div>

            {/* Bottom Actions inside Drawer */}
            <div className="p-4 border-t border-neutral-100 bg-neutral-50 space-y-2">
              <a
                href={directWhatsAppOrder}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>Quick WhatsApp Order</span>
              </a>
              <div className="text-[10px] text-center text-neutral-500 font-medium">
                🌾 100% Millet • Zero Palm Oil • Zero Maida
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Search Modal Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setSearchOpen(false)}
          />

          <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-150">
            {/* Search Input Box */}
            <div className="p-4 border-b border-neutral-200 flex items-center gap-3">
              <Search className="w-5 h-5 text-neutral-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search millet chakli, chips, low-RPM spices..."
                className="flex-1 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-neutral-400 hover:text-neutral-600 px-2"
                >
                  Clear
                </button>
              )}
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search Results / Suggestions */}
            <div className="p-4 max-h-80 overflow-y-auto">
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-400 mb-2 px-2">
                {searchQuery ? 'Matching Products' : 'Popular Snacks & Heritage Spices'}
              </div>

              {filteredSearch.length === 0 ? (
                <div className="text-center py-8 text-neutral-500 text-sm">
                  No snacks found for "{searchQuery}". Try searching for "Chakli" or "Millet".
                </div>
              ) : (
                <div className="space-y-1">
                  {filteredSearch.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-neutral-50 transition-colors group"
                    >
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-[#164a40]">
                          {item.title}
                        </div>
                        <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full inline-block mt-0.5">
                          {item.tag}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#164a40] group-hover:translate-x-1 transition-all" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Helper Footer */}
            <div className="bg-neutral-50 px-4 py-2.5 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
              <span>Press ESC to close</span>
              <a
                href="#products"
                onClick={() => setSearchOpen(false)}
                className="font-bold text-[#164a40] hover:underline"
              >
                View Full Menu →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 5. Shopping Bag / Quick WhatsApp Checkout Drawer */}
      {bagOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setBagOpen(false)}
          />

          <div className="relative w-full max-w-sm bg-white shadow-2xl z-10 flex flex-col justify-between h-full p-6 animate-in slide-in-from-right duration-200">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#164a40]" />
                  <span className="font-bold text-base text-neutral-900">Your Snack Bag</span>
                </div>
                <button
                  onClick={() => setBagOpen(false)}
                  className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cart Content */}
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4 text-2xl">
                  🥨
                </div>
                <h4 className="font-bold text-neutral-900 text-sm mb-1">Your bag is craving snacks!</h4>
                <p className="text-xs text-neutral-500 max-w-xs mx-auto mb-6">
                  Explore our 100% Finger Millet (Ragi) snacks and stone ground spices with zero palm oil.
                </p>

                <a
                  href="#products"
                  onClick={() => setBagOpen(false)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#164a40] hover:bg-[#0e2118] text-white text-xs font-bold shadow-md transition-colors"
                >
                  <span>Explore Snacks Menu</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick WhatsApp ordering link */}
            <div className="pt-4 border-t border-neutral-100 bg-neutral-50/50 -mx-6 -mb-6 p-6">
              <a
                href={directWhatsAppOrder}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>Instant Order via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
