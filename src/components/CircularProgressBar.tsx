"use client";

import React, { ReactNode } from "react";

interface CircularProgressProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
  text?: ReactNode;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  progress,
  size = 100,
  strokeWidth = 8,
  color = "#217C70",
  backgroundColor = "#E7E3C6",
  text,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 1 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size}>
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-in-out"
        />
      </svg>
      {text ? (
        <div className="absolute text-sm font-semibold text-gray-700">
          {text}
        </div>
      ) : (
        <span className="absolute text-lg font-semibold text-gray-700">
          {progress}%
        </span>
      )}
    </div>
  );
};

export default CircularProgress;
