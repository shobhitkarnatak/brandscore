import { Outlet,  } from "@remix-run/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "~/components/common/Navbar";
import Sidebar from "~/components/common/Sidebar";
import "../styles/app.css";

 

export default function App() {
   
  return (
    <div className="relative z-0 h-screen ">
      <header className="sticky top-0 z-50 bg-white">
        <Navbar userInfo={""} />
      </header>
      <div className="flex-1">
        <div className="grid grid-cols-12">
          <Sidebar />

          <div className="z-0 col-span-9 bg-gray-100 px-4 pt-3 lg:col-span-10">
            <main className="w-full">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
