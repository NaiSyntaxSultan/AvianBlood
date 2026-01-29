import React, { useState, useRef } from "react";
import { Upload, CloudDownload, Droplet, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";

const Prediction = () => {
  const navigate = useNavigate(); 
  const [selectedStain, setSelectedStain] = useState("wright");
  const [selectedImages, setSelectedImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const processFiles = (files) => {
    if (files.length > 0) {
      const validFiles = files.filter((file) => file.type.startsWith("image/"));
      const uniqueFiles = validFiles.filter((newFile) => {
        const isDuplicate = selectedImages.some(
          (existingImg) =>
            existingImg.file.name === newFile.name &&
            existingImg.file.size === newFile.size
        );
        return !isDuplicate;
      });

      if (uniqueFiles.length === 0) return;

      const newImages = uniqueFiles.map((file) => ({
        id: URL.createObjectURL(file),
        file: file,
        name: file.name,
      }));

      setSelectedImages((prev) => [...prev, ...newImages]);
    }
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    processFiles(files);
    event.target.value = "";
  };

  const onDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    processFiles(files);
  };

  const removeImage = (idToRemove) => {
    setSelectedImages((prev) => prev.filter((img) => img.id !== idToRemove));
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handlePredict = () => {
    if (selectedImages.length === 0) {
      alert("Please upload at least one image.");
      return;
    }
    navigate("/result"); 
  };

  return (
    <div className="min-h-screen flex flex-col bg-[linear-gradient(180deg,#9AD1F0_3%,#FFFFFF_20%)]">
      <Navbar role={"user"} />

      <div className="flex flex-col items-center py-10 px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black mb-2">Blood Smear Image Save</h1>
          <p className="text-gray-600 font-medium">
            Used for uploading and storing blood smear images of chicken blood.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          
          {/* === Left Card === */}
          <div className="bg-white rounded-3xl p-8 shadow-xl flex flex-col h-[600px]">
            {/* Stain Selection */}
            <div className="mb-6 flex-shrink-0">
              <h3 className="font-bold text-black mb-3">Select Stain Type</h3>
              <div className="flex space-x-4">
                <button
                  onClick={() => setSelectedStain("wright")}
                  className={`flex-1 flex items-center justify-center space-x-3 p-3 rounded-xl border transition-all ${
                    selectedStain === "wright"
                      ? "border-blue-500 bg-blue-50 ring-1 ring-blue-500"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    <Droplet size={18} fill="white" />
                  </div>
                  <span className="font-semibold text-gray-800">Wright Stain</span>
                </button>

                <button
                  onClick={() => setSelectedStain("giemsa")}
                  className={`flex-1 flex items-center justify-center space-x-3 p-3 rounded-xl border transition-all ${
                    selectedStain === "giemsa"
                      ? "border-purple-500 bg-purple-50 ring-1 ring-purple-500"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center text-white">
                    <Droplet size={18} fill="white" />
                  </div>
                  <span className="font-semibold text-gray-800">Giemsa Stain</span>
                </button>
              </div>
            </div>

            {/* Upload Area */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              className="hidden"
              multiple
              accept=".jpg,.jpeg,.png"
            />
            <div
              onClick={triggerFileInput}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
              className={`flex-1 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center mb-6 cursor-pointer transition-colors ${
                isDragging
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-3 shadow-md">
                <Upload className="text-white" size={24} />
              </div>
              <p className="font-bold text-gray-800">
                {isDragging ? "Drop images here" : "Upload Image"}
              </p>
              <p className="text-sm text-gray-500">
                Support: .jpg, .png (max 1 MB) <div className="text-center">Max 100 Images</div>
              </p>
              {selectedImages.length > 0 && (
                <p className="text-blue-600 text-sm mt-2 font-semibold">
                  {selectedImages.length} images selected
                </p>
              )}
            </div>

            {/* 3. Predict Button (แก้ไข onClick) */}
            <button
              onClick={handlePredict}
              className="flex-shrink-0 w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center space-x-2 transition-transform active:scale-95"
            >
              <CloudDownload size={23} />
              <span className="text-lg">
                {selectedImages.length > 0
                  ? `Save All (${selectedImages.length})`
                  : "Save"}
              </span>
            </button>
          </div>

          {/* === Right Card === */}
          <div className="bg-white rounded-3xl p-8 shadow-xl flex flex-col h-[600px]">
            <h3 className="font-bold text-black mb-4 flex-shrink-0">Results</h3>

            {selectedImages.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center">
                <p className="text-gray-400 font-medium mb-6">No results yet</p>
                <div className="w-full h-48 bg-gray-100 rounded-2xl flex items-center justify-center p-6 text-center">
                  <p className="text-gray-400 text-sm">
                    Upload an image and click save <br /> to see result here
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                <div className="grid grid-cols-3 gap-4">
                  {selectedImages.map((img) => (
                    <div key={img.id} className="flex flex-col">
                      <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border border-gray-200 group">
                        <img
                          src={img.id}
                          alt="preview"
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={() => removeImage(img.id)}
                          className="absolute top-2 right-2 bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 rounded-full p-1 transition-colors shadow-sm"
                        >
                          <X size={14} />
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-2 truncate w-full text-center px-1">
                        {img.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prediction;