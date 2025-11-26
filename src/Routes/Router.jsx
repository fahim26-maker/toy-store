import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/Homelayout/HomeLayouts";
import Home from "../pages/Home/Home";
import ToyDetails from "../pages/toyDetails/ToyDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Auth from "../pages/Auth/Auth";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/loading/Loading";
import ErrorElement from "../pages/ErrorElement/Errorelement";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("/cars.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "my-profile",
        element: <h1>home</h1>,
      },
      {
        path: "toyDetails/:id",
        loader: () => fetch("/cars.json"),
        hydrateFallbackElement: <Loading></Loading>,
        element: <PrivateRoute>
          <ToyDetails></ToyDetails>
        </PrivateRoute>,
      },
      
      {
        path: "/*",
        element: <h1 className="text-center">Error</h1>,
      },
       
    ],
  },
 {

        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
          {
            path: "/auth/login",
            element: <Login></Login>,
          },
          {
            path: "/auth/register",
            element: <Register></Register>,
          },
        ],
  },
]);

export default router;
