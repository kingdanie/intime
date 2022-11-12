import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import {
  Bars3Icon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  EnvelopeIcon,
  XMarkIcon,
  ArrowLeftOnRectangleIcon, 
  CreditCardIcon,
  Cog6ToothIcon,
  ArchiveBoxIcon,
} from '@heroicons/react/24/outline'

// const navigation = [
//     {
//       name: 'Inboxes',
//       href: '#',
//       children: [
//         { name: 'Technical Support', href: '#' },
//         { name: 'Sales', href: '#' },
//         { name: 'General', href: '#' },
//       ],
//     },
//     { name: 'Reporting', href: '#', children: [] },
//     { name: 'Settings', href: '#', children: [] },
//   ]
  const sidebarNavigation = [
    { name: 'Open', href: '#', icon: '', current: true },
    { name: 'Archive', href: '#', icon: '', current: false },
    { name: 'Customers', href: '#', icon: '', current: false },
    { name: 'Flagged', href: '#', icon: '', current: false },
    { name: 'Spam', href: '#', icon: '', current: false },
    { name: 'Drafts', href: '#', icon: '', current: false },
  ]
  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Sign out', href: '#' },
  ]


  const navigation = [
    { name: 'Home', href: '#', icon: HomeIcon, current: true },
    { name: 'Message', href: '#', icon: EnvelopeIcon, current: false },
    { name: 'Contacts', href: '#', icon: FolderIcon, current: false },
    { name: 'Pricing', href: '#', icon: CreditCardIcon, current: false },
    { name: 'Settings', href: '#', icon: Cog6ToothIcon, current: false },
    { name: 'History', href: '#', icon: ArchiveBoxIcon, current: false },
  ]
    
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }
  
export default function Sidebar({sidebarOpen, setSidebarOpen}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    // const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
//         <div>
//         {/*
//           This example requires updating your template:
  
//           ```
//           <html class="h-full bg-gray-100">
//           <body class="h-full overflow-hidden">
//           ```
//         */}
//         <div className="flex h-full flex-col">
//           {/* Top nav*/}
//           <header className="relative flex h-16 flex-shrink-0 items-center bg-white">
//             {/* Logo area */}
//             <div className="absolute inset-y-0 left-0 md:static md:flex-shrink-0">
//               <a
//                 href="#"
//                 className="flex h-16 w-16 items-center justify-center bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:w-20"
//               >
//                {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white"
//                   alt="Your Company"  /> */}
//               </a>
//                 {/* <Image className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white"
//                   alt="Your Company" width={50} height={50} />
//               </a> */}
//             </div>
  
//             {/* Picker area */}
//             <div className="mx-auto md:hidden">
//               <div className="relative">
//                 <label htmlFor="inbox-select" className="sr-only">
//                   Choose inbox
//                 </label>
//                 <select
//                   id="inbox-select"
//                   className="rounded-md border-0 bg-none pl-3 pr-8 text-base font-medium text-gray-900 focus:ring-2 focus:ring-indigo-600"
//                   defaultValue={sidebarNavigation?.find((item) => item.current)?.name}
//                 >
//                   {sidebarNavigation.map((item) => (
//                     <option key={item.name}>{item.name}</option>
//                   ))}
//                 </select>
//                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-2">
//                   {/* <ChevronDownIcon className="h-5 w-5 text-gray-500" aria-hidden="true" /> */}
//                 </div>
//               </div>
//             </div>
  
//             {/* Menu button area */}
//             <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:pr-6 md:hidden">
//               {/* Mobile menu button */}
//               <button
//                 type="button"
//                 className="-mr-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
//                 onClick={() => setMobileMenuOpen(true)}
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {/* <Bars3Icon className="block h-6 w-6" aria-hidden="true" /> */}
//               </button>
//             </div>
  
   
  
//             {/* Mobile menu, show/hide this `div` based on menu open/closed state */}
//             <Transition.Root show={mobileMenuOpen} as={Fragment}>
//               <Dialog as="div" className="relative z-40 md:hidden" onClose={setMobileMenuOpen}>
//                 <Transition.Child
//                   as={Fragment}
//                   enter="transition-opacity ease-linear duration-300"
//                   enterFrom="opacity-0"
//                   enterTo="opacity-100"
//                   leave="transition-opacity ease-linear duration-300"
//                   leaveFrom="opacity-100"
//                   leaveTo="opacity-0"
//                 >
//                   <div className="hidden sm:fixed sm:inset-0 sm:block sm:bg-gray-600 sm:bg-opacity-75" />
//                 </Transition.Child>
  
//                 <div className="fixed inset-0 z-40">
//                   <Transition.Child
//                     as={Fragment}
//                     enter="transition ease-out duration-150 sm:ease-in-out sm:duration-300"
//                     enterFrom="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
//                     enterTo="transform opacity-100 scale-100  sm:translate-x-0 sm:scale-100 sm:opacity-100"
//                     leave="transition ease-in duration-150 sm:ease-in-out sm:duration-300"
//                     leaveFrom="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
//                     leaveTo="transform opacity-0 scale-110  sm:translate-x-full sm:scale-100 sm:opacity-100"
//                   >
//                     <Dialog.Panel
//                       className="fixed inset-0 z-40 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:w-full sm:max-w-sm sm:shadow-lg"
//                       aria-label="Global"
//                     >
//                       <div className="flex h-16 items-center justify-between px-4 sm:px-6">
//                         <a href="#">
//                         {/* <img
//                             className="block h-8 w-auto"
//                             src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                             alt="Your Company"
                            
//                           /> */}
//                           {/* <Image
//                             className="block h-8 w-auto"
//                             src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                             alt="Your Company"
//                             width={50} height={50} 
//                           /> */}
//                         </a>
//                         <button
//                           type="button"
//                           className="-mr-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
//                           onClick={() => setMobileMenuOpen(false)}
//                         >
//                           <span className="sr-only">Close main menu</span>
//                           {/* <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> */}
//                         </button>
//                       </div>
                   
//                       <div className="max-w-8xl mx-auto py-3 px-2 sm:px-4">
//                         {navigation.map((item) => (
//                           <Fragment key={item.name}>
//                             <a
//                               href={item.href}
//                               className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
//                             >
//                               {item.name}
//                             </a>
//                             {item.children.map((child) => (
//                               <a
//                                 key={child.name}
//                                 href={child.href}
//                                 className="block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100"
//                               >
//                                 {child.name}
//                               </a>
//                             ))}
//                           </Fragment>
//                         ))}
//                       </div>
//                       <div className="border-t border-gray-200 pt-4 pb-3">
                   
//                         <div className="max-w-8xl mx-auto mt-3 space-y-1 px-2 sm:px-4">
//                           {userNavigation.map((item) => (
//                             <a
//                               key={item.name}
//                               href={item.href}
//                               className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50"
//                             >
//                               {item.name}
//                             </a>
//                           ))}
//                         </div>
//                       </div>
//                     </Dialog.Panel>
//                   </Transition.Child>
//                 </div>
//               </Dialog>
//             </Transition.Root>
//           </header>
  
//           {/* Bottom section */}
//           <div className="flex min-h-0 flex-1 overflow-hidden">
//             {/* Narrow sidebar*/}
//             <nav aria-label="Sidebar" className="hidden md:block md:flex-shrink-0 md:overflow-y-auto md:bg-gray-800">
//               <div className="relative flex w-20 flex-col space-y-3 p-3">
//                 {sidebarNavigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     className={classNames(
//                       item.current ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-700',
//                       'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg'
//                     )}
//                   >
//                     <span className="sr-only">{item.name}</span>
//                     {/* <item.icon className="h-6 w-6" aria-hidden="true" /> */}
//                     {/* <item.icon aria-hidden="true" /> */}

//                   </a>
//                 ))}
//               </div>
//             </nav>
//             </div>
// </div>
// </div>
<>
<Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                  <div className="flex flex-shrink-0 items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
                      alt="Your Company"
                    />
                  </div>
                  <nav className="mt-5 space-y-1 px-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-indigo-800 text-white'
                            : 'text-white hover:bg-indigo-600 hover:bg-opacity-75',
                          'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                        )}
                      >
                        <item.icon className="mr-4 h-6 w-6 flex-shrink-0 text-indigo-300" aria-hidden="true" />
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="flex flex-shrink-0 border-t border-indigo-800 p-4">
                  <a href="#" className="group block flex-shrink-0">
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-base font-medium text-white">Tom Cook</p>
                        <p className="text-sm font-medium text-indigo-200 group-hover:text-white">View profile</p>
                      </div>
                    </div>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex min-h-0 flex-1 flex-col rounded-lg">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <div className="flex flex-shrink-0 items-center px-4">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
                alt="Your Company"
              />
            </div>
            <nav className="mt-5 flex-1 space-y-1 px-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-indigo-800 text-white' : 'text-white hover:bg-indigo-600 hover:bg-opacity-75',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                  )}
                >
                  <item.icon className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300" aria-hidden="true" />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex flex-shrink-0  p-4">
          {/* <a
                       
                        href="/login"
                        className="group block w-full flex-shrink-0"
                      >
                        <InboxIcon />
                        logout
                      </a> */}
            <a href="/login" className="group block w-full flex-shrink-0">
              <div className="flex items-center">
                <div>
                <ArrowLeftOnRectangleIcon className="mr-4 h-6 w-6 flex-shrink-0 text-indigo-300" aria-hidden="true" />
                </div>
                <div className="ml-3">
                logout
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
</>  
    )
}