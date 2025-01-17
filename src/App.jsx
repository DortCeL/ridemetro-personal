import Hero from "./Components/Hero";
import { HoverImageLinks } from "./Components/HoverImageLinks";
import Logo from "./Components/Logo";
import { SlideTabsExample } from "./Components/SlideTabs";
import Topbar from "./Components/Topbar";

function App() {
	return (
		<>
			<Topbar />
			<Hero />

			<HoverImageLinks />
		</>
	);
}

export default App;
