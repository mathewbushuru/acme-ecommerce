import SidebarLayout from "@/layouts/sidebar-layout";

import ProductPageSidebar from "@/components/product-page-sidebar";
import ProductAddNew from "@/components/product-add-new";

export default function ProductsPage() {
  return (
      <SidebarLayout
        sidebarComponent={<ProductPageSidebar />}
        mainComponent={<ProductAddNew />}
      />
  );
}
