import { useEffect, useState } from "react";

export default function DateAndTime() {
	const [time, setTime] = useState(new Date());
	const [weather, setWeather] = useState(null);

	useEffect(() => {
		// Update time every second
		setInterval(() => {
			setTime(new Date());
		}, 1000);

		// // Fetch weather when the component mounts
		// const fetchWeather = async () => {
		// 	try {
		// 		const response = await fetch(
		// 			`https://api.openweathermap.org/data/2.5/weather?q=Dhaka&units=metric&appid=YOUR_API_KEY`
		// 		);
		// 		const data = await response.json();
		// 		setWeather(data);
		// 	} catch (error) {
		// 		console.error("Error fetching weather:", error);
		// 	}
		// };
		// fetchWeather();

		// // Cleanup interval on component unmount
		// return () => clearInterval(timer);
	}, []);

	return (
		<>
			<div className='flex flex-col gap-4'>
				<div className='text-center text-3xl text-white space-y-2 flex flex-row mx-20 justify-between'>
					<div>{time.toLocaleDateString()}</div>
					<div>{time.toLocaleTimeString()}</div>
				</div>

				<div className='p-4 rounded-full bg-white text-black text-center block w-fit mx-auto'>
					i'll add weather info later
				</div>
			</div>
		</>
	);
}
