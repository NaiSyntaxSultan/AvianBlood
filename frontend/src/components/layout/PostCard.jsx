import React from "react";
import { Globe } from "lucide-react"; 

const PostCard = () => {
  // จำลองว่ามีรูปภาพทั้งหมด 6 รูป
  const postImages = [
    "https://placehold.co/600x400/png?text=Microscope+1", 
    "https://placehold.co/600x400/png?text=Microscope+2",
    "https://placehold.co/600x400/png?text=Microscope+3",
    "https://placehold.co/600x400/png?text=Microscope+4",
    "https://placehold.co/600x400/png?text=Microscope+5", 
    "https://placehold.co/600x400/png?text=Microscope+6" 
  ];

  const visibleImages = postImages.slice(0, 4);
  
  const remainingCount = postImages.length - 3;

  return (
    <div
      className="bg-white max-w-2xl w-full rounded-3xl mb-6 mx-auto
        shadow-[0_4px_8px_0_rgba(0,0,0,0.25)] overflow-hidden"
    >
      {/* Header Section */}
      <div className="p-5">
        <div className="flex mb-3">
          {/* Avatar */}
          <div
            className="w-[52px] h-[52px] rounded-full bg-[#C2E4FB]
            overflow-hidden border border-blue-100 shadow-sm mr-3 flex-shrink-0"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* User Meta */}
          <div>
            <h1 className="text-lg font-bold text-gray-900 leading-tight">Dr. Strange</h1>
            <div className="flex items-center space-x-1 text-gray-500 text-sm">
              <span className="font-normal hover:underline cursor-pointer">1 นาที</span>
              <span>·</span>
              
              <Globe size={18} className="text-gray-500" />
              
            </div>
          </div>
        </div>

        <div className="text-base text-gray-900 font-normal">
          ตรวจหาเม็ดเลือดขาวของไก่ที่ผมเลี้ยงกับมือ
        </div>
      </div>

      {/* Image Grid Logic */}
      <div className="grid grid-cols-2 gap-[2px] bg-white border-t border-gray-100">
        {visibleImages.map((imgSrc, index) => {
          const isLastImage = index === 3;
          const hasMoreImages = postImages.length > 4;

          return (
            <div key={index} className="aspect-square bg-gray-100 relative overflow-hidden group cursor-pointer">
              <img 
                src={imgSrc} 
                alt={`Blood cell sample ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
              />

              {isLastImage && hasMoreImages && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-colors hover:bg-black/40">
                  <span className="text-white text-3xl font-bold">
                    +{remainingCount}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostCard;