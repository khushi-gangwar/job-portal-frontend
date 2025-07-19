import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-6 py-12 shadow-md mt-20" style={{ background: "#A9B5DF" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-gray-700">
        
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full font-bold text-sm">
              JP
            </div>
            <span className="text-lg font-semibold text-black">JobPortal</span>
          </div>
          <p className="text-sm">
            Connecting talented professionals with amazing opportunities worldwide.
          </p>
          <div className="flex gap-4 mt-4 text-xl text-gray-600">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>

        {/* For Job Seekers */}
          <div className="flex items-center gap-6 mb-2">
            <div >
          <h3 className="text-black font-semibold mb-3">For Job Seekers</h3>
          <ul className="text-sm space-y-2">
            <li>Browse Jobs</li>
            <li>Career Advice</li>
            <li>Resume Builder</li>
            <li>Salary Guide</li>
            <li>Job Alerts</li>
          </ul>
        </div>
<div>
        {/* For Employers */}
      
          <h3 className="text-black font-semibold mb-3">For Employers</h3>
          <ul className="text-sm space-y-2">
            <li>Post a Job</li>
            <li>Search Resumes</li>
            <li>Pricing</li>
            <li>Employer Branding</li>
            <li>Recruitment Solutions</li>
          </ul>
        </div></div>

        {/* Stay Updated */}
        <div>
          <h3 className="text-black font-semibold mb-3">Stay Updated</h3>
          <p className="text-sm mb-3">
            Get the latest job opportunities and career tips delivered to your inbox.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 rounded mb-3"
          />
          <button className="w-full py-2 rounded bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
