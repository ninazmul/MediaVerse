import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if (loading) {
        return (
          <div className="text-center flex justify-center items-center p-52">
            <span className="loading text-red-500 loading-dots loading-lg"></span>
          </div>
        );
    }
    if (user) {
        return children;
    }
    return <Navigate to="/signin"></Navigate>
};

export default PrivateRoute;