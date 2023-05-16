import styles from './Header.module.scss';
import logo from '../../img/logo.png';
import { NavLink } from 'react-router-dom';
import { RiUserSearchLine } from 'react-icons/ri';

const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="logotype" />

            <NavLink to="/users" activeClassName={styles.active}>
                <RiUserSearchLine />
                Find users
            </NavLink>
        </header>
    );
};

export default Header;