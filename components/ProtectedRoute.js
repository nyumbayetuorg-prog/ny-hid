import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    const role =
      typeof window !== "undefined" && localStorage.getItem("ny-role");

    if (!role) {
      router.push("/login");
    }
  }, [router]);

  return children;
}
