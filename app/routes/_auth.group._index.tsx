/** @format */
import { Table } from '~/components/common/Table';
import { groupColumn } from '~/utils/headers';

const data = [
	{
		SNO: 1,
		GROUP: 'Bharti Airtel',
	},
	{
		SNO: 2,
		GROUP: 'Bharti Airtel',
	},
	{
		SNO: 3,
		GROUP: 'Bharti Airtel',
	},
	{
		SNO: 4,
		GROUP: 'Bharti Airtel',
	},
	{
		SNO: 5,
		GROUP: 'Bharti Airtel',
	},
	{
		SNO: 6,
		GROUP: 'Bharti Airtel',
	},
	{
		SNO: 7,
		GROUP: 'Bharti Airtel',
	},
];
export default function Group() {
	return (
		 
			<div className='flex flex-col'>
				<div className='justify-end flex mb-4'>
					Search: &nbsp;
					<input
						type='text'
						className='border border-gray-300 outline-none rounded-md'></input>
				</div>
				<div>
					<Table tableData={data} column={groupColumn} />
				</div>
				
			</div>
		 
	);
}
