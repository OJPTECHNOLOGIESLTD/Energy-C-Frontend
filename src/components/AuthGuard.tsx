import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const AuthGuard = (WrappedComponent: any) => {
  return function ProtectedRoute(props: any) {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/auth/login");
      } else {
        setIsAuthenticated(true);
      }
    }, []);

    if (!isAuthenticated) {
      return <p>Loading...</p>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default AuthGuard;
