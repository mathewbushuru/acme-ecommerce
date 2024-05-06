import { Search } from "lucide-react";

import ProductNavigation from "@/modules/products/components/product-navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ProductMaintenance() {
  return (
    <ProductsSubLayout>
      <div className="">
        <SearchProduct />
      </div>
    </ProductsSubLayout>
  );
}

function ProductsSubLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col gap-4 lg:gap-6">
      <div>
        <ProductNavigation activeLink="product-maintenance" />
        <h1 className="text-lg font-semibold md:text-xl">
          Product Maintenance
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Manage your products and edit their details.
        </p>
      </div>

      <main className="max-h-[690px] flex-1 overflow-y-hidden rounded-lg border border-dashed p-4 shadow-sm sm:max-h-[580px]">
        {children}
      </main>
    </div>
  );
}

function SearchProduct() {
  return (
    <form
      className="flex-1 sm:flex-initial"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex items-center gap-2">
        <Label>Sku:</Label>
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            id="sku"
            placeholder="By Sku# or '%' + 'product_name'..."
            className="h-9 pl-8 sm:w-[300px] md:w-[240px] lg:w-[300px]"
          />
        </div>
      </div>
      <Button className="mt-4" variant="outline">Search</Button>
    </form>
  );
}
