import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Header/Navbar";
import Footer from "../Pages/Footer/Footer";

const Root = () => {
    return (
      <div className="mx-auto max-w-7xl">
        <Navbar></Navbar>
        <div className="min-h-[600px]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Root;