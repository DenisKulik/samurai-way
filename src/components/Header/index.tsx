import styles from './Header.module.scss';
import logo from '../../img/logo.png';

const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="logotype" />
        </header>
    );
};

export default Header;