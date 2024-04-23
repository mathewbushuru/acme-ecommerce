import { Navigate } from "react-router-dom";

import SigninPage from "@/global-pages/signin-page";


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
    path: "/*",
    element: <Navigate to="/" replace={true} />,
    name: "Catch all",
    isOnNavbar: false,
    icon: null
  }
];
