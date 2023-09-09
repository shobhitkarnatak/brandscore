/** @format */

import { UserIcon } from '@heroicons/react/24/solid';

const data = [
	{
		id: 1,
		name: 'Group',
		count: 63,
	},
	{
		id: 2,
		name: 'Industries',
		count: 20,
	},
	{
		id: 3,
		name: 'Companies',
		count: 66,
	},
	{
		id: 4,
		name: 'Brands',
		count: 166,
	},
	{
		id: 5,
		name: `CXO's`,
		count: 35,
	},
];
export default function Dashboard() {
	return (
		<>
			<div className='border-b border-gray-200 w-full pb-4 mb-4'>
				<h1 className='text-lg font-extrabold'>Dashboard</h1>
				<p className='text-base'>Welcome to Incight Dashboard</p>
			</div>
			<div className='flex flex-wrap gap-x-2 gap-y-6'>
				{data.map((item: any, index: any) => (
					<div
						className='border w-80 bg-white flex justify-between px-4 py-6 rounded-lg cursor-pointer'
						key={index}>
						<div className='gap-2'>
							<p className='font-black text-xl'>{item?.count}</p>
							<p className='text-base'>{item?.name}</p>
						</div>
						<div className='bg-[#3086ff40] h-10 w-10 items-center justify-center flex border rounded-full'>
							<UserIcon className='w-4 h-4 text-[#25378b]' />
						</div>
					</div>
				))}
			</div>
		</>
	);
}
