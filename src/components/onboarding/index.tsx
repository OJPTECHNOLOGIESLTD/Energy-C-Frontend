import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import "./styles.css";
import { onboardingData } from "./data";

interface OnboardindProps {
  onComplete: () => void;
}

const Onboarding: React.FC<OnboardindProps> = ({ onComplete }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const { image, title, description } = onboardingData[pageIndex];
  const handleNext = () => {
    if (pageIndex < onboardingData.length - 1) {
      setPageIndex(pageIndex + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };
  return (
    <div className="relative flex flex-col justify-center items-center text-center bg-[#217C70] text-white h-screen p-6">
      <img src={image} alt="" />
      <div className="flex-col">
        <p className="font-bold my-4 text-2xl uppercase">
          {title}
        </p>
        <p className="mb-8 font-medium text-[15px]">{description}</p>
        <div className="flex items-center justify-between gap-4 absolute bottom-6 left-0 right-0 px-9">
          <span onClick={handleSkip} className="cursor-pointer text-slate-400">
            Skip
          </span>

          <div className="flex gap-2 mx-4">
            {[...Array(onboardingData.length)].map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  pageIndex === index ? 'bg-white w-2' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          <span onClick={handleNext} className="cursor-pointer">
            Next
          </span>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
