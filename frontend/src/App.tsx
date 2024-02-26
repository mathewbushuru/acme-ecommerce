import Navbar from "@/components/navbar";
import HeroBanners from "@/components/hero-banners";
import DealsCarousel from "@/components/deals-carousel";

function App() {
  return (
    <main className="pb-32 pt-32">
      <Navbar />
      <HeroBanners />
      <DealsCarousel />
    </main>
  );
}

export default App;
