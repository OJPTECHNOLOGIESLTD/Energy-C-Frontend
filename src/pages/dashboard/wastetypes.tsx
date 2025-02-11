import Button from "@/components/Button";
import ContentContainer from "@/components/Container";
import MobileNav from "@/components/MobileNav";
import Text from "@/components/Text";
import { data } from "@/data/wasteItems";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaRegNewspaper } from "react-icons/fa6";
import { IoIosArrowDropleftCircle } from "react-icons/io";

export default function WasteTypes() {
  const router = useRouter();
  //   const wasteItems = data
  return (
    <div className="min-h-screen">
      <div className="flex items-center w-full py-6 relative bg-white">
        <div className="absolute left-4">
          <IoIosArrowDropleftCircle
            className="text-[#217C70] text-4xl cursor-pointer"
            onClick={() => router.back()}
          />
        </div>
        <h2 className="flex-1 text-black text-center text-base font-semibold">
          Waste Types
        </h2>
      </div>

      <div className="mt-5 mb-14 p-4 flex flex-col justify-center items-center">
        <Text variant="small" customSize="11px">
          Discover the value of your recyclables! This page lists all the waste
          types we accept and their current rates
        </Text>
        <Button
          title="Metal Waste"
          className="my-7"
          variant="tertiary"
          fullWidth
          //   size="sm"
        />
        <div className="flex flex-col gap-3 w-full">
          {data?.map((item, index) => (
            <div className="w-full h-[44px] flex gap-2 sm:gap-4 items-center mt-3">
              <div className="relative w-[61px] h-[44px] rounded-[5px] overflow-hidden">
                <Image
                  src={item.image}
                  alt="user"
                  width={61}
                  height={44}
                  className="object-contain shadow-md"
                />
              </div>
              <div className="w-full p-3 flex justify-between bg-[#F5F5F5] shadow-md rounded-[5px]">
                <Text customSize="13px">{item.name}</Text>
                <Text customSize="13px" variant="h4">
                  ₦{Number(item.price).toLocaleString()}
                </Text>
              </div>
            </div>
          ))}
        </div>
        <Button
          title="Paper Waste"
          className="my-7"
          variant="tertiary"
          fullWidth
          //   size="sm"
        />
        <Button
          title="Condemned Battery"
          className="my-7"
          variant="tertiary"
          fullWidth
          //   size="sm"
        />
        <Button
          title="Rubber Waste"
          className="my-7"
          variant="tertiary"
          fullWidth
          //   size="sm"
        />
        <Button
          title="Plastic Waste"
          className="my-7"
          variant="tertiary"
          fullWidth
          //   size="sm"
        />
      </div>
      <MobileNav />
    </div>
  );
}
