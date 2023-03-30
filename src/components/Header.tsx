import logo from '../img/logo.png';

const Header = () => {
    return (
        <header className="header">
            <img className="logo-img" src={logo} alt="logotype" />
        </header>
    );
};

export default Header;