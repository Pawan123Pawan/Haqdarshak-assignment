import React, { useState } from "react";

const Gallery = () => {
  const [showImage, setShowImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowImage(true);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      handleImageClick(imageUrl);
    }
  };

  return (
    <div className="flex flex-wrap gap-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="fileInput"
      />
      <label htmlFor="fileInput" className="w-[210px] font-poppins bg-white rounded-3xl p-2 text-sm text-center cursor-pointer font-medium">
          Upload Image from Gallery
        </label>
      {showImage && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-75">
          <div className="max-w-full max-h-full">
            <button
              className="absolute top-0 right-0 m-4 p-2 bg-white rounded-full hover:bg-gray-100 text-purple font-poppins font-medium"
              onClick={() => setShowImage(false)}
            >
              Close
            </button>
            <img src={selectedImage} alt="Selected" className="w-full h-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
