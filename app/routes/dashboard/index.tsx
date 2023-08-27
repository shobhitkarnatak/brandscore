/** @format */

import React from 'react';
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
		<div className='ml-60 flex flex-wrap gap-x-2 gap-y-6'>
			{data.map((item: any, index: any) => (
				<div
					className='border w-80 border-gray-300 p-4 rounded-lg cursor-pointer'
					key={index}>
					<div className='gap-2'>
						<p className='font-black text-xl'>{item?.count}</p>
						<p className='text-base'>{item?.name}</p>
					</div>
					<div>
						<img src=''></img>
					</div>
				</div>
			))}
		</div>
	);
}
