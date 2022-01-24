import Link from "next/link";
import { Fragment, useContext } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import { UserContext } from "../../pages/_app";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Points", href: "/points", current: false },
  { name: "Messages", href: "/messages", current: false },
];

const userNavigation = [
  { name: "Your Profile", href: "/profile" },
  { name: "Edit Profile", href: "/profile/edit" },
  { name: "Sign out", href: "/auth/logout" },
];

export default function Example() {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className="min-h-full sm:block hidden">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link href={item.href}>
                            <span
                              key={item.name}
                              className={
                                "text-gray-300 hover:bg-gray-700 hover:text-white px-3 cursor-pointer py-2 rounded-md text-sm font-medium"
                              }
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center gap-10 md:ml-6">
                      <Link href="/requests/new">
                        <span
                          className={clsx(
                            "text-gray-100 hover:bg-gray-700 hover:text-white bg-primary px-3 cursor-pointer py-2 rounded-md text-sm font-medium"
                          )}
                        >
                          <p>+ New Request</p>
                        </span>
                      </Link>
                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            {currentUser && currentUser.imgURL ? (
                              <img
                                src={currentUser.imgURL}
                                className="rounded-full h-9 w-9"
                              />
                            ) : (
                              <span className="rounded-full text-white border-white border px-4 py-1">
                                ME
                              </span>
                            )}
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="z-50 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {() => (
                                  <Link href={item.href}>
                                    <span
                                      className={clsx(
                                        "block cursor-pointer hover:bg-gray-200 px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      {item.name}
                                    </span>
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>

                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <div></div>
                      ) : (
                        // <XIcon className="block h-6 w-6" aria-hidden="true" />
                        <div></div>
                        // <MenuIcon
                        //   className="block h-6 w-6"
                        //   aria-hidden="true"
                        // />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={clsx(
                        "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
