/** @format */
import { useNavigate } from '@remix-run/react';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/solid';

export const GroupDetails = (row: any) => {
	const navigate = useNavigate();

	const editHandler = (column: any) => {
		navigate(`/packages/update-packages?packageId=${column.DETAILS}`, {
			state: { status: column.STATUS.toLowerCase() },
		});
	};
	return (
		<div className='flex gap-2'>
			<button
				className='flex justify-center items-center w-auto h-4'
				onClick={() => editHandler(row.original)}>
				<PencilIcon className='w-10 border rounded-sm h-6 bg-[#02ABFE] p-[2px]' />
			</button>

			<button
				className='flex justify-center items-center w-auto h-4'
				onClick={() => editHandler(row.original)}>
				<TrashIcon className='w-10 text-white border rounded-sm h-6 p-[2px] bg-[#E94437]' />
			</button>
		</div>
	);
};

export const IndustryDetails = (row: any) => {
	const navigate = useNavigate();

	const editHandler = (column: any) => {
		navigate(`/packages/update-packages?packageId=${column.DETAILS}`, {
			state: { status: column.STATUS.toLowerCase() },
		});
	};
	return (
		<div className='flex gap-2'>
			<button
				className='flex justify-center items-center w-auto h-4'
				onClick={() => editHandler(row.original)}>
				<PencilIcon className='w-10 border rounded-sm h-6 bg-[#02ABFE] p-[2px]' />
			</button>

			<button
				className='flex justify-center items-center w-auto h-4'
				onClick={() => editHandler(row.original)}>
				<TrashIcon className='w-10 text-white border rounded-sm h-6 p-[2px] bg-[#E94437]' />
			</button>
		</div>
	);
};

export const CompanyDetails = (row: any) => {
	const navigate = useNavigate();

	const editHandler = (column: any) => {
		navigate(`/packages/update-packages?packageId=${column.DETAILS}`, {
			state: { status: column.STATUS.toLowerCase() },
		});
	};
	return (
		<div className='flex gap-2'>
			<button
				className='flex justify-center items-center w-auto h-4'
				onClick={() => editHandler(row.original)}>
				<PencilIcon className='w-10 border rounded-sm h-6 bg-[#02ABFE] p-[2px]' />
			</button>

			<button
				className='flex justify-center items-center w-auto h-4'
				onClick={() => editHandler(row.original)}>
				<TrashIcon className='w-10 text-white border rounded-sm h-6 p-[2px] bg-[#E94437]' />
			</button>
		</div>
	);
};
