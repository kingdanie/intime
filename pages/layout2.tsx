import styles from "../styles/Home.module.css";
import Sidebar2 from "../components/sidebar2";
import { Fragment, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import TopBar from "../components/topbar";

export default function OtherLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen">
      <Sidebar2 sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1 flex-col h-screen">
        <TopBar setSidebarOpen={() => setSidebarOpen(true)} />
        <main className="min-w-0 flex-1 border-t border-gray-200 lg:flex pt-5 px-5 overflow-y-auto">
          {/* Primary column */}
          {children}
        </main>
      </div>
    </div>
  );
}
