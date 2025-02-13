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
import SearchField from "@/components/SearchField";
import { FiSearch } from "react-icons/fi";
import { Filter } from "@/assets";
import DateFilter from "@/components/Filter";
import Modal from "@/components/Modal";

const Orders = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Active"); // State to track active tab
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const tabs = [
    { label: "Active" },
    { label: "Cancelled" },
    { label: "Completed" },
  ];

  const handleCancel = () => {};
  const handleReschedule = () => {};
  const handleRecycle = () => {};

  return (
    <div className="relative bg-[url('/images/bg.png')] bg-contain bg-center min-h-screen items-center">
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

      <div className="items-center w-full py-6 relative bg-white">
        <Tabs tabs={tabs} setActiveTab={setActiveTab} className="relative" />
        <div className="flex justify-center items-center gap-6 mt-5">
          <SearchField
            placeholder="Search for items..."
            className=""
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            leftIcon={<FiSearch />}
            variant="secondary"
          />
          <div className="p-3 justify-center items-center shadow-md cursor-pointer hover:bg-gray-100" onClick={() => setIsOpen(!isOpen)}>
            <Filter />
          </div>
        </div>
      </div>

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
                status={item.status}
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
                status={item.status}
                point={item.points}
              />
            ))}
          </div>
        )}
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <DateFilter
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={handleStartDateChange}
          onEndDateChange={handleEndDateChange}
        />
      </Modal>
      <MobileNav />
    </div>
  );
};

// Wrap the Orders component with AuthGuard
export default Orders;
