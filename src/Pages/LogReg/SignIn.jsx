import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";



const SignIn = () => {

    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState("");
    const [success, setSuccess] = useState("");
    const [show, setShow] = useState(false);

    const handleSignIn = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password');
        setRegisterError("");
        setSuccess("");

        signIn(email, password)
          .then((result) => {
            if (result.user) {
              Swal.fire({
                title: "Signed In Successfully!",
                text: "The user has been Signed In successfully.",
                icon: "success",
                confirmButtonText: "OK",
              });
              setSuccess("Log In Successfully!");
              navigate(location?.state ? location.state : "/");
            }
            console.log(result.user);
          })
          .catch((error) => {
            console.error(error);
            setRegisterError(error.message);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
            console.error(error);
          });
            
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
          .then((result) => {
            if (result.user) {
              Swal.fire({
                title: "Signed In Successfully!",
                text: "The user has been Signed In successfully.",
                icon: "success",
                confirmButtonText: "OK",
              });
                setSuccess("Log In Successfully!")
              navigate(location?.state ? location.state : "/");
            }
            console.log(result.user);
          })
            .catch((error) => {
              console.error(error);
              setRegisterError(error.message);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
            console.error(error);
          });

    }


    return (
      <div>
        <div className="hero min-h-screen pt-16">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl lg:text-5xl font-bold text-red-500">SignIn now!</h1>
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
              <form onSubmit={handleSignIn} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
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
                  <div className="flex relative">
                    <div>
                      <input
                        name="password"
                        type={show ? "text" : "password"}
                        placeholder="password"
                        className="input input-bordered w-80"
                        required
                      />
                    </div>
                    <div>
                      <span
                        className="right-2 top-2.5 absolute"
                        onClick={() => setShow(!show)}
                      >
                        {show ? (
                          <AiFillEye className="text-2xl text-black"></AiFillEye>
                        ) : (
                          <AiFillEyeInvisible className="text-2xl text-black"></AiFillEyeInvisible>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn bg-red-500 text-white text-xl"
                    type="submit"
                    value="Sign In"
                  />
                </div>
                {
                  <p>
                    Don't have an Account?{" "}
                    <Link to="/signup" className="text-red-500 underline">
                      SignUp
                    </Link>
                    now!
                  </p>
                }
                <div>
                  <p className="text-center">Or</p>
                  <button
                    onClick={handleSignInWithGoogle}
                    className=" hover:bg-red-500 text-white p-1 rounded-lg w-full text-xl font-bold border-2 border-red-500 flex items-center justify-center gap-1"
                  >
                    <FcGoogle></FcGoogle>Google
                  </button>
                </div>
                {registerError && (
                  <p className="text-red-500">{registerError}</p>
                )}
                {success && <p className="text-green-500">{success}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignIn;