/** @format */
import { useNavigate } from "@remix-run/react";

export const GroupDetails = (row: any) => {
	const navigate = useNavigate()

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
                alt='icon'
					src='https://grouppolicy-uat.iiflinsurance.com:5101/images/pencil.svg'
					className='w-4 h-4'></img>
				{/* <PencilIcon className='w-8 h-8' /> */}
			</button>

			<button
				className='flex justify-center items-center w-4 h-4'
				onClick={() => editHandler(row.original)}>
				<img
                alt='icon'
					src='https://grouppolicy-uat.iiflinsurance.com:5101/images/delete.svg'
					className='w-4 h-4'></img>
				{/* <TrashIcon className='w-8 h-8' /> */}
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

export const CompanyDetails = (row: any) => {
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
                alt='icon'
					src='https://grouppolicy-uat.iiflinsurance.com:5101/images/pencil.svg'
					className='w-4 h-4'></img>
				{/* <PencilIcon className='w-8 h-8' /> */}
			</button>

			<button
				className='flex justify-center items-center w-4 h-4'
				onClick={() => editHandler(row.original)}>
				<img
                  alt='icon'
					src='https://grouppolicy-uat.iiflinsurance.com:5101/images/delete.svg'
					className='w-4 h-4'></img>
				{/* <TrashIcon className='w-8 h-8' /> */}
			</button>
		</div>
	);
};
