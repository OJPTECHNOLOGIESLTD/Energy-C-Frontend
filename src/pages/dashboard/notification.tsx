import { NotificationIcon2 } from "@/assets";
import MobileNav from "@/components/MobileNav";
import Notifications from "@/components/Notifications";
import Text from "@/components/Text";
import { useRouter } from "next/navigation";
import { IoIosArrowDropleftCircle } from "react-icons/io";

export default function Notification() {
  const router = useRouter();
  return (
    <div className="relative bg-[url('/images/bg.png')] bg-contain bg-center min-h-screen">
      <div className="absolute inset-0 bg-white bg-opacity-30"></div>
      <div className="flex items-center w-full py-6 relative bg-white">
        <div className="absolute left-4">
          <IoIosArrowDropleftCircle
            className="text-[#217C70] text-4xl cursor-pointer"
            onClick={() => router.back()}
          />
        </div>
        <h2 className="flex-1 text-black text-center text-base font-semibold">
          Notifications
        </h2>
      </div>
      {!data.length ? (
        <div className="relative z-3 justify-center items-center text-center w-full h-screen">
          <div className="rounded-full w-[80px] h-[80px] bg-[#217C70] flex justify-center items-center mt-64 mx-auto">
            <NotificationIcon2 className="w-[33.33px] h-auto" />
          </div>
          <Text className="mt-4">No notifications yet...</Text>
        </div>
      ) : (
        <div className="relative z-3 mt-5 mb-14 p-4 flex flex-col justify-center items-center text-center">
          <div className="flex flex-col gap-3 w-full">
            {data?.map((item, index) => (
              <Notifications
                key={index}
                date={item?.date}
                title={item?.title}
                read={item?.read}
              />
            ))}
          </div>
        </div>
      )}
      <MobileNav />
    </div>
  );
}

// const data = [undefined];

const data = [
  {
    date: "Today",
    title: "Your pick up request has been placed and being processed.",
    read: false,
  },
  {
    date: "5th January 2025",
    title:
      "Your pickup request for 15kg of aluminum has been approved. Scheduled for tomorrow at 10 AM.",
    read: true,
  },
  {
    date: "3rd January 2025",
    title:
      "You've earned 200 points from your recent recycling transaction! Keep going!",
    read: true,
  },
];
