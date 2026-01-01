import { FilePenLine, Lock, LogIn, Mail, UserRound } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import SocialButton from "../../components/ui/SocialButton";
import InputField from "../../components/ui/InputField";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div
      className="w-full bg-blue-50 h-screen flex items-center justify-center
      bg-[linear-gradient(180deg,#9AD1F0_3%,#FFFFFF_100%)]"
    >
      <div
        className="w-[485px] h-[750px] rounded-[40px] 
        shadow-[0_4px_18px_0_rgba(0,0,0,0.25)]
        flex flex-col items-center p-10
        bg-[linear-gradient(180deg,#9AD1F0_3%,#FFFFFF_30%)]"
      >
        <div
          className="w-[70px] h-[70px] bg-white rounded-[20px] mb-6 
        shadow-[1px_6px_4px_0_rgba(0,0,0,0.15)] flex items-center justify-center"
        >
          <FilePenLine className="text-gray-700" size={30} />
        </div>
        <h1 className="font-bold text-3xl mb-2">Sign up with email</h1>
        <p className="text-gray-500 text-md mb-0.5">
          Create your account and start exploring smarter
        </p>
        <p className="text-gray-500 text-md mb-6">blood analysis.</p>

        <div className="space-y-4">
          {/* First Name */}
          <InputField icon={UserRound} type="text" placeholder="First Name" />

          {/* Last Name */}
          <InputField icon={UserRound} type="text" placeholder="Last Name" />

          {/* Email */}
          <InputField icon={Mail} type="email" placeholder="Email" />

          {/* Password */}
          <InputField icon={Lock} type="password" placeholder="Password" />

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="/login"
              className="text-sm font-medium text-gray-500 hover:text-gray-600"
            >
              Already have an account?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            className="w-[394px] bg-black/90 text-white py-3.5 rounded-2xl 
          font-normal hover:bg-gray-900 text-lg cursor-pointer shadow-lg shadow-black/20 "
          >
            Create Account
          </button>

          <p className="text-gray-400 text-xs font-medium text-center">
            Or sign up with
          </p>

          <div className="flex justify-between">
            <SocialButton icon={FcGoogle} />
            <SocialButton icon={FaFacebook} iconClass="text-[#1877F2]" />
            <SocialButton icon={FaApple} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
