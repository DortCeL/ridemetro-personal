import { HoverImageLinks } from "./Components/HoverImageLinks";
import Logo from "./Components/Logo";
import { SlideTabsExample } from "./Components/SlideTabs";

function App() {
	return (
		<>
			<section className='nav-bar flex flex-row justify-between px-52 items-center'>
				<Logo />
				<SlideTabsExample />
			</section>
			{/* <HoverImageLinks /> */}
		</>
	);
}

export default App;
