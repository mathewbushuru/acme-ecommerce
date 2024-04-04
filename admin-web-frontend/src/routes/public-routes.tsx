import SigninPage from "@/pages/signin-page";
import DashboardPage from "@/pages/dashboard-page";
import InventoryMaintenancePage from "@/pages/inventory-maintenance-page";
import PreferredShoppersPage from "@/pages/preferred-shoppers-page";
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
      path: "/inventory",
      element: <InventoryMaintenancePage />,
      name: "Inventory",
      isOnNavbar: true
    },
    {
      path: "/customers",
      element: <PreferredShoppersPage />,
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