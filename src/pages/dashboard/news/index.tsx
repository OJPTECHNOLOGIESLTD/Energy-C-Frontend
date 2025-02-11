import Button from "@/components/Button";
import ContentContainer from "@/components/Container";
import MobileNav from "@/components/MobileNav";
import Text from "@/components/Text";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaRegNewspaper } from "react-icons/fa6";
import { IoIosArrowDropleftCircle } from "react-icons/io";

export default function News() {
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
          News & Events
        </h2>
      </div>
      {!data.length ? (
        <div className="relative z-3 justify-center items-center text-center w-full h-screen">
          <div className="rounded-full w-[80px] h-[80px] bg-[#217C70] flex justify-center items-center mt-64 mx-auto">
            <FaRegNewspaper className="w-[33.33px] h-auto text-white" />
          </div>
          <Text className="mt-4">No news yet...</Text>
        </div>
      ) : (
        <div className="relative z-3 mt-5 mb-14 p-4 flex flex-col justify-center items-center">
          <div className="flex flex-col gap-3 w-full">
            {data?.map((item, index) => (
              <ContentContainer key={index} bgColor="bg-[#217C70]" textColor="text-white" className="flex items-center mt-3 justify-between">
              <div>
                <Text size="base" variant="h1">{item.title}</Text>
                <Text customSize="10px" className="mt-2">{item.body}</Text>
              </div>
              <div className="relative w-[87px] h-[87px] rounded-[18px] overflow-hidden">
                <Image
                  src={item.image}
                  alt="user"
                  fill
                  className="object-cover"
                  sizes="87px"
                />
              </div>
            </ContentContainer>
            ))}
          </div>
          <Button title="Load More" className="capitalize mt-16 w-1/2" variant="tertiary" size="sm" />
        </div>
      )}
      <MobileNav />
    </div>
  );
}

// const data = [undefined];

const data = [
  {
    image: "/images/item1.jpg",
    title: "Same Weight As Usual, 50% Extra Points!",
    body: "From the  2nd of February to the 20th of march, you earn extra 50% on pickup.",
  },
  {
    image: "/images/item2.jpg",
    title: "Let’s Heal The World Together!",
    body: "Help us make the world a better place. Earn real money, save the planet.",
  },
  {
    image: "/images/item3.png",
    title: "The First Ever Eco Submit in Nigeria",
    body: "Anambra state will host the biggest waste recycle convention in Nigeria..",
  },
];
