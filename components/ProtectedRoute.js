import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = typeof window !== "undefined" && localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      router.replace("/login");
    }
  }, [router]);

  return children;
}
