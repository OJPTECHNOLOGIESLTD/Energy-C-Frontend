import React from 'react';

interface ProgressBarProps {
  progress: number;
  label?: string;
  height?: 'sm' | 'md' | 'lg';
  className?: string;
  barClassName?: string;
  showIndicator?: boolean;
  bgColor?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  label,
  height = 'md',
  className = '',
  barClassName = '',
  showIndicator = false,
  bgColor = '#E7E3C6'
}) => {
  // Clamp progress between 0 and 100
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  
  // Height variants
  const heightClasses = {
    sm: 'h-2',
    md: 'h-4',
    lg: 'h-6'
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Label and indicator container */}
      {(label || showIndicator) && (
        <div className="flex justify-between items-center mb-2">
          {label && (
            <span className="text-sm font-medium text-gray-700">
              {label}
            </span>
          )}
          {showIndicator && (
            <span className="text-xs text-gray-500">
              {clampedProgress}%
            </span>
          )}
        </div>
      )}

      {/* Progress bar */}
      <div className={`w-full bg-gray-200 rounded-full ${heightClasses[height]}`}>
        <div
          className={`rounded-full transition-all duration-300 ${heightClasses[height]} ${barClassName}`}
          style={{ 
            width: `${clampedProgress}%`,
            backgroundColor: bgColor
          }}
          role="progressbar"
          aria-valuenow={clampedProgress}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
