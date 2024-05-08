import { Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";

import { useGetAllCategoriesQuery } from "@/api";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProductMaintenance() {
  const [searchParams, _] = useSearchParams();
  const skuSearchParam = searchParams.get("sku");

  const { data: categoryData } = useGetAllCategoriesQuery();

  return (
    <ProductsSubLayout>
      <form
        className="grid h-full grid-cols-1 grid-rows-[2] sm:grid-cols-2"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Top left*/}
        <div className="flex flex-col gap-2 ">
          <div className="flex flex-col items-start  gap-2 sm:flex-row sm:items-center">
            <Label className="w-40">Sku Number:</Label>
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                id="sku"
                defaultValue={skuSearchParam || ""}
                placeholder="By Sku# or '%' + 'product_name'"
                className="h-9 w-72 pl-8"
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
            <Label className="w-40">Vendor ordering code:</Label>
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                id="vendor-ordering-code"
                placeholder="Might be similar to sku#"
                className="h-9 w-72 pl-8"
              />
            </div>
          </div>

          <div className="flex flex-col items-start  gap-2 sm:flex-row sm:items-center">
            <Label className="w-40">Vendor ID:</Label>
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                id="vendor-id"
                placeholder="Vendor's code in system"
                className="h-9 w-72 pl-8"
              />
            </div>
          </div>

          <div className="flex flex-col items-start  gap-2 sm:flex-row sm:items-center">
            <Label className="w-40">Variant group code:</Label>
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                id="variant-group-code"
                placeholder="Mix and match items, same price"
                className="h-9 w-72 pl-8"
              />
            </div>
          </div>

          <div className="flex flex-col items-start  gap-2 sm:flex-row sm:items-center">
            <Label className="w-40">Product Category:</Label>
            <Select>
              <SelectTrigger className="w-72">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {!categoryData ? (
                  <SelectItem value="loading"> Loading... </SelectItem>
                ) : (
                  <>
                    <SelectItem value="All"> All </SelectItem>
                    {categoryData.allCategories.map((category) => (
                      <SelectItem value={category.name} key={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </>
                )}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col items-start  gap-2 sm:flex-row sm:items-center">
            <Label className="w-40">Product Name:</Label>
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                id="product-name"
                placeholder="Quick search by '%product_name'"
                className="h-9 w-72 pl-8"
              />
            </div>
          </div>

          <div className="flex flex-col items-start  gap-2 sm:flex-row sm:items-center">
            <Label className="w-40">Product Status:</Label>
            <Select>
              <SelectTrigger className="w-72">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Draft">Draft</SelectItem>
                <SelectItem value="Discontinued">Discontinued</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1">&nbsp;</div>
        </div>

        {/* Top right */}
        <div className="mt-2 hidden flex-col gap-4 sm:flex">
          <div className="flex items-center gap-2">
            <Checkbox id="is-on-special" />
            <Label htmlFor="is-on-special">Product is on special?</Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="is-oos" />
            <Label htmlFor="is-oos">Product is out of stock?</Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="is-house-brand" />
            <Label htmlFor="is-house-brand">Product is house brand?</Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="is-house-brand" defaultChecked />
            <Label htmlFor="is-house-brand">
              Product adds to customer loyalty points?
            </Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="is-house-brand" />
            <Label htmlFor="is-house-brand">Among top 100 sellers?</Label>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex  items-center gap-2 ">
          <div className="hidden w-40 sm:inline-block">{""}</div>
          <Button className="max-w-xs" variant="secondary">
            Search
          </Button>
          <Button className="max-w-xs" variant="secondary">
            Clear
          </Button>
          <Button className="max-w-xs" variant="secondary">
            Pick Random
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
          Fine grained search for all products in your inventory.
        </p>
      </div>

      <main className="h-[calc(100%-75px)] overflow-y-hidden rounded-lg border border-dashed p-4 shadow-sm">
        {children}
      </main>
    </div>
  );
}
