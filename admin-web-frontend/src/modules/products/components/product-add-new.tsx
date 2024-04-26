import { Button } from "@/components/ui/button";

import ProductNavigation from "@/modules/products/components/product-navigation";
import { ProductLinkType } from "@/modules/products/components/product-navigation";

export default function ProductAddNew({
  currActiveLink = "products-home",
}: {
  currActiveLink?: ProductLinkType;
}) {
  return (
    <div className="flex h-full flex-col gap-4 lg:gap-6">
      <div>
        <ProductNavigation activeLink={currActiveLink} />
        <h1 className="text-lg font-semibold md:text-xl">
          Inventory Maintenance
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          View product details, or enter 'Edit Mode' to edit product details /
          add new products.
        </p>
      </div>

      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-xl font-bold">You have no products.</h3>
          <p className="text-sm text-muted-foreground">
            You can start selling as soon as you add a product.
          </p>
          <Button className="mt-4">Add First Product</Button>
        </div>
      </div>
    </div>
  );
}
