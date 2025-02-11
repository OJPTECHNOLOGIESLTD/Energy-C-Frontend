"use client";

import React from "react";

interface SearchFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  leftIcon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

const SearchField: React.FC<SearchFieldProps> = ({
  placeholder = "Search...",
  value,
  onChange,
  leftIcon,
  fullWidth = false,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`
        flex items-center border border-gray-300 rounded-full px-3 py-2 
        bg-white focus-within:ring-2 focus-within:ring-[#217C70] transition-all
        ${fullWidth ? "w-full" : "w-auto"}
        ${className}
      `}
    >
      {leftIcon && <span className="mr-2 text-gray-500">{leftIcon}</span>}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-400"
        {...props}
      />
    </div>
  );
};

export default SearchField;
