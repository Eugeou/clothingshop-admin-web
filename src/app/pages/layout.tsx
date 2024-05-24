"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/src/components/Navbar";
import Sidebar from "@/src/components/SideBar";
import { useSidebarState } from "@/src/hooks/useTransitions";

const inter = Inter({ subsets: ["latin"] });


export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isSidebarCollapsed, toggleSidebar } = useSidebarState();

  return (
        <div className="flex bg-slate-400 rounded-3xl ">
          <aside className={`h-screen bg-slate-400 rounded-3xl text-white transition-all ${isSidebarCollapsed ? 'w-10' : ' w-16'}`}>
            <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={toggleSidebar}/>
          </aside>
          <main className={`flex-1 p-4 transition-all ${isSidebarCollapsed ? 'ml-10' : 'ml-52'}`}>
            {children}
          </main>
        </div>
  );
}