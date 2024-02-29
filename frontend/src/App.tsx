import { Provider as ReduxProvider } from "react-redux";

import { store } from "@/store/store";
import { useGetRootQuery } from "@/api";

import Navbar from "@/components/navbar";
import HeroBanners from "@/components/hero-banners";
import DealsCarousel from "@/components/deals-carousel";
import MidpageBanners from "@/components/midpage-banners";
import GroceryAisles from "@/components/grocery-aisles";
import Footer from "@/components/footer";

function AppRouter() {
  const { data } = useGetRootQuery();
  data && console.log(data);

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

function App() {
  return (
    <ReduxProvider store={store}>
      <AppRouter />
    </ReduxProvider>
  );
}

export default App;
