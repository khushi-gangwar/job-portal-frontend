import * as React from 'react';
import Navbar from "./../../components/common/Navbar/Navbar";
import { FiSearch } from "react-icons/fi";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center justify-center text-center relative px-4 py-10">
        {/* Floating circle SVG */}
        <svg
          className="absolute w-32 h-32 animate-floatY opacity-30 right-1/2 -translate-x-1/2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="40" fill="#38bdf8" />
        </svg>

        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 z-10">Welcome to DevSpot</h1>
        <p className="text-gray-600 mt-4 text-lg text-center max-w-xl">
          Your one-stop destination for all things development.
        </p>

  
          <div className="flex items-center gap-3 max-w-4xl bg-white border border-gray-300 rounded-full px-8 py-6 shadow-md shadow-cyan-200 mt-8 w-full">
            <FiSearch className="text-blue-500 text-3xl" />
            <input
              type="text"
              placeholder="Search with style..."
              className="w-full outline-none text-gray-700  placeholder-gray-400 bg-transparent"
            />
          </div>
        </div>
      </div>
  );
};

export default Home;
