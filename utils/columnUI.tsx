/** @format */

import { useNavigate, useLocation } from '@remix-run/react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

export const groupDetails = (row: any) => {
	const navigate = useNavigate();

	const editHandler = (column: any) => {
		navigate(`/packages/update-packages?packageId=${column.DETAILS}`, {
			state: { status: column.STATUS.toLowerCase() },
		});
	};
	return (
		<div className='flex'>
			<button
				className='flex justify-center items-center w-4 h-4'
				onClick={() => editHandler(row.original)}>
				<img
					src='https://grouppolicy-uat.iiflinsurance.com:5101/images/pencil.svg'
					className='w-4 h-4'></img>
				{/* <PencilIcon className='w-8 h-8' /> */}
			</button>

			<button
				className='flex justify-center items-center w-4 h-4'
				onClick={() => editHandler(row.original)}>
				<img
					src='https://grouppolicy-uat.iiflinsurance.com:5101/images/delete.svg'
					className='w-4 h-4'></img>
				{/* <TrashIcon className='w-8 h-8' /> */}
			</button>
		</div>
	);
};
