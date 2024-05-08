import { Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";

import { useGetAllCategoriesQuery } from "@/api";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

export default function ProductMaintenance() {
  const [searchParams, _] = useSearchParams();
  const skuSearchParam = searchParams.get("sku");

  const { data: categoryData } = useGetAllCategoriesQuery();

  return (
    <ProductsSubLayout>
      <form className="grid gap-2" onSubmit={() => null}>
        <div className="flex items-center gap-2">
          <Label className="w-40">Sku Number:</Label>
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              id="sku"
              defaultValue={skuSearchParam || ""}
              placeholder="By Sku# or '%' + 'product_name'..."
              className="h-9 pl-8 sm:w-[300px] md:w-[240px] lg:w-[300px]"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Label className="w-40">Vendor ordering code:</Label>
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              id="sku"
              placeholder="Might be similar to sku#"
              className="h-9 w-72 pl-8"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Label className="w-40">Variant group code:</Label>
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              id="sku"
              placeholder="Mix and match items, same price"
              className="h-9 w-72 pl-8"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Label className="w-40">Product Category:</Label>
          <Select>
            <SelectTrigger className="w-72">Select category</SelectTrigger>
            <SelectContent>
              {!categoryData ? (
                <SelectItem value="loading"> Loading... </SelectItem>
              ) : (
                categoryData.allCategories.map((category) => (
                  <SelectItem value={category.name} key={category.id}>
                    {category.name}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <div className="w-40">{""}</div>
          <Button className="max-w-xs" variant="secondary">
            Search
          </Button>
        </div>
      </form>
    </ProductsSubLayout>
  );
}

function ProductsSubLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <div className="h-[75px]">
        <h1 className="text-lg font-semibold md:text-xl">
          {" "}
          Product Maintenance
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Manage your products and edit their details.
        </p>
      </div>

      <main className="h-[calc(100%-75px)] overflow-y-hidden rounded-lg border border-dashed p-4 shadow-sm">
        {children}
      </main>
    </div>
  );
}
