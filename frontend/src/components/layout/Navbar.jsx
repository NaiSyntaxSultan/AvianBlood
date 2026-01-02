import React from "react";
import logo from "../../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { Globe } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-blue-600 font-bold" // Active Style
      : "text-gray-700 hover:text-blue-600 font-semibold"; // Inactive Style
  };

  return (
    <div
      className="bg-white w-full h-16 border-b border-[#B1CCFF] flex items-center 
        justify-around"
    >
      {/* Logo */}
      <Link to="/">
        <img
          src={logo}
          width={50}
          className="hover:scale-105 transition-transform"
        />
      </Link>
      {/* Link */}
      <div className="space-x-6 text-md">
        <Link to="/" className={`transition-colors ${getLinkClass("/")}`}>
          Home
        </Link>
        <Link
          to="/prediction"
          className={`transition-colors ${getLinkClass("/prediction")}`}
        >
          Prediction
        </Link>
        <Link
          to="/dashboard"
          className={`transition-colors ${getLinkClass("/dashboard")}`}
        >
          Dashboard
        </Link>
        <Link
          to="/database"
          className={`transition-colors ${getLinkClass("/database")}`}
        >
          Database
        </Link>
      </div>
      {/* Profile */}
      <div className="flex items-center space-x-4">
        <button className="text-black hover:text-gray-600 transition-colors">
          <Globe size={18} />
        </button>

        <Link
          to="/profile"
          className="w-[41px] h-[41px] rounded-full bg-[#C2E4FB]
            overflow-hidden border border-blue-100 shadow-sm cursor-pointer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg"
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
