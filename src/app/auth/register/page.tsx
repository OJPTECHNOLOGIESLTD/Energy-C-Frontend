"use client";

import InputField from "@/components/inputField";
import "./styles.css"
import Button from "@/components/button";
import Link from "next/link";
import { LOGIN_ROUTE } from "@/constants/routes";


export default function Register() {
    const isLoading = false

    const handleSignUp = () => { }
    return (
        <div className="text-white min-h-screen p-6 bg-container">
            <div className="text-center flex-col">
                <p className="font-bold my-4 text-2xl">
                    Create an Account
                </p>
                <p className="mb-8 font-medium text-[15px]">Join the movement. Sign up in seconds to start earning real cash!</p>
            </div>
            <div className="flex flex-col gap-2">
                <InputField label="First Name" placeholder={"Your First Name"}
                />
                <InputField label="Last Name" placeholder={"Your Last Name"} />
                <InputField label="Enter Your Email" placeholder={"example@gmail.com"} />
                <InputField label="Enter Your Phone Number" placeholder={"080******78"} />
                <InputField label="Create Password" placeholder={"Password"} />
                <InputField label="Confirm Password" placeholder={"Password"} />
            </div>
            <div className="flex gap-4"><input type="checkbox" name="" id="" /> <span className="text-center">By submitting, you have agreed to our <Link href={""} className="text-[#E7E3C6]">Privacy policy</Link> and <Link href={""} className="text-[#E7E3C6]">Terms of use</Link>.</span></div>

            <Button
                title="Sign up"
                onClick={handleSignUp}
                isLoading={isLoading}
                variant="secondary"
                style={{width: "100%", marginTop: "1rem"}}
            />
            <p className="text-center mt-3">Already have an account? <Link href={LOGIN_ROUTE} className="text-[#E7E3C6]">Login</Link>.</p>

        </div>
    )
}