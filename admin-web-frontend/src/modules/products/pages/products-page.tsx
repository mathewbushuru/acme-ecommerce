import SidebarLayout from "@/layouts/sidebar-layout";

import ProductPageSidebar from "@/modules/products/components/product-page-sidebar";
import ProductAddNew from "@/modules/products/components/product-add-new";

export default function ProductsPage() {
  return (
    <SidebarLayout
      sidebarComponent={<ProductPageSidebar />}
      mainComponent={<ProductAddNew currActiveLink="products-home" />}
    />
  );
}
