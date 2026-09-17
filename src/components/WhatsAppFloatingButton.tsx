'use client';

import { BRAND_INFO } from '@/data/products';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloatingButton() {
  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <div className="hidden sm:block mr-3 px-3.5 py-1.5 rounded-xl bg-[#142a1a] text-[#fdfbf7] text-xs font-semibold shadow-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Order directly on WhatsApp
      </div>

      <a
        href={`${BRAND_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
          'Hello Nevora! I would like to place an order or ask a question about your products.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Nevora on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-700 rounded-full border-2 border-white animate-pulse" />
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>
    </aside>
  );
}
