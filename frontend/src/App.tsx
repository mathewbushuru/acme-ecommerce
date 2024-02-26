import {
  Menu,
  Search,
  ShoppingCart,
  Store,
  ChevronRight,
  ChevronDown,
  Heart,
  RotateCcw,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function App() {
  return (
    <main>
      {/* Navbar  */}
      <div className="shadow-md">
        <nav className="mx-auto flex max-w-screen-xl items-center justify-between gap-4 p-4 lg:gap-8">
          <div className="flex items-center gap-2 lg:gap-3">
            <Menu className="h-6 w-6 cursor-pointer text-primary lg:hidden" />
            <h1 className="cursor-pointer font-bold tracking-wide text-primary">
              Acme Groceries
            </h1>
          </div>
          <div className="hidden flex-1 gap-8 sm:flex">
            <Input type="search" placeholder="Search" />
            <Button variant="secondary">Sign In or Register</Button>
          </div>
          <div className="flex items-center gap-2">
            <Search className="h-6 w-6 cursor-pointer sm:hidden" />
            <Button variant="ghost" className="px-4">
              <ShoppingCart className="h-6 w-6 fill-destructive text-destructive" />
              <span className="ml-2 hidden font-semibold text-destructive sm:inline">
                Cart
              </span>
            </Button>
          </div>
        </nav>

        <div className=" bg-accent px-4 py-4 lg:bg-background lg:pt-2">
          <div className="mx-auto max-w-screen-xl">
            <div className="flex lg:hidden">
              <Store className="mr-2 h-6 w-6" />
              <span className="font-semibold">Pickup</span>
              <ChevronRight className="ml-auto h-6 w-6" />
            </div>
            <div className="hidden items-center justify-between lg:flex">
              <div className="flex gap-6 px-3">
                <div className="flex cursor-pointer items-center gap-2 font-semibold hover:text-primary">
                  <Menu className="h-5 w-5" />
                  Shop Aisles
                </div>
                <span className="cursor-pointer hover:text-primary">
                  Flyers
                </span>
                <div className="flex cursor-pointer items-center hover:text-primary">
                  Deals
                  <ChevronDown className="ml-1" />
                </div>
                <div className="flex cursor-pointer items-center hover:text-primary">
                  Inspiration
                  <ChevronDown className="ml-1" />
                </div>
                <div className="flex cursor-pointer items-center hover:text-primary">
                  Pharmacy & Health
                  <ChevronDown className="ml-1" />
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost">
                  <RotateCcw className="mr-2 h-5 w-5" />
                  <span className="font-semibold">Past Purchases</span>
                </Button>
                <Button variant="ghost">
                  <Heart className="mr-2 h-5 w-5 fill-foreground" />
                  <span className="font-semibold">Favourites</span>
                </Button>
                <Button variant="outline">
                  <Store className="mr-2 h-5 w-5" />
                  <span className="font-semibold">Pickup</span>
                  <ChevronDown className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
