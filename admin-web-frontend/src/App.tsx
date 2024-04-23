import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { store, useAppSelector } from "@/store/store";
import { useGetRootQuery } from "@/api";

import { publicRouter, privateRouter } from "@/routes";

function AppRouter() {
  const { data } = useGetRootQuery();
  data && console.log(data);

  const user = useAppSelector(state => state.adminAuth.user);

  const appRouter = user ? privateRouter : publicRouter;
  
  return <RouterProvider router={appRouter} />;
}

function App() {
  return (
    <ReduxProvider store={store}>
      <AppRouter />
    </ReduxProvider>
  );
}

export default App;
