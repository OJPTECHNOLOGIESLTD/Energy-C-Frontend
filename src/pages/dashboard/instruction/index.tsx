"use client"
import Button from "@/components/Button";
// import ImageViewer from "@/components/imageViewer";
import dynamic from "next/dynamic";

const ImageViewer = dynamic(() => import("@/components/ImageViewer"), { ssr: false });
import Text from "@/components/Text";
import { data } from "@/data/instruction";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { IoIosArrowDropleftCircle } from "react-icons/io";


export default function InstructionPage() {
    const [hasScale, setHasScale] = useState<string>("");
    const [kg, setKg] = useState(1);
    const info = data
    const [price, setPrice] = useState(info.price);
    const router = useRouter()
    const handleIncrement = () => {
        setKg(prevKg => prevKg + 1);
        setPrice(prevPrice => info.price * (kg + 1));
    };

    const handleDecrement = () => {
        if (kg > 1) {
            setKg(prevKg => prevKg - 1);
            setPrice(prevPrice => info.price * (kg - 1));
        }
    };


    const handleBack = () => {
        router.back()
    }
    
    const handleSchedule = () => {
        router.push("/dashboard/pickupDetails")
    }

    const handleScaleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHasScale(e.target.value);
    };

    return (
        <div className="w-full">
            <div className="flex items-center w-full p-4 relative">
                <div className="absolute left-4">
                    <IoIosArrowDropleftCircle
                        className="text-[#217C70] text-4xl cursor-pointer"
                        onClick={handleBack}
                    />
                </div>
                <Text
                    variant="h2"
                    size="base"
                    className="flex-1 text-center"
                >
                    {info.name} Details
                </Text>
            </div>
            <ImageViewer src={info.video} isAnimation
                autoPlay={false}
                muted={false} />
            <div className="p-4">
                <div className="flex justify-between mt-4"><Text variant="h2" customSize="15px">{info.name}</Text> <Text variant="h2" customSize="15px">NGN {info.price}/kg</Text></div>
                <Text customSize="11px">{info.description}</Text>
                <Text customSize="11px" variant="h3" className="mt-3">Tips for Correct Disposal:</Text>
                <ul className="list-decimal list-outside space-y-1 p-3">
                    {info.instructions.map((items) => (
                        <li key={items.id} className="text-[11px]">
                            {items.description}
                        </li>
                    ))}
                </ul>
                <Text customSize="11px">Start recycling plastic waste today and make a difference!</Text>

                <div className="mt-4 mb-6">
                    <div className="flex flex-col gap-2 mb-6">
                        <Text customSize="11px" variant="h3">Do you have a weighing scale?</Text>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="hasScale"
                                    value="yes"
                                    className="accent-[#217C70]"
                                    onChange={handleScaleChange}
                                />
                                <span className="text-sm">Yes</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="hasScale"
                                    value="no"
                                    className="accent-[#E7E3C6] bg-[#E7E3C6]"
                                    onChange={handleScaleChange}
                                />
                                <span className="text-sm">No</span>
                            </label>
                        </div>
                        {hasScale === "yes" && (
                            <div className="mt-4 flex items-center justify-between">
                                <div className="flex flex-col gap-2">
                                    <Text variant="h3" size="xs">Weight/kg</Text>
                                    <div className="flex gap-3 items-center">
                                        <Button 
                                            title={<BiMinus size={15} style={{fontWeight: "bold"}} />} 
                                            variant="secondary" 
                                            className="w-[40px] h-[40px] rounded-full" 
                                            isIconOnly 
                                            onClick={handleDecrement} 
                                        />
                                        <Text variant="h2" customSize="15px">{kg}</Text>
                                        <Button 
                                            title={<BiPlus size={15} style={{fontWeight: "bold"}} />} 
                                            variant="secondary" 
                                            className="w-[40px] h-[40px] rounded-full" 
                                            isIconOnly 
                                            onClick={handleIncrement} 
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Text variant="h3" size="xs">Price</Text>
                                    <div className="rounded-full border min-w-[133px] border-[#ABB7C2] p-2 justify-center text-center"><Text variant="h2" customSize="15px">{price}</Text></div>
                                </div>
                            </div>
                        )}

                    </div>
                    <Button title="Schedule" variant="tertiary" fullWidth onClick={handleSchedule} />
                </div>
            </div>

        </div>
    )
}
