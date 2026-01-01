import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const InputField = ({ icon: Icon, type, ...props }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isPasswordType = type === "password";

  const inputType = isPasswordType
    ? isPasswordVisible
      ? "text"
      : "password"
    : type;
  return (
    <div className="relative">
      <div
        className="absolute inset-y-0 left-0 pl-4 flex items-center 
              pointer-events-none"
      >
        <Icon className="text-gray-500" />
      </div>
      <input
        type={inputType}
        className="bg-gray-50 border border-gray-100 w-[394px] h-[41px] rounded-[12px] 
                pr-4 py-3 pl-12 bg-gray-50 focus:outline-none focus:ring-2 
                focus:ring-blue-100 text-gray-700 placeholder-gray-400"
        {...props}
      />
      {isPasswordType && (
        <button
          type="button"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          className="absolute inset-y-0 right-0 pr-4 flex items-center 
                     text-gray-400 hover:text-gray-600 cursor-pointer focus:outline-none"
        >
          {isPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}
    </div>
  );
};

export default InputField;
