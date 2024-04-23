import { Navigate } from "react-router-dom";

export const analyticRoutes = [
  {
    path: "/analytics/*",
    isOnNavbar: false,
    element: <Navigate to="/analytics" replace={true} />,
  },
];
