import { LOGIN_ROUTE } from "@/constants/routes";
import RegisterForm from "@/components/RegisterForm";
import { useRouter } from "next/navigation";


export default function Register() {
    const router = useRouter()


    const handleSignUp = () => {
        router.push(LOGIN_ROUTE)
    }
    return (
        <div>
          <RegisterForm onSubmit={handleSignUp} isLoading={false} />
        </div>
    )
}