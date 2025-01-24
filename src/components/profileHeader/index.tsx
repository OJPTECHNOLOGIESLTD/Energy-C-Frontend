"use client";

import Image from "next/image";
import { useState } from "react";

interface ProfileHeaderProps {
  profileImage?: string;
  fallbackInitials?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showStatus?: boolean;
  isOnline?: boolean;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  profileImage = '',
  fallbackInitials = 'U',
  size = 'md',
  className = '',
  showStatus = false,
  isOnline = false,
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-[45px] h-[45px] text-lg',
    lg: 'w-16 h-16 text-xl'
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {!imageError && profileImage ? (
        <Image
          src={profileImage}
          alt="Profile"
          fill
          className="rounded-full object-cover"
          onError={() => setImageError(true)}
          priority
        />
      ) : (
        <div className={`
          w-full h-full rounded-full 
          bg-[#217C70] text-white 
          flex items-center justify-center 
          font-medium
        `}>
          {fallbackInitials}
        </div>
      )}
      
      {showStatus && (
        <span className={`
          absolute bottom-0 right-0 
          w-3 h-3 rounded-full 
          border-2 border-white
          ${isOnline ? 'bg-green-500' : 'bg-gray-400'}
        `} />
      )}
    </div>
  );
};

export default ProfileHeader; 