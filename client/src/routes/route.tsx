import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/Home"));
const CongeladosPage = lazy(() => import("@/pages/Congelados"));
const ShopPage = lazy(() => import("@/pages/Shop"));
const SingleProductPage = lazy(() => import("@/pages/SingleProduct"));
const Delivery = lazy(() => import("@/pages/Delivery"));
const Login = lazy(() => import("@/pages/Login"));
const CreateAccount = lazy(() => import("@/pages/CreateAccount"));
const Perfil = lazy(() => import("@/pages/Perfil"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/congelados",
    element: <CongeladosPage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/shop/:productSlug",
    element: <SingleProductPage />,
  },
  {
    path: "/delivery",
    element: <Delivery />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/crear-cuenta",
    element: <CreateAccount />,
  },
  {
    path: "/perfil",
    element: <Perfil />,
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
