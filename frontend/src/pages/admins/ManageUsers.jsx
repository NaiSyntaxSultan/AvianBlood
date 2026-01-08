import React from "react";
import Navbar from "../../components/layout/Navbar";

const ManageUsers = () => {
  return (
    <div className="bg-[linear-gradient(180deg,#9AD1F0_3%,#FFFFFF_20%)]">
      <Navbar role={false} />

      <div
        className="w-[250px] h-[62px] rounded-xl border border-[#D2D2D2] 
        shadow-[0_2px_1px_0_rgba(0,0,0,0.25)] flex justify-around items-center
        ml-91 mt-7 bg-white"
      >
        <div className="opacity-70">Members</div>
        <div className="opacity-60">Admins</div>
      </div>

      <div className="flex gap-10 ml-99 mt-6">
        <h1 className="font-semibold text-3xl">
            Members
        </h1>
        <button className="bg-[#435B82] w-[106px] h-[40px] text-white rounded-sm">
            Add new
        </button>
      </div>

      <div className="bg-gray-100 w-[1189px] h-[648px] mt-6 m-auto rounded-lg border border-[#D2D2D2]
        shadow-[0_2px_1px_0_rgba(0,0,0,0.25)]">
        
      </div>

    </div>
  );
};

export default ManageUsers;
