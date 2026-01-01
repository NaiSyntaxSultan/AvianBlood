import React from "react";

const SocialButton = ({ icon: Icon, iconClass = "" }) => {
  return (
    <button
      className="w-[125px] h-[45px] bg-white rounded-xl flex justify-center 
                items-center shadow-[0_2px_4px_0_rgba(0,0,0,0.25)] cursor-pointer
                hover:bg-gray-50 border border-gray-100"
    >
      <Icon size={25} className={iconClass} />
    </button>
  );
};

export default SocialButton;
