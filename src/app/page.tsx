'use client';

import Image from 'next/image';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Mail, MapPin, Menu, MessageCircle, Phone, Sparkles, Search, X, Star, Scale, Eye } from 'lucide-react';
import { BRAND_INFO, PRODUCTS, getProductPricing, getProductRating, Product } from '@/data/products';
import BrandStoryAccordion from '@/components/BrandStoryAccordion';
import { useState, useMemo } from 'react';
import ProductDetailModal from '@/components/ProductDetailModal';

const whatsappLink = (message: string) =>
  `https://wa.me/${BRAND_INFO.phone.replace('+', '')}?text=${encodeURIComponent(message)}`;

const flavours = [
  { name: 'Desi Masala', image: '/images/product-photography/chakli-desi-masala.png', tone: 'bg-[#6E3629]' },
  { name: 'Peri Peri', image: '/images/product-photography/chakli-peri-peri.png', tone: 'bg-[#B62F26]' },
  { name: 'Tomato Tangy', image: '/images/product-photography/chakli-tomato-tangy.png', tone: 'bg-[#D14C2D]' },
  { name: 'Classic', image: '/images/product-photography/chakli-classic.png', tone: 'bg-[#5A7C32]' },
];

const packClaims = ['NO MAIDA', 'NO PALM OIL', 'HIGH FIBRE', 'NO PRESERVATIVES'];

const snackRange = [
  { name: 'Ragi Mixture', flavour: 'Desi Masala', weight: '100G', image: '/images/product-photography/mixture-desi-masala.png', tone: 'bg-[#6E3629]' },
  { name: 'Ragi Bhujiya', flavour: 'Peri Peri', weight: '130G', image: '/images/product-photography/bhujiya-peri-peri.png', tone: 'bg-[#B62F26]' },
  { name: 'Ragi Sticks', flavour: 'Tomato Tangy', weight: '100G', image: '/images/product-photography/sticks-tomato-tangy.png', tone: 'bg-[#D14C2D]' },
  { name: 'Ragi Chips', flavour: 'Peri Peri', weight: '100G', image: '/images/product-photography/chips-peri-peri.png', tone: 'bg-[#B62F26]' },
];

const collectionBoards = [
  { title: 'Ragi Chakli', caption: 'Four flavours. One seriously satisfying crunch.', image: '/images/product-photography/ragi-chakli-range.png' },
  { title: 'Ragi Sticks', caption: 'A snack-time staple with a better bite.', image: '/images/product-photography/ragi-sticks-range.png' },
  { title: 'The Nevora Range', caption: 'Made for every kind of craving.', image: '/images/product-photography/ragi-snacks-range.png' },
];

const ALL_SNACK_TYPES = [
  { id: 'all', label: 'All Products', icon: '✨', count: () => PRODUCTS.length },
  { id: 'chakli', label: 'Ragi Chakli', icon: '🥨', count: () => PRODUCTS.filter(p => p.snackType === 'chakli').length },
  { id: 'sticks', label: 'Ragi Sticks', icon: '🥢', count: () => PRODUCTS.filter(p => p.snackType === 'sticks').length },
  { id: 'chips', label: 'Ragi Chips', icon: '🍟', count: () => PRODUCTS.filter(p => p.snackType === 'chips').length },
  { id: 'mixture', label: 'Ragi Mixture', icon: '🥣', count: () => PRODUCTS.filter(p => p.snackType === 'mixture').length },
  { id: 'bhujiya', label: 'Ragi Bhujiya', icon: '🍜', count: () => PRODUCTS.filter(p => p.snackType === 'bhujiya').length },
  { id: 'spices', label: 'Kutta Spices', icon: '🌶️', count: () => PRODUCTS.filter(p => p.category === 'spices').length },
];

const FLAVOR_FILTERS = [
  { id: 'all', label: 'All Flavours', dot: 'bg-gray-400' },
  { id: 'classic', label: 'Classic', dot: 'bg-emerald-500' },
  { id: 'periperi', label: 'Peri Peri 🌶️', dot: 'bg-orange-500' },
  { id: 'tomato', label: 'Tomato Tangy', dot: 'bg-red-500' },
  { id: 'masala', label: 'Desi Masala', dot: 'bg-amber-600' },
];

function FlavorBadge(flavor?: string) {
  switch (flavor) {
    case 'tomato': return { bg: 'bg-red-50 text-red-700 border-red-200', emoji: '🍅' };
    case 'masala': return { bg: 'bg-amber-50 text-amber-900 border-amber-300', emoji: '🌿' };
    case 'periperi': return { bg: 'bg-orange-50 text-orange-800 border-orange-300', emoji: '🌶️' };
    default: return { bg: 'bg-emerald-50 text-emerald-800 border-emerald-200', emoji: '🧂' };
  }
}

function ProductCard({ product, onSelect }: { product: Product; onSelect: (p: Product) => void }) {
  const isSpice = product.category === 'spices';
  const pricing = getProductPricing(product);
  const ratingInfo = getProductRating(product);
  const flavorStyle = FlavorBadge(product.flavor);
  const msg = encodeURIComponent(`Hi Nevora! I would like to order ${product.name} (${product.weight}) at ₹${pricing.price}. Please share payment and shipping info!`);
  return (
    <div className="group relative flex flex-col bg-white rounded-3xl border border-[#173E3B]/10 hover:border-[#173E3B]/25 overflow-hidden shadow-[0_4px_20px_rgba(23,62,59,0.07)] hover:shadow-[0_14px_40px_rgba(23,62,59,0.15)] hover:-translate-y-1.5 transition-all duration-300">
      <div onClick={() => onSelect(product)} className="relative aspect-[3/4] w-full bg-gradient-to-b from-[#FAF7F0] to-[#F5EFE3] overflow-hidden cursor-pointer">
        <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
        <div className="absolute top-3 right-3 bg-white/95 p-1 rounded-md border border-emerald-300 shadow-sm z-10">
          <span className="w-3.5 h-3.5 rounded-sm border border-emerald-700 p-0.5 flex items-center justify-center"><span className="w-1.5 h-1.5 rounded-full bg-emerald-700" /></span>
        </div>
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start z-10">
          {product.badge && <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm ${isSpice ? 'bg-amber-600 text-white' : 'bg-[#B62F26] text-white'}`}>{product.badge}</span>}
          {product.flavorName && <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shadow-sm ${flavorStyle.bg}`}>{flavorStyle.emoji} {product.flavorName}</span>}
        </div>
        <div className="absolute bottom-2.5 right-2.5 bg-white/95 backdrop-blur px-2.5 py-0.5 rounded-full text-[11px] font-bold text-[#173E3B] border border-[#173E3B]/20 flex items-center gap-1 shadow-sm z-10">
          <Scale className="w-3 h-3 text-[#D97706]" /><span>{product.weight}</span>
        </div>
        <div className="absolute inset-0 bg-[#0E2118]/25 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#0E2118] text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5 text-[#D97706]" /> Quick View
          </span>
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-extrabold text-[#173E3B]">{ratingInfo.rating}</span>
              <span className="text-[#9CA3AF]">({ratingInfo.count})</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">{isSpice ? 'Low RPM' : '0% Palm Oil'}</span>
          </div>
          <div onClick={() => onSelect(product)} className="cursor-pointer">
            <h3 className="font-serif text-base font-bold text-[#173E3B] group-hover:text-[#B62F26] transition-colors line-clamp-1">{product.name}</h3>
            {product.hindiName
              ? <p className="font-serif text-xs font-semibold text-[#D97706]">{product.hindiName} • {product.subtitle}</p>
              : <p className="text-xs text-[#6B7280] line-clamp-1">{product.subtitle}</p>}
          </div>
          <div className="flex flex-wrap gap-1 pt-0.5">
            {isSpice
              ? <><span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200">🌿 100% Pure</span><span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-red-50 text-red-900 border border-red-200">⚡ Aroma Locked</span></>
              : <><span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-900 border border-emerald-200">🌾 100% Ragi</span><span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200">🚫 Zero Maida</span></>
            }
          </div>
        </div>
        <div className="pt-2 border-t border-[#173E3B]/10 space-y-2">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-black text-[#173E3B]">₹{pricing.price}</span>
              <span className="text-xs font-semibold text-[#9CA3AF] line-through">₹{pricing.originalPrice}</span>
            </div>
            <span className="text-[10px] font-black uppercase text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200">{pricing.discountText}</span>
          </div>
          <a href={`${BRAND_INFO.whatsappBaseUrl}?text=${msg}`} target="_blank" rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-2xl bg-[#173E3B] hover:bg-[#B62F26] text-white font-bold text-xs shadow-md hover:shadow-lg transition-all duration-200">
            <MessageCircle className="w-4 h-4 text-[#FFE56B]" /><span>Order on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const orderLink = whatsappLink('Hi Nevora! I would like to order. Please share the available products and payment details.');
  const offerLink = whatsappLink('Hi Nevora! I am interested in the 10% off offer. Please share the available products and payment details.');

  const [activeTab, setActiveTab] = useState('all');
  const [selectedFlavor, setSelectedFlavor] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (activeTab === 'spices') {
        if (p.category !== 'spices') return false;
      } else if (activeTab !== 'all') {
        if (p.category !== 'snacks' || p.snackType !== activeTab) return false;
      }
      if (p.category === 'snacks' && selectedFlavor !== 'all') {
        if (p.flavor !== selectedFlavor) return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return p.name.toLowerCase().includes(q) || p.subtitle.toLowerCase().includes(q) ||
          p.hindiName?.toLowerCase().includes(q) || p.flavorName?.toLowerCase().includes(q) ||
          p.highlights.some((h) => h.toLowerCase().includes(q));
      }
      return true;
    });
  }, [activeTab, selectedFlavor, searchQuery]);

  const hasActiveFilters = activeTab !== 'all' || selectedFlavor !== 'all' || searchQuery.trim() !== '';
  const resetFilters = () => { setActiveTab('all'); setSelectedFlavor('all'); setSearchQuery(''); };

  return (
    <main className="overflow-hidden bg-[#FFFDF6] text-[#173E3B]">
      <a href={offerLink} target="_blank" rel="noreferrer" className="marquee-strip block overflow-hidden bg-[#B62F26] py-2.5 text-white">
        <div className="marquee-track text-[10px] font-black tracking-[0.16em] sm:text-xs">
          {Array.from({ length: 8 }, (_, index) => <span key={index} className="mx-6 whitespace-nowrap">GET 10% OFF • ORDER ANY NEVORA RAGI SNACK ON WHATSAPP <b className="ml-4 text-[#FFE56B]">SHOP NOW →</b></span>)}
        </div>
      </a>

      <header className="border-b border-[#173E3B]/10 bg-white sticky top-0 z-40">
        <div className="mx-auto flex h-[64px] max-w-7xl items-center justify-between px-4 lg:px-8 relative">
          {/* Hamburger - mobile only */}
          <a href="#flavours" aria-label="Browse flavours" className="p-2 text-[#173E3B] lg:hidden flex-shrink-0">
            <Menu className="h-5 w-5" />
          </a>

          {/* Desktop nav - left */}
          {/* <nav className="hidden items-center gap-6 text-[11px] font-extrabold tracking-[0.08em] text-[#173E3B] lg:flex">
            <a href="#flavours" className="hover:text-[#B62F26]">SHOP FLAVOURS</a>
            <a href="#about" className="hover:text-[#B62F26]">ABOUT RAGI CHAKLI</a>
          </nav> */}

          {/* Logo - centered absolutely */}
          <a href="#top" aria-label="Nevora home" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full border border-[#173E3B]/15 flex-shrink-0">
              <Image src="/images/logo.jpeg" alt="Nevora logo" fill sizes="32px" className="object-cover" />
            </div>
            <span className="font-serif text-[1.4rem] sm:text-[1.65rem] font-black tracking-[-0.08em] whitespace-nowrap">NEVORA</span>
          </a>

          {/* CTA - right */}
          <a
            href={orderLink}
            target="_blank"
            rel="noreferrer"
            className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-[#173E3B] px-3 py-2 sm:px-4 sm:py-2.5 text-[10px] font-extrabold tracking-[0.08em] text-white transition-colors hover:bg-[#B62F26] flex-shrink-0"
          >
            <MessageCircle className="h-3.5 w-3.5 text-[#FFE56B]" />
            <span className="hidden sm:inline">ORDER NOW</span>
            <span className="sm:hidden">ORDER</span>
          </a>
        </div>
        <nav className="hidden border-t border-[#173E3B]/10 lg:block">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-10 px-8 py-3 text-[10px] font-bold tracking-[0.11em] text-[#536A64]">
            <a href="#flavours" className="inline-flex items-center gap-1 hover:text-[#B62F26]">RAGI CHAKLI <ChevronDown className="h-3 w-3" /></a>
            <a href="#all-products" className="hover:text-[#B62F26]">ALL PRODUCTS</a>
            <a href="#flavours" className="hover:text-[#B62F26]">DESI MASALA</a>
            <a href="#flavours" className="hover:text-[#B62F26]">PERI PERI</a>
            <a href="#flavours" className="hover:text-[#B62F26]">TOMATO TANGY</a>
            <a href="#flavours" className="hover:text-[#B62F26]">CLASSIC</a>
          </div>
        </nav>
      </header>

      <section id="top" className="relative bg-[#FFE56B] px-4 sm:px-5 py-10 sm:py-16 lg:py-20">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#173E3B_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 sm:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="max-w-xl">
            <p className="mb-4 inline-flex rounded-full border border-[#173E3B]/25 bg-white/65 px-3 py-1.5 text-[10px] font-black tracking-[0.14em] text-[#173E3B]">5 SNACK VARIETIES × 4 BOLD FLAVOURS</p>
            <h1 className="font-serif text-[clamp(2.8rem,9vw,6.4rem)] font-black leading-[0.86] tracking-[-0.06em] text-[#173E3B]">A better crunch is <span className="text-[#B62F26]">here.</span></h1>
            <p className="mt-5 sm:mt-7 max-w-md text-sm sm:text-base font-medium leading-7 text-[#31544C]">Nevora Ragi Snacks — Chakli, Sticks, Chips, Mixture & Bhujiya in 4 bold flavours. Zero maida. Zero palm oil.</p>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
              <a href="#all-products" className="inline-flex items-center gap-2 rounded-full bg-[#B62F26] px-5 sm:px-6 py-3.5 sm:py-4 text-xs font-extrabold tracking-[0.08em] text-white shadow-[0_8px_0_#7e241d] transition-transform hover:-translate-y-1">SHOP ALL PRODUCTS <ArrowDown className="h-4 w-4" /></a>
              <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-[#173E3B]/20 bg-white px-5 sm:px-6 py-3.5 sm:py-4 text-xs font-extrabold tracking-[0.08em] text-[#173E3B] hover:bg-[#FFF6C1]">WHAT&apos;S IN THE PACK <ArrowRight className="h-4 w-4" /></a>
            </div>
            <div className="mt-6 sm:mt-9 grid grid-cols-2 gap-x-4 gap-y-2 sm:flex sm:flex-wrap sm:gap-x-5 text-[10px] font-extrabold tracking-[0.08em] text-[#173E3B]">
              {packClaims.map((claim) => <span key={claim} className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-[#B62F26] flex-shrink-0" />{claim}</span>)}
            </div>
          </div>
          {/* Product Image Grid */}
          <div className="relative mx-auto w-full max-w-sm sm:max-w-lg lg:max-w-3xl overflow-hidden py-4 sm:px-6">
            <div className="absolute inset-x-[8%] bottom-[7%] top-[10%] rounded-[3rem] bg-[#6FB2A4] shadow-[0_14px_0_#173E3B]" />
            <div className="relative grid grid-cols-2 gap-3 sm:gap-5">
              <div className="relative rotate-[-4deg] overflow-hidden rounded-[1.5rem] sm:rounded-[1.8rem] border-4 border-[#FFFDF6] shadow-xl transition-transform duration-300 hover:-rotate-1">
                <Image src="/images/product-photography/chakli-desi-masala.png" alt="Nevora Ragi Chakli Desi Masala" width={1086} height={1448} preload className="h-auto w-full" />
              </div>
              <div className="relative rotate-[4deg] translate-y-8 sm:translate-y-10 overflow-hidden rounded-[1.5rem] sm:rounded-[1.8rem] border-4 border-[#FFFDF6] shadow-xl transition-transform duration-300 hover:rotate-1">
                <Image src="/images/product-photography/chakli-peri-peri.png" alt="Nevora Ragi Chakli Peri Peri" width={1086} height={1448} preload className="h-auto w-full" />
              </div>
            </div>
            <span className="absolute bottom-0 left-2 sm:left-2 rotate-[-7deg] rounded-full bg-[#173E3B] px-3 sm:px-4 py-1.5 sm:py-2 text-[9px] sm:text-[10px] font-extrabold tracking-[0.1em] text-[#FFE56B] shadow-lg">CRUNCH, YOUR WAY</span>
          </div>
        </div>
      </section>

      <section className="border-b border-[#173E3B]/10 bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
          <p className="mb-4 text-center text-[10px] font-black tracking-[0.14em] text-[#B62F26]">SHOP BY FLAVOUR</p>
          <div className="flex justify-around gap-2 overflow-x-auto pb-1 sm:justify-center sm:gap-8">
            {flavours.map((flavour) => (
              <a key={flavour.name} href="#flavours" className="group flex min-w-[68px] sm:min-w-[73px] flex-col items-center gap-2">
                <span className="relative h-14 w-14 sm:h-16 sm:w-16 overflow-hidden rounded-full border-2 border-[#173E3B]/10 bg-[#F7F4E8] transition-transform group-hover:-translate-y-1">
                  <Image src={flavour.image} alt="" fill sizes="64px" className="object-cover" />
                </span>
                <span className="whitespace-nowrap text-[9px] sm:text-[10px] font-extrabold text-[#31544C]">{flavour.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="flavours" className="mx-auto max-w-7xl px-4 sm:px-5 py-14 sm:py-20 lg:px-8 lg:py-24">
        <div className="mb-8 sm:mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-black tracking-[0.15em] text-[#B62F26]">RAGI CHAKLI · 130G</p>
            <h2 className="mt-3 font-serif text-[clamp(2.6rem,8vw,3.75rem)] sm:text-5xl lg:text-6xl font-black leading-[0.9] tracking-[-0.065em] text-[#173E3B]">Pick your flavour.</h2>
          </div>
          <a href={orderLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-extrabold tracking-[0.08em] text-[#B62F26] hover:text-[#173E3B]">ASK ABOUT ALL FLAVOURS <ArrowUpRight className="h-4 w-4" /></a>
        </div>
        <div className="grid gap-4 sm:gap-5 grid-cols-2 lg:grid-cols-4">
          {flavours.map((flavour, index) => (
            <article key={flavour.name} className="group overflow-hidden rounded-[1.4rem] sm:rounded-[1.6rem] border border-[#173E3B]/10 bg-white shadow-[0_8px_24px_rgba(23,62,59,0.08)] transition-all hover:-translate-y-2 hover:shadow-[0_18px_32px_rgba(23,62,59,0.16)]">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#F4ECD9]">
                <Image src={flavour.image} alt={`Nevora Ragi Chakli ${flavour.name}`} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className={`${flavour.tone} absolute left-2 top-2 sm:left-3 sm:top-3 rounded-full px-2 sm:px-3 py-1 text-[8px] sm:text-[9px] font-black tracking-[0.1em] text-white`}>RAGI CHAKLI</div>
                <span className="absolute right-2 top-2 sm:right-3 sm:top-3 flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white text-[9px] sm:text-[10px] font-black text-[#173E3B]">0{index + 1}</span>
              </div>
              <div className="p-3 sm:p-5">
                <h3 className="font-serif text-xl sm:text-3xl font-black tracking-[-0.055em] text-[#173E3B]">{flavour.name}</h3>
                <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs font-bold tracking-[0.08em] text-[#6B7E77]">RAGI CHAKLI · 130G</p>
                <a
                  href={whatsappLink(`Hi Nevora! I would like to order Ragi Chakli - ${flavour.name}. Please share payment details.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 sm:mt-5 inline-flex w-full items-center justify-between rounded-xl bg-[#173E3B] px-3 sm:px-4 py-2.5 sm:py-3 text-[9px] sm:text-[10px] font-extrabold tracking-[0.1em] text-white transition-colors hover:bg-[#B62F26]"
                >
                  ORDER ON WHATSAPP <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#FFE56B]" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="snacks" className="border-y border-[#173E3B]/10 bg-[#F4ECD9] px-4 py-14 sm:px-5 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="text-[10px] font-black tracking-[0.15em] text-[#B62F26]">MORE TO MUNCH</p>
              <h2 className="mt-3 font-serif text-[clamp(2.6rem,8vw,4.5rem)] font-black leading-[0.88] tracking-[-0.065em] text-[#173E3B]">Meet the rest of the crunch.</h2>
            </div>
            <p className="max-w-xs text-sm font-medium leading-6 text-[#557068]">The same familiar ragi goodness, in snackable shapes for every kind of craving.</p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {snackRange.map((snack) => (
              <article key={snack.name} className="group overflow-hidden rounded-[1.4rem] border border-[#173E3B]/10 bg-white shadow-[0_8px_24px_rgba(23,62,59,0.08)] transition-all hover:-translate-y-2 hover:shadow-[0_18px_32px_rgba(23,62,59,0.16)]">
                <div className="relative aspect-[2/3] overflow-hidden bg-[#E8D6B8]">
                  <Image src={snack.image} alt={`Nevora ${snack.name} ${snack.flavour}`} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className={`${snack.tone} absolute left-2 top-2 rounded-full px-2 py-1 text-[8px] font-black tracking-[0.1em] text-white sm:left-3 sm:top-3 sm:px-3 sm:text-[9px]`}>{snack.flavour.toUpperCase()}</span>
                </div>
                <div className="p-3 sm:p-5">
                  <p className="text-[9px] font-black tracking-[0.12em] text-[#B62F26]">RAGI SNACKS · {snack.weight}</p>
                  <h3 className="mt-1 font-serif text-xl font-black tracking-[-0.05em] text-[#173E3B] sm:text-3xl">{snack.name}</h3>
                  <a href={whatsappLink(`Hi Nevora! I would like to know more about ${snack.name} - ${snack.flavour}.`)} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-[9px] font-extrabold tracking-[0.09em] text-[#B62F26] hover:text-[#173E3B] sm:mt-4 sm:text-[10px]">ASK ABOUT THIS SNACK <ArrowUpRight className="h-3.5 w-3.5" /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-5 sm:py-20 lg:px-8 lg:py-24">
        <div className="mb-8 max-w-xl sm:mb-10">
          <p className="text-[10px] font-black tracking-[0.15em] text-[#B62F26]">ONE GRAIN, MORE WAYS TO ENJOY IT</p>
          <h2 className="mt-3 font-serif text-[clamp(2.5rem,7vw,4.25rem)] font-black leading-[0.9] tracking-[-0.065em] text-[#173E3B]">Your ragi snack shelf, sorted.</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {collectionBoards.map((board) => (
            <article key={board.title} className="group overflow-hidden rounded-[1.5rem] border border-[#173E3B]/10 bg-[#F4ECD9] shadow-[0_8px_24px_rgba(23,62,59,0.08)]">
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image src={board.image} alt={`Nevora ${board.title} collection`} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
                <div>
                  <h3 className="font-serif text-2xl font-black tracking-[-0.05em] text-[#173E3B]">{board.title}</h3>
                  <p className="mt-1 text-xs font-medium leading-5 text-[#557068]">{board.caption}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-[#B62F26]" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ========== FULL PRODUCT CATALOG ========== */}
      <section id="all-products" className="bg-[#FFFDF9] py-16 sm:py-24 border-t border-[#173E3B]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B62F26]/10 text-[#B62F26] text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /><span>Complete Nevora Range</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#173E3B]">Explore The Full Nevora Pantry</h2>
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">5 snack types × 4 bold flavours + 3 heritage stone-ground spices. All crafted with traditional purity.</p>
          </div>

          {/* Filter bar */}
          <div className="bg-white rounded-3xl p-4 sm:p-5 border border-[#173E3B]/10 shadow-md mb-10 space-y-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {ALL_SNACK_TYPES.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button key={tab.id} onClick={() => { setActiveTab(tab.id); if (tab.id === 'spices') setSelectedFlavor('all'); }}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${isActive ? 'bg-[#173E3B] text-white shadow-md' : 'bg-[#FAF6EF] text-[#374151] hover:bg-amber-100/60'}`}>
                    <span>{tab.icon}</span><span>{tab.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${isActive ? 'bg-white/20 text-white' : 'bg-black/5 text-[#6B7280]'}`}>{tab.count()}</span>
                  </button>
                );
              })}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-[#173E3B]/8">
              {activeTab !== 'spices' ? (
                <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
                  <span className="text-xs font-bold text-[#6B7280] mr-1 hidden sm:inline">Flavour:</span>
                  {FLAVOR_FILTERS.map((flavor) => (
                    <button key={flavor.id} onClick={() => setSelectedFlavor(flavor.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${selectedFlavor === flavor.id ? 'bg-[#B62F26] text-white shadow-sm' : 'bg-white border border-[#173E3B]/15 text-[#374151] hover:bg-amber-50'}`}>
                      <span className={`w-2 h-2 rounded-full ${flavor.dot}`} /><span>{flavor.label}</span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200">⚙️ Slow Stone-Style Ground at Low RPM — Essential Oils Retained</div>
              )}
              <div className="relative w-full sm:w-64 flex-shrink-0">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search snacks, spices..."
                  className="w-full pl-9 pr-8 py-2 rounded-full text-xs bg-[#FAF6EF] border border-[#173E3B]/15 focus:bg-white focus:border-[#173E3B] focus:outline-none transition-colors text-[#173E3B]" />
                {searchQuery && <button onClick={() => setSearchQuery('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"><X className="w-3.5 h-3.5" /></button>}
              </div>
            </div>
            {hasActiveFilters && (
              <div className="flex items-center justify-between text-xs pt-2 text-[#4B5563] border-t border-[#173E3B]/8">
                <span>Showing <strong>{filteredProducts.length}</strong> products</span>
                <button onClick={resetFilters} className="text-[#B62F26] font-bold hover:underline inline-flex items-center gap-1"><X className="w-3 h-3" /> Reset</button>
              </div>
            )}
          </div>

          {/* Product grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
              {filteredProducts.map((product) => (<ProductCard key={product.id} product={product} onSelect={setActiveProduct} />))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#173E3B]/10 space-y-4">
              <div className="text-4xl">🔍</div>
              <h3 className="font-serif text-xl font-bold text-[#173E3B]">No matching products found</h3>
              <p className="text-xs text-[#6B7280] max-w-md mx-auto">Try resetting the filters or searching for something like &quot;chakli&quot; or &quot;mirchi&quot;.</p>
              <button onClick={resetFilters} className="px-5 py-2 rounded-full bg-[#173E3B] text-white font-bold text-xs">Reset Filters</button>
            </div>
          )}
        </div>
      </section>

      <section id="about" className="bg-[#6FB2A4] px-4 sm:px-5 py-14 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-[10px] font-black tracking-[0.15em] text-[#173E3B]">ON EVERY RAGI CHAKLI PACK</p>
            <h2 className="mt-3 max-w-md font-serif text-[clamp(2.6rem,8vw,3.75rem)] sm:text-5xl lg:text-6xl font-black leading-[0.9] tracking-[-0.065em] text-[#173E3B]">The pack says it all.</h2>
            <p className="mt-5 sm:mt-6 max-w-md text-sm sm:text-base font-medium leading-7 text-[#244C43]">Simple product information, clearly stated on the front of every pack.</p>
            <a href={orderLink} target="_blank" rel="noreferrer" className="mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-full bg-[#173E3B] px-5 py-3.5 text-xs font-extrabold tracking-[0.08em] text-white hover:bg-[#B62F26]">ORDER RAGI CHAKLI <MessageCircle className="h-4 w-4 text-[#FFE56B]" /></a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {packClaims.map((claim, index) => (
              <div key={claim} className="flex min-h-28 sm:min-h-36 flex-col justify-between rounded-[1.3rem] sm:rounded-[1.5rem] bg-[#FFFDF6] p-4 sm:p-6 shadow-[0_6px_0_#173E3B]">
                <span className="font-serif text-2xl sm:text-3xl font-black text-[#B62F26]">0{index + 1}</span>
                <span className="text-sm sm:text-lg font-black tracking-[-0.03em] text-[#173E3B]">{claim}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BrandStoryAccordion />

      <section className="bg-[#FFF4C4] px-4 sm:px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-6 sm:gap-8 rounded-[1.5rem] sm:rounded-[2rem] bg-[#B62F26] p-6 sm:p-8 text-white shadow-[0_10px_0_#7E241D] sm:p-12 lg:grid-cols-[1fr_auto] lg:px-14">
            <div>
              <p className="text-[10px] font-black tracking-[0.16em] text-[#FFE56B]">LIMITED-TIME OFFER</p>
              <h2 className="mt-3 font-serif text-[clamp(2.2rem,7vw,3.75rem)] sm:text-5xl lg:text-6xl font-black leading-[0.9] tracking-[-0.06em]">Get 10% off<br />your Ragi Chakli.</h2>
              <p className="mt-4 sm:mt-5 max-w-md text-sm font-medium leading-6 text-white/80">Order directly on WhatsApp to ask about the offer and choose a flavour.</p>
            </div>
            <a href={offerLink} target="_blank" rel="noreferrer" className="inline-flex w-full sm:w-fit items-center justify-center gap-2 rounded-full bg-[#FFE56B] px-6 py-4 text-xs font-extrabold tracking-[0.08em] text-[#173E3B] transition-transform hover:-translate-y-1">CLAIM 10% OFF <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <footer className="bg-[#173E3B] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-[1.25fr_.8fr_.9fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[#FFE56B]/60"><Image src="/images/logo.jpeg" alt="Nevora logo" fill sizes="44px" className="object-cover" /></div>
              <div><p className="font-serif text-3xl font-black tracking-[-0.08em]">NEVORA</p><p className="text-[9px] font-bold tracking-[0.14em] text-[#FFE56B]">NEW ERA OF EVERYDAY FOOD</p></div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-6 text-white/65">Traditional ingredients. Modern food. Everyday life.</p>
            <a href={offerLink} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#FFE56B] px-5 py-3.5 text-xs font-extrabold tracking-[0.08em] text-[#173E3B] hover:bg-white"><MessageCircle className="h-4 w-4" />CLAIM 10% OFF</a>
          </div>
          <div>
            <h3 className="text-[10px] font-black tracking-[0.15em] text-[#FFE56B]">EXPLORE</h3>
            <div className="mt-5 space-y-3 text-xs font-bold text-white/70">
              <a className="block hover:text-[#FFE56B]" href="#flavours">Ragi Chakli</a>
              <a className="block hover:text-[#FFE56B]" href="#all-products">All Products</a>
              <a className="block hover:text-[#FFE56B]" href="#about">On Every Pack</a>
              <a className="block hover:text-[#FFE56B]" href="#top">Back to Top</a>
            </div>
          </div>
          <div>
            <h3 className="text-[10px] font-black tracking-[0.15em] text-[#FFE56B]">CONTACT</h3>
            <div className="mt-5 space-y-4 text-xs font-bold text-white/70">
              <a href={BRAND_INFO.whatsappBaseUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#FFE56B]"><MessageCircle className="h-4 w-4 text-[#FFE56B]" />{BRAND_INFO.phoneDisplay}</a>
              <a href={`mailto:${BRAND_INFO.email}`} className="flex items-center gap-2 hover:text-[#FFE56B]"><Mail className="h-4 w-4 text-[#FFE56B]" />{BRAND_INFO.email}</a>
              <a href={`tel:${BRAND_INFO.phone}`} className="flex items-center gap-2 hover:text-[#FFE56B]"><Phone className="h-4 w-4 text-[#FFE56B]" />Call Nevora</a>
              <p className="flex items-start gap-2 leading-5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FFE56B]" />{BRAND_INFO.address}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/15">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-[10px] font-bold tracking-[0.1em] text-white/55 sm:flex-row sm:justify-between lg:px-8">
            <span>© {new Date().getFullYear()} NEVORA — {BRAND_INFO.company}</span>
            <span>FSSAI: {BRAND_INFO.fssai}</span>
          </div>
        </div>
      </footer>

      {/* Product Detail Modal */}
      <ProductDetailModal product={activeProduct} onClose={() => setActiveProduct(null)} />
    </main>
  );
}
