"use client";

import React from "react";

interface Props extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'title'> {
  title: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
  isIconOnly?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  description?: string;
  descriptionClass?: string;
  alignment?: 'left' | 'center';  // 👈 New prop
}

const Button: React.FC<Props> = ({
  title,
  description,
  descriptionClass,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  isIconOnly = false,
  leftIcon,
  rightIcon,
  alignment = 'center', // 👈 Default to center alignment
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'rounded-2xl font-semibold uppercase transition-all duration-200 disabled:opacity-50 shadow-md';

  const variants = {
    primary: 'bg-white text-black hover:bg-gray-50 active:bg-gray-100',
    secondary: 'bg-[#E7E3C6] text-black hover:bg-[#dcd7b0] active:bg-[#ccc69d]',
    tertiary: 'bg-[#217C70] text-white hover:bg-[#388178] active:bg-[#4f9b91]',
    outline: 'border-2 border-[#217C70] text-[#217C70] hover:bg-[#217C70] hover:text-white'
  };

  const sizes = {
    xs: 'py-1 px-3 text-[11px]',
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg'
  };

  // Dynamic alignment styles
  const alignmentClasses = alignment === 'left' ? 'justify-between' : 'justify-center';

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${!isIconOnly ? sizes[size] : 'p-0'} 
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${isIconOnly ? 'flex items-center justify-center' : ''}
        ${className}
      `}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center gap-2">
          <svg className={`animate-spin ${size === 'xs' ? 'h-2 w-2' : size === 'sm' ? 'h-4 w-4' : size === 'lg' ? 'h-6 w-6' : 'h-5 w-5'}`} viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Loading...
        </span>
      ) : (
        <div className={`flex items-center w-full ${alignment === 'left' ? 'justify-start' : 'justify-center'} gap-3`}>
          {leftIcon && <span className="flex items-center">{leftIcon}</span>}
          <div className={`flex flex-col ${alignment === 'left' ? 'items-start' : 'items-center'}`}>
            <span>{title}</span>
            {description && <span className={`${descriptionClass}`}>{description}</span>}
          </div>
          {rightIcon && <span className={`flex items-center ${alignment === 'left' && `ml-auto`}`}>{rightIcon}</span>}
        </div>
      )}
    </button>
  );
};

export default Button;
