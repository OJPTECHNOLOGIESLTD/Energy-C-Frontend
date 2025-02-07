import { LoginInput } from "@/interfaces/login";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import Link from "next/link";
import { object, string } from "yup";
import validationHandler from "@/services/utils/validationHandler";
import { FormEvent, useState } from "react";
import useInputChange from "@/hooks/useInputChange";
import { SIGNUP_ROUTE } from "@/constants/routes";
// import "@/styles/auth.css"

interface Props {
    onSubmit: (details: LoginInput) => void;
    isLoading: boolean;
}

const LoginForm: React.FC<Props> = ({
    onSubmit,
    isLoading,
}) => {
    const { state, onChange } = useInputChange<LoginInput>({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState<LoginInput>({
        email: "",
        password: "",
    });

    const LoginSchema = object({
        email: string().email('Invalid email format').required("Email/Phone number is required"),
        password: string().required("Password is required"),
    });


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        setErrors({
            email: "",
            password: "",
        });

        const { errors, isValid } = await validationHandler<LoginInput>(
            state,
            LoginSchema
        );
        if (isValid) {
            console.log("isvalid")
            onSubmit(state);
        } else {
            console.log("not valid")
            setErrors(errors);
        }
    };

    return (
        <div className="text-white min-h-screen p-6 bg_container">
            <div className="flex-col text-center">
                <p className="font-bold my-4 text-2xl">
                    Welcome Back!
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <InputField 
                    label="Enter Your Email" 
                    placeholder={"example@gmail.com"}
                    name="email"
                    value={state.email}
                    onChange={onChange}
                    errorMessage={errors.email}
                    type="text"
                    isRequired 
                />
                <InputField 
                    label="Input Your Password" 
                    placeholder={"Password"}
                    name="password"
                    value={state.password}
                    onChange={onChange}
                    errorMessage={errors.password}
                    type="password"
                    isRequired 
                />
            </div>

            <Button
                title="Login"
                onClick={handleSubmit}
                isLoading={isLoading}
                variant="secondary"
                style={{ width: "100%", marginTop: "4rem" }}
            />
            <p className="text-center mt-3">Don&apos;t have an account yet? <Link href={SIGNUP_ROUTE} className="text-[#E7E3C6]">Sign Up</Link>.</p>
        </div>
    )
};

export default LoginForm