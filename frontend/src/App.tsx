import { Menu, Search, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";

function App() {
  return (
    <main>
      {/* Navbar  */}
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2 lg:gap-3">
          <Menu className="h-6 w-6 cursor-pointer text-primary" />
          <h1 className="cursor-pointer font-bold tracking-wide text-primary">
            Acme Groceries
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Search className="h-6 w-6 cursor-pointer" />
          <Button variant="ghost">
            <ShoppingCart className="h-6 w-6 fill-destructive text-destructive" />
            <span className="ml-2 hidden font-semibold text-destructive sm:inline">
              Cart
            </span>
          </Button>
        </div>
      </nav>

      <Button>Sign up</Button>
    </main>
  );
}

export default App;
