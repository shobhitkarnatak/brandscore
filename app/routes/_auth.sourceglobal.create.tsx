// @flow

import { Input } from "~/components/Form/Input";


type Props = {};
export default function Create(props: Props) {
  return (
    <div className="flex flex-col bg-white p-8 py-4">
      <h2 className="font-bold text-xl py-4">Create User</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
          <Input
            name="sourceName"
            placeholder="Source Name"
            id="name"
            type="text"
            register=""
          />
          <Input
            name="sourceUrl"
            placeholder="Source Url"
            id="sourceUrl"
            type="text"
            register=""
          />
         
          <Input
            name="reach"
            placeholder="Reach(In Millions)"
            id="email"
            type="text"
            register=""
          />
          <Input
            name="productionType"
            placeholder="Production Type"
            id="userType"
            type="text"
            register=""
            
          />
            <Input
            name="language"
            placeholder="Language"
            id="userType"
            type="text"
            register=""
            
          />
        </div>
        <button className="bg-indigo-800 py-2 text-base text-white w-full my-4 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
}
