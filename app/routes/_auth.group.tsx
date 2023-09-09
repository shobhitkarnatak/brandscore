/** @format */
import { Outlet, useNavigate } from '@remix-run/react';

export default function Group() {
	const navigate = useNavigate();
	const addGroup = () => {
		navigate('/group/create');
	};
	return (
		<div className=''>
			<div className='flex justify-between pb-4 '>
				<h1 className='text-lg font-extrabold'>Group List</h1>
				<button
					className='bg-[#02abfe] px-6 border rounded-lg text-sm text-white py-2'
					onClick={addGroup}>
					+ Add New Group
				</button>
			</div>
			<div className='border border-[#edeef2] bg-white rounded-md p-4'>
				<Outlet />
			</div>
		</div>
	);
}
