"use client";

import { Logo } from "@/assets";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SplashScreenProps {
  onSplashComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onSplashComplete }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onSplashComplete();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [onSplashComplete]);

  return (
    <div
      className="flex flex-col justify-center items-center text-center bg-[#217C70] text-white h-screen"
    >
      <Image src={Logo} alt={"logo"} />
      {/* <Logo className="w-[150px] h-[150px]" /> */}
      <h1 className="font-bold text-3xl" >ENERGY CHLEEN</h1>
      <p className="text-[15px] font-medium">From Waste <span className="text-[#E7E3C6]">to Wealth</span></p>
    </div>
  );
};

export default SplashScreen;
