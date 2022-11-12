import Link from "next/link";
import SocialLogin from "./components/social-login";
export default function Register() {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row items-center justify-center">
      <div className="w-1/2 h-full bg-purple-700 flex flex-col items-center justify-center">
        Image
        <h3 className="text-white p-5">Don&apos;t have an account?</h3>
        <button className="ring-white ring-2 shadow focus:border-white focus:ring-white  py-2 px-5 rounded-lg text-sm text-white">
          <Link href="/register">Sign up</Link>
        </button>
      </div>
      <div className="h-full w-1/2 py-5 px-10 flex justify-center overflow-y-auto items-center">
        <div className="flex flex-col w-4/5">
          <h1 className="py-5 text-gray-600">Login</h1>
          <form className="space-y-8 ">
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
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="text-sm bg-yellow-400 text-black rounded-lg py-3 px-5">
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
