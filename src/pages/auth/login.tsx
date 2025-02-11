import LoginForm from "@/components/LoginForm";
import { DASHBOARD_ROUTE } from "@/constants/routes";
import { HttpError } from "@/interfaces/http";
import { LoginInput } from "@/interfaces/login";
import { loginUser } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter()

    // Will use this later for API integration
    // const { isPending, mutate } = useMutation({
    //     mutationFn: async (details: LoginInput) => await loginUser(details),
    //     onSuccess: (data) => {
    //         console.log("Login successful:", data);
    //         router.push(DASHBOARD_ROUTE);
    //     },
    //     onError: (error: HttpError) => {
    //         console.error("Login failed:", error);
    //         // Handle login error (e.g., show error message)
    //     }
    // });

    const handleLogin = (data: LoginInput) => {
        console.log('Login data:', data);
        localStorage.setItem("token", "your_auth_token"); // Store the token
        router.push(DASHBOARD_ROUTE);
        // Will use this later:
        // mutate(data);
    };

    return (
        <div>
            <LoginForm 
                onSubmit={handleLogin}
                isLoading={false} 
            />
        </div>
    )
}