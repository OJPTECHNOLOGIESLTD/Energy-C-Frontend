"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Onboarding from "@/components/onboarding";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  const [showOnboarding, setShowOnboarding] = React.useState(false);
  const [showSplash, setShowSplash] = React.useState(true);
  const router = useRouter();

  const handleSplashEnd = () => {
    setShowSplash(false);
    setShowOnboarding(true);
  }

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
    router.push('/explore');
  }
  
  return (
    <div className='w-full min-h-screen bg-white shadow-lg'>
      {showSplash && <SplashScreen onSplashComplete={handleSplashEnd} />}
      {showOnboarding && <Onboarding onComplete={handleOnboardingComplete} />}
    </div>
  );
}