import { PaperAirplaneIcon, UserIcon } from "@heroicons/react/24/outline";
import AppHeader from "./components/AppHeader";
import MCalendar from "./components/m-calendar";
import RecentPicks from "./components/RecentPicks";
import AppSwitch from "./components/switch";
import OtherLayout from "./layout2";
export default function Messages() {
  return (
    <OtherLayout>
      <div
        aria-labelledby="primary-heading"
        className="flex h-full min-w-0 flex-1 flex-col lg:order-first p-10"
      >
        <h1 id="primary-heading" className="sr-only">
          Messaging
        </h1>
        <section className="flex justify-between">
          <div className="flex flex-col justify-between">
            <AppHeader name="Messaging" />
          </div>
        </section>
        <section className="py-14">
          <div className="flex flex-col space-y-5 justify-start">
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <UserIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="senderId"
                name="senderId"
                id="senderId"
                className="h-16 block min-w-full md:w-96 rounded-xl shadow-lg border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Sender ID"
              />
            </div>
            <div className="flex justify-end items-center space-x-3 w-full">
              <span>Save as permanent ID</span>
              <AppSwitch name="save ID" />
            </div>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <UserIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="contact"
                name="contact"
                id="contact"
                className="h-16 block min-w-full md:w-96 rounded-xl shadow-lg border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter contact or group name"
              />
              <div className="absolute items-center inset-y-0 right-0 flex py-1.5 pr-1.5">
                <button className="inline-flex h-7 w-2 justify-center items-center rounded-xl border bg-yellow-400 border-gray-200 p-4 font-sans text-sm font-medium text-gray-400">
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-end items-center space-x-3 w-full">
              <div className="px-4 py-2 shadow-sm rounded-lg border-solid border-gray-300 border-2 space-x-5 flex">
                <div className="flex items-center space-x-2">
                  <div
                    className="rounded-full border-solid border-2 border-gray-300 py-1 px-2 hover:bg-gray-300 
                    flex items-center justify-center
                    text-xs
                    "
                  >
                    {"hello".toUpperCase().slice(0, 1)}
                  </div>
                  <small>Hello</small>
                </div>
                <button>x</button>
              </div>
            </div>
            <div>
              <textarea
                className="rounded-xl p-5 shadow-lg w-full"
                placeholder="Enter your message"
                rows={10}
                cols={60}
              ></textarea>
            </div>
            <div>
              <button className="flex items-center bg-yellow-400 p-3 space-x-5 rounded-lg w-full justify-center">
                <span>Send</span> <PaperAirplaneIcon className="h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Your content */}
      </div>

      {/* Secondary column (hidden on smaller screens) */}
      <aside className="hidden lg:order-last lg:block lg:flex-shrink-0 pt-10">
        <div className="relative flex h-full w-96 flex-col px-2 items-center">
          {/* Your content */}
          <div className="flex justify-end items-center space-x-5 w-full">
            <span className="font-semibold">Scheduled message</span>
            <AppSwitch name="schedule msg" />
          </div>
          <MCalendar />
          <RecentPicks />
        </div>
      </aside>
    </OtherLayout>
  );
}
