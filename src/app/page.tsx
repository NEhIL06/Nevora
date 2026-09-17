import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCatalog from '@/components/ProductCatalog';
import SpicesSpotlight from '@/components/SpicesSpotlight';
import PurityPromise from '@/components/PurityPromise';
import NutritionTransparency from '@/components/NutritionTransparency';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FDFBF7]">
      <Navbar />
      <Hero />
      <SpicesSpotlight />
      <ProductCatalog />
      <PurityPromise />
      <NutritionTransparency />
      <Footer />
      <WhatsAppFloatingButton />
    </main>
  );
}
