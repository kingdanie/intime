import Link from "next/link";
import Image from "next/image";
import SocialLogin from "./components/social-login";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row items-center justify-center">
      <div className="h-full w-1/2 py-5 px-10 flex justify-center overflow-y-auto">
        <div className="flex flex-col w-4/5">
          <h1 className="py-5">Sign Up</h1>
          <div className="text-xs text-gray-500">Sign up with</div>
          <SocialLogin />

          <div className="py-5 flex items-center justify-center">or</div>
          <form className="space-y-8 ">
            <div className="space-y-8 sm:space-y-5">
              <div className="">
                <div className="">
                  <div className="sm:items-start sm:gap-4  sm:pt-5">
                    <div className="sm:mt-0">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        autoComplete="email"
                        className="shadow h-12 px-5 block w-full max-w-lg rounded-md border-gray-700 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:items-start sm:pt-5">
                    <div className="sm:mt-0">
                      <input
                        type="text"
                        name="Username"
                        id="Username"
                        placeholder="Username"
                        className="px-5 h-12 block w-full max-w-lg rounded-md border-gray-700 shadow focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                        autoComplete=""
                        className="h-12 px-5 block w-full max-w-lg rounded-md border-gray-700 shadow focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:items-start sm:pt-5">
                    <div className="sm:mt-0">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="confirmPassword"
                        placeholder="Password"
                        autoComplete=""
                        className="h-12 px-5 block w-full max-w-lg rounded-md border-gray-700 shadow focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="text-sm bg-yellow-400 text-black rounded-lg py-3 px-5">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-1/2 h-full bg-purple-700 flex flex-col items-center pt-10">
      <Image src={'/register.png'} alt="register image" width={450} height={450} className="mb-10"></Image>
        <h3 className="text-white p-5">Already have an account?</h3>
        <Link href="/login">
        <button className="ring-white ring-2 shadow focus:border-white focus:ring-white  py-2 px-5 rounded-lg text-sm text-white">
          Login
        </button>
        </Link>
      </div>
    </div>
  );
}
