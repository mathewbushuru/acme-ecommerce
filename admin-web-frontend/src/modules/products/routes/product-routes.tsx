import { Navigate } from "react-router-dom";

import SidebarLayout from "@/layouts/sidebar-layout";

import ProductPageSidebar from "@/modules/products/components/product-page-sidebar";
import ProductsHome from "@/modules/products/components/products-home";
import ProductMaintenance from "@/modules/products/components/product-maintenance";
import ProductMaintenanceEdit from "@/modules/products/components/product-maintenance-edit";

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
    name: "Products home",
    icon: null,
  },
  {
    path: "/products/maintenance",
    element: (
      <SidebarLayout
        sidebarComponent={<ProductPageSidebar />}
        mainComponent={<ProductMaintenance />}
      />
    ),
    isOnNavbar: false,
    name: "Product maintenance",
    icon: null,
  },
  {
    path: "/products/maintenance/:skuNumber",
    element: (
      <SidebarLayout
        sidebarComponent={<ProductPageSidebar />}
        mainComponent={<ProductMaintenanceEdit />}
      />
    ),
    isOnNavbar: false,
    name: "Product maintenance",
    icon: null,
  },
  {
    path: "/products/*",
    element: <Navigate to="/products/home" replace={true} />,
    isOnNavbar: false,
    name: "Products Catchall",
    icon: null,
  },
];
