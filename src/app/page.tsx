import Image from 'next/image';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Mail, MapPin, Menu, MessageCircle, Phone, Play } from 'lucide-react';
import { BRAND_INFO } from '@/data/products';
import BrandStoryAccordion from '@/components/BrandStoryAccordion';

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

export default function Home() {
  const orderLink = whatsappLink('Hi Nevora! I would like to order Ragi Chakli. Please share the available flavours and payment details.');
  const offerLink = whatsappLink('Hi Nevora! I am interested in the 10% off offer for Ragi Chakli. Please share the available flavours and payment details.');

  return (
    <main className="overflow-hidden bg-[#FFFDF6] text-[#173E3B]">
      <a href={offerLink} target="_blank" rel="noreferrer" className="marquee-strip block overflow-hidden bg-[#B62F26] py-2.5 text-white">
        <div className="marquee-track text-[10px] font-black tracking-[0.16em] sm:text-xs">
          {Array.from({ length: 8 }, (_, index) => <span key={index} className="mx-6 whitespace-nowrap">GET 10% OFF • ORDER YOUR RAGI CHAKLI ON WHATSAPP <b className="ml-4 text-[#FFE56B]">SHOP NOW →</b></span>)}
        </div>
      </a>

      <header className="border-b border-[#173E3B]/10 bg-white">
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
          {/* <a
            href={orderLink}
            target="_blank"
            rel="noreferrer"
            className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-[#173E3B] px-3 py-2 sm:px-4 sm:py-2.5 text-[10px] font-extrabold tracking-[0.08em] text-white transition-colors hover:bg-[#B62F26] flex-shrink-0"
          >
            <MessageCircle className="h-3.5 w-3.5 text-[#FFE56B]" />
            <span className="hidden sm:inline">ORDER ON WHATSAPP</span>
            <span className="sm:hidden">ORDER</span>
          </a> */}
        </div>
        <nav className="hidden border-t border-[#173E3B]/10 lg:block">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-10 px-8 py-3 text-[10px] font-bold tracking-[0.11em] text-[#536A64]">
            <a href="#flavours" className="inline-flex items-center gap-1 hover:text-[#B62F26]">RAGI CHAKLI <ChevronDown className="h-3 w-3" /></a>
            <a href="#snacks" className="hover:text-[#B62F26]">MORE RAGI SNACKS</a>
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
            <p className="mb-4 inline-flex rounded-full border border-[#173E3B]/25 bg-white/65 px-3 py-1.5 text-[10px] font-black tracking-[0.14em] text-[#173E3B]">THE RAGI CHAKLI COLLECTION</p>
            <h1 className="font-serif text-[clamp(2.8rem,9vw,6.4rem)] font-black leading-[0.86] tracking-[-0.06em] text-[#173E3B]">A better crunch is <span className="text-[#B62F26]">here.</span></h1>
            <p className="mt-5 sm:mt-7 max-w-md text-sm sm:text-base font-medium leading-7 text-[#31544C]">Meet Nevora Ragi Chakli: a bold, crunchy snack with four flavours to choose from.</p>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
              <a href="#flavours" className="inline-flex items-center gap-2 rounded-full bg-[#B62F26] px-5 sm:px-6 py-3.5 sm:py-4 text-xs font-extrabold tracking-[0.08em] text-white shadow-[0_8px_0_#7e241d] transition-transform hover:-translate-y-1">SHOP FLAVOURS <ArrowDown className="h-4 w-4" /></a>
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

      <section className="mx-auto max-w-7xl px-4 sm:px-5 py-14 sm:py-20 lg:px-8 lg:py-24">
        <div className="mb-7 sm:mb-9 max-w-xl">
          <p className="text-[10px] font-black tracking-[0.15em] text-[#B62F26]">NEVORA IN EVERYDAY LIFE</p>
          <h2 className="mt-3 font-serif text-[clamp(2.4rem,7.5vw,3.75rem)] sm:text-5xl lg:text-6xl font-black leading-[0.9] tracking-[-0.065em] text-[#173E3B]">See the crunch in motion.</h2>
        </div>
        <div className="grid overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-dashed border-[#173E3B]/30 bg-[#F4ECD9] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative flex min-h-[18rem] sm:min-h-[22rem] items-center justify-center overflow-hidden bg-[#173E3B] p-8">
            <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(45deg,#6FB2A4_25%,transparent_25%,transparent_75%,#6FB2A4_75%)] [background-size:34px_34px]" />
            <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full border-4 border-[#FFFDF6] bg-[#B62F26] text-white shadow-[0_8px_0_#7E241D]">
              <Play className="ml-1 h-7 w-7 sm:h-8 sm:w-8 fill-current" />
            </div>
            <span className="absolute bottom-5 sm:bottom-7 rounded-full bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-[9px] sm:text-[10px] font-black tracking-[0.12em] text-[#173E3B]">LIFESTYLE VIDEO PLACEHOLDER</span>
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
            <p className="text-[10px] font-black tracking-[0.15em] text-[#B62F26]">COMING SOON</p>
            <h3 className="mt-3 font-serif text-2xl sm:text-4xl font-black leading-[0.95] tracking-[-0.06em] text-[#173E3B]">A real snack-time story belongs here.</h3>
            <p className="mt-4 sm:mt-5 max-w-md text-sm leading-6 text-[#526B63]">Add a Nevora lifestyle film, a founder story, or real moments with Ragi Chakli when video footage is available.</p>
          </div>
        </div>
      </section>

      <footer className="bg-[#173E3B] text-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-[1.25fr_.8fr_.9fr] lg:px-8"><div><div className="flex items-center gap-3"><div className="relative h-11 w-11 overflow-hidden rounded-full border border-[#FFE56B]/60"><Image src="/images/logo.jpeg" alt="Nevora logo" fill sizes="44px" className="object-cover" /></div><div><p className="font-serif text-3xl font-black tracking-[-0.08em]">NEVORA</p><p className="text-[9px] font-bold tracking-[0.14em] text-[#FFE56B]">NEW ERA OF EVERYDAY FOOD</p></div></div><p className="mt-6 max-w-sm text-sm leading-6 text-white/65">Traditional ingredients. Modern food. Everyday life.</p><a href={offerLink} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#FFE56B] px-5 py-3.5 text-xs font-extrabold tracking-[0.08em] text-[#173E3B] hover:bg-white"><MessageCircle className="h-4 w-4" />CLAIM 10% OFF</a></div><div><h3 className="text-[10px] font-black tracking-[0.15em] text-[#FFE56B]">EXPLORE</h3><div className="mt-5 space-y-3 text-xs font-bold text-white/70"><a className="block hover:text-[#FFE56B]" href="#flavours">Ragi Chakli Flavours</a><a className="block hover:text-[#FFE56B]" href="#about">On Every Pack</a><a className="block hover:text-[#FFE56B]" href="#top">Back to Top</a></div></div><div><h3 className="text-[10px] font-black tracking-[0.15em] text-[#FFE56B]">CONTACT</h3><div className="mt-5 space-y-4 text-xs font-bold text-white/70"><a href={BRAND_INFO.whatsappBaseUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#FFE56B]"><MessageCircle className="h-4 w-4 text-[#FFE56B]" />{BRAND_INFO.phoneDisplay}</a><a href={`mailto:${BRAND_INFO.email}`} className="flex items-center gap-2 hover:text-[#FFE56B]"><Mail className="h-4 w-4 text-[#FFE56B]" />{BRAND_INFO.email}</a><a href={`tel:${BRAND_INFO.phone}`} className="flex items-center gap-2 hover:text-[#FFE56B]"><Phone className="h-4 w-4 text-[#FFE56B]" />Call Nevora</a><p className="flex items-start gap-2 leading-5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FFE56B]" />{BRAND_INFO.address}</p></div></div></div><div className="border-t border-white/15"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-[10px] font-bold tracking-[0.1em] text-white/55 sm:flex-row sm:justify-between lg:px-8"><span>© {new Date().getFullYear()} NEVORA</span><span>RAGI CHAKLI · FOUR FLAVOURS · 130G</span></div></div></footer>
    </main>
  );
}
