import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SigninPage from "@/pages/signin-page";
import DashboardPage from "@/pages/dashboard-page";
import InventoryMaintenancePage from "@/pages/inventory-maintenance-page";
import PreferredShoppersPage from "@/pages/preferred-shoppers-page";
import AnalyticsPage from "@/pages/analytics-page";

const publicRoutes = [
  {
    path: "/",
    element: <SigninPage />,
    errorElement: <SigninPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />
  },
  {
    path: "/inventory-maintenance",
    element: <InventoryMaintenancePage />
  },
  {
    path: "/preferred-shoppers",
    element: <PreferredShoppersPage />
  },
  {
    path: "/analytics",
    element: <AnalyticsPage />
  }
];

const publicRouter = createBrowserRouter(publicRoutes);

function App() {
  return <RouterProvider router={publicRouter} />;
}

export default App;
