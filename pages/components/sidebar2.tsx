import { Dialog, Transition } from "@headlessui/react";
import {
  ArchiveBoxIcon,
  ArrowLeftOnRectangleIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  EnvelopeIcon,
  FolderIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/UserContents";


function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function SideBar2({ sidebarOpen, setSidebarOpen }) {

  const { username, setUsername } = useContext(UserContext)
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("access_token")
    setUsername("")
    router.push('/login')
  }
  
  const navigation = [
    { name: "Home", href: "/", icon: HomeIcon, current: true },
    { name: "Message", href: "/messages", icon: EnvelopeIcon, current: false },
    { name: "Contacts", href: "/contact", icon: FolderIcon, current: false },
    { name: "Pricing", href: "/pricing", icon: CreditCardIcon, current: false },
    {
      name: "Settings",
      href: "/settings",
      icon: Cog6ToothIcon,
      current: false,
    },
    { name: "History", href: "/history", icon: ArchiveBoxIcon, current: false },
  ];

  const route = useRouter();
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-4">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="pt-5 pb-4">
                  <div className="flex flex-shrink-0 items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt="Your Company"
                    />
                  </div>
                  <nav aria-label="Sidebar" className="mt-5">
                    <div className="space-y-1 px-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="group flex items-center rounded-md p-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        >
                          <item.icon
                            className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
                <div className="flex flex-shrink-0 border-t border-gray-200 p-2">
                  <button onClick={handleLogout} className="group block flex-shrink-0 mt-2 p-2">
                    <div className="flex items-center">
                    <ArrowLeftOnRectangleIcon
                  className="mr-4 h-6 w-6 text-gray-400 hover:text-gray-500"
                  aria-hidden="true"
                />
                      <div className="">
                        <p className="text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                          Logout
                        </p>
                      </div>
                    </div>
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0 rounded-xl shadow-lg border">
        <div className="flex w-20 flex-col">
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
            <div className="flex-1">
              <div className="flex items-center justify-center py-4">
                <img
                  className="h-8 w-auto"
                  //src="https://tailwindui.com/img/logos/mark.svg?color=white"
                  src="https://tailwindui.com/img/logos/mark.svg?color=purple&shade=800"
                  alt="Your Company"
                />
              </div>
              <nav
                aria-label="Sidebar"
                className="flex flex-col items-center space-y-3 py-6"
              >
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    //   className="flex items-center rounded-lg p-4 text-indigo-200 hover:bg-indigo-700"
                    className={classNames(
                      item.href == route.pathname
                        ? "bg-filler text-white rounded-xl"
                        : "text-gray-500 hover:text-white hover:bg-purple-800 hover:bg-opacity-75",
                      "group flex items-center justify-center p-2 text-sm font-medium rounded-md"
                    )}
                  >
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                    <span className="sr-only">{item.name}</span>
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-shrink-0 pb-5 justify-center">
              <button
                onClick={handleLogout}
                className="flex items-center text-sm font-medium rounded-md p-2 text-gray-500 hover:text-white hover:bg-purple-800 hover:bg-opacity-75"
              >
                <ArrowLeftOnRectangleIcon
                  className="h-6 w-6"
                  aria-hidden="true"
                />

                <span className="sr-only">logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
