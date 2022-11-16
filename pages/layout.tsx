import styles from "../styles/Home.module.css";
import Sidebar from "./components/sidebar";
import { Fragment, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import TopBar from "./components/topbar";
import SideBar2 from "./components/sidebar2";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
<div className="flex h-screen">
        <SideBar2 sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="flex flex-1 flex-col h-screen">
     <TopBar setSidebarOpen={() => setSidebarOpen(true)}/>
            <main className="overflow-y-scroll">
              {/* Primary column */}
              {children}
            </main>
          </div>
    </div>
  );
}
