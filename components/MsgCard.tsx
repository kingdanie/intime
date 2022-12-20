import { Message } from "../types/Message";

export default function MsgCard({ message }: {message: Message}) {
  return (
    <>
      <div className="relative flex my-3 items-center justify-between space-x-3 
              rounded-lg border border-brdcolor bg-white px-6 py-5 
              shadow focus-within:border-gray-100 focus-within:ring-2 focus-within:ring-filler
              focus-within:ring-offset-2 hover:border-gray-300
            "
      >
        <div className="flex space-x-3">
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src="/mary.png" alt="" />
          </div>
          <div className="min-w-0 flex-1">
            <a href="#" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              {/* <p className="text-sm font-medium text-gray-900">{message.recipient?.name}</p> */}
              <p className="truncate text-sm text-gray-500">{message.message}</p>
              <div className="bg-gray-600 rounded-md text-white text-xs text-center ">
                <span></span>
                <small>{message.status}</small>
              </div>
            </a>
          </div>
        </div>
        <div>
          <div className="text-gray-500">May 3rd</div>
          <div>
            <small className="text-gray-500">12.30pm</small>
          </div>
        </div>
      </div>
    </>
  );
}
