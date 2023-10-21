import { useLoaderData } from "react-router-dom";
import ServiceCart from "./servCart";

const Services = () => {
  const services = useLoaderData();

  if (!services) {
    return (
      <div className="text-center flex justify-center items-center p-52">
        <span className="loading text-red-500 loading-dots loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="">
      <h1 className="text-4xl font-bold text-red-500 text-center p-5">
        Our Services:
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {services.map((service) => (
          <ServiceCart key={service.id} service={service}></ServiceCart>
        ))}
      </div>
    </div>
  );
};

export default Services;
