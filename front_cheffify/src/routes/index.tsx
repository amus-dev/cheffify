import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const HomePage = lazy(() => import("@pages/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
