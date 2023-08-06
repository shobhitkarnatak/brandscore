import { Link, useLocation } from "@remix-run/react";

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="relive col-span-3 min-h-[87.5vh] shadow-md shadow-[#b4b4b4] lg:col-span-2">
      <div className="fixed ml-6">
        <ul></ul>
      </div>
    </div>
  );
}
