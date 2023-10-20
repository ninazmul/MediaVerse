import Swal from "sweetalert2";

const AddMovie = () => {

    const handleAddMedia = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photoURL.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        
        const newMedia = {name, photo, brand, type, price, description, rating}
        
        fetch("http://localhost:3000/media", {

            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newMedia)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                      title: "Successful!",
                      text: "New Media added successfully!",
                      icon: "success",
                      confirmButtonText: "OK",
                    });
                }
        })
    }

    return (
      <div>
        <div>
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold text-red-500">Add Media!</h1>
                <p className="py-6">
                  The "Add Media" form is a user-friendly tool that allows you
                  to effortlessly upload and integrate multimedia content into
                  your website or platform. Whether you're looking to enrich
                  your web pages with images, videos, audio files, or documents,
                  this form simplifies the process. With an intuitive interface,
                  you can easily select the media files you want to upload, and
                  the form will efficiently handle the rest. Add titles,
                  descriptions, and tags to your media to improve organization
                  and searchability. Once submitted, your media will be
                  seamlessly integrated into your content, enhancing the overall
                  user experience. The "Add Media" form streamlines the process
                  of enriching your digital presence, making it easier than ever
                  to captivate your audience with engaging multimedia elements.
                  Whether you're a blogger, website administrator, or content
                  creator, this form is your gateway to a more dynamic and
                  visually appealing online presence.
                </p>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl glass ">
                <form onSubmit={handleAddMedia} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      name="name"
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
                      placeholder="Rating ?/5"
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control mt-6">
                    <input
                      className="btn bg-red-500 text-white text-xl"
                      type="submit"
                      value="Add Media"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddMovie;