import { Home, Package, Users, LineChart } from "lucide-react";

import SigninPage from "@/global-pages/signin-page";
import DashboardPage from "@/modules/dashboard/pages/dashboard-page";
import ProductsPage from "@/modules/products/pages/products-page";
import CustomersPage from "@/modules/customers/pages/customers-page";
import AnalyticsPage from "@/modules/analytics/pages/analytics-page";

export const publicRoutes = [
  {
    path: "/",
    element: <SigninPage />,
    errorElement: <SigninPage />,
    name: "Sign in",
    isOnNavbar: false,
    icon: null,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    name: "Dashboard",
    isOnNavbar: true,
    icon: <Home className="mr-2 h-4 w-4" />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
    name: "Products",
    isOnNavbar: true,
    icon: <Package className="mr-2 h-4 w-4" />,
  },
  {
    path: "/customers",
    element: <CustomersPage />,
    name: "Customers",
    isOnNavbar: true,
    icon: <Users className="mr-2 h-4 w-4" />,
  },
  {
    path: "/analytics",
    element: <AnalyticsPage />,
    name: "Analytics",
    isOnNavbar: true,
    icon: <LineChart className="mr-2 h-4 w-4" />,
  },
];
