import {
  ChevronUpIcon,
  EnvelopeIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { useContext, useState } from "react";
import AppHeader from "../components/AppHeader";
import { Disclosure } from "@headlessui/react";
import RootLayout from "./layout";
import AppSwitch from "../components/switch";
import { UserContext } from "../contexts/UserContexts.js";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";

export default function Settings() {
  const [chevOn, setChevOn] = useState(false);
  const { username, userInfo } = useContext(UserContext);

  return (
    <RootLayout>
      <div className="relative w-full flex flex-col">
        <section className="relative mb-32">
          <div className="absolute top-0 w-full h-32vh bgs bg-filler p-10 -z-10"></div>
          <div className="md:px-16 py-16 space-y-14 px-5">
          <AppHeader name="Settings" color="white" />
          <div
            className="
            lg:w-5/12 p-7 grid grid-cols-5 gap-x-6 space-x-2 
            rounded-lg shadow-md 
            justify-center items-center bg-white
            border boer-brdrcolor
            "
          >
            <div className="relative flex col-span-2">
              <Image
                src={"/user-profile.png"}
                width={250}
                height={250}
                alt="profile picture"
              ></Image>

              <div
                className="
                    bg-accent rounded-lg h-10 w-10  p-3 absolute 
                    bottom-1 right-2 flex items-center text-black 
                    cursor-pointer hover:ring-2 hover:ring-white hover:bg-yellow-300
                  "
              >
                <img src="/edit.svg" alt="edit button" />
              </div>
            </div>
            {/* 
                    <div className="relative inline-block col-span-2">
                      <img
                        className="h-fit w-fit rounded-full"
                        src="/user-profile.png"
                        alt=""
                      />
                      <div
                        className="
                        bg-accent rounded-lg h-10 w-10  p-3 absolute 
                        bottom-0 right-0  
                        "
                      >
                        <img src="/edit.svg" alt="edit button" />
                      </div>
                    </div> 
                  */}
            <div className="col-span-3 flex flex-col space-y-1">
              <h3 className="font-bold text-lg capitalize">
                {username}
              </h3>
              <p className="flex items-center space-x-2">
                <EnvelopeIcon className="h-5 " />{" "}
                <span>{userInfo.email}</span>
              </p>
              <p className="flex items-center space-x-2">
                <DevicePhoneMobileIcon className="h-5" />{" "}
                <span>{userInfo.phone}</span>
              </p>
            </div>
          </div>
          </div>
        </section>
        <section className=" px-5 md:px-12 space-y-10 -mt-40">
  
          <div className="mt-10 py-6 md:px-5 space-y-10">
            <div
              className="
                    mx-auto rounded-lg px-10  
                    py-6 shadow-md border border-brdrcolor  
                    hover:ring-2 hover:ring-filler hover:transition hover:delay-50 
                    hover:duration-500 focus:outline-none 
                    focus-visible:ring focus-visible:ring-gray-500 
                    focus-visible:ring-opacity-75
                  "
            >
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className="
                            flex w-full justify-between 
                            text-left text-sm font-medium 
                            text-gray-900
                        "
                    >
                      <div className="inline-flex">
                        <span className="mt-0.5 w-5 h-5 mr-5  bg-gray-300"></span>
                        <div className="block">
                          <h3 className="text-lg">
                            Account Settings
                          </h3>
                          <p
                            className={`${
                              open ? "hidden" : "block"
                            } mt-5`}
                          >
                            {" "}
                            Change password, Change
                            username, Set sender ID,
                            Add/change number
                          </p>
                        </div>
                      </div>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-8 w-8 text-gray-500 self-center`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel
                      className="
                          mt-16 pb-5 text-sm text-gray-500 
                          grid lg:grid-cols-2 gap-10
                      "
                    >
                      <button className="relative rounded-md shadow-sm flex items-center p-5 border border-solid">
                        <UserIcon
                          className="h-5 w-5 text-gray-400 mr-5"
                          aria-hidden="true"
                        />
                        <span>Change username</span>
                      </button>
                      <button className="relative rounded-md shadow-sm flex items-center p-5 border border-solid">
                        <span className="mt-0.5 w-5 h-5 mr-5  bg-gray-400"></span>

                        <span>Change password</span>
                      </button>
                      <button className="relative rounded-md shadow-sm flex items-center p-5 border border-solid">
                        <span className="mt-0.5 w-5 h-5 mr-5  bg-gray-400"></span>

                        <span>Sender ID</span>
                      </button>
                      <button className="relative rounded-md shadow-sm flex items-center p-5 border border-solid">
                        <UserCircleIcon
                          className="h-5 w-5 text-gray-400 mr-5"
                          aria-hidden="true"
                        />
                        <span>Add/change number</span>
                      </button>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            <div 
              className="mx-auto rounded-lg px-10  py-6 shadow-md 
                border 
                hover:ring-2 hover:ring-filler hover:transition hover:delay-50 
                hover:duration-500 focus:outline-none 
                focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75 
              ">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between text-left text-sm font-medium text-gray-900">
                      <div className="inline-flex">
                        <span className="mt-0.5 w-5 h-5 mr-5  bg-gray-300"></span>
                        <div className="block">
                          <h3 className="text-lg">
                            Display
                          </h3>
                          <p
                            className={`${
                              open ? "hidden" : "block"
                            } mt-5`}
                          >
                            {" "}
                            Dark theme
                          </p>
                        </div>
                      </div>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-8 w-8 text-gray-500 self-center`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-16 pb-2 text-sm text-gray-500">
                      <div className="w-5/12 p-5 border border-solid border-gray-400 rounded-lg flex items-center justify-between ">
                        <div className="inline-flex gap-4">
                          <UserIcon className="h-5 w-5" />
                          <span>Enable Dark Mode</span>
                        </div>
                        <AppSwitch name="theme-switch" />
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </section>

        <section>
          <div className="w-full pt-16 space-y-5"></div>
        </section>
      </div>
    </RootLayout>
  );
}
