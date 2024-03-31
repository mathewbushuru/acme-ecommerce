import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SigninPage from "@/pages/signin-page";
import DashboardPage from "@/pages/dashboard-page";

const publicRoutes = [
  {
    path: "/",
    element: <SigninPage />,
    errorElement: <SigninPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />
  }
];

const publicRouter = createBrowserRouter(publicRoutes);

function App() {
  return <RouterProvider router={publicRouter} />;
}

export default App;
