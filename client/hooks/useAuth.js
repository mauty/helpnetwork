import { useContext, useEffect } from "react";
import { useRouter } from "next/router"
import { UserContext } from "../pages/_app";

/*****************************************
 * We are aware that this is not a proper implementation of Auth
 * This is for demo purposes only
 *****************************************/
export default function useAuth() {
  const router = useRouter();
  const data = useContext(UserContext);

  useEffect(() => {
    if(data.currentUser === null) {
      router.push("/auth/login");
    }
  }, [])
}