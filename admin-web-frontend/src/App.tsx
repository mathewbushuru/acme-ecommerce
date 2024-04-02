import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SigninPage from "@/pages/signin-page";
import DashboardPage from "@/pages/dashboard-page";
import InventoryMaintenancePage from "@/pages/inventory-maintenance-page";

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
  }
];

const publicRouter = createBrowserRouter(publicRoutes);

function App() {
  return <RouterProvider router={publicRouter} />;
}

export default App;
