import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import jwt_decode from "jwt-decode";
import Image from "next/image";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { FormEvent, useContext, useState } from "react";
import { UserContext } from "../contexts/UserContexts";
import { harperFetchJWTTokens } from "../utils/harperdb/fetchJWTTokens";
import SocialLogin from "../components/social-login";
import { UserInfo } from "../types/UserInfo";
import { harperGetUserInfo } from "../utils/harperdb/getUserInfo";
export default function Register() {
  const { setUsername, setUserInfo } = useContext(UserContext);
  const router = useRouter();

  const [username, setLoginUsername] = useState("");
  const [password, setPassword] = useState("");

  // disable submit when inputs are empty
  const validate = () => {
    return username.trim().length & password.trim().length;
  };

  async function getUserInfo( username: string) : Promise<UserInfo> {

    try {
      const userInfo: UserInfo = await harperGetUserInfo(username);
      return userInfo;
    } catch (err) {
      console.error("Something went wrong", err);
      throw err; // Re-throw the error to be handled by the caller if needed
    }

  }

  async function handleLogin(
    e: FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    if (username == "" && password == "") return;

    try {
      const { response, result } =
        await harperFetchJWTTokens(username, password);
      const { status } = response;
      const accessToken = result.operation_token;
      if (status === 200 && accessToken) {
        // decode jwt received from the server
        const decodedData: any = jwt_decode(accessToken);
        authenticateUser(decodedData.username, accessToken);
        // router.push("/");
      } else if (status === 401) {
        // setError("Check your username and password are correct")
        alert(
          "Check your username and password are correct"
        );
      } else {
        // setError("Whoops, something went wrong :(")
        alert("Whoops, something went wrong :(");
      }
    } catch (err) {
      console.log(err);
      // setError("Whoops, something went wrong :(")
      alert("Whoops, something went wrong :(");
    } finally {
      window.location.href = "/";
    }

    setLoginUsername("");
    setPassword("");
  }

  const authenticateUser = async (
    username: string,
    accessToken: string
  ) => {
    setUsername(username);
    localStorage.setItem("access_token", accessToken);
  };

  return (
    <div className="md:h-screen w-full md:flex md:flex-row items-center justify-center">
      <div className="md:w-1/2 md:h-full bg-filler flex flex-col justify-center  items-center">
        <Image
          src={"/login.png"}
          alt="login image"
          width={450}
          height={450}
          className="mb-10"
          loading = 'eager'
        ></Image>
        <h3 className="text-white p-5">
          Don&apos;t have an account?
        </h3>
        <Link href="/register" className="mb-10 md:mb-0">
          <button 
            className="ring-white ring-2 shadow-md flex items-center 
              space-x-3 focus:border-white focus:ring-white  
              py-3 px-5 rounded-xl text-sm text-white
          ">
            <ArrowSmallLeftIcon className="w-4" />
            <small>Sign up</small>
          </button>
        </Link>
      </div>
      <div className="
          md:h-full md:w-1/2 py-5 px-10 
          flex justify-center
          overflow-y-auto items-center
          "
      >
        <div className="flex flex-col w-4/5 max-w-lg">
          <h1 className="py-5 text-2xl font-bold">Login</h1>
          <form
            className="space-y-8 "
            onSubmit={handleLogin}
          >
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
                <div 
                  className="pointer-events-none absolute inset-y-0 
                    left-0 flex items-center pl-3
                ">
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
                  onChange={(event) =>
                    setLoginUsername(event.target.value)
                  }
                  className="h-12 border block min-w-full  
                    rounded-xl shadow-lg border-gray-300 pl-10 
                    focus:border-primary-500 focus:ring-primary-500 
                    sm:text-sm
                  "
                />
              </div>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div 
                  className="pointer-events-none absolute 
                    inset-y-0 left-0 flex items-center pl-3
                  "
                >
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
                  className="h-12 border block min-w-full  
                    rounded-xl shadow-lg border-gray-300 pl-10 
                    focus:border-primary-500 focus:ring-primary-500 
                    sm:text-sm
                  "
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                disabled={!validate()}
                className="flex text-sm bg-accent space-x-3 
                  shadow-md disabled:bg-opacity-50 disabled:text-opacity-25 text-black 
                  rounded-xl py-4 px-5
                "
              >
                <span className="text-black  disabled:text-opacity-25 font-semibold">
                  Login
                </span>

                <ArrowSmallRightIcon className="w-5" />
              </button>
            </div>
          </form>
          <div className="py-5 flex items-center justify-center">
            or
          </div>
          <div className="text-xs text-gray-500">
            Login with
          </div>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
}
