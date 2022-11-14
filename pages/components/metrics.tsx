export default function Metrics() {
  return (
    <>
      <div className="flex items-center justify-center m-0 space-x-5 p-10 h-40 text-gray-500 bg-white border-dashed border-2 rounded-xl w-80">
        <div className="text-center ">
          <h3 className="text-2xl  font-extrabold">24</h3>
          <p className="text-sm">sent</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl  font-extrabold">14</h3>
          <p className="text-sm">Scheduled</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl  font-extrabold">10</h3>
          <p className="text-sm">Delivered</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl  font-extrabold">0</h3>
          <p className="text-sm">Failed</p>
        </div>
      </div>
    </>
  );
}
