import { useLoaderData } from "react-router-dom";
import MediaCart from "./MediaCart";

const ServiceDetails = () => {

    const allMedia = useLoaderData();

    return (
      <div className="pt-16">
        <h1 className="text-4xl font-bold text-red-500 text-center p-4">
          All Available Media: {allMedia.length}
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {allMedia.map((media) => (
            <MediaCart key={media._id} media={media}></MediaCart>
          ))}
        </div>
      </div>
    );
};

export default ServiceDetails;