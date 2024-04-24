import { Navigate } from "react-router-dom";

export const customerRoutes = [
  {
    path: "/customers/*",
    element: <Navigate to="/customers" replace={true} />,
    isOnNavbar: false,
    name: "Customers Catchall",
    icon: null,
  },
];
