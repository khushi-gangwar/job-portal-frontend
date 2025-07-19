import * as React from "react";
import Navbar from "./../../components/common/Navbar/Navbar";
import { FiSearch } from "react-icons/fi";
import JobSearchBar from "@/components/common/SearchBar/JobSearchBar";
import JobCategories from "../browseFeatures/browseFeatures";
import HowItWork from "../howItWork/howItWork";
import Footer from "../footer/footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row bg-cover bg-center px-6 lg:px-20 py-16 gap-10">
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center text-center relative w-full lg:w-1/2 px-4">
          {/* Floating Circle */}
          <svg
            className="absolute w-24 h-24 animate-floatY opacity-30 right-1/2 translate-x-1/2 top-4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="40" fill="#38bdf8" />
          </svg>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 z-10">
            Welcome to DevSpot
          </h1>
          <p className="text-gray-600 mt-4 text-lg sm:text-xl max-w-xl">
            Your one-stop destination for all things development.
          </p>

          <div className="w-full mt-6">
            <JobSearchBar />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src="/home.jpg"
            alt="Job Search"
            className="max-h-[400px] w-full object-contain "
          />
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
