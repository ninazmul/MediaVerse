import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import ServiceDetails from "../Pages/ServicePages/ServiceDetails";
import UpdateMovie from "../Pages/MovieAddUP/UpdateMovie";
import AddMovie from "../Pages/MovieAddUP/AddMovie";
import SignUp from "../Pages/LogReg/SignUp";
import SignIn from "../Pages/LogReg/SignIn";
import CartItems from "../Pages/Header/CartItems";
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/About";
import Media from "../Pages/Media";
import Marq from "../Pages/Marq";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/services/:brand",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),

        loader: () =>
          fetch("https://mediaverse-website-server.vercel.app/media"),
      },
      {
        path: "/marq",
        element: <Marq></Marq>,
      },
      {
        path: "/media/:id",
        element: (
          <PrivateRoute>
            <Media></Media>
          </PrivateRoute>
        ),
      },
      {
        path: "/updatemovie/:id",
        element: (
          <PrivateRoute>
            <UpdateMovie></UpdateMovie>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://mediaverse-website-server.vercel.app/media/${params.id}`
          ),
      },
      {
        path: "/addmovie",
        element: (
          <PrivateRoute>
            <AddMovie></AddMovie>
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <CartItems></CartItems>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

export default Routes;
