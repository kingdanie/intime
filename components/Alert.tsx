import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface Props {
    children: React.ReactNode;
    type: 'success' | 'warning' | 'danger';
    key?: number;
    extraClasses?: string;
  }
  const Alert = ({ children, type, key, extraClasses }: Props) => {
    let color;
    switch (type) {
      case 'success':
        color = 'bg-blue-500';
        break;
      case 'warning':
        color = 'bg-yellow-300 text-yellow-800';
        break;
      default:
        color = 'bg-red-500';
    }
    const classes = `text-white text-center items-center p-2 rounded-xl mt-4 ${color} ${extraClasses}`;
    const [visible, setVisible] = useState(true);
    return (
      <div key={key} className={classes} style={{display: visible ? "flex":"none"}}>
        {children}
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
            onClick={() => setVisible(false) }
              type="button"
              className="inline-flex rounded-md  focus:outline-none focus:ring-2 "
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Alert;