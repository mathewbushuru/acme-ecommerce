import Navbar from "@/components/navbar";
import HeroBanners from "@/components/hero-banners";
import DealsCarousel from "@/components/deals-carousel";
import MidpageBanners from "@/components/midpage-banners";
import GroceryAisles from "@/components/grocery-aisles";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main className="pt-32">
      <Navbar />
      <HeroBanners />
      <DealsCarousel />
      <MidpageBanners />
      <GroceryAisles />
      <Footer />
    </main>
  );
}
