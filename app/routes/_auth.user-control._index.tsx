/** @format */
import { PlusIcon } from '@heroicons/react/24/outline';
import { useNavigate } from '@remix-run/react';
import { Table } from '~/components/common/Table';
import { userControlColumn } from '~/utils/headers';
const data = [
	{
		SNO: 1,
		NAME: 'Bharti Airtel',
		EMAIL: 'abc@gmail.com',
		INDUSTRY: 'Automobile',
		MODULES: '',
		TYPE: 'corporate',
		CREATED_AT: '2020-15-7',
	},
	{
		SNO: 2,
		NAME: 'Bharti Airtel',
		EMAIL: 'abc@gmail.com',
		INDUSTRY: 'Automobile',
		MODULES: '',
		TYPE: 'corporate',
		CREATED_AT: '2020-15-7',
	},
];
export default function Index() {
	const navigate = useNavigate();
	const navigateHandler = () => {
		navigate('/user-control/create');
	};
	return (
		<div className='flex flex-col gap-y-4'>
			<div className='flex justify-between pb-4 rounded-lg p-4'>
				<h1 className='text-lg font-extrabold'>Users List</h1>
				<button
					onClick={() => navigateHandler()}
					className='bg-[#02abfe] px-6 border rounded-lg text-sm text-white py-2 flex justify-center items-center space-x-1'>
					<PlusIcon className='h-5 w-5 font-bold' />
					<span>Add New User</span>
				</button>
			</div>
			<div className='flex flex-col bg-white p-4 py-4 border border-[#edeef2]  rounded-md'>
				<div className='justify-end flex mb-4'>
					Search: &nbsp;
					<input
						type='text'
						className='border border-gray-300 outline-none rounded-md'></input>
				</div>
				<div>
					<Table tableData={data} column={userControlColumn} />
				</div>
			</div>
		</div>
	);
}
