import { Directions_car, HomeIcon, Store, UserIcon } from "@/assets";
import Link from "next/link";
import { useState } from "react";
import { FaHome, FaSearch, FaUserAlt, FaCog } from "react-icons/fa"; // Example icons

export default function MobileNav() {
    const [active, setActive] = useState("home"); // State to track active tab

    const handleTabClick = (tab: any) => {
        setActive(tab);
    };

    return (
        <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg">
            <ul className="flex justify-around items-center h-[60px]">
                <li
                    className={`flex flex-col items-center cursor-pointer ${active === "home" ? "text-green-500" : "text-[#ABB7C2]"
                        }`}
                    onClick={() => handleTabClick("home")}>
                    <Link href="/home">

                        <HomeIcon className="text-2xl text-[#ABB7C2]" />
                        <span className="text-xs text-[#ABB7C2]">Home</span>
                    </Link>
                </li>

                <li
                    className={`flex flex-col items-center cursor-pointer ${active === "home" ? "text-green-500" : "text-[#ABB7C2]"
                        }`}
                    onClick={() => handleTabClick("store")}>
                    <Store className="text-2xl text-[#ABB7C2]" />
                    <span className="text-xs text-[#ABB7C2]">Store</span>
                </li>

                <li
                    className={`flex flex-col items-center cursor-pointer ${active === "home" ? "text-green-500" : "text-[#ABB7C2]"
                        }`}
                    onClick={() => handleTabClick("orders")}>
                    <Directions_car className="text-2xl text-[#ABB7C2]" />
                    <span className="text-xs text-[#ABB7C2]">Orders</span>
                </li>

                <li
                    className={`flex flex-col items-center cursor-pointer ${active === "home" ? "text-green-500" : "text-[#ABB7C2]"
                        }`}
                    onClick={() => handleTabClick("profile")}>
                    <UserIcon className="text-2xl text-[#ABB7C2]" />
                    <span className="text-xs text-[#ABB7C2]">Profile</span>
                </li>
            </ul>
        </nav>
    );
}
