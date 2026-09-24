import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ShopByCategory from '@/components/ShopByCategory';
import BestSellers from '@/components/BestSellers';
import BrandStorySection from '@/components/BrandStorySection';
import NewArrivals from '@/components/NewArrivals';
import ProductUniverse from '@/components/ProductUniverse';
import SpicesSpotlight from '@/components/SpicesSpotlight';
import ProductCatalog from '@/components/ProductCatalog';
import PurityPromise from '@/components/PurityPromise';
import NutritionTransparency from '@/components/NutritionTransparency';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FDFBF7] scroll-smooth">
      {/* 1. Header & Navigation (Snackible Style) */}
      <Navbar />

      {/* 2. Hero: Full-Width 3-Second Auto-Sliding Carousel (Right to Left) */}
      <Hero />

      {/* 3. Shop By: Circular Category Navigation with Categories | Nutrition | Mood Tabs (Image 1) */}
      <ShopByCategory />

      {/* 4. Best Sellers: 2-in-a-row Mobile, 4-in-a-row Desktop Grid + Benefit Reveal (Image 2 & 4) */}
      <BestSellers />

      {/* 6. New Arrivals: 2-in-a-row Mobile, 4-in-a-row Desktop Grid + Benefit Reveal (Image 3 & 4) */}
      <NewArrivals />

      {/* 5. Brand Story: Interactive Philosophy Accordion + Media Video Showcase (Image 5) */}
      <BrandStorySection />

      {/* 7. Product Universe: 4 Pillars of Brand Architecture (Millets, Staples, Snacks, Everyday Foods) */}
      <ProductUniverse />

      {/* 8. Heritage Spices Spotlight: Low RPM Cold Ground Spices */}
      <SpicesSpotlight />

      {/* 9. Comprehensive Product Catalog & Value Combos */}
      <ProductCatalog />

      {/* 10. Purity Promise & Nutritional Transparency */}
      <PurityPromise />
      <NutritionTransparency />

      {/* 11. Footer & Floating WhatsApp Support */}
      <Footer />
      <WhatsAppFloatingButton />
    </main>
  );
}
