import { BinIcon, Checker, ExitIcon, InfoIcon, ListIcon, ProfileDp, Speaker, Weight } from "@/assets";
import Button from "@/components/Button";
import MobileNav from "@/components/MobileNav";
import ProfileHeader from "@/components/ProfileHeader";
import Text from "@/components/Text";
import { NEWS_ROUTE, WASTETYPES_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Profile() {
const router = useRouter()

  return (
    <div className="relative p-4 bg-[url('/images/bg.png')] bg-contain bg-center min-h-screen">
      <div className="absolute inset-0 bg-white bg-opacity-30"></div>
      <div className="relative z-3 mb-14 flex flex-col justify-center items-center text-center">
        <div className="mt-5 mb-6 flex flex-col items-center justify-center">
          <ProfileHeader
            profileImage={ProfileDp.src}
            fallbackInitials="JD"
            className="w-[78px] h-[78px] relative"
          />
          <div className="flex flex-col gap-1 mb-5">
            <Text size="base" variant="h2">
              Benjamin Ezeh
            </Text>
            <Text customSize="10px" variant="h6">
              Level 1: Beginner
            </Text>
          </div>
          <Button title={"Edit Profile"} variant="tertiary" size="xs" />
        </div>
        <div className="space-y-4">
          <Button
            title="Waste Types & Rates"
            variant={"tertiary"}
            leftIcon={<ListIcon />}
            onClick={() => router.push(WASTETYPES_ROUTE)}
            rightIcon={<MdKeyboardArrowRight />}
            fullWidth
            alignment="left"
            className="capitalize py-0.5 px-0.5 rounded-[9.8px] text-[14.71px] items-left justify-between"
          />
          <Button
            title="News & Events"
            variant={"tertiary"}
            leftIcon={<Speaker />}
            onClick={() => router.push(NEWS_ROUTE)}
            rightIcon={<MdKeyboardArrowRight />}
            fullWidth
            alignment="left"
            className="capitalize py-0.5 px-0.5 rounded-[9.8px] text-[14.71px] items-left justify-between"
          />
          <Button
            title="Rate App"
            variant={"tertiary"}
            leftIcon={<Checker />}
            // onClick={() => ()}
            rightIcon={<MdKeyboardArrowRight />}
            fullWidth
            alignment="left"
            className="capitalize py-0.5 px-0.5 rounded-[9.8px] text-[14.71px] items-left justify-between"
          />
          <Button
            title="About Us"
            variant={"tertiary"}
            leftIcon={<InfoIcon />}
            // onClick={() => ()}
            rightIcon={<MdKeyboardArrowRight />}
            fullWidth
            alignment="left"
            className="capitalize py-0.5 px-0.5 rounded-[9.8px] text-[14.71px] items-left justify-between"
          />
          <Button
            title="Terms & Conditions"
            variant={"tertiary"}
            leftIcon={<Weight />}
            // onClick={() => ()}
            rightIcon={<MdKeyboardArrowRight />}
            fullWidth
            alignment="left"
            className="capitalize py-0.5 px-0.5 rounded-[9.8px] text-[14.71px] items-left justify-between"
          />
          <Button
            title="Delete Account"
            variant={"tertiary"}
            leftIcon={<BinIcon />}
            // onClick={() => ()}
            rightIcon={<MdKeyboardArrowRight />}
            fullWidth
            alignment="left"
            className="capitalize py-0.5 px-0.5 rounded-[9.8px] text-[14.71px] items-left justify-between"
          />
          <Button
            title="Log out"
            variant={"tertiary"}
            leftIcon={<ExitIcon />}
            // onClick={() => ()}
            rightIcon={<MdKeyboardArrowRight />}
            fullWidth
            alignment="left"
            className="capitalize py-0.5 px-0.5 rounded-[9.8px] text-[14.71px] items-left justify-between"
          />
        </div>
      </div>
      <MobileNav />
    </div>
  );
}
