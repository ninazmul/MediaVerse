import { AiFillStar, AiFillEdit } from "react-icons/ai";

const MediaCart = ({ media }) => {
  const { name, photo, brand, type, price, description, rating } = media;
  return (
    <div>
      <div className="card w-96 h-96 glass">
        <figure>
          <img src={photo} alt="car!" />
        </figure>
        <div className="card-body">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="card-title text-red-500">{media.name}</h2>
            </div>
            <div className="text-red-500 text-2xl"><AiFillEdit></AiFillEdit></div>
          </div>
          <p className="flex justify-between items-center">
            <span>{brand}</span>
            <span className="flex items-center gap-1">
              {rating}
              <AiFillStar className="text-red-500 text-xl "></AiFillStar>
            </span>
          </p>
          <p className="flex justify-between items-center">
            <span>{type}</span>
            <span className="text-xl font-bold gap-1">$ {price}</span>
          </p>

          <p>{description.slice(0, 35)}...</p>
          <div className="card-actions justify-end">
            <button className="btn bg-red-500 text-white text-xl w-full">
              Learn more!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCart;
