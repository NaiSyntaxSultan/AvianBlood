import React from "react";
import Navbar from "../../components/layout/Navbar";
import { Search } from 'lucide-react';

const ManageData = () => {
  return (
    <div className="bg-[linear-gradient(180deg,#9AD1F0_3%,#FFFFFF_20%)]">
      <Navbar role={false} />

      <div
        className="w-[250px] h-[62px] rounded-xl border border-[#D2D2D2] 
        shadow-[0_2px_1px_0_rgba(0,0,0,0.25)] flex justify-around items-center
        ml-91 mt-7 bg-white"
      >
        <div className="opacity-70">Wright</div>
        <div className="opacity-60">Giemsa</div>
      </div>

      <div className="flex gap-10 ml-99 mt-6 items-center gap-211">
        <h1 className="font-semibold text-3xl">History</h1>

        <div className="flex items-center w-[215px] h-[30px] bg-white border border-[#E4E4E4] 
        rounded-[6px] px-2 shadow-sm">
          {/* Icon แว่นขยาย */}
          <Search size={14} className="text-gray-400 mr-2" />

          {/* Input Field */}
          <input
            type="text"
            placeholder="Search by email"
            className="w-full h-full bg-transparent border-none outline-none text-sm text-gray-600
             placeholder-gray-400"
          />
        </div>  
      </div>

      <div
        className="bg-gray-100 w-[1189px] h-[648px] mt-6 m-auto rounded-lg border border-[#D2D2D2]
        shadow-[0_2px_1px_0_rgba(0,0,0,0.25)]"
      ></div>
    </div>
  );
};

export default ManageData;
