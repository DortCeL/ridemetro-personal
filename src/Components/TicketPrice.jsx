import { useState } from "react";

export default function TicketPrice() {
	const [from, setFrom] = useState("Agargaon");
	const [to, setTo] = useState("Mirpur-12");

	const locations = ["Agargaon", "Mirpur-12", "Uttara", "Banani", "Gulshan"];

	return (
		<div className='flex justify-center items-center gap-8 min-h-screen'>
			{/* From Dropdown */}
			<div className='flex flex-col items-center'>
				<label className='text-white text-sm mb-2'>From</label>
				<div className='relative'>
					<select
						value={from}
						onChange={(e) => setFrom(e.target.value)}
						className='appearance-none bg-green-500 text-black font-semibold px-4 py-2 rounded-lg cursor-pointer shadow-md focus:outline-none'
					>
						{locations.map((location) => (
							<option key={location} value={location}>
								{location}
							</option>
						))}
					</select>
					<div className='absolute inset-y-0 right-2 flex items-center pointer-events-none'>
						<span className='text-black'>▼</span>
					</div>
				</div>
			</div>

			{/* To Dropdown */}
			<div className='flex flex-col items-center'>
				<label className='text-white text-sm mb-2'>To</label>
				<div className='relative'>
					<select
						value={to}
						onChange={(e) => setTo(e.target.value)}
						className='appearance-none bg-red-400 text-black font-semibold px-4 py-2 rounded-lg cursor-pointer shadow-md focus:outline-none'
					>
						{locations.map((location) => (
							<option key={location} value={location}>
								{location}
							</option>
						))}
					</select>
					<div className='absolute inset-y-0 right-2 flex items-center pointer-events-none'>
						<span className='text-black'>▼</span>
					</div>
				</div>
			</div>
		</div>
	);
}
