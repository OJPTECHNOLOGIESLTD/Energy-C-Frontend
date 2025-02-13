"use client";

import React from "react";

interface SearchFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  leftIcon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

const SearchField: React.FC<SearchFieldProps> = ({
  placeholder = "Search...",
  value,
  onChange,
  leftIcon,
  fullWidth = false,
  className = "",
  variant = "primary",
  ...props
}) => {
  const variants = {
    primary: 'bg-[#EFF1F5]',
    secondary: 'bg-[#F5F5F5]',
    outline: 'bg-white border border-gray-300'
  };

  const baseStyles = 'rounded-full flex items-center px-3 py-2 focus-within:ring-2 focus-within:ring-[#217C70] transition-all'

  return (
    <div
      className={`
        ${variants[variant]}
        ${baseStyles}
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
