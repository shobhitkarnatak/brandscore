/** @format */

import React from 'react';
import { groupColumn, userControlColumn } from 'utils/headers';
import { Table } from '~/components/common/Table';
import '../../styles/app.css';
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
export default function Industry() {
	return (
		<div className='border border-gray-300 ml-64 mr-10 rounded-md p-4'>
			<div className='flex flex-col'>
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
