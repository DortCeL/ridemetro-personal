import { SlideTabsExample } from "./SlideTabs";
import Logo from "./Logo";

export default function Topbar() {
	return (
		<section className='px-52 absolute top-0 z-10 w-full'>
			<div className='nav-bar flex flex-row justify-between items-center w-full'>
				<Logo />
				<SlideTabsExample />
			</div>
		</section>
	);
}
