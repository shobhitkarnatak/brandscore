/** @format */
import { PlusIcon } from '@heroicons/react/24/outline';
import { useNavigate } from '@remix-run/react';
import { Table } from '~/components/common/Table';
import { industryColumn } from '~/utils/headers';
const data = [
	{
		SNO: 1,
		GROUP: 'Bharti Airtel',
		INDUSTRY: 'Telecom',
		INDUSTRY_KEYWORDS: '4G data, 5G data',
		SEAGMENTS: 'Financial, COVID19',
	},
	{
		SNO: 2,
		GROUP: 'Bharti Airtel',
		INDUSTRY: 'Telecom',
		INDUSTRY_KEYWORDS: '4G data, 5G data',
		SEAGMENTS: 'Financial, COVID19',
	},
];
export default function Index() {
	const navigate = useNavigate();
	const navigateHandler = () => {
		navigate('/industry/create');
	};
	return (
		<div className='flex flex-col gap-y-4'>
			<div className='flex justify-between pb-4 rounded-lg p-4'>
				<h1 className='text-lg font-extrabold'>Industry List</h1>
				<button
					onClick={() => navigateHandler()}
					className='bg-[#02abfe] px-6 border rounded-lg text-sm text-white py-2 flex justify-center items-center space-x-1'>
					<PlusIcon className='h-5 w-5 font-bold' />
					<span>Add New Industry</span>
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
					<Table tableData={data} column={industryColumn} />
				</div>
			</div>
		</div>
	);
}
