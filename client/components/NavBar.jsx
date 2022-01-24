import { useContext } from "react";
import Link from "next/link";
import clsx from "clsx";
import {
  Home,
  Star,
  PlusCircle,
  MessageCircle,
  User,
  LogIn,
} from "react-feather";
import { UserContext } from "../pages/_app";

const NavBar = ({
  children,
  currentNav = "help" | "points" | "new" | "messages" | "profile",
}) => {
  const { currentUser } = useContext(UserContext);

  const navigations = [
    {
      icon: Home,
      name: "Help",
      active: currentNav === "help",
      link: "/",
    },
    {
      icon: Star,
      name: "Points",
      active: currentNav === "points",
      link: "/points",
    },
    {
      icon: PlusCircle,
      name: "New",
      active: currentNav === "new",
      link: "/requests/new",
    },
    {
      icon: MessageCircle,
      name: "Messages",
      active: currentNav === "messages",
      link: "/messages",
    },
    {
      icon: currentUser ? User : LogIn,
      name: currentUser ? "Profile" : "Login",
      active: currentNav === "profile",
      link: currentUser ? "/profile" : "/auth/login",
    },
  ];

  return (
    <div className="w-full h-screen">
      {children}
      <section
        id="bottom-navigation"
        className="block fixed inset-x-0 bottom-0 z-10 bg-white"
      >
        <div id="tabs" className="flex justify-between cursor-pointer">
          {navigations.map((navigation, index) => (
            <Link key={index} href={navigation.link}>
              <div
                className={clsx(
                  "w-full flex flex-col items-center justify-center text-center hover:text-yellow-500 hover:font-semibold",
                  navigation.active && "text-indigo-600 font-semibold"
                )}
              >
                <navigation.icon />
                <span
                  className={clsx(
                    "tab tab-home block text-xs shadow-xl",
                    navigation.active &&
                      "text-indigo-600 font-semibold underline"
                  )}
                >
                  {navigation.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NavBar;
