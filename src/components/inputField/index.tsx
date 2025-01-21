import React, { FC } from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder: string;
  errorMessage?: string | undefined;
  isRequired?: boolean;
}

const InputField: FC<IProps> = ({
  label,
  isRequired,
  errorMessage,
  placeholder,
  ...rest
}) => {
  return (
    <div className="relative mb-4">
        <label
          className={`
            block mb-2 text-sm text-white
            ${isRequired ? 'after:content-["*"] after:ml-0.5 after:text-red-500' : ''}
            ${errorMessage ? 'text-red-500' : ''}
          `}
        >
            {label}
        </label>
      <input
        placeholder={placeholder}
        {...rest}
        className={`
          w-full h-12 px-3 text-base
          bg-white text-black
          border border-gray-400 rounded-lg
          focus:outline-none focus:border-[#217C70]
          transition-colors
          placeholder:text-[#A09F9F]
          ${errorMessage ? 'border-red-500' : ''}
        `}
      />
      {errorMessage && (
        <p className="mt-1 text-sm text-red-500">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default InputField;