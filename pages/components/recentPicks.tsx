export default function RecentPicks() {
  return (
    <div className="rounded-lg max-w-md border border-gray-200 flex flex-col w-full space-y-4 p-3">
      <div>
        <div className="py-1 px-2 border border-solid border-gray-300">
          <h3>Time</h3>
        </div>
      </div>
      <h3 className="text-center">Recent Picks</h3>
      <div className="grid grid-cols-4 space-x-5">
        {[1, 2, 3].map(item => (      <div key={item} className="border border-solid border-gray-300 rounded-lg">
          <small className="px-2 py-1 text-gray-300">10.00am</small>
        </div>))}
  
      </div>
      <div className="w-full">
        <select
          id="custom-time"
          name="custom-time"
          className="mt-1 block w-full rounded-md border border-solid border-gray-300 py-2 pl-3 pr-10 text-base focus:border-gray-300 focus:outline-none focus:ring-gray-400 sm:text-sm"
          placeholder="custom time"
        >
          <option>10.00</option>
          <option>2.00</option>
          <option>3.00</option>
        </select>
      </div>
    </div>
  );
}
