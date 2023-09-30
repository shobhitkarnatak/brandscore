/** @format */

import classNames from "classnames";
import { useLocation, useNavigate } from "@remix-run/react";
import { defaultNavItems } from "./defaultNavItems";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";

export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
  isSelected: boolean;
};

// add NavItem prop to component prop
type Props = {
  collapsed: boolean;
  navItems?: NavItem[];
  setCollapsed(collapsed: boolean): void;
  shown: boolean;
};
const Sidebar = ({
  collapsed,
  navItems = defaultNavItems,
  shown,
  setCollapsed,
}: Props) => {
  const [navList, setNavList]: any = useState([...navItems]);
  const navigate = useNavigate();
  //   const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;
  const { pathname } = useLocation();

  const navigateHandler = (item: any) => {
    const currentNav = [...navList];
    const selectedNavList = currentNav.map((list: any) => {
      if (list.href === item.href) {
        list.isSelected = true;
      } else {
        list.isSelected = false;
      }

      return list;
    });
    setNavList(selectedNavList);

    navigate(item.href);
  };

  const redirect = (item: any) => {
    navigate(item.href);
  };

  console.log("Path is", pathname.split("/")[1]);

  return (
    <div
      className={classNames({
        "bg-white fixed md:static md:translate-x-0 z-20 shadow-lg": true,
        "transition-all duration-300 ease-in-out": true,
        "w-[275px]": !collapsed,
        "w-16": collapsed,
        "-translate-x-full": !shown,
      })}
    >
      <div
        className={classNames({
          "flex flex-col justify-between h-screen md:h-full sticky inset-0":
            true,
        })}
      >
        {/* logo and collapse button */}
        <div
          className={classNames({
            "flex items-center border-b border-b-gray-300 transition-none":
              true,
            "p-4 justify-between": !collapsed,
            "py-4 justify-center": collapsed,
          })}
        >
          {!collapsed && (
            <img
              alt="icon"
              src="http://brandscore.in/assets/images/incight-logo.png"
              className="w-28"
            />
          )}
          <button
            className="grid place-content-center hover:bg-blue-600 w-10 h-10 rounded-full opacity-0 md:opacity-100 hover:text-white"
            onClick={() => setCollapsed(!collapsed)}
          >
            <Bars3Icon className="w-5 h-5" />
          </button>
        </div>
        <div className="flex px-4 py-2 ">
          <div>
            <img
              alt="icon"
              src="http://brandscore.in/assets/images/user-icon.png"
              className="w-12"
            />
          </div>
          {!collapsed && (
            <div className="px-2">
              <p className="text-sm">Sunil</p>
              <p className="text-[#02ABFE]">Logout</p>
            </div>
          )}
        </div>
        <nav className="flex-grow">
          <ul
            className={classNames({
              "my-2 flex flex-col items-stretch": true,
            })}
          >
            {navList?.map((item: any, index: number) => {
              return (
                <Fragment key={`${index}-${Math.random()}`}>
                  <button onClick={() => navigateHandler(item)}>
                    <li
                      className={classNames({
                        "text-gray-800 text-sm flex border border-dotted border-[#ecedf2]":
                          true, //colors
                        "transition-colors duration-300": true, //animation
                        "rounded-md p-2 py-3 px-3 gap-4 ": !collapsed,
                        "rounded-full p-3 mx-3 w-10 h-10": collapsed,
                        "bg-gradient-to-br from-[#f54266] via-[#3858f9] to-[#3858f9] text-white":
                          pathname.split("/")[1] === item.parent,
                      })}
                    >
                      <div
                        className="flex items-center w-full text-base"
                        aria-controls="dropdown-example"
                        data-collapse-toggle="dropdown-example"
                      >
                        <span className="flex-1 ml-3 text-left whitespace-nowrap">
                          <span className="flex gap-2 items-center">
                            {item.icon} <span>{!collapsed && item.label}</span>
                          </span>
                        </span>
                        {item?.navItem?.length > 0 &&  <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>}
                       
                      </div>
                    </li>
                  </button>
                  {item?.isSelected && item?.navItem?.length > 0 && (
                    <ul className="py-2 space-y-2 flex flex-col">
                      {item?.navItem?.map((listItem: any, uni: number) => {
                        return (
                          <button
                            onClick={() => redirect(listItem)}
                            key={`list-${uni}`}
                            className={`text-left mx-8 px-4 py-1.5 rounded-md ${
                              pathname === listItem.href && "bg-blue-400"
                            }`}
                          >
                            {listItem.label}
                          </button>
                        );
                      })}
                    </ul>
                  )}
                </Fragment>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;
