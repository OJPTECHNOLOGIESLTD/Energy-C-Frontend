"use client"

import { LOGIN_ROUTE, SIGNUP_ROUTE } from "@/constants/routes";
import "./styles.css"
import { useRouter } from "next/navigation";

const Explore: React.FC = () => {
    const router = useRouter()

    const handleRegister = () => {
        router.push(`${SIGNUP_ROUTE}`);
    }
    const handleLogin = () => {
        router.push(`${LOGIN_ROUTE}`);
    }
    return (

        <div className="flex flex-col justify-end mb-5 items-center text-center text-white h-screen p-6 splash-container">

                <div className="flex-col">
                    <p className="font-bold my-4 text-2xl uppercase">
                        Explore
                    </p>
                    <p className="mb-8 font-medium text-[15px]">Discover how Energy Chleen makes eco-friendly living simple and rewarding. Let’s transform waste into wealth!</p>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <button onClick={handleRegister} className="text-black bg-white w-full rounded-2xl py-3 uppercase text-600">Get started</button>
                    <button onClick={handleLogin} className="text-black bg-white w-full rounded-2xl py-3 uppercase text-600">Log in</button>
                </div>
        </div>
    )
}

export default Explore