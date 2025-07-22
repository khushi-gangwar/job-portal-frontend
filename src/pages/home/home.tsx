import * as React from "react";
import Navbar from "../../components/common/Navbar/Navbar";
import { FiSearch } from "react-icons/fi";
import JobSearchBar from "@/components/common/SearchBar/JobSearchBar";
import JobCategories from "../../features/browseFeatures/browseFeatures";
import HowItWork from "../../features/howItWork/howItWork";
import Footer from "../../features/footer/footer";
import DevSpotIllustration from "@/assets/devspotillustration";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row bg-cover bg-center  px-10 lg:px-20 py-16 gap-10">
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center text-center relative w-full lg:w-5/6 px-8 gap-2">
      

          <h1 className="text-6xl sm:text-5xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 z-10">
            Welcome to DevSpot
          </h1>
          <h3 className="text-gray-600  text-xl sm:text-2xl max-w-xl">
            Your one-stop destination for all things development.
          </h3>

          <div className="w-full mt-6">
            <JobSearchBar />
          </div>
        </div>

        {/* Right Section */}
      <div className="flex items-center justify-center w-full lg:w-1/2">
          <DevSpotIllustration />
        </div>
      </div>

      {/* Other Sections */}
      <JobCategories />
      <HowItWork />
      <Footer/>
    </div>
  );
};

export default Home;
