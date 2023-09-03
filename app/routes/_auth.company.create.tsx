// @flow

import { Input } from "~/components/Form/Input";
import { Select } from "~/components/Form/Select";

type Props = {};
export default function Create(props: Props) {
  return (
    <div className="flex flex-col bg-white p-8 py-4">
      <h2 className="font-bold text-xl py-4">Create Company</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4">
          <Input
            name="companyName"
            placeholder="CompanyName"
            id="companyName"
            type="text"
            register=""
          />
          <Select
            name="group"
            placeholder="Group"
            id="group"
            type="text"
            register=""
            options={[]}
          />
          <Select
            name="industry"
            placeholder="Select Industry"
            id="group"
            type="text"
            register=""
            options={[]}
          />
          <Input
            name="twitterKeywords"
            placeholder="Twitter Keywords"
            id="twitterKeywords"
            type="text"
            register=""
          />
          <Input
            name="newsKeywords"
            placeholder="News Keywords"
            id="newsKeywords"
            type="text"
            register=""
          />
          <Input
            name="internalKeywords"
            placeholder="Internal Keywords"
            id="internalKeywords"
            type="text"
            register=""
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 col-span-3">
            <Input
              name="facebookPage"
              placeholder="Facebook Page"
              id="facebookPage"
              type="text"
              register=""
            />
            <Input
              name="twitterHandle"
              placeholder="Twitter Handle"
              id="twitterHandle"
              type="text"
              register=""
            />
          </div>
          <Select
            name="category"
            placeholder="Category"
            id="category"
            type="text"
            register=""
            options={[]}
          />
        </div>
        <button className="bg-indigo-800 py-2 text-base text-white w-full my-4 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
}
