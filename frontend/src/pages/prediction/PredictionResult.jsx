import React, { useState, useEffect } from "react";
import { ArrowLeft, Edit2, Calendar, Clock, Pencil, Image as ImageIcon, Save, X, Database } from "lucide-react"; // เพิ่ม Icon Database
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";

const PredictionResult = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // --- 1. จัดการเวลา Real-time (ไทย) ---
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const thaiDate = currentDateTime.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const thaiTime = currentDateTime.toLocaleTimeString("th-TH", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // --- 2. รับข้อมูลรูปภาพ ---
  const incomingImages = location.state?.images || [];
  const mockImages = [
    { id: "mock1", name: "Sample 1", file: null },
    { id: "mock2", name: "Sample 2", file: null },
    { id: "mock3", name: "Sample 3", file: null },
  ];
  
  const displayImages = incomingImages.length > 0 ? incomingImages : mockImages;
  const [selectedImage, setSelectedImage] = useState(displayImages[0]);

  useEffect(() => {
    if (displayImages.length > 0) setSelectedImage(displayImages[0]);
  }, [incomingImages]);

  // --- 3. State ข้อมูลผู้ป่วย ---
  const [patientInfo, setPatientInfo] = useState({
    name: "-",
    age: "-",
    weight: "-",
    note: "ยังไม่มีบันทึกเพิ่มเติม..."
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempInfo, setTempInfo] = useState({ ...patientInfo });

  const startEdit = () => {
    setTempInfo({ ...patientInfo });
    setIsEditing(true);
  };

  const saveInfo = () => {
    setPatientInfo({ ...tempInfo });
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempInfo(prev => ({ ...prev, [name]: value }));
  };

  // Mock Cell Data
  const cellStats = [
    { name: "Heterophil", percentage: 35, color: "bg-blue-500" },
    { name: "Lymphocyte", percentage: 48, color: "bg-yellow-400" },
    { name: "Monocyte", percentage: 17, color: "bg-purple-400" },
  ];

  // --- 4. ฟังก์ชัน Post Data ลงฐานข้อมูล ---
  const handlePostToDatabase = async () => {
    // เตรียมข้อมูล Payload ที่จะส่งไป Backend
    const dataToSave = {
        imageId: selectedImage.id,
        imageName: selectedImage.name,
        patientData: isEditing ? tempInfo : patientInfo, // ใช้ข้อมูลล่าสุด (เผื่อลืมกด Save เล็ก)
        analysisResult: cellStats,
        recordedAt: new Date().toISOString()
    };

    // จำลองการส่ง API (console.log แทน axios.post)
    console.log("Posting to Database:", dataToSave);

    // จำลอง Delay นิดหน่อย
    // await axios.post('/api/save-prediction', dataToSave);
    
    alert(`บันทึกข้อมูลเรียบร้อยแล้ว!\n\nผู้ป่วย: ${dataToSave.patientData.name}\nรูปภาพ: ${dataToSave.imageName}`);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col h-screen overflow-hidden font-sans">
      
      <Navbar role={true} />

      <div className="flex-1 flex flex-col p-4 overflow-hidden">
        {/* --- Header Bar --- */}
        <div className="bg-white p-3 rounded-full shadow-sm flex justify-between items-center mb-4 px-6">
            <div className="flex items-center gap-4">
                <button 
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-blue-600 bg-blue-50 hover:bg-blue-100 px-4 py-1.5 rounded-full transition-colors font-semibold text-sm border border-blue-100"
                >
                    <ArrowLeft size={16} />
                    <span>Back</span>
                </button>
                <h1 className="text-xl font-bold text-gray-800">Prediction Logs</h1>
            </div>

            <div className="flex gap-3">
                <div className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm flex items-center gap-2 shadow-inner">
                    <Calendar size={14} />
                    <span>{thaiDate}</span>
                </div>
                <div className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm flex items-center gap-2 shadow-inner min-w-[80px] justify-center">
                    <Clock size={14} />
                    <span>{thaiTime}</span>
                </div>
            </div>
        </div>

        {/* --- Main Grid --- */}
        <div className="grid grid-cols-12 gap-4 flex-1 overflow-hidden">
            
            {/* Left Panel */}
            <div className="col-span-3 bg-white rounded-3xl p-4 shadow-md flex flex-col h-full">
                <div className="flex justify-between items-center mb-3 px-2">
                    <h2 className="text-lg font-bold text-gray-700">Image</h2>
                    <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-md">Edit</span>
                </div>
                <div className="flex-1 overflow-y-auto pr-1 space-y-3 custom-scrollbar">
                    {displayImages.map((img, index) => (
                        <div 
                            key={index}
                            onClick={() => setSelectedImage(img)}
                            className={`p-3 rounded-xl border-2 transition-all cursor-pointer flex items-center gap-3 ${
                                selectedImage?.id === img.id 
                                ? "bg-blue-50 border-blue-400 shadow-sm" 
                                : "bg-gray-50 border-transparent hover:bg-gray-100"
                            }`}
                        >
                            <div className="w-14 h-12 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
                                {img.file ? (
                                    <img src={img.id} alt="thumb" className="w-full h-full object-cover" />
                                ) : (
                                    <ImageIcon size={20} className="text-gray-400" />
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-gray-700 truncate">{img.name}</p>
                                <div className="flex gap-2 mt-1">
                                    <div className="flex items-center bg-white px-1.5 py-0.5 rounded text-[10px] text-gray-500 shadow-sm">
                                        <Calendar size={10} className="mr-1" />
                                        <span>{thaiDate}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Center Panel */}
            <div className="col-span-6 bg-white rounded-3xl p-4 shadow-md flex flex-col h-full relative">
                <div className="flex justify-between items-center mb-2 px-2">
                    <h2 className="text-lg font-bold text-gray-700 truncate max-w-[80%]">Example</h2>
                    <Edit2 size={18} className="text-gray-400 cursor-pointer hover:text-blue-500" />
                </div>
                <div className="flex-1 bg-gray-100 rounded-2xl mb-4 flex items-center justify-center overflow-hidden border border-gray-200 relative">
                    {selectedImage ? (
                        <img src={selectedImage.id} alt="Main view" className="w-full h-full object-contain" />
                    ) : (
                        <div className="text-gray-400 flex flex-col items-center">
                            <ImageIcon size={48} />
                            <p className="text-sm mt-2">เลือกรูปภาพ</p>
                        </div>
                    )}
                </div>
                <div className="h-20 flex gap-2 overflow-x-auto pb-1 px-1 custom-scrollbar">
                    {displayImages.map((img, index) => (
                        <div 
                            key={index}
                            onClick={() => setSelectedImage(img)}
                            className={`h-full aspect-square rounded-xl cursor-pointer overflow-hidden border-2 transition-all flex-shrink-0 ${
                                selectedImage?.id === img.id 
                                ? "border-blue-500 opacity-100" 
                                : "border-transparent bg-gray-200 opacity-60 hover:opacity-100"
                            }`}
                        >
                            <img src={img.id} alt="mini" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Panel */}
            <div className="col-span-3 flex flex-col h-full gap-3">
                <h2 className="text-xl font-bold text-gray-700 px-1">Detail</h2>

                {/* Description Card */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-md flex-shrink-0 border border-blue-100 flex flex-col h-[280px]">
                    <div className="bg-blue-500 p-3 flex justify-between items-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">Description</span>
                        {isEditing ? (
                            <div className="flex gap-2 text-white">
                                <Save size={16} className="cursor-pointer hover:scale-110" onClick={saveInfo} />
                                <X size={16} className="cursor-pointer hover:scale-110" onClick={cancelEdit} />
                            </div>
                        ) : (
                            <Pencil size={14} className="text-white cursor-pointer hover:scale-110" onClick={startEdit} />
                        )}
                    </div>
                    
                    <div className="p-4 bg-blue-50 overflow-y-auto custom-scrollbar flex-1">
                        {isEditing ? (
                            <div className="space-y-3">
                                <div>
                                    <label className="text-xs text-gray-500 font-bold ml-1">ชื่อ</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={tempInfo.name}
                                        onChange={handleInputChange}
                                        className="w-full bg-white border border-blue-200 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                                        placeholder="ระบุชื่อ"
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <div className="flex-1">
                                        <label className="text-xs text-gray-500 font-bold ml-1">อายุ (ปี)</label>
                                        <input 
                                            type="number" 
                                            name="age"
                                            value={tempInfo.age}
                                            onChange={handleInputChange}
                                            className="w-full bg-white border border-blue-200 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                                            placeholder="0"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label className="text-xs text-gray-500 font-bold ml-1">น้ำหนัก (กก.)</label>
                                        <input 
                                            type="number" 
                                            name="weight"
                                            value={tempInfo.weight}
                                            onChange={handleInputChange}
                                            className="w-full bg-white border border-blue-200 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                                            placeholder="0.0"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 font-bold ml-1">บันทึกข้อความ</label>
                                    <textarea 
                                        name="note"
                                        value={tempInfo.note}
                                        onChange={handleInputChange}
                                        className="w-full bg-white border border-blue-200 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 resize-none h-20"
                                        placeholder="เขียนบันทึก..."
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-2 text-sm text-gray-700">
                                <div className="flex justify-between border-b border-blue-100 pb-1">
                                    <span className="font-bold text-gray-500">ชื่อ:</span>
                                    <span className="font-semibold text-gray-800">{patientInfo.name}</span>
                                </div>
                                <div className="flex justify-between border-b border-blue-100 pb-1">
                                    <span className="font-bold text-gray-500">อายุ:</span>
                                    <span className="font-semibold text-gray-800">{patientInfo.age} ปี</span>
                                </div>
                                <div className="flex justify-between border-b border-blue-100 pb-1">
                                    <span className="font-bold text-gray-500">น้ำหนัก:</span>
                                    <span className="font-semibold text-gray-800">{patientInfo.weight} กก.</span>
                                </div>
                                <div className="pt-1">
                                    <span className="font-bold text-gray-500 block mb-1">บันทึก:</span>
                                    <div className="bg-white p-2 rounded border border-blue-100 text-gray-600 min-h-[60px] whitespace-pre-wrap">
                                        {patientInfo.note}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Cell Distribution Card */}
                <div className="bg-white rounded-3xl flex-1 flex flex-col overflow-hidden shadow-md border border-blue-100">
                    <div className="bg-blue-500 p-3">
                        <span className="text-white font-bold text-sm">Cell Distribution</span>
                    </div>
                    
                    <div className="p-4 flex-1 overflow-y-auto custom-scrollbar space-y-4 bg-blue-50/50">
                        {cellStats.map((stat, idx) => (
                            <div key={idx}>
                                <div className="flex justify-between text-xs text-gray-600 font-bold mb-1">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${stat.color}`}></div>
                                        <span>{stat.name}</span>
                                    </div>
                                    <span>{stat.percentage}%</span>
                                </div>
                                <div className="w-full bg-blue-100 rounded-full h-2">
                                    <div 
                                        className={`${stat.color} h-2 rounded-full shadow-sm transition-all duration-500`} 
                                        style={{ width: `${stat.percentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-blue-600 p-3 flex justify-between items-center text-white text-sm font-bold">
                        <span>Total</span>
                        <span>100</span>
                    </div>
                </div>

                {/* --- ปุ่มบันทึกลงฐานข้อมูล (ใหม่) --- */}
                <button 
                    onClick={handlePostToDatabase}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 mb-1"
                >
                    <Database size={20} />
                    <span>บันทึกข้อมูลลงฐานข้อมูล</span>
                </button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default PredictionResult;