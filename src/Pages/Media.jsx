import Marquee from "react-fast-marquee";
import Marq from "./Marq";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Swal from "sweetalert2";

const Media = () => {
  const { id } = useParams();
  const [media, setMedia] = useState(null);
  const [cart, setCart] = useState([]);

  const handleAddtoCart = () => {
    if (media) {
      const newItem = { name: media.name, id: media.id, price: media.price };
      setCart([...cart, newItem]);

      fetch("https://mediaverse-website-server.vercel.app/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      })
        .then((response) => response.json())
        .then((data) => {
          Swal.fire("Success", "Item added to cart!", "success");
          console.log("Item added to cart:", data);
        })
        .catch((error) => {
          console.error("Error adding item to cart:", error);
          Swal.fire("Error", "Failed to add item to cart.", "error");
        });
    } else {
      console.error(
        "Media is not defined. Make sure you have fetched media data."
      );
    }
  };

  useEffect(() => {
    fetch(`https://mediaverse-website-server.vercel.app/media/${id}`)
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
          <h1 className="text-2xl lg:text-4xl font-bold text-red-500 text-center p-4">
            Media Details:
          </h1>
          <div className="flex items-center justify-between py-2">
            <h2 className="text-2xl lg:text-5xl font-bold text-red-500">
              {media.name}
            </h2>
            <span className="text-2xl lg:text-5xl flex items-center text-red-500">
              <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-info">
                  <span className="text-lg w-32 flex items-center">
                    {" "}
                    Add to Cart
                  </span>{" "}
                </div>
              </div>

              <button onClick={(e) => handleAddtoCart(e)}>
                <AiOutlineShoppingCart />
              </button>
            </span>
          </div>
          <img className="w-full md:h-96" src={media.photo} alt={media.name} />
          <div className="flex justify-between text-2xl font-bold text-red-500">
            <p>$ {media.price}</p> <p>{media.brand}</p>
          </div>
          <p className="text-xl text-justify">
            <span className="font-bold">Description:</span> {media.description}
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
      <div>
        <div className="carousel w-full h-72 py-4">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/34NDPXm/images-q-tbn-ANd9-Gc-TF3-N5-R-gq-G9n-Go-OCs-Sz-KZkxa-WRg-Es-VVnu1cg-usqp-CAU.jpg"
              className="w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/7WYj9t1/images-q-tbn-ANd9-Gc-Sq-Kg-H6hb-SHPHCgz-XMUIEQg1zas-Gq21k-S73c-A-usqp-CAU.jpg"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/Yd5c7TZ/images-q-tbn-ANd9-Gc-Qn4-U-5tewrdc-Od-R2m2n3-IEpxf-Yls-Jxh-Wh0s-Q-usqp-CAU.jpg"
              className="w-full"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/BzDQdkG/images-q-tbn-ANd9-Gc-Qh-RZmg-ZBT3-WXAb-X7-QIA9l-CD0-Jvgbx66-BJYGUs-Fw-Hq-A2y-z-BK6pj6c-Bs-EI4qky-YK6.jpg"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;
