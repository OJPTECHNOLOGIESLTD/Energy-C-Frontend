import React, { useRef, useState, useMemo } from "react";
import ReactWebcam from "react-webcam";
import { FiCamera } from "react-icons/fi";

const CameraComponent = ({
  type = "portrait",
}: {
  type?: "portrait" | "landscape";
}) => {
  const [capturedImages, setCapturedImages] = useState<string[]>([]);
  const [showCamera, setShowCamera] = useState(false);
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
      facingMode: "environment",
      ...aspectRatios[type],
    }),
    [type, aspectRatios]
  );

  // Capture Image
  const captureImage = () => {
    if (webcamRef.current) {
      console.log("Clicked");
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        console.log("Clicked again");
        setCapturedImages((prev) => [...prev, imageSrc]);
        setShowCamera(false); // Hide camera after capturing image
      }
    }
  };

  // Remove Image
  const removeImage = (index: number) => {
    setCapturedImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center">
      {/* Show Camera Button
      {!showCamera && (
      )} */}

      {/* Show Camera When Button Clicked */}
      <div className="relative w-full h-48 md:h-64 bg-white border border-gray-300 rounded-lg flex justify-center items-center">
        {showCamera ? (
          <>
            <ReactWebcam
              ref={webcamRef}
              audio={false}
              screenshotFormat="image/jpeg"
              screenshotQuality={1}
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              videoConstraints={videoConstraints}
            />
            <button
              className="absolute bottom-2 bg-black text-white px-4 py-2 rounded-md"
              onClick={captureImage}
            >
              Capture
            </button>
          </>
        ) : (
          <button
            className="flex flex-col items-center"
            onClick={() => setShowCamera(true)}
          >
            <FiCamera size={30} />
            <p>Take Photos</p>
          </button>
        )}
      </div>

      {/* Preview Images */}
      {capturedImages.length > 0 && (
        <div className="flex mt-4 gap-2">
          {capturedImages.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt="Captured"
                className="w-16 h-16 rounded-md"
              />
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
