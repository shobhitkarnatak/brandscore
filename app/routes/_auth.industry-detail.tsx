/** @format */

import { STATIC_PATH } from "~/env";
import { telecomData } from "~/utils/data";

export default function Index() {
  return (
    <div className="grid-cols-1 grid md:grid-cols-3 gap-x-4">
      {telecomData.map((list: any, index: number) => {
        return (
          <div className="flex flex-col" key={`item-${index}`}>
            <div className="border shadow-lg p-8 bg-white">
              <h2 className="text-center font-bold">{list.title}</h2>
              <p className="text-center my-2 flex gap-x-4 justify-center items-center">
                 <div className="border rounded-full border-black p-1.5">
                   <img src={`${STATIC_PATH.img}building.svg`} alt="icon" className="h-4 w-4" />
                 </div>
                <span className="font-bold text-3xl">0</span>
              </p>
              <div className="grid grid-cols-3 gap-x-2">
                {list.average.map((item: any, uni: number) => {
                  return (
                    <div className="border p-3 rounded-md" key={`item-${uni}`}>
                      <p className="text-center text-gray-800 text-sm font-bold">{item.count}</p>
                      <p className="text-center text-[12px] text-gray-600">
                       {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
