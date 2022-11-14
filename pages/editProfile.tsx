import { EnvelopeIcon, PencilIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function EditProfile() {
    return (
        <div className="w-full text-gray-600 flex flex-col items-center justify-between space-y-10 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm">
            <Image src="" height="50" width="100" alt="user profile" />
            <div className="flex flex-col items-center">
                <h3 className="font-extrabold ">User Name</h3>
            <div className="flex items-center">
                <EnvelopeIcon className="h-5 mr-4" /> 
                <span>email@example.com</span>
            </div>
                </div>
            <div>
                <button className="flex items-center text-sm text-gray-600 font-semibold space-x-2 py-3 px-4 bg-yellow-400 rounded-xl">
                    Edit <div className="ml-3"><PencilIcon className="h-4" /></div>
                </button>
            </div>
        </div>
    )
}