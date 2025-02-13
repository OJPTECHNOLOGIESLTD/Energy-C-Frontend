import { Logo, NotificationIcon } from "@/assets";
import MobileNav from "@/components/MobileNav";
import SearchField from "@/components/SearchField";
import StoreCard from "@/components/StoreCard";
import Text from "@/components/Text";
import { NOTIFICATION_ROUTE } from "@/constants/routes";
import router from "next/router";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function Store() {
  const [search, setSearch] = useState("");
  return (
    <div className="p-4">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center">
          <Logo className="w-[60px] h-[60px]" />
          <span className="uppercase font-semibold text-[15px]">
            Energy Chleen
          </span>
        </div>

        <div
          className="bg-[#217C70] rounded-full h-[34px] w-[34px] flex justify-center items-center cursor-pointer"
          onClick={() => router.push(NOTIFICATION_ROUTE)}
        >
          <NotificationIcon />
        </div>
      </div>
      <div className="mt-4 mb-10 flex flex-col gap-6">
        <Text variant="h2" size="base">
          Waste Recycle Essentials
        </Text>
        <Text variant="small" customSize="11px">
          Discover premium waste collection and cleaning tools designed for a
          cleaner, greener lifestyle. From durable garbage cans to eco-friendly
          waste bags, protective gloves, and more, we’ve got everything you need
          to make waste management easy and efficient.
        </Text>
      </div>
      

      <SearchField
        placeholder="Search for items..."
        variant="primary"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        leftIcon={<FiSearch />}
        fullWidth
      />

      {!data.length ? (
        <Text>No items available at the moment...</Text>
      ) : (
        <div className="mt-6 mb-14 grid grid-cols-2 gap-4">
          {data.map((item) => (
            <StoreCard
              image={item.image}
              title={item.title}
              description={item.body}
              rating={item.rate}
              price={item.price}
            />
          ))}
        </div>
      )}
      <MobileNav />
    </div>
  );
}

const data = [
  {
    image: "/images/waste/wastebag.png",
    title: "Same Weight As Usual, 50% Extra Points!",
    body: "From the  2nd of February to the 20th of march, you earn extra 50% on pickup.",
    price: "500",
    rate: 5,
  },
  {
    image: "/images/waste/wastebasket.jpg",
    title: "Sunplast waste bin",
    body: "Buy Sunplast Waste Bin on Energychleen.ng.",
    price: "2770",
    rate: 4,
  },
  {
    image: "/images/waste/wastebin.jpg",
    title: "Pedal Plastic Waste Bin",
    body: "#1 Hospital Equipment, Clinical Surgical Instruments & Medical Laboratory Consumables Dealers Distributors Suppliers Store in Nigeria with Best Price",
    price: "75717",
    rate: 5,
  },
  {
    image: "/images/waste/wastetrolley.jpg",
    title: "1,100 Litre Plastic Waste Bin rolling on 4 Wheels",
    body: " Conical shape for ease of evacuation..",
    price: "909213",
    rate: 4,
  },
  {
    image: "/images/waste/wastebins.jpg",
    title: "Blossom swing waste bin (8L)",
    body: "Anambra state will host the biggest waste recycle convention in Nigeria..",
    price: "2530",
    rate: 4,
  },
];
