import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center p-40">
      <h2 className="text-6xl text-red-500 py-4">Oops!!! Error founded!</h2>
      <Link to="/">
        <button className="btn btn-sm bg-gray-500 text-black hover:text-white">
          Go back to home page!
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
