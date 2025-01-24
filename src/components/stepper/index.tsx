"use client";

import React from 'react';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { BsCheck2Circle } from "react-icons/bs";

interface Step {
  title: string;
  isCompleted?: boolean;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  onBack?: () => void;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep, onBack }) => {
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
          {steps[currentStep]?.title || 'Pick Up Details'}
        </h2>
      </div>

      <div className="px-4">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    index < currentStep || step.isCompleted
                      ? 'bg-[#217C70] text-white'
                      : index === currentStep
                      ? 'bg-[#217C70] text-white'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {index < currentStep || step.isCompleted ? (
                    <BsCheck2Circle className="w-5 h-5" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-[2px] mx-2 ${
                    index < currentStep ? 'bg-[#217C70]' : 'bg-gray-200'
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stepper; 