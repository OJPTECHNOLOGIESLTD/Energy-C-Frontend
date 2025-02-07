import { User } from "@/interfaces/auth";

export interface LoginInput {
  email: string;
  password: string;
}
export interface LoginResData {
  user: User;
  accessToken: string;
  refreshToken: string;
  userType: {
    createdAt: string;
    description: string;
    id: string;
    name: string;
    category: string;
    updatedAt: string
  };
}
