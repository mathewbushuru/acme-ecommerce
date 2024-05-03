import { Navigate } from "react-router-dom";

import SidebarLayout from "@/layouts/sidebar-layout";

import ProductPageSidebar from "@/modules/products/components/product-page-sidebar";
import ProductsHome from "@/modules/products/components/products-home";

export const productRoutes = [
  {
    path: "/products/home",
    element: (
      <SidebarLayout
        sidebarComponent={<ProductPageSidebar />}
        mainComponent={<ProductsHome />}
      />
    ),
    isOnNavbar: false,
    name: "All products",
    icon: null
  },
  {
    path: "/products/*",
    element: <Navigate to="/products/home" replace={true} />,
    isOnNavbar: false,
    name: "Products Catchall",
    icon: null
  },
];
