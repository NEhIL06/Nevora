'use client';

import Image from 'next/image';
import { BRAND_INFO } from '@/data/products';
import { Mail, Phone, MapPin, MessageCircle, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#142a1a] text-[#fdfbf7] pt-16 pb-12 border-t border-[#254d2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#deb05a]/40">
                <Image
                  src="/images/logo.jpeg"
                  alt="Nevora Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider text-white">
                  NEVORA
                </span>
                <p className="text-[10px] tracking-widest uppercase font-semibold text-[#deb05a] -mt-1">
                  New Era of Everyday Food
                </p>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              Wholesome millet snacks and stone-style slow-ground spices crafted with traditional
              purity and modern nutritional integrity. Good for your family, good for the planet.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="w-4 h-4 rounded-xs border border-emerald-400 p-0.5 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </span>
              <span className="text-xs font-semibold text-emerald-300">
                100% Certified Vegetarian
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold tracking-wider uppercase text-[#deb05a]">
              Categories
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Ragi Chakli Series
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Ragi Sticks & Chips
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Ragi Mixture & Bhujiya
                </a>
              </li>
              <li>
                <a href="#spices" className="hover:text-white transition-colors">
                  Kutta Mirchi (Red Chilli)
                </a>
              </li>
              <li>
                <a href="#spices" className="hover:text-white transition-colors">
                  Kutta Haldi (Turmeric)
                </a>
              </li>
              <li>
                <a href="#spices" className="hover:text-white transition-colors">
                  Kutta Dhaniya (Coriander)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Manufacturing */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold tracking-wider uppercase text-[#deb05a]">
              Manufactured By
            </h4>
            <div className="text-xs text-white/80 space-y-2">
              <p className="font-semibold text-white">
                {BRAND_INFO.company}
              </p>
              <p className="flex items-start gap-2 text-white/70">
                <MapPin className="w-3.5 h-3.5 text-[#deb05a] flex-shrink-0 mt-0.5" />
                <span>{BRAND_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2 text-white/70">
                <ShieldCheck className="w-3.5 h-3.5 text-[#deb05a] flex-shrink-0" />
                <span>FSSAI Lic No. {BRAND_INFO.fssai}</span>
              </p>
            </div>
          </div>

          {/* Col 4: Contact & Social */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold tracking-wider uppercase text-[#deb05a]">
              Connect With Us
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="flex items-center gap-2 hover:text-[#deb05a] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#deb05a]" />
                  <span>{BRAND_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="flex items-center gap-2 hover:text-[#deb05a] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#deb05a]" />
                  <span>{BRAND_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#deb05a] transition-colors"
                >
                  <svg className="w-3.5 h-3.5 text-[#deb05a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span>{BRAND_INFO.instagram}</span>
                </a>
              </li>
              <li>
                <a
                  href={`${BRAND_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
                    'Hello Nevora!'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#deb05a] font-medium transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp Chat Support</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© {new Date().getFullYear()} NEVORA (Srijan Agrotech and Marketing LLP). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
