import { Link } from "react-router-dom";


const SignIn = () => {
    return (
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-red-500">SignIn now!</h1>
              <p className="py-6">
                If you already have an account, simply enter your email address
                and password to sign in. Once you're signed in, you'll have
                access to all of the features and benefits of{" "}
                <span className="font-bold">
                  Media
                  <span className="text-red-500">Verse</span>
                </span>
                .
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl glass ">
              <form className="card-body">
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
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
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn bg-red-500 text-white text-xl"
                    type="submit"
                    value="Sign In"
                  />
                            </div>
                            {
                                <p>Don't have an Account? <Link to='/signup' className="text-red-500 underline">SignUp</Link>now!</p>
                            }
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignIn;