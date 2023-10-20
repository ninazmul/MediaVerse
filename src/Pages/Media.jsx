import Marquee from "react-fast-marquee";
import Marq from "./Marq";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Media = () => {

   const { id } = useParams();
    const [media, setMedia] = useState(null);
    
    useEffect(() => {
      
      fetch(`http://localhost:3000/media/${id}`)
        .then((response) => response.json())
        .then((data) => {
          
          setMedia(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, [id]);

    
    return (
      <div className="pt-16 space-x-4">
        {media ? (
          <div>
            <h1 className="text-4xl font-bold text-red-500 text-center p-4">
              Media Details:
            </h1>
            <h2 className="text-3xl font-bold text-red-500">{media.name}</h2>
            <img className="w-full h-96" src={media.photo} alt={media.name} />
            <div className="flex justify-between text-2xl font-bold text-red-500">
              <p>$ {media.price}</p> <p>{media.brand}</p>
            </div>
            <p className="text-xl text-justify">
              <span className="font-bold">Description:</span>{" "}
              {media.description}
            </p>
          </div>
        ) : (
          <div className="text-center flex justify-center items-center p-52">
            <span className="loading text-red-500 loading-dots loading-lg"></span>
          </div>
        )}
        <div className="py-4">
          <Marquee>
            <Marq></Marq>
          </Marquee>
        </div>
      </div>
    );
};

export default Media;