import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { Globe } from "lucide-react";

const Navbar = ({ role }) => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-blue-600 font-bold"
      : "text-gray-700 hover:text-[#C2E4FB] font-semibold";
  };

  const renderLinks = () => {
    if (!role) {
      return (
        <div className="flex">
          <h1 className="text-lg font-semibold text-gray-700">
            Welcome To AvianBlood
          </h1>
        </div>
      );
    }

    if (role === "user") {
      return (
        <>
          <Link to="/" className={`transition-colors ${getLinkClass("/")}`}>
            Home
          </Link>
          <Link
            to="/upload"
            className={`transition-colors ${getLinkClass("/upload")}`}
          >
            Upload
          </Link>
          <Link
            to="/prediction"
            className={`transition-colors ${getLinkClass("/prediction")}`}
          >
            Prediction
          </Link>
        </>
      );
    }

    if (role === "admin") {
      return (
        <>
          <Link
            to="/dashboard"
            className={`transition-colors ${getLinkClass("/dashboard")}`}
          >
            Dashboard
          </Link>
          <Link
            to="/manageusers"
            className={`transition-colors ${getLinkClass("/manageusers")}`}
          >
            User Management
          </Link>
          <Link
            to="/managedata"
            className={`transition-colors ${getLinkClass("/managedata")}`}
          >
            Data Management
          </Link>
        </>
      );
    }
  };

  return (
    <div
      className="sticky top-0 z-50 bg-white w-full h-16 border-b border-[#B1CCFF] flex items-center 
        justify-around space-x-96"
    >
      {/* Logo */}
      <Link to={role === "admin" ? "/dashboard" : role === "user" ? "/" : "/info"}>
        <img
          src={logo}
          width={50}
          className="hover:scale-105 transition-transform"
        />
      </Link>
      {/* Menu */}
      <div className="space-x-6 text-md">{renderLinks()}</div>
      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <button className="text-black hover:text-gray-600 transition-colors">
          <Globe size={18} />
        </button>

        {!role && (
          <Link
            to="/login"
            className={`px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 ${getLinkClass("/login")}`}
          >
            Login
          </Link>
        )}

        {role && (
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
        )}
      </div>
    </div>
  );
};

export default Navbar;
