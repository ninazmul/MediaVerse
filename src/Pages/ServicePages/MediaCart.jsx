import {
  AiFillStar,
  AiFillEdit,
  AiOutlineShoppingCart,
  AiFillDelete,
} from "react-icons/ai";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MediaCart = ({ media, medias, setMedia }) => {
  const { _id, name, photo, brand, type, price, description, rating } = media;

  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate(`/media/${_id}`);
  };

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/media/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your media has been deleted.", "success");

              const remaining = medias.filter((med) => med._id !== _id);
              setMedia(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card w-96 h-96 glass">
        <figure>
          <div className="">
            <img src={photo} alt="car!" />
          </div>
        </figure>
        <div className="card-body">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="card-title text-red-500">{name}</h2>
            </div>
            <div className="flex text-red-500 text-2xl">
              <span onClick={() => handleLearnMoreClick()}>
                <AiFillEdit></AiFillEdit>
              </span>
              <button onClick={() => handleDelete(_id)}>
                <span>
                  <AiFillDelete></AiFillDelete>
                </span>
              </button>
              <span className="text-2xl text-red-500">
                <AiOutlineShoppingCart></AiOutlineShoppingCart>
              </span>
            </div>
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
            <button
              onClick={() => handleLearnMoreClick()}
              className="btn bg-red-500 text-white text-xl w-full"
            >
              Learn more!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCart;
