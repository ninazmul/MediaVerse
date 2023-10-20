
import { Link } from "react-router-dom";
import Header from "./Header/Header";
import Services from "./Services";
import Marquee from "react-fast-marquee";
import Marq from "./Marq";
const Home = () => {

    
    // console.log(services)
    return (
      <div className="">
        <Header></Header>
        <Services></Services>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-500 text-center p-4">
            About Us
          </h1>
          <div className="space-x-1">
            <p>
              <span className="font-bold">
                Media
                <span className="text-red-500">Verse</span>
              </span>{" "}
              is a hypothetical concept that could encompass an integrated
              digital media universe, bringing together various prominent
              companies in the media and entertainment industry.{" "}
              <Link to="/about" className="text-red-500 underline">
                Reade More...
              </Link>
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-red-500 text-center p-4">
            Our sponsors
                </h1>
                <Marquee>
                    <Marq></Marq>
                </Marquee>
        </div>
      </div>
    );
};

export default Home;