import SamuraiLogo from '../../assets/images/samurai-logo-transparent.png';
import { Logo, Greeting } from './styled';

const Header = () => {
	return (
		<>
			<Logo src={SamuraiLogo} alt="samurai band logo" />
			<h1>SAMURAI</h1>
			<Greeting>
				The #1 fansite to the chrome-rock band SAMURAI. All other fuckin sites are nothin'
				but posers. Don't be fooled chooms!
			</Greeting>
		</>
	);
};

export default Header;
