/** @format */
import { Table } from '~/components/common/Table';
import { companyColumn } from '~/utils/headers';
const data = [
	{
		SNO: 1,
		COMPANY: 'Idea',
		GROUP: 'Bharti Airtel',
		INDUSTRY: 'Telecom',
		CATEGORY: 'India',
		NEWS_KEYWORDS: 'Vodphone',
		TWITTER_KEYWORDS: 'Vodphone',
		INTERNAL_KEYWORDS: 'Vodphone',
		FACEBOOK_PAGE: 'N/A',
		TWITTER_HANDLER: '@twitter',
		SEAGMENTS: 'Financial, COVID19',
	},
	{
		SNO: 2,
		COMPANY: 'Idea',
		GROUP: 'Bharti Airtel',
		INDUSTRY: 'Telecom',
		CATEGORY: 'India',
		NEWS_KEYWORDS: 'Vodphone',
		TWITTER_KEYWORDS: 'Vodphone',
		INTERNAL_KEYWORDS: 'Vodphone',
		FACEBOOK_PAGE: 'N/A',
		TWITTER_HANDLER: '@twitter',
		SEAGMENTS: 'Financial, COVID19',
	},
];
export default function Company() {
	return (
		<div className='border border-gray-300 mr-10 rounded-md p-4'>
			<div className='flex flex-col'>
				<div className='justify-end flex mb-4'>
					Search: &nbsp;
					<input
						type='text'
						className='border border-gray-300 outline-none rounded-md py-1'></input>
				</div>
				<div>
					<Table tableData={data} column={companyColumn} />
				</div>
			</div>
		</div>
	);
}
