import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import ServiceDetails from "../Pages/ServicePages/ServiceDetails";
import UpdateMovie from "../Pages/MovieAddUP/UpdateMovie";
import AddMovie from "../Pages/MovieAddUP/AddMovie";
import SignUp from "../Pages/LogReg/SignUp";
import SignIn from "../Pages/LogReg/SignIn";
import CartItems from "../Pages/Header/CartItems";


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
            element: <Home></Home>,
        loader: ()=> fetch('/data.json')
      },
        {
            path: "/services/:id",
            element: <ServiceDetails></ServiceDetails>
      },
      {
        path: "/updatemovie",
        element: <UpdateMovie></UpdateMovie>
      },
      {
        path: "/addmovie",
        element: <AddMovie></AddMovie>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: "/cart",
        element: <CartItems></CartItems>
      }
    ],
  },
]);

export default Routes