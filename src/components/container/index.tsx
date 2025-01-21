import React from "react";


const ContentContainer: React.FC<{
    children: React.ReactNode,
    className?: string,
    backgroundImage?: string,
    bgColor?: string,
    textColor?: string,
    id?: string
}> = ({ children, className, backgroundImage, bgColor, textColor, id }) => {
    return (
        <div className={`w-full sm:p-3 p-5 rounded-2xl ${bgColor} ${textColor} ${className}`} style={{ backgroundImage: backgroundImage }} id={id}>
            {children}
        </div>
    )
}
export default ContentContainer