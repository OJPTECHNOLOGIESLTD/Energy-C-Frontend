"use client";

import InputField from "@/components/inputField";
import "./styles.css"
import Button from "@/components/button";
import Link from "next/link";
import { DASHBOARD_ROUTE, SIGNUP_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";


export default function Login() {
    const router = useRouter()
    const isLoading = false

    const handleLogin = () => {
        router.push(DASHBOARD_ROUTE)
    }
    return (
        <div className="text-white min-h-screen p-6 bg-container">
            <div className="flex-col text-center">
                <p className="font-bold my-4 text-2xl">
                    Welcome Back!
                </p>
                {/* <p className="mb-8 font-medium text-[15px]">Join the movement. Sign up in seconds to start earning real cash!</p> */}
            </div>
            <div className="flex flex-col gap-2">
                <InputField label="Enter Your Email" placeholder={"example@gmail.com"} />
                <InputField label="Input Your Password" placeholder={"Password"} />
            </div>

            <Button
                title="Login"
                onClick={handleLogin}
                isLoading={isLoading}
                variant="secondary"
                style={{width: "100%", marginTop: "4rem"}}
            />
            <p className="text-center mt-3">Don’t have an account yet? <Link href={SIGNUP_ROUTE} className="text-[#E7E3C6]">Sign Up</Link>.</p>
        </div>
    )
}