import { Navigate } from "react-router-dom";

export const analyticRoutes = [
  {
    path: "/analytics/*",
    element: <Navigate to="/analytics" replace={true} />,
    isOnNavbar: false,
    name: "Analytics Catchall",
    icon: null,
  },
];
