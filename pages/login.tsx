import { ArrowSmallLeftIcon, ArrowSmallRightIcon, LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import SocialLogin from "./components/social-login";
export default function Register() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // disable submit when inputs are empty
  const validate = () => {
    return username.trim().length & password.trim().length;
  };
  
  function login(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    if(username == '' && password == '') return
    setUsername('')
    setPassword('')
    window.location.href = "/"
  }

  return (
    <div className="h-screen w-full flex flex-col md:flex-row items-center justify-center">
      <div className="w-1/2 h-full bg-filler flex flex-col items-center">
        <Image
          src={"/login.png"}
          alt="login image"
          width={450}
          height={450}
          className="mb-10"
        ></Image>
        <h3 className="text-white p-5">Don&apos;t have an account?</h3>
        <Link href="/register">
          <button className="ring-white ring-2 shadow-md flex items-center space-x-3 focus:border-white focus:ring-white  py-3 px-5 rounded-xl text-sm text-white">
            <ArrowSmallLeftIcon className="w-4" />
            <small>Sign up</small>
          </button>
        </Link>
      </div>
      <div className="h-full w-1/2 py-5 px-10 flex justify-center overflow-y-auto items-center">
        <div className="flex flex-col w-4/5 max-w-lg">
          <h1 className="py-5 text-2xl font-bold">Login</h1>
          <form className="space-y-8 " onSubmit={login}>
            <div className="space-y-8 sm:space-y-10">
              {/* <div className="relative sm:pt-5 flex align-center ">
                      <input
                        type="text"
                        name="Username"
                        id="Username"
                        placeholder="Username"
                        autoComplete='disable'
                        required
                        className="px-5 h-12 block w-full pl-10 max-w-lg rounded-md border shadow focus:border-primary focus:ring-primary sm:text-sm"
                        value={username}
                        onChange={event => setUsername(event.target.value )}
                      />
                  </div> */}

              {/* <div className="sm:items-start sm:pt-5">
                    <div className="sm:mt-0">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
                        className="h-12 px-5 block w-full max-w-lg rounded-md border shadow focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={password}
                        onChange={event => setPassword(event.target.value )}
                      />
                    </div>
                  </div> */}

              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <UserIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  name="Username"
                  id="Username"
                  placeholder="Username"
                  autoComplete="disable"
                  required
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  className="h-12 border block min-w-full  rounded-xl shadow-lg border-gray-300 pl-10 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  className="h-12 border block min-w-full  rounded-xl shadow-lg border-gray-300 pl-10 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                disabled={!validate()}
                className="flex text-sm bg-accent space-x-3 shadow-md disabled:bg-slate-500 text-black rounded-xl py-4 px-5"
              >
                <span className="text-black font-semibold">Login</span>

                <ArrowSmallRightIcon className="w-5" />
              </button>
            </div>
          </form>
          <div className="py-5 flex items-center justify-center">or</div>
          <div className="text-xs text-gray-500">Login with</div>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
}
