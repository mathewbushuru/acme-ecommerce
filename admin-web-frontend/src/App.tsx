import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { publicRoutes } from "./routes/public-routes";

const publicRouter = createBrowserRouter(publicRoutes);

function App() {
  return <RouterProvider router={publicRouter} />;
}

export default App;
