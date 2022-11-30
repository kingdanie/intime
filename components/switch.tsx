import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function AppSwitch({ name }) {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-filler" : "bg-slate-200"}
          relative inline-flex h-[25px] w-[40px] items-center px-1 shrink-0 cursor-pointer rounded-full border-2 border-transparent 
          transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  
          focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">{name}</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-4 bg-white" : "translate-x-0 bg-slate-400"}
            pointer-events-none inline-block h-[12px] w-[12px] transform rounded-full 
            shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </>
  );
}
