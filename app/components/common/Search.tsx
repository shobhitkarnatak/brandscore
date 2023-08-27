/** @format */

import { useLocation, useParams, useSearchParams } from '@remix-run/react';
import { useEffect, useState } from 'react';
// import { colsData } from "~/utils/tableHeaders";

const Search = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	// const params = useParams();
	const [searchVal, setSearchVal] = useState('');
	const prevParams = Object.fromEntries(searchParams);
	const sectionId = searchParams.get('sectionId');

	const location = useLocation();

	const handleSearch = () => {
		//  console.log("router" , value)
		if (searchVal?.length > 0) {
			setSearchParams({ ...prevParams, search: String(searchVal ?? '') });
		} else {
			searchParams.delete('search');
			setSearchParams(searchParams);
		}
	};

	const handleSearchInput = (event: any) => {
		if (event.key === 'Enter') handleSearch();
	};
	useEffect(() => {
		const searchLength = searchParams?.get('search') as any;
		searchLength?.length > 0 ? null : setSearchVal('');
	}, [
		searchParams.get('search'),
		location.pathname,
		searchParams.get('bucketId'),
	]);

	return (
		<>
			<div className='flex items-center gap-1'>
				<input
					type='text'
					value={searchVal}
					onChange={(e) => {
						setSearchVal(String(e.target.value));
					}}
					onKeyDown={handleSearchInput}
					placeholder='Search Customer'
					className='h-10 rounded-3xl border border-[#edeef2] py-4 pl-4 pr-2 shadow-md'
				/>
				<button
					type='button'
					onClick={handleSearch}
					className='rounded-full bg-flamingo-500 px-6 py-2 text-white hover:cursor-pointer hover:bg-flamingo-600 active:bg-flamingo-700 active:text-white '>
					Search
				</button>
			</div>
		</>
	);
};

export default Search;
