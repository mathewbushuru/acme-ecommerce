import { useGetAllProductsQuery } from "@/api";

export default function ProductListAll() {
  const { data } = useGetAllProductsQuery();

  if (!data) {
    return <>Loading...</>;
  }

  const allProductsArr = data.allProducts;

  return (
    <div className="flex h-full flex-col gap-4 lg:gap-6">
      <div>
        <h1 className="text-lg font-semibold md:text-xl">All Products</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          View all your listed products.
        </p>
      </div>

      <div className="flex flex-1 rounded-lg border border-dashed p-4 shadow-sm">
        <div className="flex flex-col gap-2">
          {allProductsArr.map((product) => (
            <div className="flex items-center" key={product.id}>
              <img
                className="mr-4 h-12 w-16 rounded-md object-cover"
                src={product.imageUrl}
              />
              <span className="mr-2 text-sm">{product.name}</span>
              <span className="text-sm text-muted-foreground">
                Sku# {product.id}, ${product.regularPrice / 100}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
