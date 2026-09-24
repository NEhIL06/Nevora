'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Plus, X, Play, Sparkles, Heart, ShieldCheck, Leaf, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '@/data/products';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
  bulletPoints?: string[];
  quote?: string;
}

const STORY_ACCORDION: AccordionItem[] = [
  {
    id: 'cravings',
    title: 'YOUR CRAVINGS DESERVE BETTER CHOICES',
    content:
      "That hour when hunger strikes always brings the same old battlefield: tasty but junky, or healthy but joyless. Nevora was born to change this. Millets, grains, and traditional recipes have been part of our Indian food culture for generations. We set out to rewrite the rules—turning everyday snacking from a compromise into a celebration. Because cravings aren't a weakness, they're human.",
    quote: '"Eat familiar. Choose better. Live modern."',
  },
  {
    id: 'tradition',
    title: 'WHERE TRADITION MEETS MODERN CONVENIENCE',
    content:
      "Tradition, made relevant for today. Healthy, traditional Indian food doesn't have to feel old-fashioned, complicated, or boring. Nevora connects traditional Indian grains—Ragi, Jowar, Bajra, pure cold-pressed oils, and heritage stone-ground spices—with modern, convenient, and craveable formats that fit naturally into today's household lifestyle.",
    quote: '"Tradition, made relevant for today."',
  },
  {
    id: 'pillars',
    title: 'HOW WE DO IT — OUR 4 CONTENT PILLARS',
    content:
      'We focus on building a transparent, honest food brand from scratch through four guiding commitments:',
    bulletPoints: [
      '01 The Product: 100% Finger Millet (Ragi), zero palm oil, zero maida, Low RPM aroma locking.',
      '02 The Story: Transparent kitchen, building an authentic Indian food brand from the ground up.',
      '03 The Food: Millet education and mouth-watering ways to enjoy heritage grains daily.',
      '04 The Lifestyle: Wholesome choices made effortless for urban and semi-urban Indian families.',
    ],
  },
  {
    id: 'northstar',
    title: 'OUR BRAND NORTH STAR & INTEGRITY',
    content:
      "Our North Star is simple: Make traditional Indian food feel modern, desirable, and everyday. We don't do fake wellness promises, fear-based marketing, or complicated jargon. Just simple claims, clean food, and the authentic crunch you and your family can trust every single day.",
    quote: '"The crunch you love, made with the goodness of ragi."',
  },
];

export default function BrandStorySection() {
  const [openItem, setOpenItem] = useState<string>('cravings');
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const toggleAccordion = (id: string) => {
    setOpenItem((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="our-story" className="py-16 sm:py-24 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ================================================================= */}
          {/* LEFT COLUMN: INTERACTIVE BRAND STORY ACCORDION (IMAGE 5 STYLE)   */}
          {/* ================================================================= */}
          <div className="lg:col-span-6 space-y-4">
            <div className="mb-6">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c97a10]">
                The Nevora Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#0E2118] tracking-tight mt-1">
                Tradition, Made Relevant For Today.
              </h2>
            </div>

            {/* Accordion List */}
            <div className="divide-y divide-neutral-200 border-y border-neutral-200">
              {STORY_ACCORDION.map((item) => {
                const isOpen = openItem === item.id;
                return (
                  <div key={item.id} className="py-5">
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full flex items-center justify-between text-left group"
                      aria-expanded={isOpen}
                    >
                      <h3
                        className={`font-sans font-bold text-sm sm:text-base tracking-wide uppercase transition-colors pr-4 ${
                          isOpen ? 'text-[#164a40]' : 'text-neutral-900 group-hover:text-[#164a40]'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <span className="p-1 rounded-full text-neutral-500 group-hover:text-[#164a40] transition-colors flex-shrink-0">
                        {isOpen ? (
                          <X className="w-5 h-5 text-[#164a40]" />
                        ) : (
                          <Plus className="w-5 h-5 text-neutral-400 group-hover:text-neutral-900" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-3.5 space-y-3 text-xs sm:text-sm text-neutral-600 leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                        <p>{item.content}</p>

                        {item.bulletPoints && (
                          <ul className="space-y-1.5 pl-1 pt-1">
                            {item.bulletPoints.map((bp, i) => (
                              <li key={i} className="flex items-start gap-2 text-neutral-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#164a40] mt-1.5 flex-shrink-0" />
                                <span>{bp}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {item.quote && (
                          <div className="p-3 rounded-xl bg-amber-50/80 border-l-3 border-[#c97a10] text-[#0E2118] font-bold text-xs italic">
                            {item.quote}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quick WhatsApp chat with Founder / Brand Team */}
            <div className="pt-4">
              <a
                href={`${BRAND_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
                  'Hi Nevora Team! I would love to learn more about your brand story, sourcing, and wholesale/retail partnerships.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#164a40] hover:text-[#0e2118] group"
              >
                <span>Talk with the Nevora Team on WhatsApp</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: LARGE STORY MEDIA / VIDEO SHOWCASE PLACEHOLDER     */}
          {/* ================================================================= */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-neutral-200 bg-neutral-900 group">
              {/* Background Visual (Founder / Kitchen Photography) */}
              <Image
                src="/images/snacks/chakli-classic.jpg"
                alt="Nevora Brand Story — Handcrafted Millet Kitchen"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-700"
              />

              {/* Dark Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />

              {/* Top Badge: Founder's Kitchen */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white text-xs font-bold shadow-md">
                <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                <span>Founder's Kitchen • Farm to Fork Purity</span>
              </div>

              {/* Center Play Button Overlay */}
              <div
                onClick={() => setVideoModalOpen(true)}
                className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer z-10"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 hover:bg-white text-[#164a40] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform pulse-ring">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-[#164a40] ml-1" />
                </div>
                <span className="text-white font-bold text-xs sm:text-sm mt-3 tracking-wide drop-shadow-md">
                  Watch The Nevora Story (1:45 min)
                </span>
              </div>

              {/* Bottom Placeholder Notice (as requested by user) */}
              <div className="absolute bottom-4 inset-x-4 z-10 bg-black/75 backdrop-blur-md border border-white/15 rounded-2xl p-3 text-center">
                <div className="flex items-center justify-center gap-1.5 text-amber-300 text-[11px] font-black uppercase tracking-wider mb-0.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Story Video / Photography Placeholder</span>
                </div>
                <p className="text-[11px] text-white/80">
                  Behind the Scenes: Sourcing 100% Ragi from Indian Farmers & Stone-Grinding Heritage Spices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Overlay */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-neutral-900 rounded-3xl p-6 border border-neutral-700 text-center text-white">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto text-2xl">
                🎬
              </div>
              <h4 className="font-serif text-2xl font-bold">The Nevora Brand Story</h4>
              <p className="text-sm text-neutral-300 max-w-md mx-auto">
                Video player placeholder ready! Once your brand documentary or reel is ready, embed your MP4 or YouTube video link directly here.
              </p>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="px-6 py-2.5 rounded-full bg-[#164a40] hover:bg-[#1d6055] text-white text-xs font-bold uppercase tracking-wider"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
