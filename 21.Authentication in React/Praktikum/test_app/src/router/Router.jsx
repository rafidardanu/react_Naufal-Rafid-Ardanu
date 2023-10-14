import ProductDetail from "../pages/ProductDetail";
import CreateProduct from "../pages/CreateProduct";
import LandingPage from "../pages/landingPage";
import Login from "../pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/CProduct",
    element: <CreateProduct />,
  },
  {
    path: "/CProduct/:id",
    element: <ProductDetail />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
