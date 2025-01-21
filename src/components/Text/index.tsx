import React, { ReactNode } from 'react';

interface TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'small';
  children: ReactNode;
  className?: string;
  as?: React.ElementType; // Allows overriding the tag if needed
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | 'custom'; // Tailwind text sizes + custom size
  customSize?: string; // Directly set a custom font size (e.g., 10px)
}

const Text: React.FC<TextProps> = ({
  variant = 'p',
  children,
  className = '',
  as: Tag = variant,
  size = 'base',
  customSize,
}) => {
  // Tailwind base styles for different variants
  const baseStyles = {
    h1: 'font-bold',
    h2: 'font-semibold',
    h3: 'font-semibold',
    h4: 'font-medium',
    h5: 'font-medium',
    h6: 'font-medium',
    p: '',
    span: '',
    small: '',
  };

  // Tailwind text size classes
  const sizeStyles = {
    xs: 'text-xs', // ~12px
    sm: 'text-sm', // ~14px
    base: 'text-base', // ~16px
    lg: 'text-lg', // ~18px
    xl: 'text-xl', // ~20px
    '2xl': 'text-2xl', // ~24px
    '3xl': 'text-3xl', // ~30px
    custom: '', // Use custom size directly
  };

  return (
    <Tag
      className={`${baseStyles[variant]} ${
        customSize ? '' : sizeStyles[size]
      } ${className}`}
      style={customSize ? { fontSize: customSize } : {}}
    >
      {children}
    </Tag>
  );
};

export default Text;
