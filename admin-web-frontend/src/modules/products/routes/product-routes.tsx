import { Navigate } from "react-router-dom";

import SidebarLayout from "@/layouts/sidebar-layout";

import ProductPageSidebar from "@/modules/products/components/product-page-sidebar";
import ProductsList from "@/modules/products/components/products-list";
import ProductMaintenance from "@/modules/products/components/product-maintenance";
import ProductMaintenanceEdit from "@/modules/products/components/product-maintenance-edit";

export const productRoutes = [
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
    path: "/products/list",
    element: (
      <SidebarLayout
        sidebarComponent={<ProductPageSidebar />}
        mainComponent={<ProductsList />}
      />
    ),
    isOnNavbar: false,
    name: "Products List",
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
    element: <Navigate to="/products/maintenance" replace={true} />,
    isOnNavbar: false,
    name: "Products Catchall",
    icon: null,
  },
];
