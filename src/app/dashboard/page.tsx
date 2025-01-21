"use client";

import { ArrowRight, Favorite, Logo, NotificationIcon, ProfileDp, Profilepic, User } from "@/assets";
import ProgressBar from "@/components/progressBar";
import Image from "next/image";
import { BiArrowToRight, BiNotification } from "react-icons/bi";
import { useState } from "react";
import StatsCard from "./_components/cards/statsCard";
import { RiRecycleFill } from "react-icons/ri";
import { GiSelfLove } from "react-icons/gi";
import ContentContainer from "@/components/container";
import Text from "@/components/Text";
import Button from "@/components/button";
import MobileNav from "@/components/mobileNav";

interface ProfileHeaderProps {
  profileImage?: string;
  fallbackInitials?: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  profileImage = '',
  fallbackInitials = 'U'
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="w-[45px] h-[45px]">
      {!imageError && profileImage ? (
        <Image
          src={profileImage}
          alt="Profile"
          width={45}
          height={45}
          className="rounded-full object-scale-down"
          onError={() => setImageError(true)}
          priority
        />
      ) : (
        <div className="w-full h-full rounded-full bg-[#217C70] text-white flex items-center justify-center text-lg font-medium">
          {fallbackInitials}
        </div>
      )}
    </div>
  );
};

export default function Dashboard() {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image src={Logo} alt="logo" width={60} />
          <span className="uppercase font-semibold text-[15px]">Energy Chleen</span>
        </div>
        <div className="bg-[#217C70] rounded-full h-[34px] w-[34px] flex justify-center items-center">
          <Image src={NotificationIcon} alt="logo" />
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

      <div className="mt-3">
        <div className="flex justify-between items-center"><Text customSize="15px" variant="h3">News & Events</Text> <ArrowRight /></div>
        <ContentContainer bgColor="bg-[#217C70]" textColor="text-white" className="flex items-center mt-3">
          <div>
            <Text size="base" variant="h1">Same Weight As Usual,
              50% Extra Points!</Text>
            <Text customSize="10px" className="mt-2">From the  2nd of February to the 20th
              of march, you earn extra 50% on pickup.</Text>
          </div>
          <div className="relative w-[87px] h-[87px] rounded-[18px] overflow-hidden">
            <Image
              src={User.src}
              alt="user" fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </ContentContainer>
      </div>
      <div className="mt-3 mb-14">
        <div className="flex justify-between items-center"><Text customSize="15px" variant="h3">Recycle</Text> <Button title={"View All"} size="xs" variant="tertiary" /></div>
        <div className="flex gap-3 mt-3 overflow-x-auto">
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="relative w-[315px] h-[351px] rounded-[18px] overflow-hidden">
              <Image
                src={User.src}
                alt="user" fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <Button variant="tertiary" title="Recycle Plastic" />
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="relative w-[315px] h-[351px] rounded-[18px] overflow-hidden">
              <Image
                src={User.src}
                alt="user" fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <Button variant="tertiary" title="Recycle Plastic" />
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="relative w-[315px] h-[351px] rounded-[18px] overflow-hidden">
              <Image
                src={User.src}
                alt="user" fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <Button variant="tertiary" title="Recycle Plastic" />
          </div>
        </div>
      </div>
      <MobileNav />
    </div>
  )
}