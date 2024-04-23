import { Navigate } from "react-router-dom";

import SidebarLayout from "@/layouts/sidebar-layout";
import ProductPageSidebar from "@/modules/products/components/product-page-sidebar";

export const productRoutes = [
  {
    path: "/products/all",
    isOnNavbar: false,
    element: (
      <SidebarLayout
        sidebarComponent={<ProductPageSidebar />}
        mainComponent={<>All Products</>}
      />
    ),
  },
  {
    path: "/products/*",
    isOnNavbar: false,
    element: <Navigate to="/products" replace={true} />,
  },
];
