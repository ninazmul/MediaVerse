import { Link } from "react-router-dom";


const Header = () => {
    return (
      <div className="text-white">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/Ky0gk0r/social-media-concept-with-device.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-white">
                Media<span className="text-red-500">Verse</span>
              </h1>
              <p className="mb-5 text-white">
                Your one-stop shop for entertainment and media news
              </p>
              <Link to="signin">
                <p className="btn bg-red-500 text-white border-none">
                  Get Started
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;