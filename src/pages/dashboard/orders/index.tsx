import Button from "@/components/Button";
import ContentContainer from "@/components/Container";
import MobileNav from "@/components/MobileNav";
import Tabs from "@/components/Tabs";
import Text from "@/components/Text";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaRegNewspaper } from "react-icons/fa6";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import AuthGuard from "@/components/AuthGuard";
import { useState } from "react";
import { active, cancelled, completed } from "@/data/order";
import OrderCard from "@/components/OrdersCard";

const Orders = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Active"); // State to track active tab

  // Define your tabs here
  const tabs = [
    { label: "Active" },
    { label: "Cancelled" },
    { label: "Completed" },
  ];

  const handleCancel = () => {}
  const handleReschedule = () => {}
  const handleRecycle = () => {}

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
          My Orders
        </h2>
      </div>

      {/* Pass the tabs to the Tabs component */}
      <Tabs tabs={tabs} setActiveTab={setActiveTab} className="relative" />

      {/* Render content based on the active tab */}
      <div className="relative z-3 mt-5 mb-14 p-4 flex flex-col justify-center items-center">
        {activeTab === "Active" && (
          <div className="flex flex-col gap-3 w-full">
            {active.map((item, index) => (
              <OrderCard
                name={item.name}
                orderId={item.orderId}
                price={item.price}
                weight={item.weight}
                date={item.date}
                address={item.address}
                btnTitle={"Cancel Request"}
                onClick={handleCancel}
                status={item.status}
              />
            ))}
          </div>
        )}

        {activeTab === "Cancelled" && (
          <div className="flex flex-col gap-3 w-full">
            {cancelled.map((item, index) => (
              <OrderCard
                name={item.name}
                orderId={item.orderId}
                price={item.price}
                weight={item.weight}
                date={item.date}
                address={item.address}
                btnTitle={"Reschedule"}
                onClick={handleReschedule}
              />
            ))}
          </div>
        )}

        {activeTab === "Completed" && (
          <div className="flex flex-col gap-3 w-full">
            {completed.map((item, index) => (
              <OrderCard
                name={item.name}
                orderId={item.orderId}
                price={item.price}
                weight={item.weight}
                date={item.date}
                address={item.address}
                btnTitle={"Recycle Again"}
                onClick={handleRecycle}
                status={item.points}
              />
            ))}
          </div>
        )}
      </div>

      <MobileNav />
    </div>
  );
};

// Wrap the Orders component with AuthGuard
export default Orders;
