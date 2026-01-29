import React from "react";
import Navbar from "../../components/layout/Navbar";
import logo from "../../assets/Logo.png";
import PostCard from "../../components/layout/PostCard";
import Footer from "../../components/layout/Footer";

const Home = () => {
  return (
    <div className="bg-[linear-gradient(180deg,#9AD1F0_3%,#FFFFFF_20%)]">
      <Navbar role={"user"} />

      <div className="mt-4 flex flex-col items-center justify-center text-center">
        <img src={logo} width={110} />
        <div className="space-y-1">
          <h1 className="text-3xl text-gray-800 font-medium">
            We bring intelligence to poultry diagnostics.
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Detect abnormalities in seconds and enhance flock health with
            advanced deep-learning analysis of chicken blood cells.
          </p>
        </div>
        <hr className="w-full border-t border-[#B1CCFF] opacity-50 my-8" />
      </div>

      <div className="flex flex-col justify-center items-center">
        <PostCard />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
