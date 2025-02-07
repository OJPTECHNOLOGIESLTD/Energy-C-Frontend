import { LoginInput, LoginResData } from "@/interfaces/login";
import { handlePostRequest } from "./httpMethod";
import { RegisterInput, RegisterResData } from "@/interfaces/register";

const BASE_URL = "/auth"

export const loginUser = async (info: LoginInput) => {
    return await handlePostRequest<LoginInput, LoginResData>(
        `${BASE_URL}/login`,
        info
    )
}

export const registerUser = async (info: RegisterInput) => {
    return await handlePostRequest<RegisterInput, RegisterResData>(
        `${BASE_URL}/register`,
        info
    )
}