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


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/services/:id",
        element: 
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>,
        
        loader: () => fetch("http://localhost:3000/media"),
      },
      {
        path: "/updatemovie",
        element: (
          <PrivateRoute>
            <UpdateMovie></UpdateMovie>
          </PrivateRoute>
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

export default Routes