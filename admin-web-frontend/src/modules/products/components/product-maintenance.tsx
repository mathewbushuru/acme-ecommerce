import ProductNavigation from "./product-navigation";

export default function ProductMaintenance() {
  return <ProductsSubLayout>ProductMaintenance</ProductsSubLayout>;
}

function ProductsSubLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col gap-4 lg:gap-6">
      <div>
        <ProductNavigation activeLink="products-home" />
        <h1 className="text-lg font-semibold md:text-xl">Product Maintenance</h1>
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
