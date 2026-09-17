'use client';

import { useState } from 'react';
import Image from 'next/image';
import { BRAND_INFO } from '@/data/products';
import { MessageCircle, Menu, X, Leaf, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'Low RPM Spices', href: '#spices' },
    { label: 'Why Nevora', href: '#purity' },
    { label: 'Nutrition', href: '#nutrition' },
    { label: 'Contact', href: '#footer' },
  ];

  return (
    <header className="sticky top-0 z-40 glass-nav border-b border-[#eee6d6]/80 transition-all duration-200">
      {/* Top micro announcement bar */}
      <div className="bg-[#1b3823] text-[#fdfbf7] text-xs py-1.5 px-4 text-center tracking-wide font-medium flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1">
          <Leaf className="w-3.5 h-3.5 text-[#deb05a]" />
          <span>100% Millet-Powered • Zero Palm Oil • Zero Maida • Fresh Low-RPM Masalas</span>
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#1b3823]/20 shadow-sm transition-transform group-hover:scale-105">
              <Image
                src="/images/logo.jpeg"
                alt="Nevora Logo"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-wider font-bold text-[#1b3823] group-hover:text-[#254d2e] transition-colors">
                NEVORA
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#a77826] -mt-1">
                New Era of Everyday Food
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#222a23]/80 hover:text-[#1b3823] hover:border-b-2 hover:border-[#c9933b] pb-1 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* WhatsApp Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`${BRAND_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
                'Hello Nevora! I would like to explore your millet snacks and low RPM spices catalog.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1b3823] hover:bg-[#254d2e] text-[#fdfbf7] text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md hover:translate-y-[-1px]"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Order via WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-lg text-[#1b3823] hover:bg-[#eee6d6]/60 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fdfbf7] border-b border-[#eee6d6] px-4 pt-2 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#1b3823] hover:bg-[#eee6d6]/50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href={`${BRAND_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
                'Hello Nevora! I would like to explore your millet snacks and spices catalog.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1b3823] text-[#fdfbf7] text-sm font-medium shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Direct WhatsApp Order</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
