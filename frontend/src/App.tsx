import { Provider as ReduxProvider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { store } from "@/store/store";
import { useGetRootQuery } from "@/api";

import HomePage from "@/pages/home-page";
import SigninPage from "@/pages/signin-page";

const publicRoutes = [
  {
    path: "/",
    element: <HomePage />,
    errorElement: <HomePage />,
  },
  {
    path: "/auth/signup",
    element: <SigninPage />,
  },
  {
    path: "/auth/signin",
    element: <SigninPage />,
  },
];

const publicRouter = createBrowserRouter(publicRoutes);

function AppRouter() {
  const { data } = useGetRootQuery();
  data && console.log(data);

  return <RouterProvider router={publicRouter} />;
}

function App() {
  return (
    <ReduxProvider store={store}>
      <AppRouter />
    </ReduxProvider>
  );
}

export default App;
