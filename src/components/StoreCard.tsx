import React from "react";
import Image from "next/image";
import Text from "@/components/Text";
import ContentContainer from "@/components/Container";

interface StoreCardProps {
  image: string;
  title: string;
  description: string;
  rating: number;
  price: string;
}

const StoreCard: React.FC<StoreCardProps> = ({ image, title, description, rating, price }) => {
  return (
    <ContentContainer className="shadow-lg p-4" bgColor="bg-white" textColor="text-black">
      <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>
      <Text variant="h2" size="lg" className="mt-2 font-semibold">{title}</Text>
      <Text className="mt-1 text-gray-600">{description}</Text>
      <div className="flex justify-between items-center mt-2">
        <Text className="text-yellow-500">{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</Text>
        <Text className="text-[#217C70] font-bold">₦{Number(price).toLocaleString()}</Text>
      </div>
    </ContentContainer>
  );
};

export default StoreCard;
