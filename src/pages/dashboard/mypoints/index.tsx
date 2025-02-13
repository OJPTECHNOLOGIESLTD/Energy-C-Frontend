import { ArrowRight } from "@/assets";
import Button from "@/components/Button";
import CircularProgress from "@/components/CircularProgressBar";
import ContentContainer from "@/components/Container";
import MobileNav from "@/components/MobileNav";
import ToggleSwitch from "@/components/Switch";
import Text from "@/components/Text";
import { POINTS_ROUTE, STORE_ROUTE } from "@/constants/routes";
import { points } from "@/data/points";
import formatDate from "@/services/utils/formatDate";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";

function MyPoints() {
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(false);

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
          My Points
        </h2>
      </div>
      <div className="relative z-3 mt-5 mb-14 p-4 flex flex-col">
        <Text variant="small" customSize="11px" className="text-center">
          Track your rewards and enjoy discounts on the eco-friendly essentials
          store!
        </Text>

        <ContentContainer
          bgColor="bg-[#217C70]"
          textColor="text-white"
          className="flex items-center mt-7 mb-3 justify-between"
        >
          <div>
            <Text variant="h4" customSize="10px">
              Total Points Earned
            </Text>
            <div className="flex items-center gap-1">
              {isEnabled ? (
                <Text variant="h1" size="xl">
                  30 ~ ₦ 300
                </Text>
              ) : (
                <Text variant="h1" size="xl">
                  20 ~ ₦ 200
                </Text>
              )}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <Text customSize="10px" variant={isEnabled ? "h3" : "h4"}>
                Monthly
              </Text>{" "}
              |{" "}
              <Text customSize="10px" variant={!isEnabled ? "h3" : "h4"}>
                Weekly
              </Text>
            </div>
            <ToggleSwitch
              checked={isEnabled}
              onChange={setIsEnabled}
              //  label="Switch Period"
              //  labelClassName="text-white"
            />
          </div>
        </ContentContainer>
        <Button
          title="Redeem Points"
          className="capitalize"
          fullWidth
          variant="secondary"
          onClick={() => router.push(STORE_ROUTE)}
        />

        <div className="flex flex-col gap-5 mt-9">
          <div className="flex justify-between items-center">
            <Text customSize="15px" variant="h4">
              Your Achievements
            </Text>
            <div
              onClick={() => router.push(`${POINTS_ROUTE}/howitworks`)}
              className="cursor-pointer text-[#217C70] flex gap-1 items-center"
            >
              <Text variant="h5" size="xs">
                How it works?
              </Text>
              <ArrowRight />
            </div>
          </div>
          <div className="w-full flex flex-col gap-6 justify-center items-center">
            <CircularProgress
              progress={50}
              size={200}
              strokeWidth={20}
              text={
                <div className="flex flex-col items-center">
                  <Text>Level 1</Text>
                  <Text className="uppercase">Beginner</Text>
                </div>
              }
            />
            <Text variant="h4" customSize="11px">
              20/50 Recycle Needed For the Next Level
            </Text>
          </div>
          <div className="mt-6">
            <Text customSize="15px" variant="h4">
              Point Redemption History
            </Text>
            <div className="flex justify-between my-5 font-bold">
              <Text variant="h5" size="xxs" className="flex-1 text-left">
                Item Purchased
              </Text>
              <Text variant="h5" size="xxs" className="flex-1 text-center">
                Points Redeemed
              </Text>
              <Text variant="h5" size="xxs" className="flex-1 text-right">
                Balance Paid
              </Text>
            </div>
            <div className="flex flex-col gap-4">
              {!points ? (
                <div></div>
              ) : (
                <>
                {points.map((item, index) => (
                  <div key={index}>
                    <Text variant="small" size="xxs" className="mb-5">
                      {formatDate(item.date)}
                    </Text>
                    <ContentContainer
                      bgColor="bg-[#217C70]"
                      textColor="text-white"
                      className="flex items-center justify-between"
                    >
                      <Text variant="h4" size="xs" className="flex-1 text-left">
                        {item.itemPurchased}
                      </Text>
                      <Text variant="h4" size="xs" className="flex-1 text-center">
                        {item.pointRedeemed} ~ ₦ {Number(item.price).toLocaleString()}
                      </Text>
                      <Text variant="h4" size="xs" className="flex-1 text-right">
                        ₦ {Number(item.balance).toLocaleString()}
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

export default MyPoints;
