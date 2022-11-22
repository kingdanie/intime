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
        <Image src={'/login.png'} alt="login image" width={450} height={450} className="mb-10"></Image>
        <h3 className="text-white p-5">Don&apos;t have an account?</h3>
        <button className="ring-white ring-2 shadow focus:border-white focus:ring-white  py-2 px-5 rounded-lg text-sm text-white">
          <Link href="/register">Sign up</Link>
        </button>
      </div>
      <div className="h-full w-1/2 py-5 px-10 flex justify-center overflow-y-auto items-center">
        <div className="flex flex-col w-4/5">
          <h1 className="py-5 text-xl font-bold">Login</h1>
          <form className="space-y-8 " onSubmit={login}>
            <div className="space-y-8 sm:space-y-5">
              <div className="">
                <div className="">
                  <div className="sm:items-start sm:pt-5">
                    <div className="sm:mt-0">
                      <input
                        type="text"
                        name="Username"
                        id="Username"
                        placeholder="Username"
                        autoComplete='disable'
                        required
                        className="px-5 h-12 block w-full max-w-lg rounded-md border shadow focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={username}
                        onChange={event => setUsername(event.target.value )}
                      />
                    </div>
                  </div>

                  <div className="sm:items-start sm:pt-5">
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
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button disabled={!validate()} className="text-sm bg-accent disabled:bg-slate-500 text-black rounded-lg py-3 px-5">
                Login
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
