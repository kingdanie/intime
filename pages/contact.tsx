import { EnvelopeIcon, LinkIcon, UserIcon } from "@heroicons/react/20/solid";
import { randomInt } from "crypto";
import Link from "next/link";
import AppHeader from "./components/AppHeader";
import MCalendar from "./components/m-calendar";
import SearchInput from "./components/SearchInput";
import EditProfile from "./components/editProfile";
import OtherLayout from "./layout2";
import { classNames } from "../utils/helpers";
export default function About() {
  return (
    <OtherLayout>
      <div
        aria-labelledby="primary-heading"
        className="flex h-full min-w-0 flex-1 flex-col lg:order-first p-10"
      >
        <h1 id="primary-heading" className="sr-only">
          Contacts
        </h1>
        <section className="flex justify-between">
          <div className="flex flex-col justify-between">
            <AppHeader name="Contacts" />
          </div>
          <SearchInput></SearchInput>
        </section>
        <section className=" py-14">
          <div>
            <h3 className="font-bold ">Groups</h3>
          </div>
          <div>
            <div className="grid grid-col-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
              {[
                { name: "Social", color: "red" },
                { name: "Work", color: "blue" },
                { name: "Fun", color: "green" },
              ].map((group) => (
                <div
                  key={group.name}
                  className="flex flex-col justify-between space-y-10 items-center gap-5 border border-dashed border-gray-300 rounded-lg p-5"
                >
                  <div className="w-full">
                    <h3
                      className={classNames(
                        group!.color != null
                          ? `bg-${group.color}-800`
                          : `bg-red-400`,
                        "rounded-lg text-lg text-center p-8"
                      )}
                    >
                      {group.name.slice(0, 1).toUpperCase()}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <h6 className="text-sm">{group.name}</h6>

                      {/* icons of members in group*/}
                      <div className="flex space-x-2">
                        <div
                          className="rounded-full border-solid border-2 border-gray-300 py-1 px-2 hover:bg-gray-300 
                    flex items-center justify-center
                    text-xs
                    "
                        >
                          {"hello".toUpperCase().slice(0, 1)}
                        </div>

                        {/* amount of members in group*/}
                        <span>+ {group.name.length}</span>
                      </div>
                    </div>
                    <button className="flex h-7 w-2 justify-center items-center rounded-xl border bg-yellow-400 border-gray-200 p-4 font-sans text-sm font-medium text-gray-400">
                      +
                    </button>
                  </div>
                </div>
              ))}

              {/* Create custom group */}
              <div className="h-full">
                <div className="h-full flex flex-col justify-between space-y-10 items-center gap-5 border border-dashed border-gray-300 rounded-lg p-5">
                  <h3 className="border border-dashed border-gray-300 rounded-full text-lg text-center py-5 px-7">
                    {" "}
                    +{" "}
                  </h3>
                  <div>
                    <button className="border border-solid border-gray-500 rounded-lg px-1 py-1.5">
                      <small>Create Group</small>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div>
          <div className="flex justify-between">
            <h3 className="font-bold ">
              Contacts <span>12</span>
            </h3>
            <div>
              <button
                className="text-sm text-gray-600 font-semibold 
                    relative flex py-3 px-5 
                    rounded-xl bg-yellow-400"
              >
                <small>Add new contact</small>
                <LinkIcon className="h-4" />
              </button>
            </div>
          </div>
          <div className="mx-auto mt-8 max-w-5xl pb-12">
            <div className="mt-1 grid  grid-cols-2 md:grid-cols-3 gap-5 ">
              {[
                "Gabriel",
                "Akinola",
                "Mary",
                "Akinola",
                "Tunmise",
                "Daniel",
                "Victor",
                8,
                4,
                2,
                1,
                2,
              ].map((contact) => (
                <Link
                  href={""}
                  key={contact}
                  className="flex justify-between px-5 py-7 
                            border border-solid border-gray-200 rounded-xl 
                            text-gray-600 shadow-md"
                >
                  <div className="flex space-x-3">
                    <div>
                      <UserIcon className="h-6" />
                    </div>
                    <div>
                      <span>{contact}</span>
                    </div>
                  </div>
                  <EnvelopeIcon className="h-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Your content */}
      </div>

      {/* Secondary column (hidden on smaller screens) */}
      <aside className="hidden lg:order-last lg:block lg:flex-shrink-0 pt-10">
        <div className="relative flex h-full w-80 flex-col px-2 items-center">
          {/* Your content */}
          <EditProfile />
          <MCalendar />
        </div>
      </aside>
    </OtherLayout>
  );
}
