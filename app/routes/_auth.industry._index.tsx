/** @format */
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
	return (
		 
			<div className='flex flex-col'>
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
		 
	);
}
