import { Link } from "react-router-dom";
const SignUp = () => {

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;


    }
    return (
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">SignUp now!</h1>
              <p className="py-6">
                If you're new to{" "}
                <span className="font-bold">
                  Media
                  <span className="text-red-500">Verse</span>
                </span>
                , creating an account is quick and easy. Simply enter your name,
                email address, and password to get started. Once you've created
                an account, you'll be able to enjoy all of the benefits listed
                above.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl glass">
              <form onSubmit={handleSignUp} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
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
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn bg-red-500 text-xl text-white"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
                {
                  <p>
                    Already have an Account?{" "}
                    <Link to="/signin" className="text-red-500 underline">
                      SignIn
                    </Link>
                    now!
                  </p>
                }
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;