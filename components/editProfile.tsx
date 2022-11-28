import { EnvelopeIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import uimage from "/public/user-profile.png";
import editButton from "/public/edit.svg";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContents";

export default function EditProfile() {

  const { username, userInfo } = useContext(UserContext)
  
  return (
    <div className="w-full text-gray-600 flex flex-col items-center justify-between space-y-5 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-lg">
      <Image src={uimage} height="50" width="70" alt="user profile" />
      <div className="flex flex-col items-center">
        <h3 className="font-extrabold mb-1">{username}</h3>
        <div className="flex items-center">
          <EnvelopeIcon className="h-5 mr-2" />
          <small>{userInfo[0]?.email}</small>
        </div>
      </div>
      <div>
        <Link href={"settings"}>
          <button className="flex items-center text-xs text-gray-600 font-semibold space-x-2 py-3 px-4 bg-accent rounded-xl">
            Edit
            <div className="ml-3">
              <Image
                src={editButton}
                height="15"
                width="15"
                alt="user profile"
              />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}
