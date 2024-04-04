import SigninPage from "@/pages/signin-page";
import DashboardPage from "@/pages/dashboard-page";
import ProductsPage from "@/pages/products-page";
import CustomersPage from "@/pages/customers-page";
import AnalyticsPage from "@/pages/analytics-page";

export const publicRoutes = [
    {
      path: "/",
      element: <SigninPage />,
      errorElement: <SigninPage />,
      name: "Sign in",
      isOnNavbar: false
    },
    {
      path: "/dashboard",
      element: <DashboardPage />,
      name: "Dashboard",
      isOnNavbar: true
    },
    {
      path: "/products",
      element: <ProductsPage />,
      name: "Products",
      isOnNavbar: true
    },
    {
      path: "/customers",
      element: <CustomersPage />,
      name: "Customers",
      isOnNavbar: true
    },
    {
      path: "/analytics",
      element: <AnalyticsPage />,
      name: "Analytics",
      isOnNavbar: true
    }
  ];