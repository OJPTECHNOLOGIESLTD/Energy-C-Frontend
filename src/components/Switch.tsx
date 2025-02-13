"use client";

import React from "react";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  className?: string;
  labelClassName?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange, label, className, labelClassName }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {label && <span className={`${labelClassName} text-sm font-medium text-gray-700`}>{label}</span>}
      <button
        type="button"
        className={`relative inline-flex h-6 w-12 items-center rounded-full transition-all duration-300 ${
          checked ? "bg-[#E7E3C6]" : "bg-[#E7E3C6]"
        }`}
        onClick={() => onChange(!checked)}
      >
        <span
          className={`absolute left-1 h-4 w-4 rounded-full bg-[#217C70] transition-all duration-300 transform ${
            checked ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
};

export default ToggleSwitch;
