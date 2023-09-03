/** @format */
import { PlusIcon } from '@heroicons/react/24/outline';
import { useNavigate } from '@remix-run/react';
import { Table } from '~/components/common/Table';
import {  SourceGlobalColumn,  } from '~/utils/headers';
const data = [
	{
		SNO: 1,
		SOURCE: 'ap7am.com',
		SOURCE_URL: 'ap7am.com', 
		REACH: '3.05',
		RPS:"3050",
		PUBLICATION_TYPE:"Select publication",
		LANGUAGE:"Telgu"
	},
	{
		SNO: 2,
		SOURCE: 'ap7am.com',
		SOURCE_URL: 'ap7am.com', 
		REACH: '3.05',
		RPS:"3050",
		PUBLICATION_TYPE:"Select publication",
		LANGUAGE:"Telgu"
	},
	{
		SNO: 3,
		SOURCE: 'ap7am.com',
		SOURCE_URL: 'ap7am.com', 
		REACH: '3.05',
		RPS:"3050",
		PUBLICATION_TYPE:"Select publication",
		LANGUAGE:"Telgu"
	},
	{
		SNO: 4,
		SOURCE: 'ap7am.com',
		SOURCE_URL: 'ap7am.com', 
		REACH: '3.05',
		RPS:"3050",
		PUBLICATION_TYPE:"Select publication",
		LANGUAGE:"Telgu"
	},
	{
		SNO: 5,
		SOURCE: 'ap7am.com',
		SOURCE_URL: 'ap7am.com', 
		REACH: '3.05',
		RPS:"3050",
		PUBLICATION_TYPE:"Select publication",
		LANGUAGE:"Telgu"
	},
];
export default function Index() {
	const navigate = useNavigate();
	const navigateHandler = () => {
		navigate("/sourceglobal/create");
	  };
	return (
		<div className="flex flex-col gap-y-4">
		<div className="flex justify-between pb-4 bg-white rounded-lg p-4">
		  <h1 className="text-lg font-extrabold">Industry List</h1>
		  <button
			onClick={() => navigateHandler()}
			className="bg-[#02abfe] px-6 border rounded-lg text-sm text-white py-2 flex justify-center items-center space-x-1"
		  >
			<PlusIcon className="h-5 w-5 font-bold" />
			<span>Add New Industry</span>
		  </button>
		</div>
			<div className='justify-end flex mb-4'>
				Search: &nbsp;
				<input
					type='text'
					className='border border-gray-300 outline-none rounded-md'></input>
			</div>
			<div>
				<Table tableData={data} column={SourceGlobalColumn} />
			</div>
		</div>
	);
}