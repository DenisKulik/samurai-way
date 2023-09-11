import { NavLink } from 'react-router-dom'
import { RiMessage3Line, RiUser3Line } from 'react-icons/ri'
import { MdDeveloperMode } from 'react-icons/md'

import styles from 'common/components/navbar/navbar.module.scss'

export const Navbar = () => {
    return (
        <nav className={styles.sidebar}>
            <ul className={styles.nav}>
                <li className={styles.item}>
                    <NavLink to="/profile" activeClassName={styles.active}>
                        <RiUser3Line />
                        Profile
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/dialogs" activeClassName={styles.active}>
                        <RiMessage3Line />
                        Messages
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/users" activeClassName={styles.active}>
                        <MdDeveloperMode />
                        Developers
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
