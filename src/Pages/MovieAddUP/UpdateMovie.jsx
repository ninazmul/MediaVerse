import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateMovie = () => {
  const media = useLoaderData();

  const { _id, name, photo, brand, type, price, description, rating } = media;

  const handleUpdateMedia = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const updatedMedia = {
      name,
      photo,
      brand,
      type,
      price,
      description,
      rating,
    };
    fetch(`https://mediaverse-website-server.vercel.app/media/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedMedia),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Successful!",
            text: "Media updated successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div className="pt-16">
      <div>
        <div>
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold text-red-500">
                  Update Media!
                </h1>
                <img className="py-4" src={photo} alt="" />
                <p className="py-6">
                  The "Update Media" form is a convenient tool designed to
                  empower you to make real-time adjustments and enhancements to
                  your existing multimedia content on your website or platform.
                  This form provides an efficient and user-friendly interface
                  for modifying media files such as images, videos, audio, or
                  documents. With the "Update Media" form, you can easily select
                  the media item you wish to edit, make changes to titles,
                  descriptions, tags, or even the media itself, ensuring your
                  content remains relevant and up to date. Once you submit the
                  modifications, the updated media seamlessly replaces the
                  previous version, allowing you to maintain a dynamic and
                  compelling online presence. This form is an essential asset
                  for bloggers, website administrators, and content creators who
                  understand the importance of keeping their multimedia content
                  fresh and engaging. With the "Update Media" form, maintaining
                  a dynamic online presence has never been easier.
                </p>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl glass ">
                <form onSubmit={handleUpdateMedia} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      name="name"
                      defaultValue={name}
                      type="text"
                      placeholder="Name of your Media"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input
                      name="photoURL"
                      type="text"
                      defaultValue={photo}
                      placeholder="Photo URL"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Brand Name</span>
                    </label>
                    <input
                      name="brand"
                      type="text"
                      defaultValue={brand}
                      placeholder="Brand name of your Media"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Type</span>
                    </label>
                    <input
                      name="type"
                      defaultValue={type}
                      type="text"
                      placeholder="Type of your Media"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      name="price"
                      type="number"
                      defaultValue={price}
                      placeholder="$ Price"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <input
                      name="description"
                      defaultValue={description}
                      type="text"
                      placeholder="Write description..."
                      className="input input-bordered pb-16 pt-6"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Rating</span>
                    </label>
                    <input
                      name="rating"
                      type="text"
                      defaultValue={rating}
                      placeholder="Rating ?/5"
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control mt-6">
                    <input
                      className="btn bg-red-500 text-white text-xl"
                      type="submit"
                      value="Update Media"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateMovie;
