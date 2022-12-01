export default function TransactionCard({ transactions }) {
    return (
      <>
        <div className="relative flex my-3 items-center justify-between space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-pink-500 focus-within:ring-offset-2 hover:border-gray-400">
          <div className="flex space-x-3">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-gray-300"></div>
            </div>
            <div className="min-w-0 flex-1">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">{transactions.subject}</p>
                <p className="truncate text-sm text-gray-500">{transactions.message}</p>
                <div className="bg-gray-600 rounded-md text-white text-xs text-center ">
                  <span></span>
                  <small>{transactions.status}</small>
                </div>
              </a>
            </div>
          </div>
          <div>
            <div className="text-green-500">+ 200</div>
            <div>
              <small className="text-gray-500">April 3rd</small>
            </div>
            <div>
              <small className="text-gray-500">12.30pm</small>
            </div>
          </div>
        </div>
      </>
    );
  }
  