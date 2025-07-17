import * as React from 'react';
import Navbar from "./../../components/common/Navbar/Navbar";
import { FiSearch } from "react-icons/fi";
import JobSearchBar from '@/components/common/SearchBar/JobSearchBar';
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

  
       
          <JobSearchBar/>
        </div>
        
        <div className='bg-cover flex bg-center ' style={{ background:"#A9B5DF"}}> 
          <div className="left size-40 w-1/2 flex items-center justify-center text-white m-15">
            <h1 className="text-6xl ">Find the right job<br/>
             or internship for you</h1>
          </div>
          <div className="middle size-40 w-1/2 flex items-center justify-center text-white m-15">
          <img src="/job2.png" alt="Job Search" className="w-auto h-100" />
          </div>
          {/* <div className="right">  <h1 className="text-6xl">Explore opportunities<br/>
             that match your skills</h1></div> */}
        </div>
      </div>
  );
};

export default Home;
