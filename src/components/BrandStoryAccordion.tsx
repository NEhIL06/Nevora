'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Minus, Plus } from 'lucide-react';

const stories = [
  {
    title: 'TRADITION, MADE RELEVANT',
    body: "Nevora is built on a simple belief: traditional Indian food can feel modern, convenient, and exciting in everyday life.",
    image: '/images/ragi-chakli/classic.jpeg',
    alt: 'Nevora Classic Ragi Chakli',
    accent: 'bg-[#557A2C]',
  },
  {
    title: 'FOOD FOR EVERYDAY LIFE',
    body: "We bring familiar ingredients and foods into formats that fit today—without making them feel complicated or out of reach.",
    image: '/images/ragi-chakli/desi-masala.jpeg',
    alt: 'Nevora Desi Masala Ragi Chakli',
    accent: 'bg-[#6E3629]',
  },
  {
    title: 'MORE THAN ONE SNACK',
    body: "Nevora is building a modern Indian food brand across millets, staples, snacks, and everyday foods—rooted in familiar choices for modern kitchens.",
    image: '/images/ragi-chakli/tomato-tangy.jpeg',
    alt: 'Nevora Tomato Tangy Ragi Chakli',
    accent: 'bg-[#D14C2D]',
  },
];

export default function BrandStoryAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStory = stories[activeIndex];

  return (
    <section className="bg-white px-5 py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <p className="mb-7 text-[10px] font-black tracking-[0.15em] text-[#B62F26]">THE NEVORA STORY</p>
          <div className="border-t border-[#173E3B]/20">
            {stories.map((story, index) => {
              const isActive = index === activeIndex;

              return (
                <div key={story.title} className="border-b border-[#173E3B]/20">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-expanded={isActive}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className={`font-serif text-2xl font-black tracking-[-0.045em] transition-colors sm:text-3xl ${isActive ? 'text-[#173E3B]' : 'text-[#173E3B]/65'}`}>
                      {story.title}
                    </span>
                    {isActive ? <Minus className="h-5 w-5 shrink-0" /> : <Plus className="h-5 w-5 shrink-0" />}
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <p className="max-w-xl pb-6 text-sm leading-7 text-[#557068] sm:text-base">{story.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative min-h-[25rem] overflow-hidden rounded-[2rem] bg-[#F4ECD9] sm:min-h-[34rem]">
          {stories.map((story, index) => (
            <Image
              key={story.image}
              src={story.image}
              alt={story.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={`object-cover transition-all duration-500 ${activeIndex === index ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
              priority={index === 0}
            />
          ))}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-7 pb-7 pt-24 text-white">
            <span className={`mb-3 inline-flex rounded-full px-3 py-1 text-[9px] font-black tracking-[0.12em] ${activeStory.accent}`}>NEVORA</span>
            <p className="font-serif text-3xl font-black tracking-[-0.05em] sm:text-4xl">{activeStory.title}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
