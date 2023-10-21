import { useLoaderData, useParams } from "react-router-dom";
import MediaCart from "./MediaCart";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import Marq from "../Marq";

const ServiceDetails = () => {
  const allMedia = useLoaderData();
  const [medias, setMedias] = useState(allMedia);
  const { brand } = useParams();
  console.log(brand);

  // Filter media items based on the brand parameter
  const filteredMedia = medias.filter((media) => media.brand === brand);

  return (
    <div className="pt-16">
      <h1 className="text-2xl lg:text-4xl font-bold text-red-500 text-center p-4">
        All Available Media for Brand: {brand}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMedia.length === 0 ? (
          <p className="text-7xl text-yellow-500 text-center lg:col-span-3 py-8">
            No items available for this brand!
          </p>
        ) : (
          filteredMedia.map((media) => (
            <MediaCart
              key={media._id}
              media={media}
              medias={medias}
              setMedias={setMedias}
            ></MediaCart>
          ))
        )}
      </div>
      <h1 className="text-4xl font-bold text-red-500 text-center p-4">
        Our Sponsores:
      </h1>
      <Marquee>
        <Marq></Marq>
      </Marquee>
    </div>
  );
};

export default ServiceDetails;
