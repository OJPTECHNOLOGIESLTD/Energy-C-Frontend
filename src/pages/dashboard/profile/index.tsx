import {
  BinIcon,
  Checker,
  ExitIcon,
  InfoIcon,
  ListIcon,
  ProfileDp,
  Speaker,
  Weight,
} from "@/assets";
import Button from "@/components/Button";
import MobileNav from "@/components/MobileNav";
import Modal from "@/components/Modal";
import ProfileHeader from "@/components/ProfileHeader";
import Text from "@/components/Text";
import { NEWS_ROUTE, WASTETYPES_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Profile() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/auth/login");
  };

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
            onClick={() => setIsOpen(!isOpen)}
            rightIcon={<MdKeyboardArrowRight />}
            fullWidth
            alignment="left"
            className="capitalize py-0.5 px-0.5 rounded-[9.8px] text-[14.71px] items-left justify-between"
          />
          <Button
            title="Log out"
            variant={"tertiary"}
            leftIcon={<ExitIcon />}
            onClick={handleLogout}
            rightIcon={<MdKeyboardArrowRight />}
            fullWidth
            alignment="left"
            className="capitalize py-0.5 px-0.5 rounded-[9.8px] text-[14.71px] items-left justify-between"
          />
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <div className="justify-center items-center">
          <div className="text-center flex flex-col gap-4 mb-3">
            <Text customSize="15px" variant="h3">
              Confirmation Message
            </Text>
            <Text size="base" variant="small">
              Are you sure you want to delete your account?
            </Text>
          </div>
          <Text size="base" variant="small" className="my-3">
            Deleting your account will result in the following:
          </Text>
          <ul className="list-decimal list-outside space-y-1 p-3">
            <li className="text-sm">Loss of all your account data.</li>
            <li className="text-sm">
              Inability to recover your account information.
            </li>
          </ul>
          <Text size="base" variant="small" className="mt-3 text-red-600">
            <span className="font-semibold">Note: </span>
            This action is irreversible, please consider the consequences before
            proceeding
          </Text>
          <div className="w-full mt-7 flex flex-col items-center gap-5">
            <Button
              title="Proceed"
              variant={"tertiary"}
              className="capitalize rounded-full w-3/4"
            />
            <Button
              title="Back"
              variant={"tertiary"}
              className="capitalize rounded-full w-3/4"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      </Modal>
      <MobileNav />
    </div>
  );
}
