import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import ServiceDetails from "../Pages/ServicePages/ServiceDetails";


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
          path: "/services",
          element: <Services></Services>
        },
        {
            path: "/services/:id",
            element: <ServiceDetails></ServiceDetails>
      }
    ],
  },
]);

export default Routes