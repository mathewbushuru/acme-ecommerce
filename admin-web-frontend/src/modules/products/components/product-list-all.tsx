import { useGetAllProductsQuery } from "@/api";

import ProductNavigation from "@/modules/products/components/product-navigation";
import ProductAddNew from "@/modules/products/components/product-add-new";

export default function ProductListAll() {
  const { data } = useGetAllProductsQuery();

  if (!data) {
    return (
      <div>
        <ProductNavigation activeLink="products-all" />
        <p>Loading...</p>
      </div>
    );
  }

  const allProductsArr = data.allProducts;
  // const allProductsArr: any[] = [];

  if (allProductsArr.length === 0) {
    return <ProductAddNew currActiveLink="products-all" />;
  }

  return (
    <div className="flex h-full flex-col gap-4 lg:gap-6">
      <div>
        <ProductNavigation activeLink="products-all" />
        <h1 className="text-lg font-semibold md:text-xl">All Products</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          View all your listed products.
        </p>
      </div>

      <div className="flex flex-1 rounded-lg border border-dashed p-4 shadow-sm">
        <div className="flex flex-col gap-5 sm:gap-2">
          {allProductsArr.map((product) => (
            <div className="flex items-center" key={product.id}>
              <img
                className="mr-4 h-12 w-16 rounded-md object-cover"
                src={product.imageUrl}
              />
              <div className="flex flex-col sm:flex-row">
                <span className="mr-2 text-sm">{product.name}</span>
                <span className="text-sm text-muted-foreground">
                  Sku# {product.id}, ${product.regularPrice / 100}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
