import { Navigate } from "react-router-dom";

export const customerRoutes = [
  {
    path: "/customers/*",
    isOnNavbar: false,
    element: <Navigate to="/customers" replace={true} />,
  },
];
