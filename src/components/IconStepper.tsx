"use client";

import React from 'react';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { MdCameraAlt, MdLocationOn } from 'react-icons/md';
import { FaPen } from 'react-icons/fa6';
import { FaCheckCircle } from 'react-icons/fa';

interface Step {
  title: string;
  icon: React.ReactNode;
  isCompleted?: boolean;
}

interface IconStepperProps {
  currentStep: number;
  onBack?: () => void;
}

const IconStepper: React.FC<IconStepperProps> = ({ currentStep, onBack }) => {
  const steps: Step[] = [
    { title: "Pick Up Details", icon: <MdLocationOn className="w-5 h-5" /> },
    { title: "Request Summary", icon: <FaPen className="w-5 h-5" /> },
    { title: "Item Confirmation", icon: <MdCameraAlt className="w-5 h-5" /> },
    { title: "", icon: <FaCheckCircle className="w-5 h-5" /> }
  ];

  return (
    <div className="w-full">
      <div className="flex items-center w-full p-4 relative">
        {onBack && (
          <div className="absolute left-4">
            <IoIosArrowDropleftCircle
              className="text-[#217C70] text-4xl cursor-pointer"
              onClick={onBack}
            />
          </div>
        )}
        <h2 className="flex-1 text-center text-base font-semibold">
          {steps[currentStep]?.title}
        </h2>
      </div>

      <div className="px-4">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center 
                    ${index === currentStep 
                      ? ' text-[#217C70]' 
                      : index < currentStep 
                      ? 'text-[#ABB7C2]'
                      : 'text-[#ABB7C2]'
                    }`}
                >
                  {step.icon}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 mx-2">
                  <div className="border-t-2 border-dashed border-[#217C70]" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconStepper;
