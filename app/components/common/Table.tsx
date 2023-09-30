/** @format */

import {
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	useReactTable,
	getFilteredRowModel,
} from '@tanstack/react-table';
import {  useNavigate, useSearchParams } from '@remix-run/react';
import { useEffect, useMemo, useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

export function Table({ tableData, column, totalCount }: any) {
	 
	const columns = column;
 
	const navigate = useNavigate();
	const data: any = useMemo(() => tableData || [], [tableData]);

	// TO Get the Params
	const [searchParams] = useSearchParams();
	const [pageSize, setSizePage] = useState(30);
	const page: number = Number(searchParams.get('page')) || 1;
	const limit: any = searchParams.get('limit') || 30;
	const search = searchParams.get('search') || '';
	const totalPage = Math.ceil(totalCount / limit) || 1;

	const table = useReactTable({
		data,
		columns,
		manualPagination: true,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		//
	});

	const setPageSize = (limit: any) => {
		setSizePage(limit);
	};

	const limitHandler = (limit: any, page: any, value: any) => {
		setSizePage(limit);
		 
		let url = `${location.pathname}?limit=${limit}&page=${page}`;
		navigate(url);
	};

	useEffect(() => {
		table.setPageSize(30);
	}, []);

	return (
		<>
			<div className='mb-6 bg-white  border-gray-300 relative'>
				<table className='w-full border border-gray-300 relativ'>
					<thead className='border-gray-300 relative ' >
						{table?.getHeaderGroups()?.map((headerGroup) => (
							<tr
								key={headerGroup.id}
								className='w-full py-2 px-4 border-y-2 border-b-4 order-t-[1px] border-[#edeef2] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100'>
								{headerGroup.headers?.map((header) => (
									<th
										key={header.id}
										className='py-4 text-sm text-[14px]  font-bold border-r-[1px] border-[#edeef2] text-left px-4'>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext()
											  )}
									</th>
								))}
							</tr>
						))}
					</thead>
					{tableData && tableData?.length ? (
						<>
							<tbody className='border-b-2 border-[#edeef2] px-1 bg-white'>
								{table.getRowModel().rows?.map((row, index) => (
									<tr key={row.id}>
										{row.getVisibleCells().map((cell) => (
											<td
												key={cell.id}
												className={`px-4 w-4 border-r-[1px]  text-black font-[400] text-left capitalize text-sm py-2 border-b border-[#edeef2]`}>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext()
												)}
											</td>
										))}
									</tr>
								))}
							</tbody>
						</>
					) : (
						<tbody className='absolute w-full border-b-2 border-[#edeef2] px-4 bg-white h-32'>
							<tr className='flex justify-center items-center'>
								<td className='text-gray-400 pt-12 text-xl font-bold'>
									No Data Found.
								</td>
							</tr>
						</tbody>
					)}
				</table>
			</div>
			{tableData && tableData?.length > 0 && (
				<div className='flex items-start justify-between my-2'>
					<select
						value={pageSize}
						onChange={(e) => {
							setPageSize(Number(e.target.value));
							limitHandler(Number(e.target.value), page, search);
						}}
						className='border px-2 py-2 border-[#edeef2] rounded-lg text-xs'>
						{[30, 60, 90, 120, 150].map((pageSize) => (
							<option key={pageSize} value={pageSize}>
								Show {pageSize}
							</option>
						))}
					</select>
					<div className='flex items-center gap-4 mx-4'>
						<button
							onClick={() => limitHandler(pageSize, page - 1, search)}
							disabled={page === 1}
							className='px-2 text-xs flex items-center gap-x-2 justify-center py-1 border border-[#edeef2] bg-white rounded-md'>
							<ArrowLeftIcon className='w-4 h-6' />
							Prev
						</button>
						<button
							type='button'
							onClick={() => limitHandler(pageSize, page + 1, search)}
							disabled={totalPage == page}
							className='px-2 flex text-xs items-center gap-x-2 justify-center py-1 border border-[#edeef2] bg-white rounded-md'>
							Next
							<ArrowRightIcon className='w-4 h-6' />
						</button>
						<span>
							Page{' '}
							<strong className='text-sm'>
								{page} of {totalPage}
							</strong>
						</span>
					</div>
				</div>
			)}
		</>
	);
}
