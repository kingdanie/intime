export default function SocialLogin() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-y-2 items-center rounded-lg  border-gray-300">
        <div className="flex p-5 shadow rounded-lg border logo-gray">
          <img src="/google.svg" alt="" className="w-6 h-6" />
        </div>
        <p className="text-xs text-gray-500">Google</p>
      </div>
      <div className="flex flex-col gap-y-2 items-center rounded-lg  border-gray-300">
        <div className="flex p-5 shadow rounded-lg border logo-gray">
          <img src="/facebook.svg" alt="" className="w-6 h-6" />
        </div>
        <p className="text-xs text-gray-500">Facebook</p>
      </div>
      <div className="flex flex-col gap-y-2 items-center rounded-lg  border-gray-300">
        <div className="flex p-5 shadow rounded-lg border logo-gray">
          <img src="/apple-filled.svg" alt="" className="w-6 h-6" />
        </div>
        <p className="text-xs text-gray-500">Apple</p>
      </div>
      <div className="flex flex-col gap-y-2 items-center rounded-lg  border-gray-300">
        <div className="flex p-5 shadow rounded-lg border logo-gray">
          <img src="/microsoft.svg" alt="" className="w-6 h-6" />
        </div>
        <p className="text-xs text-gray-500">Microsoft</p>
      </div>
    </div>
  );
}
