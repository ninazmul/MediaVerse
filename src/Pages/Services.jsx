import { useLoaderData } from "react-router-dom";
import ServiceCart from "./servCart";

const Services = () => {
  const services = useLoaderData();
  return (
    <div className="pt-16 min-h-7xl"> 
      <div>
        <h1 className="text-4xl font-bold text-red-500 text-center p-5">Our Services:</h1>
        <div className="grid grid-cols-3 gap-4 justify-items-center">
                  {
                      services.map(service =><ServiceCart key={service.id} service={service}></ServiceCart>)
                  }
        </div>
      </div>
    </div>
  );
};

export default Services;
