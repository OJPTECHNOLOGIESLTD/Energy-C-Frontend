"use client";

import React from "react";

interface DateFilterProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEndDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const DateFilter: React.FC<DateFilterProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  className = "",
}) => {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-4 ${className}`}>
      {/* Start Date */}
      <div className="flex flex-col">
        <label className="text-sm text-gray-600 font-medium">Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={onStartDateChange}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-[#217C70] focus:border-[#217C70] outline-none transition-all"
        />
      </div>

      {/* End Date */}
      <div className="flex flex-col">
        <label className="text-sm text-gray-600 font-medium">End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={onEndDateChange}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-[#217C70] focus:border-[#217C70] outline-none transition-all"
        />
      </div>
    </div>
  );
};

export default DateFilter;
