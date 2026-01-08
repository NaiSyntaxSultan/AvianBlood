import React from "react";
import Navbar from "../../components/layout/Navbar";
import PostCard from "../../components/layout/PostCard";
import Footer from "../../components/layout/Footer";

const Profile = () => {
  return (
    <div>
      <Navbar />

      <div className="w-[1160px] bg-white rounded-[32px] mt-8 mb-8 mx-auto shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] overflow-hidden">
        {/* ส่วน Banner ด้านบน */}
        <div className="w-full h-[230px] bg-gradient-to-r from-[#F2D076] to-[#FA7107]"></div>

        {/* ส่วนเนื้อหาด้านล่าง */}
        <div className="px-10 pb-10">
          {/* Flex container สำหรับส่วนที่ซ้อนทับ (รูป, Badge, ปุ่ม) */}
          {/* -mt-[100px] คือคีย์หลักที่ดึงส่วนนี้ขึ้นไปทับ Banner */}
          <div className="flex justify-between items-end -mt-[100px] mb-4">
            {/* ฝั่งซ้าย: รูปโปรไฟล์ + Badge Admin */}
            <div className="flex items-end gap-6">
              {/* กรอบรูปภาพ พร้อมขอบสีขาวหนา 8px */}
              <div className="w-[197px] h-[197px] rounded-full border-[8px] border-white bg-white">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg"
                  className="w-full h-full object-cover rounded-full"
                  alt="Profile"
                />
              </div>

              {/* Badge Admin (ใช้ mb-6 เพื่อดันให้สูงขึ้นมาหน่อย ไม่ติดพื้นเกินไป) */}
              <div className="mb-6">
                <span className="px-6 py-2 rounded-full bg-gray-100 text-gray-800 font-semibold text-lg">
                  Admin
                </span>
              </div>
            </div>

            {/* ฝั่งขวา: ปุ่ม Edit Profile */}
            <div className="mb-6">
              <button className="px-8 py-3 rounded-full bg-[#161B33] text-white font-semibold text-lg hover:bg-opacity-90 transition">
                Edit Profile
              </button>
            </div>
          </div>

          {/* ส่วนข้อความชื่อและอีเมล */}
          <div className="pl-4">
            <h1 className="text-5xl font-bold text-black mb-1">Dr. Strange</h1>
            <p className="text-xl text-gray-500">admin@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <PostCard />
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
