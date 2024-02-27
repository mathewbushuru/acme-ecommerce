import Navbar from "@/components/navbar";
import HeroBanners from "@/components/hero-banners";
import DealsCarousel from "@/components/deals-carousel";
import MidpageBanners from "@/components/midpage-banners";
import GroceryAisles from "@/components/grocery-aisles";

function App() {
  return (
    <main className="pb-32 pt-32">
      <Navbar />
      <HeroBanners />
      <DealsCarousel />
      <MidpageBanners />
      <GroceryAisles />
    </main>
  );
}

export default App;
