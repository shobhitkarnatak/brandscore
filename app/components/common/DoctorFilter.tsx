import { useSearchParams } from "@remix-run/react";
import { useState } from "react";

function DoctorFilter({ doctors, language, time }: any) {
  // console.log("lang", language, time);
  const [searchParams, setSearchParams] = useSearchParams();
  const prevParams = Object.fromEntries(searchParams);
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");
  const handleDate = (date: string) => {
    setDate(date);
    setSearchParams({ ...prevParams, date: String(date) });
  };
  const handleSearch = () => {
    setSearchParams({ ...prevParams, search: search });
  };
  const handleDocSelection = (doctorId: number) => {
    setSearchParams({ ...prevParams, doctor: String(doctorId) });
  };
  const handleLanguageSelection = (languageID: number) => {
    setSearchParams({ ...prevParams, lang: String(languageID) });
  };
  const handleTimeSelection = (timeSlotId: number) => {
    setSearchParams({ ...prevParams, time: String(timeSlotId) });
  };
  return (
    <div className="flex w-full flex-col gap-y-2 border-b-2 border-gray-500 bg-white p-6">
      <div className="flex w-full items-center justify-between gap-x-4">
        <select
          onChange={(e: any) => handleDocSelection(e.target.value)}
          defaultValue={""}
          className="ml-3 block w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500  focus:ring-blue-500 "
        >
          <option value={""} disabled>
            Filter Doctor
          </option>
          {doctors?.data?.map((item: any) => (
            <option key={item.Id} value={item.Id}>
              {item?.Speciality}
            </option>
          ))}
        </select>
        <input
          className="block w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          type="date"
          name="date"
          id="date"
          value={date}
          onChange={(e) => handleDate(e.target.value)}
        />
        <select
          onChange={(e: any) => handleLanguageSelection(e.target.value)}
          defaultValue={""}
          className="ml-3 block w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500  focus:ring-blue-500 "
        >
          <option value={""} disabled>
            Filter Language
          </option>
          {language?.data?.map((item: any) => (
            <option key={item.Id} value={item.Id}>
              {item?.Language}
            </option>
          ))}
        </select>
        <select
          onChange={(e: any) => handleTimeSelection(e.target.value)}
          defaultValue={""}
          className="ml-3 block w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500  focus:ring-blue-500 "
        >
          <option value={""} disabled>
            Filter time
          </option>
          {time?.data?.map((item: any) => (
            <option key={item.Id} value={item.Id}>
              {item?.TimeSlot}
            </option>
          ))}
        </select>
      </div>
      <div className="flex w-2/3 items-center justify-between gap-x-4 px-3">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          id="search"
          name="search"
          className="block w-2/3 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          placeholder="Search"
        />
        <button
          type="button"
          onClick={handleSearch}
          className="rounded-full bg-flamingo-500 px-6 py-2 text-white hover:cursor-pointer hover:bg-flamingo-600 active:bg-flamingo-700 active:text-white "
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default DoctorFilter;
