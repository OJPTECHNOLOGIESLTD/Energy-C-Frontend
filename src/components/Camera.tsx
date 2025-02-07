import React, { useRef, useState, useMemo } from "react";
import ReactWebcam from "react-webcam";
import { FiCamera } from "react-icons/fi";

const CameraComponent = ({ type = "portrait" }) => {
  const [capturedImages, setCapturedImages] = useState<string[]>([]);
  const webcamRef = useRef<ReactWebcam>(null);

  // Define aspect ratios
  const aspectRatios = useMemo(
    () => ({
      landscape: { width: 1920, height: 1080 },
      portrait: { width: 1080, height: 1920 },
    }),
    []
  );

  // Video constraints
  const videoConstraints = useMemo(
    () => ({
      facingMode: "user",
      ...aspectRatios[type],
    }),
    [type, aspectRatios]
  );

  // Capture Image
  const captureImage = () => {
    if (webcamRef.current) {
        console.log("Clicked")
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {console.log("Clicked again"), setCapturedImages((prev) => [...prev, imageSrc])};

    }
  };

  // Remove Image
  const removeImage = (index: number) => {
    setCapturedImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center">
      {/* Camera Box */}
      <div className="relative w-full h-48 border border-gray-300 rounded-lg flex justify-center items-center">
        <ReactWebcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/jpeg"
          screenshotQuality={1}
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          videoConstraints={videoConstraints}
        />
        <button
          className="absolute flex flex-col items-center text-gray-700 bg-white p-2 rounded-md shadow-md"
          onClick={captureImage}
        >
          <FiCamera size={30} />
          <p>Take Photos</p>
        </button>
      </div>

      {/* Preview Images */}
      {capturedImages.length > 0 && (
        <div className="flex mt-4 gap-2">
          {capturedImages.map((image, index) => (
            <div key={index} className="relative">
              <img src={image} alt="Captured" className="w-16 h-16 rounded-md" />
              <button
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
                onClick={() => removeImage(index)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CameraComponent;
