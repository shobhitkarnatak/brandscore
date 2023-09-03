// @flow

import { Input } from "~/components/Form/Input";
import { Select } from "~/components/Form/Select";

type Props = {};
export default function Create(props: Props) {
  return (
    <div className="flex flex-col bg-white p-8 py-4">
      <h2 className="font-bold text-xl py-4">Create User</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
          <Input
            name="name"
            placeholder="Name"
            id="name"
            type="text"
            register=""
          />
          <Input
            name="Email"
            placeholder="Email"
            id="email"
            type="text"
            register=""
          />
          <Input
            name="password"
            placeholder="Password"
            id="email"
            type="text"
            register=""
          />
          <Input
            name="confirmPassword"
            placeholder="Confirm Password"
            id="email"
            type="text"
            register=""
          />
          <Select
            name="userType"
            placeholder="User Type"
            id="userType"
            type="text"
            register=""
            options={[]}
          />
          <Select
            name="assignIndustry"
            placeholder="Assign Industry"
            id="group"
            type="text"
            register=""
            options={[]}
          />
        </div>
        <button className="bg-indigo-800 py-2 text-base text-white w-full my-4 rounded-lg">
          Register
        </button>
      </form>
    </div>
  );
}
