import React from "react";
import { FiSearch } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { FaBuilding, FaDollarSign } from "react-icons/fa";

const JobSearchBar: React.FC = () => {
  return (
    <>
      {/* Search bar container */}
      <div className="w-full max-w-6xl mx-auto mt-10 bg-white rounded-full shadow-md shadow-cyan-200 px-6 py-5 flex flex-wrap items-center gap-4">
        
        {/* 🔍 Job Title or Keywords */}
        <div className="flex items-center gap-2 flex-1 min-w-[200px]">
          <FiSearch className="text-blue-500 text-xl" />
          <input
            type="text"
            placeholder="Job title or keywords"
            className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
          />
        </div>

        {/* 📍 Location */}
        <div className="flex items-center gap-2 min-w-[200px]">
          <MdLocationOn className="text-blue-500 text-xl" />
          <input
            type="text"
            placeholder="Location or IT Park"
            className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
          />
        </div>

        {/* 🏢 Company Size */}
        <div className="flex items-center gap-2 min-w-[160px]">
          <FaBuilding className="text-blue-500 text-md" />
          <select
            className="bg-transparent outline-none text-gray-700 w-full"
            defaultValue=""
          >
            <option value="">Company Size</option>
            <option value="small">1-50</option>
            <option value="mid">51-200</option>
            <option value="large">200+</option>
          </select>
        </div>

        {/* 💰 Salary Range */}
        <div className="flex items-center gap-2 min-w-[160px]">
          <FaDollarSign className="text-blue-500 text-md" />
          <select
            className="bg-transparent outline-none text-gray-700 w-full"
            defaultValue=""
          >
            <option value="">Salary Range</option>
            <option value="0-5">0–5 LPA</option>
            <option value="5-10">5–10 LPA</option>
            <option value="10+">10+ LPA</option>
          </select>
        </div>
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap gap-3 mt-4 max-w-6xl mx-auto">
        {["Full Time", "Remote", "React Developer", "Senior Level"].map((tag) => (
          <button
            key={tag}
            className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition"
          >
            {tag}
          </button>
        ))}
        <button className="px-4 py-2 border rounded-full text-gray-600 hover:bg-gray-100">
          More Filters
        </button>
      </div>
    </>
  );
};

export default JobSearchBar;
