import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className=" p-8 text-white shadow-md" style={{ backgroundColor: '#213448' }}>
      <div className="max-w-7xl mx-auto flex justify-between items-center ">
        <div className="text-xl font-bold ">JobPortal</div>
        <ul className="flex space-x-6">
          <li>
            <NavLink to="/home" className={({isActive})=>isActive ?"text-yellow-300 font-semibold" :"hover:text-red-200"}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({isActive})=>isActive ? "text-yellow-300 font-semibold" :"hover:text-red-200"}>Find Jobs</NavLink>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-200">Companies and It Parks</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
