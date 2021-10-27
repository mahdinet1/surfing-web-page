import Navigation from "./navigation/Navigation";

import Logo from "../../assets/images/logo.png"
import useWindowSize from "../../lib/use-window-size";
import MobileNav from "./mobileNav/MobileNav";

const Header: React.FC = () => {
	const { width } = useWindowSize()
	
	return (
		<header className="flex" >
			<div>
				<img src={Logo} alt="logo" />
			</div>
			{
				width >768 ?  <Navigation />:<MobileNav />
			}
			
		</header>
	);
};
export default Header;
