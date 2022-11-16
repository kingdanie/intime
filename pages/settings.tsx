import {
  ChevronDoubleDownIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  EnvelopeIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { useState } from "react";
import AppHeader from "./components/AppHeader";
import OtherLayout from "./layout2";
import Accordion from "./components/Accordion";
import { Disclosure } from "@headlessui/react";
import RootLayout from "./layout";
import AppSwitch from "./components/switch";

export default function Settings() {
  const [chevOn, setChevOn] = useState(false);
  return (
    <RootLayout>
      <div className="w-full flex flex-col">
        <section className="bgs bg-purple-700 w-full p-10 h-24vh"></section>
        <section className=" px-5 md:px-12 space-y-10 -mt-40">
          <AppHeader name="Settings" />
          <div
            className="
            lg:w-5/12 p-7 grid grid-cols-5 gap-x-6 space-x-2 
            rounded-lg shadow-md 
            justify-center items-center bg-white
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
                bg-yellow-400 rounded-lg h-10 w-10  p-3 absolute 
                bottom-1 right-2 flex items-center text-black 
                "
              >
                <img src="/edit.svg" alt="edit button" />
              </div>
            </div>
            {/* <div className="relative inline-block col-span-2">
              <img
                className="h-fit w-fit rounded-full"
                src="/user-profile.png"
                alt=""
              />
              <div
                className="
                bg-yellow-400 rounded-lg h-10 w-10  p-3 absolute 
                bottom-0 right-0  
                "
              >
                <img src="/edit.svg" alt="edit button" />
              </div>
            </div> */}
            <div className="col-span-3 flex flex-col space-y-1">
              <h3 className="font-bold text-lg ">User Profile Name</h3>
              <p className="flex items-center space-x-2">
                <EnvelopeIcon className="h-5 " /> <span>emailaddress</span>
              </p>
              <p className="flex items-center space-x-2">
                <EnvelopeIcon className="h-5 " /> <span>phone_number</span>
              </p>
            </div>
          </div>
          <div className="mt-10 py-6 space-y-10">
            <div className="mx-auto rounded-lg px-10  py-6 shadow-md border border-solid  hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75 ">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between text-left text-sm font-medium text-gray-900">
                      <div className="inline-flex">
                        <span className="mt-0.5 w-5 h-5 mr-5  bg-gray-300"></span>
                        <div className="block">
                          <h3 className="text-lg">Account Settings</h3>
                          <p className={`${open ? "hidden" : "block"} mt-5`}>
                            {" "}
                            Change password, Change username, Set sender ID,
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
                    <Disclosure.Panel className="mt-16 pb-5 text-sm text-gray-500 grid lg:grid-cols-2 gap-10">
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
            <div className="mx-auto rounded-lg px-10  py-6 shadow-md border border-solid  hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75 ">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between text-left text-sm font-medium text-gray-900">
                      <div className="inline-flex">
                        <span className="mt-0.5 w-5 h-5 mr-5  bg-gray-300"></span>
                        <div className="block">
                          <h3 className="text-lg">Display</h3>
                          <p className={`${open ? "hidden" : "block"} mt-5`}>
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
