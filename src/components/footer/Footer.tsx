import ContactUs from "./contactUs/ContactUs";
import logo from '../../assets/images/logo.png'
import FooterMenu from "./menu/FooterMenu";
import SocialMedia from "./socialMedia/socialMedia";
const Footer: React.FC = () => {
	return (
	<div className="sm:mt-36 mt-30">
		<ContactUs />
		<div className="mt-24">
			<img src={logo} className="mx-auto"alt="" />
		</div>
		<FooterMenu />
		<SocialMedia />
	</div>
)
};
export default Footer;
