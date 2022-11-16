import { LinkIcon } from "@heroicons/react/20/solid";

export default function PointCard() {
  return (
    <>
      <div className="flex text-white items-center h-40 w-80 relative">
        <div className="flex text-white items-center rounded-xl p-5 shadow-lg h-40 w-11/12 bg-purple-800">
          <div className="">
            <div className="border-white border-2 px-1 rounded-sm text-white mr-7">
              co
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-sm text-white">Points</p>
            <div className="text-4xl font-bold">243</div>
            <div className="text-yellow-300 text-sm">N 2304</div>
          </div>
        </div>
        <button className="text-sm text-gray-600 font-semibold absolute right-0 flex py-4 px-7 rounded-xl bg-yellow-400">
          <small>Add points</small> <LinkIcon className="h-4" />{" "}
        </button>
      </div>
    </>
  );
}
