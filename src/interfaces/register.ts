import { User } from "@/interfaces/auth";

export interface RegisterInput {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}
export interface RegisterResData {
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
