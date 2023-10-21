import React, { useState, useEffect } from "react";

const CartItems = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from your server
    fetch("https://mediaverse-website-server.vercel.app/cart")
      .then((response) => response.json())
      .then((data) => {
        setCartItems(data);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []);

  return (
    <div className="pt-16">
      <h1 className="text-2xl text-center font-bold text-red-500">
        Shopping Cart
      </h1>

      <div className="cart-container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cartItems.map((cartItem) => (
          <div className="cart-item" key={cartItem._id}>
            <div className="card w-96 h-96 glass">
              <figure>
                <div className="">
                  <img className="w-full" src={cartItem.photo} alt="media" />
                </div>
              </figure>
              <div className="card-body">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="card-title text-red-500">{cartItem.name}</h2>
                  </div>
                </div>
                <p className="flex justify-between items-center">
                  <span>{cartItem.brand}</span>
                  <span className="flex items-center gap-1">
                    {cartItem.rating}
                  </span>
                </p>
                <p className="flex justify-between items-center">
                  <span>{cartItem.type}</span>
                  <span className="text-xl font-bold gap-1">
                    $ {cartItem.price}
                  </span>
                </p>
                {cartItem.description && (
                  <p>{cartItem.description.slice(0, 35)}...</p>
                )}
                <div className="card-actions justify-end">
                  <button className="btn bg-red-500 text-white text-xl w-full">
                    Learn more!
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default CartItems;
