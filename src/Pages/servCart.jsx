import { Link } from "react-router-dom";

const ServiceCart = ({ service }) => {
  const { id, brand, logo, industry } = service;
  return (
    <div>
      <div className="card w-96 glass">
        <div className="flex items-center">
          <div>
            <figure>
              <img className="p-4 w-40" src={logo} alt="car!" />
            </figure>
          </div>
          <div>
            <div className="card-body">
              <h2 className="card-title text-red-500">{brand}</h2>
              <p>{industry}</p>
              <div className="card-actions justify-end">
                <Link className="w-full" to={`/services/${brand}`}>
                  <p className="btn bg-red-500 w-full text-white">
                    See More!
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
