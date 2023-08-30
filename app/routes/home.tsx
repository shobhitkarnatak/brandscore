import { Outlet } from "@remix-run/react";

export default function Home() {
    return (
        <div>
        <h1>Home</h1>
         
        <Outlet />
      </div>
    );
  }