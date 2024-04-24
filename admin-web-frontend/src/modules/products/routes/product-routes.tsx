import { Navigate } from "react-router-dom";

import SidebarLayout from "@/layouts/sidebar-layout";
import ProductPageSidebar from "@/modules/products/components/product-page-sidebar";

export const productRoutes = [
  {
    path: "/products/all",
    element: (
      <SidebarLayout
        sidebarComponent={<ProductPageSidebar />}
        mainComponent={<>All Products</>}
      />
    ),
    isOnNavbar: false,
    name: "All products",
    icon: null
  },
  {
    path: "/products/*",
    element: <Navigate to="/products" replace={true} />,
    isOnNavbar: false,
    name: "Products Catchall",
    icon: null
  },
];
