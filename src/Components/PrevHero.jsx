export default function PrevHero() {
	return (
		<section>
			<div className='hero-section flex flex-row justify-between items-center px-52 py-20'>
				<div className='text-section'>
					<h1 className='text-6xl font-bold mb-4'>Welcome to RideMetro</h1>
					<p className='text-xl'>
						Experience the best way to travel around the city with our reliable
						and efficient metro service.
					</p>
				</div>
				<div className='image-section'>
					<img
						src='hero-train.png'
						alt='Hero Train'
						className='w-full h-auto'
					/>
				</div>
			</div>
		</section>
	);
}
