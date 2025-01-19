import DateAndTime from "./DateAndTime";
import TicketPrice from "./TicketPrice";

export default function Hero() {
	return (
		<section className='relative bg-bannerImage bg-no-repeat bg-cover bg-bottom w-full h-screen'>
			{/* Black Overlay */}
			<div className='absolute inset-0 bg-blackOverlay'></div>

			{/* Hero Text Section */}
			<div className='relative z-10 flex flex-col items-center  h-full text-center text-white'>
				<div className=' h-fit w-fit mt-52'>
					<h1 className='text-5xl mb-4 shadow-lg  tracking-wider'>
						Welcome To Dhaka Metro
					</h1>
					<DateAndTime />
					<TicketPrice />
				</div>
			</div>
		</section>
	);
}
