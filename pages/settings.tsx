import { ChevronDoubleDownIcon, ChevronDownIcon, ChevronUpIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useState } from "react";
import AppHeader from "./components/AppHeader";
import OtherLayout from "./layout2";
import Accordion from "./components/Accordion";
import { Disclosure } from "@headlessui/react";
import RootLayout from "./layout";

export default function Settings() {
    const [chevOn, setChevOn] = useState(false)
  return (
    <RootLayout>
      <div className="w-full flex flex-col">
        <section className="bgs bg-purple-700 w-full p-10 h-24vh">  
        </section>
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
              <div className="
                bg-yellow-400 rounded-lg h-10 w-10  p-3 absolute 
                bottom-1 right-2 flex items-center text-black 
                ">
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
                  <div className="mx-auto">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg shadow-md border border-solid  px-10  py-6 text-left text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
              <div className="inline-flex">
                           <span className="mt-0.5 w-5 h-5 mr-5  bg-gray-300"></span> 
                           <div className="block">
                            <h3 className="text-lg">Account Settings</h3>
                        <p className="mt-5"> Change password, Change username, Set sender ID, Add/change number</p>
                            </div>
                        </div>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-8 w-8 text-gray-500 self-center`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas dolorum distinctio velit quasi nobis inventore cumque omnis, corrupti suscipit aspernatur nostrum voluptatum porro, accusamus quidem assumenda modi atque ad!
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
      </div>
      <div className="mx-auto w-full rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg shadow-md border border-solid  px-10  py-6 text-left text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
              <div className="inline-flex">
                           <span className="mt-0.5 w-5 h-5 mr-5  bg-gray-300"></span> 
                           <div className="block">
                            <h3 className="text-lg">Display</h3>
                        <p className="mt-5"> Dark theme</p>
                            </div>
                        </div>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-8 w-8 text-gray-500 self-center`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas dolorum distinctio velit quasi nobis inventore cumque omnis, corrupti suscipit aspernatur nostrum voluptatum porro, accusamus quidem assumenda modi atque ad!
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
      </div>
            
          </div>
          
        </section>

        <section>
        <div className="w-full pt-16 space-y-5">
   
    </div>
        </section>
      </div>
    </RootLayout>
  );
}
