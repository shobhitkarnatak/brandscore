/** @format */

// @flow
import { PlusIcon } from '@heroicons/react/24/outline';
import { useNavigate } from '@remix-run/react';
import { Table } from '~/components/common/Table';
import { companyColumn } from '~/utils/headers';
type Props = {};

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
export default function Index(props: Props) {
	const navigate = useNavigate();
	const navigateHandler = () => {
		navigate('/company/create');
	};
	return (
		<div className='flex flex-col gap-y-4'>
			<div className='flex justify-between pb-4 rounded-lg p-4'>
				<h1 className='text-lg font-extrabold'>Company List</h1>
				<button
					onClick={() => navigateHandler()}
					className='bg-[#02abfe] px-6 border rounded-lg text-sm text-white py-2 flex justify-center items-center space-x-1'>
					<PlusIcon className='h-5 w-5 font-bold' />
					<span>Add New Comany</span>
				</button>
			</div>
			<div className='flex flex-col bg-white p-4 py-4 border border-[#edeef2]  rounded-md'>
				<Table tableData={data} column={companyColumn} />
			</div>
		</div>
	);
}
