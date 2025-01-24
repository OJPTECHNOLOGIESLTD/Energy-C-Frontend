"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { FaVolumeMute, FaVolumeUp, FaPlay, FaPause } from "react-icons/fa";

interface ImageViewerProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  aspectRatio?: "square" | "video" | "auto";
  onClick?: () => void;
  priority?: boolean;
  allowFullscreen?: boolean;
  isAnimation?: boolean;
  videoType?: 'mp4' | 'webm' | 'wmv' | 'ogg';
  autoPlay?: boolean;
  muted?: boolean;
  onLoad?: () => void;
  onError?: () => void;
  fallbackImage?: string;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  src,
  alt = "image",
  width,
  height,
  className = "",
  aspectRatio = "auto",
  onClick,
  priority = false,
  allowFullscreen = false,
  isAnimation = false,
  videoType = 'mp4',
  autoPlay = true,
  muted: initialMuted = true,
  onLoad,
  onError,
  fallbackImage,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isMuted, setIsMuted] = useState(initialMuted);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const videoRef = useRef<HTMLVideoElement>(null);

  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    auto: "aspect-auto",
  };

  const handleImageLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleImageError = () => {
    setHasError(true);
    setIsLoading(false);
    onError?.();
  };

  const handleClick = () => {
    if (allowFullscreen) {
      setIsFullscreen(true);
    }
    onClick?.();
  };

  // Check if video format is supported
  const isVideoSupported = () => {
    if (!isAnimation) return true;
    
    if (typeof window === "undefined") {
      // Assume video support for server-side rendering, or handle it gracefully.
      return true;
    }
  
    const video = document.createElement("video");
    switch (videoType) {
      case "mp4":
        return video.canPlayType("video/mp4").length > 0;
      case "webm":
        return video.canPlayType("video/webm").length > 0;
      case "ogg":
        return video.canPlayType("video/ogg").length > 0;
      case "wmv":
        return video.canPlayType("video/x-ms-wmv").length > 0;
      default:
        return false;
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (hasError || (isAnimation && !isVideoSupported())) {
    if (fallbackImage) {
      return (
        <Image
          src={fallbackImage}
          alt={alt}
          width={width || 500}
          height={height || 500}
          className={`w-full h-full object-cover ${className}`}
        />
      );
    }
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${aspectRatioClasses[aspectRatio]} ${className}`}>
        <span className="text-gray-400">
          {hasError ? 'Failed to load media' : 'Format not supported'}
        </span>
      </div>
    );
  }

  const videoComponent = (
    <div className="relative group">
      <video
        ref={videoRef}
        src={src}
        autoPlay={autoPlay}
        loop
        muted={isMuted}
        playsInline
        controls={isFullscreen}
        className={`w-full h-full object-cover ${className}`}
        onLoadedData={handleImageLoad}
        onError={handleImageError}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={src} type={`video/${videoType}`} />
        Your browser does not support this video format.
      </video>

      {/* Video Controls */}
      {!isFullscreen && (
        <div className="absolute bottom-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={togglePlay}
            className="p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all"
          >
            {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
          </button>
          <button
            onClick={toggleMute}
            className="p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all"
          >
            {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
          </button>
        </div>
      )}

      {/* Large Play Button (shows when paused) */}
      {!isPlaying && !isFullscreen && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-all"
        >
          <FaPlay size={48} className="text-white opacity-80" />
        </button>
      )}
    </div>
  );

  const imageComponent = isAnimation ? videoComponent : (
    <Image
      src={src}
      alt={alt}
      width={width || 500}
      height={height || 500}
      priority={priority}
      className={`w-full h-full object-cover ${isLoading ? 'animate-pulse bg-gray-200' : ''} ${className}`}
      onLoad={handleImageLoad}
      onError={handleImageError}
      onClick={handleClick}
    />
  );

  return (
    <>
      <div className={`relative overflow-hidden ${aspectRatioClasses[aspectRatio]}`}>
        {isAnimation ? videoComponent : imageComponent}
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <IoClose size={24} />
          </button>
          <div className="max-w-[90vw] max-h-[90vh]">
            {isAnimation ? videoComponent : imageComponent}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageViewer;
