import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleSignUp = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  }

    const navBtn = (
      <>
        <div className="font-bold text-xl space-x-2 ">
          <NavLink className="hover:text-red-500" to="/">
            Home
          </NavLink>
          <NavLink className="hover:text-red-500" to="/services/id">
            All Media
          </NavLink>
          <NavLink className="hover:text-red-500" to="/addmovie">
            Add Media
          </NavLink>
          <NavLink className="hover:text-red-500" to="/about">
            About Us
          </NavLink>
        </div>
      </>
    );
 
    return (
      <div>
        <div className="navbar fixed mx-auto max-w-7xl">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navBtn}
              </ul>
            </div>
            <Link to="/">
              <a className="btn btn-ghost normal-case text-xl">
                Media<span className="text-red-500">Verse</span>
              </a>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navBtn}</ul>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item text-red-500">
                    8
                  </span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body glass rounded-2xl">
                  <span className="font-bold text-lg">8 Items</span>
                  <div className="card-actions">
                    <NavLink
                      className="btn bg-red-500 btn-block text-white"
                      to="/cart"
                    >
                      View cart
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow glass rounded-box w-52"
              >
                <li>
                  <NavLink to="/profile" className="hover:text-red-500">
                    Profile
                  </NavLink>
                </li>
                <li>
                  {user ? (
                    <NavLink
                      onClick={handleSignUp}
                      className="hover:text-red-500"
                    >
                      SignOut
                    </NavLink>
                  ) : (
                    <NavLink to="/signin" className="hover:text-red-500">
                      SignIn
                    </NavLink>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Navbar;