import { createBrowserRouter } from "react-router-dom";

import { publicRoutes } from "@/routes/public-routes";
import { protectedRoutes } from "@/routes/protected-routes";

export const publicRouter = createBrowserRouter(publicRoutes);
export const privateRouter = createBrowserRouter(protectedRoutes);