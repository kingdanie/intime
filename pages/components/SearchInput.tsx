/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

export default function SearchInput() {
  return (
    <div>
      {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email
      </label> */}
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="search"
          name="search"
          id="search"
          className="h-12 block min-w-full md:w-80 rounded-xl shadow-lg border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Search"
        />
      </div>
    </div>
  )
}
