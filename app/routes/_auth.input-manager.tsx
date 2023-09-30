/** @format */
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Outlet } from "@remix-run/react";
import { Fragment } from "react";
import { Input } from "~/components/Form/Input";
import { Select } from "~/components/Form/Select";
import { InputManagerButtons, InputManagerCards } from "~/utils/data";

export default function InputManager() {
  return (
    <div className="bg-gray-50 p-4">
      <h1 className="font-bold text-xl font-poppins">Query Manager</h1>
      <h4 className="text-sm text-gray-500">Welcome to Incight Dashboard</h4>
      <hr className="divide-gray-500 mt-3" />

      <div className="grid grid-cols-5 my-4 gap-x-4">
        <div className="col-span-2">
          <Input
            type="date"
            name="date"
            placeholder="Select Date Time"
            register={""}
            id="data"
          />
        </div>
        <Select
          type="text"
          name="Followers Count"
          placeholder="Followers Count"
          register={""}
          id="data"
          options={[]}
        />

        <Select
          type="text"
          name="Category"
          placeholder="Category"
          register={""}
          id="data"
          options={[]}
        />
      </div>
      <div className="flex gap-x-3 my-4">
        {InputManagerButtons.map((item: any, index: number) => {
          return (
            <button
              key={`item-${index}`}
              className={` rounded-md text-white px-4 py-2 text-sm flex item-center justify-center`}
              style={{ background: item.background }}
            >
              <img
                src={item.icon}
                alt="icons"
                className="h-4 w-4 mx-2 flex mt-0.5"
              />
              {item.title}
            </button>
          );
        })}
      </div>
      <div className="flex flex-col gap-y-2">
        {InputManagerCards.map((item: any, index: any) => {
          return (
            <Fragment key={`item-${index}`}>
              <h2 className="font-bold text-lg font-poppins">{item.title}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {item.cards.map((list: any, index: number) => {
                  return (
                    <button
                      key={`list-${index}`}
                      className="border flex justify-between items-center bg-white p-6 py-8 shadow-lg shadow--500/200 rounded-md transform
                      transition duration-500 hover:scale-110"
                    >
                      <div>
                        <h4 className="text-sm text-gray-500 capitalize">
                          {list.summary1}
                        </h4>
                        <h4 className="text-sm text-gray-500 capitalize">
                        {list.summary2}
                        </h4>
                      </div>
                      <div className="bg-blue-300 rounded-full p-2">
                        <DocumentMagnifyingGlassIcon className="h-6 w-6" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </Fragment>
          );
        })}
      </div>
     <main className="my-4">
      <Outlet />
     </main>
    </div>
  );
}
