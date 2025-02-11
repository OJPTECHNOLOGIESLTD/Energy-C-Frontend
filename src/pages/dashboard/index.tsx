"use client";

import { ArrowRight, CustomerService, Favorite, Logo, NotificationIcon, ProfileDp, User } from "@/assets";
import ProgressBar from "@/components/ProggressBar";
import Image from "next/image";
import { useState } from "react";
import { RiRecycleFill } from "react-icons/ri";
import ContentContainer from "@/components/Container";
import Text from "@/components/Text";
import Button from "@/components/Button";
import MobileNav from "@/components/MobileNav";
import { useRouter } from "next/navigation";
import { DASHBOARD_ROUTE, INSTRUCTION_ROUTE, NEWS_ROUTE, NOTIFICATION_ROUTE } from "@/constants/routes";
import { data } from "@/data/wasteItems";
import StatsCard from "@/components/statsCard";
import AuthGuard from "@/components/AuthGuard";
import ProfileHeader from "@/components/ProfileHeader";



function Dashboard() {
  const router = useRouter()
  const wasteItems = data

  const handleRecycle = () => {
    router.push(INSTRUCTION_ROUTE)
  }
  return (
    <div className="relative p-4 bg-[url('/images/bg.png')] bg-contain bg-center">

      <div className="absolute inset-0 bg-white bg-opacity-30"></div>

      <div className="relative z-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo className="w-[60px] h-[60px]" />
            <span className="uppercase font-semibold text-[15px]">Energy Chleen</span>
          </div>
          <div className="flex gap-3">
          <div className="bg-[#217C70] rounded-full h-[34px] w-[34px] flex justify-center items-center">
            <CustomerService className="text-2xl" />
          </div>

          <div className="bg-[#217C70] rounded-full h-[34px] w-[34px] flex justify-center items-center cursor-pointer" onClick={() => router.push(NOTIFICATION_ROUTE)}>
            <NotificationIcon />
          </div>
          </div>
        </div>

        <ContentContainer className="mt-3" bgColor="bg-[#217C70]" textColor="text-white">

          <div className="flex gap-4">
            <ProfileHeader
              profileImage={ProfileDp.src}
              fallbackInitials="JD"
            />
            <div className="flex flex-col gap-1">
              <Text size="base" variant="h1">Hello, Benjamin Ezeh</Text>
              <ProgressBar progress={80} height="sm" />
              <Text customSize="10px" variant="h6">Level 1: Beginner</Text>
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <StatsCard title={"Waste Recycled"} icon={<RiRecycleFill color="#217C70" />} stat={"18"} measurement="kg" bg="bg-[#E7E3C6]" />
            <StatsCard title={"Points Earned"} icon={<Favorite />} stat={"10"} />
          </div>
        </ContentContainer>

        <div className="mt-4">
          <div className="flex justify-between items-center"><Text customSize="15px" variant="h3">News & Events</Text> <ArrowRight onClick={() => router.push(NEWS_ROUTE)} className="cursor-pointer" /></div>
          <ContentContainer bgColor="bg-[#217C70]" textColor="text-white" className="flex items-center mt-3 justify-between">
            <div>
              <Text size="base" variant="h1">Same Weight As Usual,
                50% Extra Points!</Text>
              <Text customSize="10px" className="mt-2">From the  2nd of February to the 20th
                of March, you earn extra 50% on pickup.</Text>
            </div>
            <div className="relative w-[87px] h-[87px] rounded-[18px] overflow-hidden">
              <Image
                src={User.src}
                alt="user"
                fill
                className="object-cover"
                sizes="87px"
              />
            </div>
          </ContentContainer>
        </div>
        <div className="mt-4 mb-14">
          <div className="flex justify-between items-center"><Text customSize="15px" variant="h3">Recycle</Text> <Button title={"View All"} size="xs" variant="tertiary" /></div>
          <div className="flex gap-3 mt-3 overflow-x-auto">
            {wasteItems.map((item, index) => (
              <div key={index} className="flex flex-col gap-4 justify-center items-center">
                <div className="relative w-[315px] h-[351px] rounded-[18px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 315px) 100vw, 315px"
                  />
                </div>
                <Button variant="tertiary" title={`Recycle ${item.name}`} onClick={handleRecycle} />
              </div>
            ))}
          </div>
        </div>
        <MobileNav />
      </div>

    </div>

  )
}

export default Dashboard

// export default AuthGuard(Dashboard)