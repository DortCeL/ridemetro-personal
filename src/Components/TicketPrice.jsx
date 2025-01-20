import { useState } from "react";

export default function TicketPrice() {
	const [from, setFrom] = useState("Agargaon");
	const [to, setTo] = useState("Mirpur-12");

	const locations = ["Agargaon", "Mirpur-12", "Uttara", "Banani", "Gulshan"];

	return (
		<div className='flex justify-center items-center gap-8 h-fit w-fit bg-slate-700'>
			<div className='flex flex-col items-center space-y-6 p-6 bg-gray-800 rounded-xl shadow-lg'>
				{/* Title */}
				<h3 className='text-white text-2xl font-bold mb-4'>
					Check Ticket Price
				</h3>

				{/* From Dropdown */}
				<div className='flex flex-col items-start w-full'>
					<h4 className='text-white text-lg font-semibold mb-2'>From</h4>
					<div className='relative w-full'>
						<select
							value={from}
							onChange={(e) => setFrom(e.target.value)}
							className='appearance-none bg-green-500 text-black font-medium px-4 py-3 rounded-lg w-full cursor-pointer shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400'
						>
							{locations.map((location) => (
								<option key={location} value={location}>
									{location}
								</option>
							))}
						</select>
						<div className='absolute inset-y-0 right-3 flex items-center pointer-events-none'>
							<span className='text-black'>▼</span>
						</div>
					</div>
				</div>

				{/* To Dropdown */}
				<div className='flex flex-col items-start w-full'>
					<h4 className='text-white text-lg font-semibold mb-2'>To</h4>
					<div className='relative w-full'>
						<select
							value={to}
							onChange={(e) => setTo(e.target.value)}
							className='appearance-none bg-red-400 text-black font-medium px-4 py-3 rounded-lg w-full cursor-pointer shadow-lg focus:outline-none focus:ring-2 focus:ring-red-300'
						>
							{locations.map((location) => (
								<option key={location} value={location}>
									{location}
								</option>
							))}
						</select>
						<div className='absolute inset-y-0 right-3 flex items-center pointer-events-none'>
							<span className='text-black'>▼</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
