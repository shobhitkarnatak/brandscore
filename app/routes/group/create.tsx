/** @format */

import React from 'react';

export default function Create() {
	return (
		<div className='border border-gray-300 ml-64 mr-10 rounded-md p-4'>
			<div>
				<h1 className='font-extrabold mb-4'>Create Group</h1>
				<p>Add Group Name</p>
				<div className='py-2'>
					<input
						type='text'
						placeholder='Add group name'
						className='border border-gray-300 p-1 outline-none w-full'></input>
				</div>
				<button
					type='button'
					className='bg-[#25378b] text-white w-full border border-gray-200 p-2'>
					Submit
				</button>
			</div>
		</div>
	);
}
