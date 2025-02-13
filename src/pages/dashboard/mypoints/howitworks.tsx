import ContentContainer from "@/components/Container";
import ImageViewer from "@/components/ImageViewer";
import MobileNav from "@/components/MobileNav";
import Text from "@/components/Text";
import { levels } from "@/data/points";
import formatDate from "@/services/utils/formatDate";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";

function HowItWorks() {
  const router = useRouter();

  return (
    <div className="relative bg-[url('/images/bg.png')] bg-contain bg-center min-h-screen items-center">
      <div className="absolute inset-0 bg-white bg-opacity-30"></div>
      <div className="flex items-center w-full py-6 relative">
        <div className="absolute left-4">
          <IoIosArrowDropleftCircle
            className="text-[#217C70] text-4xl cursor-pointer"
            onClick={() => router.back()}
          />
        </div>
        <h2 className="flex-1 text-black text-center text-base font-semibold">
          How it works
        </h2>
      </div>
      <div className="relative z-3 mt-5 mb-14 p-4 flex flex-col">
        <ContentContainer
          bgColor="bg-[#217C70]"
          textColor="text-white"
          className="flex items-center mb-3 justify-between gap-5 w-full"
        >
          <div className="w-full">
            <ImageViewer src={"/images/discounts.png"} />
          </div>
          <div>
            <Text size="xxs">
              Welcome to <span className="font-semibold">Energy Chleen</span>{" "}
              Rewards system! Recycle with us, earn points, and unlock higher
              levels for greater shopping value!
            </Text>
          </div>
        </ContentContainer>

        <div className="flex flex-col gap-5 mt-9">
          <div className="flex justify-between items-center">
            <Text customSize="15px" variant="h4">
              How it works
            </Text>
          </div>
          <div className="w-full flex gap-6 justify-between items-center">
            <div className="flex flex-col gap-3 justify-center items-center text-center">
              <div className="items-center text-center p-4 rounded-full w-[48px] h-[48px] bg-[#217C70] text-white">
                1
              </div>
              <Text customSize="13px" variant="h4">
              Earn Points
              </Text>
              <Text size="xxs" variant="small">
              Every successful
              request earns you points.
              </Text>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center text-center">
              <div className="items-center text-center p-4 rounded-full w-[48px] h-[48px] bg-[#217C70] text-white">
                2
              </div>
              <Text customSize="13px" variant="h4">
              Convert
              </Text>
              <Text size="xxs" variant="small">
              Convert your points to money equivalent .
              </Text>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center text-center">
              <div className="items-center text-center p-4 rounded-full w-[48px] h-[48px] bg-[#217C70] text-white">
                3
              </div>
              <Text customSize="13px" variant="h4">
              Shop With Points
              </Text>
              <Text size="xxs" variant="small">
              Redeem your points for discounts or full payments.
              </Text>
            </div>
          </div>
          <div className="mt-6">
            <Text customSize="15px" variant="h4">
            Rewards Levels
            </Text>
            <div className="flex justify-between my-5 font-bold">
              <Text variant="h5" size="xxs" className="flex-1 text-left">
                Level
              </Text>
              <Text variant="h5" size="xxs" className="flex-1 text-center">
              Point Threshold
              </Text>
              <Text variant="h5" size="xxs" className="flex-1 text-right">
              1 Point value (₦)
              </Text>
            </div>
            <div className="flex flex-col gap-4">
              {!levels ? (
                <div></div>
              ) : (
                <>
                  {levels.map((item, index) => (
                    <div key={index}>
                      <ContentContainer
                        bgColor="bg-[#217C70]"
                        textColor="text-white"
                        className="flex items-center justify-between"
                      >
                        <div className="flex flex-col flex-1 text-left">
                        <Text
                          variant="h4"
                          size="xs"
                        >
                          Level {item.level}:
                        </Text>

                        <Text
                          variant="h4"
                          size="xs"
                        >
                          {item.description}
                        </Text>
                        </div>
                        <Text
                          variant="h4"
                          size="xs"
                          className="flex-1 text-center"
                        >
                          {item.point} Points
                        </Text>
                        <Text
                          variant="h4"
                          size="xs"
                          className="flex-1 text-right"
                        >
                          ₦ {Number(item.pointValue).toLocaleString()}
                        </Text>
                      </ContentContainer>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <MobileNav />
    </div>
  );
}

export default HowItWorks;
