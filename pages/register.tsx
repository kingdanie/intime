import Link from "next/link";
import Image from "next/image";
import SocialLogin from "../components/social-login";
import {
  ArrowSmallRightIcon,
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React, { useContext, useState } from "react";
import { postFormData } from "../utils/postFormData";
import Alert from "../components/Alert";
import { harperFetchJWTTokens } from "../utils/harperdb/fetchJWTTokens";
import { useRouter } from "next/router";
import { UserContext } from "../contexts/UserContexts";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");
  const [errors, setErrors] = useState<string | string[]>(
    ""
  );

  const user = useContext(UserContext);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors("");

    const formData = {
      email,
      username,
      password,
      confirmPassword,
    };
    const { response, result } = await postFormData(
      formData,
      "/api/signup"
    );

    // Account not created successfully
    if (response.status !== 200) {
      setErrors(result.error);
      return;
    }
    // Account created successfully; get JWTs
    try {
      const { response, result } =
        await harperFetchJWTTokens(username, password);
      const accessToken = result.operation_token;
      if (response.status === 200 && accessToken) {
        authenticateUser(username, accessToken);
        alert("Succesfully registered");
        router.push("/");
      } else {
        // Account created, but failed to get JWTs
        // Redirect to login page
        router.push("/login");
      }
    } catch (err) {
      console.log(err);
      setErrors("Whoops, something went wrong :(");
    }

    console.log({ response, result });
  };

  const authenticateUser = (
    username: string,
    accessToken: string
  ) => {
    user.setUsername(username);
    localStorage.setItem("access_token", accessToken);
  };

  const displayErrors = () => {
    if (errors.length === 0) return;

    return typeof errors === "string" ? (
      <Alert type="danger">{errors}</Alert>
    ) : (
      errors.map((err, i) => (
        <Alert key={i} type="danger">
          {err}
        </Alert>
      ))
    );
  };

  return (
    <div className="h-screen w-full flex flex-col md:flex-row items-center justify-center">
      <div className="h-full w-1/2 py-5 px-10 flex justify-center overflow-y-auto register-bg">
        <div className="flex flex-col w-4/5 max-w-lg">
          <h1 className="py-5 text-2xl font-bold">
            Sign Up
          </h1>
          <div className="mt-5 text-xs text-gray-500">
            Sign up with
          </div>
          <SocialLogin />

          <div className="py-5 flex items-center justify-center">
            or
          </div>
          <form
            className="space-y-8"
            onSubmit={handleSubmit}
          >
            <div className="space-y-5 md:space-y-8">
              <div className="relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <EnvelopeIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="email"
                  name="Email"
                  id="Email"
                  placeholder="Email"
                  autoComplete="disable"
                  required
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  className="py-6 h-12 border block min-w-full  rounded-xl shadow-lg border-gray-300 pl-10 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>

              <div className="relative rounded-md shadow-sm">
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
                  onChange={(event) =>
                    setUsername(event.target.value)
                  }
                  className="py-6 h-12 border block min-w-full  rounded-xl shadow-lg border-gray-300 pl-10 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>

              <div className="relative rounded-md shadow-sm">
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
                  className="py-6 h-12 border block min-w-full  rounded-xl shadow-lg border-gray-300 pl-10 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                />
              </div>

              <div className="relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Password"
                  type="password"
                  required
                  className="py-6 h-12 border block min-w-full  rounded-xl shadow-lg border-gray-300 pl-10 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  value={confirmPassword}
                  onChange={(event) =>
                    setConfirmPassword(event.target.value)
                  }
                />
              </div>

              {/* <div className="sm:items-start sm:gap-4  sm:pt-5">
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
                  </div> */}
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="text-sm bg-accent flex items-center space-x-3 shadow-md  text-black disabled:bg-slate-300 rounded-xl py-5 px-5"
              >
                <span className="text-black font-semibold">
                  Sign up
                </span>
                <ArrowSmallRightIcon className="w-5" />
              </button>
            </div>

            {displayErrors()}
          </form>
        </div>
      </div>
      <div className="w-1/2 h-full bg-filler flex flex-col items-center pt-10">
        <Image
          src={"/register.png"}
          alt="register image"
          width={450}
          height={450}
          className="mb-10"
        ></Image>
        <h3 className="text-white p-5">
          Already have an account?
        </h3>
        <Link href="/login">
          <button className="ring-white ring-2 shadow flex items-center space-x-3 focus:border-white focus:ring-white  py-3 px-5 rounded-xl text-sm text-white">
            <small>Login</small>
            <ArrowSmallRightIcon className="w-4" />
          </button>
        </Link>
      </div>
    </div>
  );
}
