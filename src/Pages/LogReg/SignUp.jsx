import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignUp = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one Upper case character!"
      );
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one Lower case character!"
      );
      return;
    } else if (!/[0-9]/.test(password)) {
      setRegisterError("Your password should have at least one number!");
      return;
    } else if (!/[!@#$%^&*()-+]/.test(password)) {
      setRegisterError(
        "Your password should have at least one spacial character!"
      );
      return;
    }

    createUser(email, password, name, photoURL)
      .then((result) => {
        console.log(result.user);

        const createdAt = result.user?.metadata?.creationTime;
        const user = {
          email,
          createdAt: createdAt,
        };
        fetch("https://mediaverse-website-server.vercel.app/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Signed Up Successfully!",
                text: "The user has been created and Signed Up successfully.",
                icon: "success",
                confirmButtonText: "OK",
              });
              setSuccess("User Created Successfully!");
              navigate(location?.state ? location.state : "/");
            }
          });
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
  };
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
  };

  return (
    <div>
      <div className="hero min-h-screen pt-16">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl text-red-500 lg:text-5xl font-bold">
              SignUp now!
            </h1>
            <p className="py-6">
              If you're new to{" "}
              <span className="font-bold">
                Media
                <span className="text-red-500">Verse</span>
              </span>
              , creating an account is quick and easy. Simply enter your name,
              email address, and password to get started. Once you've created an
              account, you'll be able to enjoy all of the benefits listed above.
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
                <div className="flex relative">
                  <div>
                    {" "}
                    <input
                      type={show ? "text" : "password"}
                      name="password"
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
              <div>
                <p className="text-center">Or</p>
                <button
                  onClick={handleSignInWithGoogle}
                  className=" hover:bg-red-500 text-white p-1 rounded-lg w-full text-xl font-bold border-2 border-red-500 flex items-center justify-center gap-1"
                >
                  <FcGoogle></FcGoogle>Google
                </button>
              </div>
              {registerError && <p className="text-red-500">{registerError}</p>}
              {success && <p className="text-green-500">{success}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
