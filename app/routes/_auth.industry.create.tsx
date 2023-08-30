/** @format */


export default function CreateIndustry() {
	return (
		<div className='border border-gray-300 ml-64 mr-10 rounded-md p-4'>
			<div>
				<h1 className='font-extrabold mb-2'>Create Industry</h1>
				<div className='mb-2'>
					<p className='py-2'>Group</p>
					<select className='border border-gray-300 p-1 outline-none w-full'>
						<option>--select-group</option>
					</select>
				</div>
				<div className='mb-2'>
					<p className='py-2'>Industry</p>
					<input
						type='text'
						placeholder='Industry'
						className='border border-gray-300 p-1 outline-none w-full'></input>
				</div>
				<div className='mb-2'>
					<p className='py-2'>Industry Keyword</p>
					<input
						type='text'
						placeholder='Industry Keyword'
						className='border border-gray-300 p-1 outline-none w-full'></input>
				</div>
				<div className='mb-4'>
					<p className='py-2'>Industry Type</p>
					<select className='border border-gray-300 p-1 outline-none w-full'>
						<option>--select industry type --</option>
					</select>
				</div>

				<div className='mb-10 grid grid-cols-2'>
					<div className='text-sm'>
						<h2>Seagment</h2>
						<ul className='list-disc px-4 py-2'>
							<li>Financial</li>
							<li>Financial</li>
							<li>Financial</li>
						</ul>
					</div>
					<div>
						<p className='py-2'>Seagment Order</p>
						<input
							type='text'
							placeholder='Seagments'
							className='border border-gray-300 p-1 outline-none w-full'></input>
					</div>
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
