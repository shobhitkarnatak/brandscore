/** @format */
 
export default function Index() {
	 
	return (
		<div className='flex flex-col gap-y-4'>
			<div className='flex justify-between pb-4  rounded-lg p-4'>
				<h1 className='text-lg font-extrabold'>Source List</h1>
				 
			</div>
			<div className='flex flex-col bg-white p-4 py-4 border border-[#edeef2]  rounded-md'>
				<div className='justify-end items-center flex mb-4'>
					Search: &nbsp;
					<input
						type='text'
						className='border border-gray-300 outline-none rounded-md py-1'></input>
				</div>
				 
			</div>
		</div>
	);
}
