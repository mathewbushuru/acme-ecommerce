import RootLayout from "@/layouts/root-layout";

import ProductPageSidebar from "@/components/product-page-sidebar";
import ProductAddNew from "@/components/product-add-new";

export default function ProductsPage() {
  return (
    <RootLayout>
      <div className="grid w-full md:grid-cols-[220px_1fr] lg:grid-cols-[250px_1fr]">
        {/* Sidebar  */}
        <div className="hidden shadow-lg md:block 2xl:shadow-none">
          <ProductPageSidebar />
        </div>

        {/* Page Content  */}
        <main className="p-4 lg:p-6">
          <ProductAddNew />
        </main>
      </div>
    </RootLayout>
  );
}
