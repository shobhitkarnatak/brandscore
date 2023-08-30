import { Outlet } from "@remix-run/react";
import classNames from "classnames";
import React, {  useState } from "react";
import Navbar from "~/components/Navbar";
import Sidebar from "~/components/Sidebar";

const Layout = (props: any) => {
  const [collapsed, setSidebarCollapsed] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div
      className={
        classNames({
        "flex bg-zinc-100 min-h-screen": true,
        "grid-cols-sidebar": !collapsed,
        "grid-cols-sidebar-collapsed": collapsed,
        "transition-[grid-template-columns] duration-300 ease-in-out": true,
      })
      
    }
    >
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setSidebarCollapsed}
        shown={showSidebar}
      />
      <div className="w-full">
        <Navbar onMenuButtonClick={() => setShowSidebar((prev) => !prev)} />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
