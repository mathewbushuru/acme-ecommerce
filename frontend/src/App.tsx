import { Menu, Search, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function App() {
  return (
    <main>
      {/* Navbar  */}
      <nav className="mx-auto flex max-w-screen-xl items-center justify-between  gap-4 px-4 py-6 lg:gap-8">
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
    </main>
  );
}

export default App;
