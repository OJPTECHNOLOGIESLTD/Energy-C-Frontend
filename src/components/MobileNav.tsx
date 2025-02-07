"use client";

import { DASHBOARD_ROUTE, ORDERS_ROUTE, PROFILE_ROUTE, STORE_ROUTE } from "@/constants/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCar, FaUser } from "react-icons/fa6";
import { RiHome6Fill } from "react-icons/ri";
import { SiHomeassistantcommunitystore } from "react-icons/si";

const navItems = [
  {
    label: "Home",
    icon: RiHome6Fill,
    href: DASHBOARD_ROUTE,
  },
  {
    label: "Store",
    icon: SiHomeassistantcommunitystore,
    href: STORE_ROUTE,
  },
  {
    label: "Orders",
    icon: FaCar,
    href: ORDERS_ROUTE,
  },
  {
    label: "Profile",
    icon: FaUser,
    href: PROFILE_ROUTE,
  },
];

export default function MobileNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg">
            <ul className="flex justify-around items-center h-[60px]">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <li key={item.label}>
                            <Link 
                                href={item.href}
                                className="flex flex-col items-center gap-1"
                            >
                                <item.icon 
                                    className={`text-xl transition-colors duration-200 ${
                                        isActive ? 'text-[#217C70]' : 'text-[#ABB7C2]'
                                    }`}
                                />
                                <span 
                                    className={`text-xs transition-colors duration-200 ${
                                        isActive ? 'text-[#217C70]' : 'text-[#ABB7C2]'
                                    }`}
                                >
                                    {item.label}
                                </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
