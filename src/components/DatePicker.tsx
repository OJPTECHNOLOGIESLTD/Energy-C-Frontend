"use client"

import React from 'react';

interface DatePickerProps {
    label?: string;
    labelColor?: string;
    value?: Date;
    onChange?: (date: Date) => void;
    minDate?: Date;
    maxDate?: Date;
    className?: string;
    icon?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({
    label = "Select date",
    labelColor = "text-white",
    value,
    onChange,
    minDate,
    maxDate,
    className = "",
    icon
}) => {
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newDate = new Date(e.target.value);
        onChange?.(newDate);
    };

    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            <div className="flex items-center gap-2">
                {icon && (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"
                            fill={labelColor}
                        />
                    </svg>
                )}
                <span className={`${labelColor} text-sm`}>{label}</span>
            </div>
            <input
                type="date"
                value={value?.toISOString().split('T')[0]}
                onChange={handleDateChange}
                min={minDate?.toISOString().split('T')[0]}
                max={maxDate?.toISOString().split('T')[0]}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#217C70] focus:border-transparent"
            />
        </div>
    );
};

export default DatePicker;

