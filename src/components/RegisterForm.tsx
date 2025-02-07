import InputField from "@/components/InputField";
import "@/styles/register.module.css";
import Button from "@/components/Button";
import Link from "next/link";
import { LOGIN_ROUTE } from "@/constants/routes";
import useInputChange from "@/hooks/useInputChange";
import { RegisterInput } from "@/interfaces/register";
import { FormEvent, useState } from "react";
import validationHandler from "@/services/utils/validationHandler";
import * as yup from "yup";

interface Props {
  onSubmit: (details: RegisterInput) => void;
  isLoading: boolean;
}

const RegisterForm: React.FC<Props> = ({ onSubmit, isLoading }) => {
  const { state, onChange } = useInputChange<RegisterInput>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<RegisterInput>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const RegisterSchema = yup.object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: yup
      .string()
      .matches(/^\d{10,15}$/, "Phone number must be between 10-15 digits")
      .required("Phone number is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), ""], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();

    setErrors({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    });

    const { errors, isValid } = await validationHandler<RegisterInput>(
      state,
      RegisterSchema
    );
    if (isValid) {
      onSubmit(state);
    } else {
      setErrors(errors);
    }
  };
  return (
    <div className="text-white min-h-screen p-6 bg-container">
      <div className="text-center flex-col">
        <p className="font-bold my-4 text-2xl">Create an Account</p>
        <p className="mb-8 font-medium text-[15px]">
          Join the movement. Sign up in seconds to start earning real cash!
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <InputField
          label="First Name"
          placeholder={"Your First Name"}
          name="firstName"
          value={state.firstName}
          onChange={onChange}
          errorMessage={errors.firstName}
          type="text"
          isRequired
        />
        <InputField
          label="Last Name"
          placeholder={"Your Last Name"}
          name="lastName"
          value={state.lastName}
          onChange={onChange}
          errorMessage={errors.lastName}
          type="text"
          isRequired
        />
        <InputField
          label="Enter Your Email"
          placeholder={"example@gmail.com"}
          name="email"
          value={state.email}
          onChange={onChange}
          errorMessage={errors.email}
          type="email"
          isRequired
        />
        <InputField
          label="Enter Your Phone Number"
          placeholder={"080******78"}
          name="phoneNumber"
          value={state.phoneNumber}
          onChange={onChange}
          errorMessage={errors.phoneNumber}
          // type="number"
          isRequired
        />
        <InputField
          label="Create Password"
          placeholder={"Password"}
          name="password"
          value={state.password}
          onChange={onChange}
          errorMessage={errors.password}
          type="password"
          isRequired
        />
        <InputField
          label="Confirm Password"
          placeholder={"Password"}
          name="confirmPassword"
          value={state.confirmPassword}
          onChange={onChange}
          errorMessage={errors.confirmPassword}
          type="password"
          isRequired
        />
      </div>
      <div className="flex gap-4">
        <input
          type="checkbox"
          checked={agreedToTerms}
          onChange={(e) => setAgreedToTerms(e.target.checked)}
        />
        <span className="text-center">
          By submitting, you have agreed to our{" "}
          <Link href={""} className="text-[#E7E3C6]">
            Privacy policy
          </Link>{" "}
          and{" "}
          <Link href={""} className="text-[#E7E3C6]">
            Terms of use
          </Link>
          .
        </span>
      </div>

      <Button
        title="Sign up"
        onClick={handleSignUp}
        isLoading={isLoading}
        variant="secondary"
        style={{ width: "100%", marginTop: "1rem" }}
        disabled={!agreedToTerms}
      />
      <p className="text-center mt-3">
        Already have an account?{" "}
        <Link href={LOGIN_ROUTE} className="text-[#E7E3C6]">
          Login
        </Link>
        .
      </p>
    </div>
  );
};

export default RegisterForm;
