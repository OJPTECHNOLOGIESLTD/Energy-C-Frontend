import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { LOGIN_ROUTE } from "@/constants/routes";

const AuthGuard = (WrappedComponent: any) => {
  return function ProtectedRoute(props: any) {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push(LOGIN_ROUTE);
      } else {
        setIsAuthenticated(true);
      }
    }, [router]);

    if (!isAuthenticated) {
      return <p>Loading...</p>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default AuthGuard;
