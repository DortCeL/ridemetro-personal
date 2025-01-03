import { HoverImageLinks } from "./Components/HoverImageLinks";
import Logo from "./Components/Logo";
import { SlideTabsExample } from "./Components/SlideTabs";

function App() {
	return (
		<>
			{/* Topbar */}
			<section className='nav-bar flex flex-row justify-between px-52 items-center'>
				<Logo />
				<SlideTabsExample />
			</section>
			{/* Hero Section */}
			<section>
				<div className='hero-section flex flex-row justify-between items-center px-52 py-20'>
					<div className='text-section'>
						<h1 className='text-6xl font-bold mb-4'>Welcome to RideMetro</h1>
						<p className='text-xl'>
							Experience the best way to travel around the city with our
							reliable and efficient metro service.
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
			{/* <HoverImageLinks /> */}
		</>
	);
}

export default App;
