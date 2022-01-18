import { useContext, useEffect } from "react";
import { useRouter } from "next/router"
import { UserContext } from "../pages/_app";

export default function useAuth() {
  const router = useRouter();
  const data = useContext(UserContext);

  useEffect(() => {
    if(data.currentUser === null) {
      router.push("/auth/login");
    }
  }, [])
}