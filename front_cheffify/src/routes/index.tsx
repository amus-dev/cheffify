import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/Home"));
const CongeladosPage = lazy(() => import("@/pages/Congelados"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/congelados",
    element: <CongeladosPage />,
  },
]);

const Routes = () => {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Routes;
